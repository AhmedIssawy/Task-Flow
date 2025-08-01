'use client';

import { useEffect } from 'react';

// Global CSS styles for hotkey visual feedback
const hotkeyStyles = `
  .hotkey-feedback-highlight {
    animation: hotkey-highlight 0.3s ease-in-out;
    position: relative;
    z-index: 10;
  }

  .hotkey-feedback-success {
    animation: hotkey-success 0.3s ease-in-out;
    position: relative;
    z-index: 10;
  }

  .hotkey-feedback-error {
    animation: hotkey-error 0.3s ease-in-out;
    position: relative;
    z-index: 10;
  }

  @keyframes hotkey-highlight {
    0% {
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.3);
      transform: scale(1.02);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
      transform: scale(1);
    }
  }

  @keyframes hotkey-success {
    0% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 0 8px rgba(34, 197, 94, 0.3);
      transform: scale(1.02);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
      transform: scale(1);
    }
  }

  @keyframes hotkey-error {
    0% {
      box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 0 8px rgba(239, 68, 68, 0.3);
      transform: scale(1.02);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
      transform: scale(1);
    }
  }

  /* Table row selection styles */
  [data-table-row].selected {
    background-color: rgba(59, 130, 246, 0.1);
    border-left: 3px solid rgb(59, 130, 246);
  }

  /* Sidebar item highlight */
  .sidebar-item-focused {
    background-color: rgba(59, 130, 246, 0.1);
    border-radius: 8px;
  }

  /* Hotkey tooltip styles */
  .hotkey-tooltip {
    font-size: 0.75rem;
    color: rgba(107, 114, 128, 1);
    margin-left: 8px;
  }

  /* Dark mode adjustments */
  .dark .hotkey-tooltip {
    color: rgba(156, 163, 175, 1);
  }

  .dark [data-table-row].selected {
    background-color: rgba(59, 130, 246, 0.2);
  }

  .dark .sidebar-item-focused {
    background-color: rgba(59, 130, 246, 0.2);
  }

  /* Focus indicators for accessibility */
  .hotkey-focus-visible {
    outline: 2px solid rgb(59, 130, 246);
    outline-offset: 2px;
  }

  /* Command palette and help popup backdrop */
  .hotkey-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }

  /* Smooth transitions */
  .hotkey-transition {
    transition: all 0.2s ease-in-out;
  }
`;

export const HotkeyStyles: React.FC = () => {
  useEffect(() => {
    // Create and inject styles
    const styleElement = document.createElement('style');
    styleElement.id = 'hotkey-styles';
    styleElement.textContent = hotkeyStyles;
    
    // Remove existing styles if any
    const existingStyles = document.getElementById('hotkey-styles');
    if (existingStyles) {
      existingStyles.remove();
    }
    
    document.head.appendChild(styleElement);

    // Cleanup on unmount
    return () => {
      const element = document.getElementById('hotkey-styles');
      if (element) {
        element.remove();
      }
    };
  }, []);

  return null;
};