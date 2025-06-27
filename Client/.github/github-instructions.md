# GitHub Development Rules and Guidelines

## Core Development Requirements

### 1. Rule Adherence Policy

- **MANDATORY**: Follow ALL rules in this file for every task
- No exceptions to any rule without explicit permission
- Rules apply regardless of task size or complexity

### 2. Project Understanding Requirement

- **MANDATORY**: Understand the full project 200% before starting any task
- Analyze project structure, dependencies, and architecture
- Review existing codebase and patterns
- Ensure complete comprehension before implementation

### 3. Task Planning Requirement

- **MANDATORY**: Create a to-do tasks breakdown for every assigned task 
- you havet to tell me them (to-dos list) before you start doing anything
- Think through the complete implementation before starting
- Document approach for both big and small tasks
- Plan must be clear and actionable

### 4. Code Quality Standards

- Provide **100% error-free code**
- Follow best practices for:
  - SEO optimization
  - Performance optimization
  - Clean code principles
  - Type safety (TypeScript)

### 5. Code Review Process

- **MANDATORY**: Check code at least 2 times using 2 different methods
- Verification checklist:
  - Logic correctness
  - Import statements
  - Syntax validation
  - Type checking
  - Performance implications

### 6. Required File Reading

Before any task, **ALWAYS** read these files:

- `package.json`
- Theme provider
- Language provider
- `i18n.ts` file, local/ar.json, local/en.json

### 7. File Creation Discipline

- Create **ONLY** necessary files for the specific work
- **FORBIDDEN**: Extra files, test files, or temporary files
- **FORBIDDEN**: Files that will need removal later
- Focus on essential implementation files only

### 8. File Creation Rules

- Create **ONLY** necessary files
- **FORBIDDEN**: Creating `something-new.tsx` or `something-old.tsx` variations
- **If correction is difficult**: Remove file completely and recreate
- No custom versions or duplicates

### 9. Technology Stack Requirements

- **State Management**: RTK (Redux Toolkit) - MANDATORY
- **API Implementation**: RTK Query - MANDATORY
- **Animations**: Framer Motion - MANDATORY
- **Styling**: Tailwind CSS - MANDATORY

### 10. Component Usage

- **MANDATORY**: Use only components from `src/components/ui` folder
- No external UI components outside of the designated UI folder
- Maintain consistency across all pages

### 11. Universal Features

All pages **MUST** implement these constant features:

- **Theme Toggle**: System, Light, Dark modes
- **Language Support**: Arabic (ar), English (en)
- These features are non-negotiable for every page

### 12. Styling Guidelines

- **MANDATORY**: Use colors, fonts, and sizes from `globals.css`
- If required color doesn't exist:
  1. Add it to `globals.css` first
  2. Then use it in components
- Maintain design system consistency

### 13. Application Architecture

Based on the provided system diagram, implement these main components:

- **Landing Page** → **Login** → **Protected Router** → **Unified Router** → **Role-based Pages**

### 14. Routing Structure

```
Landing Page
    ↓
Login
    ↓
Protected Router (validates user data, sets lang/theme in localStorage and put cookies *everytime*)
    ↓
Unified Router (routes based on user role)
    ↓
Role-based Pages:
    - Admin → admin\id
    - Super Admin → admins
    - Teacher → teacher\id
    - Student → student\id
```

### 15. Router Architecture Philosophy

- **Unified Router POV**: Single router checks user access permissions
- **NOT Role-based POV**: Same pages for all users with different access levels
- Users see different content based on permissions, not different pages
- Centralized access control through unified routing system

### 16. Testing Commands

- **FORBIDDEN**: `npm run dev` for testing
- Use alternative commands for validation and testing
- Verify functionality through build processes and static analysis

### 17. Data Usage Policy

- **FORBIDDEN**: Large mockup data or mockup files
- Small mockup data acceptable when necessary
- Use real data structure patterns

### 18. Documentation Policy

- **FORBIDDEN**: Creating `.md` files without explicit instruction
- Maintain existing documentation standards
- Focus on code implementation over documentation

### 19. File Editing Permissions

- Edit GitHub instructions file only with explicit permission
- Permission granted for this session only
- Follow established guidelines for all modifications

## Compliance Requirements

- All rules are **MANDATORY** unless explicitly stated otherwise
- Violation of any rule requires immediate correction
- Code review must verify compliance with all guidelines
- Performance and SEO optimization are non-negotiable requirements
- **ALL ROLES ARE MANDATORY** - no exceptions or modifications allowed
