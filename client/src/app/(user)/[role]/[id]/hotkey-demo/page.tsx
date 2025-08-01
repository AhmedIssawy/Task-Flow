'use client';

import { HotkeyDemo } from '@/components/hotkeys/HotkeyDemo';

export default function HotkeyDemoPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Hotkey System Demo</h1>
        <p className="text-muted-foreground mt-2">
          Test and explore the keyboard shortcuts functionality
        </p>
      </div>
      <HotkeyDemo />
    </div>
  );
}