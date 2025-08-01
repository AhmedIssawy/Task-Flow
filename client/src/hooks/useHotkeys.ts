// Core hotkey hooks and utilities
import { useHotkeys as useHotkeysHook } from 'react-hotkeys-hook';
import { useRouter } from 'next/navigation';
import { useAuth } from './useAuth';
import { useIsMobile } from './use-mobile';
import { useCallback, useEffect, useState } from 'react';

// Types
export interface HotkeyAction {
  key: string;
  description: string;
  action: () => void;
  category: 'navigation' | 'action' | 'ui';
  roleSpecific?: string[];
  contextSpecific?: string[];
}

export interface NavigationState {
  currentSidebarIndex: number;
  selectedTableIndex: number;
  isInTable: boolean;
  currentContext: string;
}

// Mobile detection hook integration
export const useHotkeyEnabled = () => {
  const isMobile = useIsMobile();
  return !isMobile;
};

// Visual feedback hook
export const useVisualFeedback = () => {
  const [feedbackElement, setFeedbackElement] = useState<HTMLElement | null>(null);

  const showFeedback = useCallback((element: HTMLElement, type: 'success' | 'error' | 'highlight' = 'highlight') => {
    setFeedbackElement(element);
    
    // Add visual feedback class
    const feedbackClass = {
      success: 'hotkey-feedback-success',
      error: 'hotkey-feedback-error', 
      highlight: 'hotkey-feedback-highlight'
    }[type];
    
    element.classList.add(feedbackClass);
    
    // Remove after animation
    setTimeout(() => {
      element.classList.remove(feedbackClass);
      setFeedbackElement(null);
    }, 300);
  }, []);

  return { showFeedback, feedbackElement };
};

// Navigation state management
export const useNavigationState = () => {
  const [navigationState, setNavigationState] = useState<NavigationState>({
    currentSidebarIndex: 0,
    selectedTableIndex: -1,
    isInTable: false,
    currentContext: 'dashboard'
  });

  const updateNavigationState = useCallback((updates: Partial<NavigationState>) => {
    setNavigationState(prev => ({ ...prev, ...updates }));
  }, []);

  return { navigationState, updateNavigationState };
};

// Context detection hook
export const useHotkeyContextDetection = () => {
  const { role } = useAuth();
  const [currentPage, setCurrentPage] = useState('');
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [isInForm, setIsInForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Detect current page from URL
    const path = window.location.pathname;
    const pathParts = path.split('/');
    const page = pathParts[pathParts.length - 1] || 'dashboard';
    setCurrentPage(page);
  }, []);

  const context = {
    page: currentPage,
    role: role || 'student',
    selectedItems,
    hasSelection: selectedItems.length > 0,
    isInForm,
    isModalOpen,
    canCreate: ['admin', 'super-admin', 'teacher'].includes(role || ''),
    canEdit: selectedItems.length === 1,
    canDelete: selectedItems.length > 0
  };

  return {
    context,
    setSelectedItems,
    setIsInForm,
    setIsModalOpen
  };
};

export { useHotkeysHook as useHotkeys };