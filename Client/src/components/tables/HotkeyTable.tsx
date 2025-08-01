'use client';

import React, { useEffect, useRef } from 'react';
import { useContextHotkeys } from '@/hooks/useContextHotkeys';
import { useHotkeyContext } from '@/contexts/HotkeyContext';
import { cn } from '@/lib/utils';

interface HotkeyTableProps {
  children: React.ReactNode;
  data: any[];
  currentPage: string;
  onCreateNew?: () => void;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
  selectedItems?: any[];
  setSelectedItems?: (items: any[]) => void;
  className?: string;
}

export const HotkeyTable: React.FC<HotkeyTableProps> = ({
  children,
  data,
  currentPage,
  onCreateNew,
  onEdit,
  onDelete,
  selectedItems = [],
  setSelectedItems,
  className,
}) => {
  const { selectedTableIndex } = useHotkeyContext();
  const tableRef = useRef<HTMLDivElement>(null);

  // Initialize context hotkeys
  const {
    canCreate,
    canEdit,
    canDelete,
    isInTable,
  } = useContextHotkeys({
    currentPage,
    tableData: data,
    onCreateNew,
    onEdit,
    onDelete,
    selectedItems,
    setSelectedItems,
  });

  // Add data attributes to table rows for hotkey navigation
  useEffect(() => {
    if (tableRef.current) {
      const rows = tableRef.current.querySelectorAll('tr[data-table-row]');
      rows.forEach((row, index) => {
        row.setAttribute('data-table-row', index.toString());
        
        // Add selection styling
        if (index === selectedTableIndex) {
          row.classList.add('selected');
        } else {
          row.classList.remove('selected');
        }
      });
    }
  }, [selectedTableIndex, data]);

  // Clone children and add data attributes
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // If it's a table element, add ref and enhance rows
      if (child.type === 'table' || (child.props && child.props.className?.includes('table'))) {
        return React.cloneElement(child as React.ReactElement<any>, {
          ref: tableRef,
          className: cn(child.props.className, 'hotkey-table'),
        });
      }
    }
    return child;
  });

  return (
    <div 
      className={cn('hotkey-table-container', className)}
      data-hotkey-context={currentPage}
      data-can-create={canCreate}
      data-can-edit={canEdit}
      data-can-delete={canDelete}
      data-in-table={isInTable}
    >
      {enhancedChildren}
      
      {/* Hidden accessibility announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {selectedTableIndex >= 0 && data[selectedTableIndex] && (
          `Selected row ${selectedTableIndex + 1} of ${data.length}`
        )}
      </div>
    </div>
  );
};