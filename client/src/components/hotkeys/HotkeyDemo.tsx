'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useHotkeyContext } from '@/contexts/HotkeyContext';
import { useAuth } from '@/hooks/useAuth';
import { HotkeyTable } from '@/components/tables/HotkeyTable';
import { 
  Keyboard, 
  Navigation, 
  Zap, 
  Settings, 
  Table as TableIcon,
  CheckCircle,
  XCircle
} from 'lucide-react';

// Demo data for testing
const demoTableData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Teacher' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Admin' },
];

export const HotkeyDemo: React.FC = () => {
  const { isHotkeyEnabled, openHelp, openCommandPalette } = useHotkeyContext();
  const { role } = useAuth();
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [lastAction, setLastAction] = useState<string>('');

  const handleCreateNew = () => {
    setLastAction('Create New triggered');
  };

  const handleEdit = (item: any) => {
    setLastAction(`Edit triggered for: ${item.name}`);
  };

  const handleDelete = (item: any) => {
    setLastAction(`Delete triggered for: ${item.name}`);
  };

  const hotkeyCategories = [
    {
      title: 'Navigation',
      icon: <Navigation className="w-5 h-5" />,
      shortcuts: [
        { key: 'Ctrl + ↑', description: 'Previous sidebar item' },
        { key: 'Ctrl + ↓', description: 'Next sidebar item' },
        { key: 'Ctrl + \\', description: 'Toggle sidebar' },
      ]
    },
    {
      title: 'Actions',
      icon: <Zap className="w-5 h-5" />,
      shortcuts: [
        { key: 'Ctrl + N', description: 'Create new item' },
        { key: 'Ctrl + U', description: 'Edit selected item' },
        { key: 'Ctrl + D', description: 'Delete selected item' },
      ]
    },
    {
      title: 'Table Navigation',
      icon: <TableIcon className="w-5 h-5" />,
      shortcuts: [
        { key: 'Ctrl + B', description: 'Navigate up in table' },
        { key: 'Ctrl + M', description: 'Navigate down in table' },
      ]
    },
    {
      title: 'UI Controls',
      icon: <Settings className="w-5 h-5" />,
      shortcuts: [
        { key: 'Ctrl + Shift + T', description: 'Toggle theme' },
        { key: 'Ctrl + Shift + L', description: 'Toggle language' },
        { key: 'Ctrl + S', description: 'Go to settings' },
        { key: 'Ctrl + Shift + Q', description: 'Logout' },
        { key: 'Ctrl + K', description: 'Command palette' },
        { key: 'Ctrl + /', description: 'Show help' },
        { key: 'Ctrl + \\', description: 'Toggle sidebar' },
        { key: 'Esc', description: 'Close modal/popup' },
      ]
    },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Status Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Keyboard className="w-5 h-5" />
            Hotkey System Status
          </CardTitle>
          <CardDescription>
            Current status and configuration of the keyboard shortcuts system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            {isHotkeyEnabled ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500" />
            )}
            <span>
              Hotkeys are {isHotkeyEnabled ? 'enabled' : 'disabled'} 
              {!isHotkeyEnabled && ' (mobile device detected)'}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline">Role: {role || 'Unknown'}</Badge>
            <Badge variant="outline">
              Actions Available: {['admin', 'super-admin', 'teacher'].includes(role || '') ? 'Yes' : 'No'}
            </Badge>
          </div>

          {lastAction && (
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <p className="text-sm font-medium">Last Action: {lastAction}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Test Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Tests</CardTitle>
          <CardDescription>
            Test the hotkey system with these buttons
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Button onClick={openHelp} variant="outline">
            Open Help (Ctrl + /)
          </Button>
          <Button onClick={openCommandPalette} variant="outline">
            Command Palette (Ctrl + K)
          </Button>
        </CardContent>
      </Card>

      {/* Hotkey Reference */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hotkeyCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {category.icon}
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {category.shortcuts.map((shortcut, shortcutIndex) => (
                  <div key={shortcutIndex} className="flex items-center justify-between">
                    <span className="text-sm">{shortcut.description}</span>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {shortcut.key}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Demo Table */}
      <Card>
        <CardHeader>
          <CardTitle>Demo Table with Hotkeys</CardTitle>
          <CardDescription>
            Try using Ctrl+J/K to navigate, Ctrl+N to create, Ctrl+U to edit, Ctrl+D to delete
          </CardDescription>
        </CardHeader>
        <CardContent>
          <HotkeyTable
            data={demoTableData}
            currentPage="students"
            onCreateNew={handleCreateNew}
            onEdit={handleEdit}
            onDelete={handleDelete}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          >
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 p-2 text-left">Name</th>
                  <th className="border border-gray-300 p-2 text-left">Email</th>
                  <th className="border border-gray-300 p-2 text-left">Role</th>
                </tr>
              </thead>
              <tbody>
                {demoTableData.map((item, index) => (
                  <tr 
                    key={item.id} 
                    data-table-row={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => setSelectedItems([item])}
                  >
                    <td className="border border-gray-300 p-2">{item.name}</td>
                    <td className="border border-gray-300 p-2">{item.email}</td>
                    <td className="border border-gray-300 p-2">{item.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </HotkeyTable>
        </CardContent>
      </Card>
    </div>
  );
};