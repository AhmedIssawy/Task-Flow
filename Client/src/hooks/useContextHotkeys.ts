'use client';

import { useHotkeys } from 'react-hotkeys-hook';
import { useHotkeyContext } from '@/contexts/HotkeyContext';
import { useAuth } from './useAuth';
import { useVisualFeedback } from './useHotkeys';
import { HOTKEY_KEYS, CONTEXT_ACTIONS } from '@/constants/hotkeyConfig';
import { useCallback, useState, useEffect } from 'react';
import { toast } from 'sonner';

interface ContextHotkeysProps {
  currentPage: string;
  tableData?: any[];
  onCreateNew?: () => void;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
  selectedItems?: any[];
  setSelectedItems?: (items: any[]) => void;
}

export const useContextHotkeys = ({
  currentPage,
  tableData = [],
  onCreateNew,
  onEdit,
  onDelete,
  selectedItems = [],
  setSelectedItems,
}: ContextHotkeysProps) => {
  const { 
    isHotkeyEnabled, 
    selectedTableIndex, 
    setSelectedTableIndex,
    isHelpOpen,
    isCommandPaletteOpen 
  } = useHotkeyContext();
  
  const { role } = useAuth();
  const { showFeedback } = useVisualFeedback();
  const [isInForm, setIsInForm] = useState(false);

  // Detect if user is typing in form inputs
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      const isFormElement = target.tagName === 'INPUT' || 
                           target.tagName === 'TEXTAREA' || 
                           target.contentEditable === 'true' ||
                           target.getAttribute('role') === 'textbox';
      setIsInForm(isFormElement);
    };

    const handleFocusOut = () => {
      setIsInForm(false);
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // Table navigation functions
  const navigateTableUp = useCallback(() => {
    if (tableData.length === 0) return;
    
    const newIndex = selectedTableIndex > 0 ? selectedTableIndex - 1 : tableData.length - 1;
    setSelectedTableIndex(newIndex);
    
    if (setSelectedItems) {
      setSelectedItems([tableData[newIndex]]);
    }

    // Visual feedback
    const tableRow = document.querySelector(`[data-table-row="${newIndex}"]`);
    if (tableRow) {
      showFeedback(tableRow as HTMLElement, 'highlight');
      tableRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedTableIndex, tableData, setSelectedTableIndex, setSelectedItems, showFeedback]);

  const navigateTableDown = useCallback(() => {
    if (tableData.length === 0) return;
    
    const newIndex = selectedTableIndex < tableData.length - 1 ? selectedTableIndex + 1 : 0;
    setSelectedTableIndex(newIndex);
    
    if (setSelectedItems) {
      setSelectedItems([tableData[newIndex]]);
    }

    // Visual feedback
    const tableRow = document.querySelector(`[data-table-row="${newIndex}"]`);
    if (tableRow) {
      showFeedback(tableRow as HTMLElement, 'highlight');
      tableRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedTableIndex, tableData, setSelectedTableIndex, setSelectedItems, showFeedback]);

  // Context-aware action functions
  const handleCreateNew = useCallback(() => {
    if (!onCreateNew) {
      toast.error('Create action not available on this page');
      return;
    }

    const contextAction = CONTEXT_ACTIONS[currentPage as keyof typeof CONTEXT_ACTIONS];
    if (contextAction) {
      toast.success(`Creating new ${currentPage.slice(0, -1)}`);
      onCreateNew();
    } else {
      toast.error('Create action not supported for this page');
    }
  }, [onCreateNew, currentPage]);

  const handleEdit = useCallback(() => {
    if (!onEdit) {
      toast.error('Edit action not available on this page');
      return;
    }

    if (selectedItems.length === 0) {
      toast.error('Please select an item to edit');
      return;
    }

    if (selectedItems.length > 1) {
      toast.error('Please select only one item to edit');
      return;
    }

    const selectedItem = selectedItems[0];
    const contextAction = CONTEXT_ACTIONS[currentPage as keyof typeof CONTEXT_ACTIONS];
    
    if (contextAction) {
      toast.success(`Editing ${currentPage.slice(0, -1)}`);
      onEdit(selectedItem);
    } else {
      toast.error('Edit action not supported for this page');
    }
  }, [onEdit, selectedItems, currentPage]);

  const handleDelete = useCallback(() => {
    if (!onDelete) {
      toast.error('Delete action not available on this page');
      return;
    }

    if (selectedItems.length === 0) {
      toast.error('Please select an item to delete');
      return;
    }

    // Show confirmation dialog
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${selectedItems.length} ${
        selectedItems.length === 1 ? currentPage.slice(0, -1) : currentPage
      }?`
    );

    if (confirmDelete) {
      selectedItems.forEach(item => {
        onDelete(item);
      });
      
      toast.success(`Deleted ${selectedItems.length} ${
        selectedItems.length === 1 ? currentPage.slice(0, -1) : currentPage
      }`);
      
      // Clear selection
      if (setSelectedItems) {
        setSelectedItems([]);
      }
      setSelectedTableIndex(-1);
    }
  }, [onDelete, selectedItems, currentPage, setSelectedItems, setSelectedTableIndex]);

  // Check if actions are available based on role and context
  const canCreate = ['admin', 'super-admin', 'teacher'].includes(role || '');
  const canEdit = selectedItems.length === 1;
  const canDelete = selectedItems.length > 0;
  const isInTable = tableData.length > 0;

  // Register context-aware hotkeys
  useHotkeys(HOTKEY_KEYS.TABLE_UP, navigateTableUp, {
    enabled: isHotkeyEnabled && !isInForm && !isHelpOpen && !isCommandPaletteOpen && isInTable,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.TABLE_DOWN, navigateTableDown, {
    enabled: isHotkeyEnabled && !isInForm && !isHelpOpen && !isCommandPaletteOpen && isInTable,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.CREATE_NEW, handleCreateNew, {
    enabled: isHotkeyEnabled && !isInForm && !isHelpOpen && !isCommandPaletteOpen && canCreate,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.EDIT_ITEM, handleEdit, {
    enabled: isHotkeyEnabled && !isInForm && !isHelpOpen && !isCommandPaletteOpen && canEdit,
    preventDefault: true,
    enableOnFormTags: false,
  });

  useHotkeys(HOTKEY_KEYS.DELETE_ITEM, handleDelete, {
    enabled: isHotkeyEnabled && !isInForm && !isHelpOpen && !isCommandPaletteOpen && canDelete,
    preventDefault: true,
    enableOnFormTags: false,
  });

  return {
    navigateTableUp,
    navigateTableDown,
    handleCreateNew,
    handleEdit,
    handleDelete,
    canCreate,
    canEdit,
    canDelete,
    isInTable,
    selectedTableIndex,
  };
};