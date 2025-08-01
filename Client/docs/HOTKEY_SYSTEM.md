# 🎯 Keyboard Hotkeys System

A comprehensive keyboard navigation and shortcuts system for enhanced user experience and accessibility.

## 🚀 Features

### ✅ **Implemented Features**

#### **Global Navigation Hotkeys**
- `Ctrl/Cmd + ↑` - Navigate to previous sidebar item
- `Ctrl/Cmd + ↓` - Navigate to next sidebar item  
- `Ctrl/Cmd + \` - Toggle sidebar visibility

#### **Context-Aware Action Hotkeys**
- `Ctrl/Cmd + N` - Create new item (context-aware: student, course, assignment, etc.)
- `Ctrl/Cmd + U` - Edit selected item
- `Ctrl/Cmd + D` - Delete selected item (with confirmation)

#### **Table Navigation**
- `Ctrl/Cmd + J` - Navigate up in tables/lists
- `Ctrl/Cmd + K` - Navigate down in tables/lists

#### **UI Control Hotkeys**
- `Ctrl/Cmd + T` - Toggle theme (dark/light)
- `Ctrl/Cmd + L` - Toggle language
- `Ctrl/Cmd + K` - Open command palette
- `Ctrl/Cmd + /` - Show keyboard shortcuts help
- `Esc` - Close any open modal/dropdown/popup

#### **Command Palette System**
- **Fuzzy search** for commands and navigation
- **Role-based commands** (different options for admin, teacher, student)
- **Recent commands** tracking
- **Categorized commands** (Navigation, Actions, UI)
- **Keyboard navigation** within palette

#### **Help System**
- **Comprehensive help popup** with all available shortcuts
- **Categorized shortcuts** by function
- **Search within help** to find specific shortcuts
- **Visual key representations** (e.g., [Ctrl] + [↑])
- **First-visit help** popup for new users

#### **Visual Feedback**
- **Element highlighting** when hotkeys are used
- **Success/error animations** for actions
- **Table row selection** indicators
- **Focus management** for accessibility

#### **Mobile Detection**
- **Automatic disabling** on mobile devices
- **No visual hints** on mobile to avoid confusion

#### **Accessibility Features**
- **Screen reader announcements** for hotkey actions
- **aria-keyshortcuts** attributes on interactive elements
- **Focus management** after hotkey actions
- **Alternative access** via mouse/touch for all actions

## 🏗️ Architecture

### **Core Components**

#### **HotkeyProvider** (`src/components/hotkeys/HotkeyProvider.tsx`)
- Main provider component that wraps the entire application
- Initializes global hotkeys and first-visit help
- Provides context for all hotkey-related state

#### **HotkeyContext** (`src/contexts/HotkeyContext.tsx`)
- Centralized state management for hotkey system
- Manages help popup, command palette, and navigation state
- Provides actions for opening/closing UI components

#### **Global Hooks**
- `useGlobalHotkeys` - Handles app-wide navigation and UI shortcuts
- `useContextHotkeys` - Manages page-specific and table navigation
- `useFirstVisitHelp` - Shows help on first visit
- `useHotkeyEnabled` - Detects mobile and enables/disables hotkeys

#### **UI Components**
- `CommandPalette` - VS Code-style command search and execution
- `HelpPopup` - Comprehensive shortcuts reference
- `HotkeyButton` - Help and command palette trigger buttons
- `HotkeyTable` - Enhanced table component with keyboard navigation

### **Configuration**

#### **Hotkey Keys** (`src/constants/hotkeyConfig.ts`)
```typescript
export const HOTKEY_KEYS = {
  SIDEBAR_PREV: 'ctrl+up',
  SIDEBAR_NEXT: 'ctrl+down', 
  SIDEBAR_TOGGLE: 'ctrl+\\',
  TABLE_UP: 'ctrl+j',
  TABLE_DOWN: 'ctrl+k',
  CREATE_NEW: 'ctrl+n',
  EDIT_ITEM: 'ctrl+u', 
  DELETE_ITEM: 'ctrl+d',
  TOGGLE_THEME: 'ctrl+t',
  TOGGLE_LANGUAGE: 'ctrl+l',
  COMMAND_PALETTE: 'ctrl+k',
  SHOW_HELP: 'ctrl+/',
  ESCAPE: 'escape',
} as const;
```

#### **Role-Based Commands**
Commands are automatically filtered based on user role:
- **Student**: Navigation only (courses, assignments, grades, etc.)
- **Teacher**: Navigation + limited actions (create assignments, sections)
- **Admin/Super-Admin**: Full access (create/edit/delete students, teachers, courses)

## 🎮 Usage

### **Basic Setup**
The hotkey system is automatically enabled when you wrap your app with `HotkeyProvider`:

```tsx
// Already implemented in src/app/layout.tsx
<HotkeyProvider>
  {children}
</HotkeyProvider>
```

### **Adding Hotkeys to Tables**
Use the `HotkeyTable` component to enable keyboard navigation:

```tsx
import { HotkeyTable } from '@/components/hotkeys';

<HotkeyTable
  data={tableData}
  currentPage="students"
  onCreateNew={handleCreate}
  onEdit={handleEdit}
  onDelete={handleDelete}
  selectedItems={selectedItems}
  setSelectedItems={setSelectedItems}
>
  {/* Your table JSX */}
</HotkeyTable>
```

### **Adding Hotkey Buttons**
Add help and command palette buttons to your UI:

```tsx
import { HotkeyButton } from '@/components/hotkeys';

<HotkeyButton variant="help" />      {/* Help button */}
<HotkeyButton variant="command" />   {/* Command palette button */}
```

## 🧪 Testing

### **Demo Page**
Visit `/[role]/[id]/hotkey-demo` to test all hotkey functionality:
- Interactive demo table
- Status indicators
- Quick test buttons
- Complete shortcut reference

### **Manual Testing Checklist**
- [ ] Navigation shortcuts work across all pages
- [ ] Context-aware actions work correctly
- [ ] Table navigation highlights rows properly
- [ ] Command palette shows role-appropriate commands
- [ ] Help popup displays all available shortcuts
- [ ] Visual feedback appears for all actions
- [ ] Mobile detection disables hotkeys properly
- [ ] First-visit help appears for new users

## 🔧 Customization

### **Adding New Hotkeys**
1. Add key combination to `HOTKEY_KEYS` in `hotkeyConfig.ts`
2. Add description to `HOTKEY_DESCRIPTIONS`
3. Implement handler in appropriate hook (`useGlobalHotkeys` or `useContextHotkeys`)
4. Register hotkey with `useHotkeys` hook

### **Adding New Commands**
1. Add command to `COMMAND_PALETTE_DATA` in `hotkeyConfig.ts`
2. Implement action handler in `CommandPalette.tsx`
3. Add to appropriate role category

### **Customizing Visual Feedback**
Modify styles in `HotkeyStyles.tsx`:
- `hotkey-highlight` - Blue highlight animation
- `hotkey-success` - Green success animation  
- `hotkey-error` - Red error animation

## 🎯 Performance

### **Optimizations Implemented**
- **Conditional hotkey registration** - Only active when needed
- **Memoized navigation items** - Prevents unnecessary re-renders
- **Event delegation** - Efficient event handling
- **Mobile detection** - No overhead on mobile devices
- **Debounced actions** - Prevents rapid-fire executions

### **Memory Management**
- **Automatic cleanup** of event listeners
- **Conditional rendering** based on device type
- **Efficient state updates** with proper dependencies

## 🔮 Future Enhancements

### **Potential Additions**
- [ ] **Custom hotkey configuration** - Let users customize shortcuts
- [ ] **Hotkey recording** - Visual recording of user actions
- [ ] **Advanced search** in command palette with filters
- [ ] **Hotkey analytics** - Track most-used shortcuts
- [ ] **Voice commands** integration
- [ ] **Gesture support** for touch devices
- [ ] **Hotkey conflicts detection** and resolution
- [ ] **Import/export** hotkey configurations

## 📚 Dependencies

- `react-hotkeys-hook` - Core hotkey functionality
- `next/navigation` - Router integration
- `next-themes` - Theme toggling
- `sonner` - Toast notifications
- `@radix-ui/*` - UI components for dialogs and popups

## 🐛 Troubleshooting

### **Common Issues**
1. **Hotkeys not working**: Check if mobile detection is incorrectly identifying desktop as mobile
2. **Conflicts with browser shortcuts**: Some combinations may be overridden by browser
3. **Focus issues**: Ensure proper focus management in forms and modals
4. **Performance**: Check for unnecessary re-renders in hotkey hooks

### **Debug Mode**
Enable debug logging by adding to localStorage:
```javascript
localStorage.setItem('hotkey-debug', 'true');
```

---

## 🎉 Conclusion

The hotkey system provides a comprehensive, accessible, and performant keyboard navigation solution that enhances user experience across all user roles and device types. The modular architecture makes it easy to extend and customize while maintaining excellent performance and accessibility standards.