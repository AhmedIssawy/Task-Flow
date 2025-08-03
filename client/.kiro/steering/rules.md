---
inclusion: always
---

# TaskFlow Development Rules & Guidelines

## 🎯 Core Development Principles

### Task Planning & Execution Protocol

**Every development task MUST follow this structured approach:**

1. **Create detailed to-do list** before starting any work
2. **Break down complex tasks** into manageable subtasks
3. **Follow the list systematically** - achieve every item without exceptions
4. **Continue from stopping point** - no oversight, no backsteps
5. **Skip and retry** if commands take too long or get stuck

### Development Hierarchy (Bottom-Up Only)

**NEVER work top-down. ALWAYS follow this exact order:**

1. **Utilities & Hooks** → Create foundational functions first
2. **Basic Components** → Build reusable UI elements
2. **Basic Components** → Build reusable UI elements  
3. **Complex Components** → Develop larger feature components
4. **Pages** → Implement final page structures

### Testing & Quality Assurance

- **NEVER use `npm run dev` or `npm start`** for testing (except with MCPs)
- **Use alternative testing methods** and implement proper testing strategies
- **Leverage MCPs** for advanced testing (browser automation, Playwright, Puppeteer)
- **Zero tolerance** for errors, security vulnerabilities, or quality issues

## 🏗️ TaskFlow Project Context

### Product Requirements

- **Academic task management platform** for educational institutions
- **Multi-role support**: Students, Teachers, Administrators
- **Real-time collaboration** with instant updates
- **Internationalization**: English (en) and Arabic (ar) support
- **Role-based access control** and analytics
- **Mobile-optimized responsive design**

### Tech Stack Compliance

- **Next.js 15.3.4** with App Router and React Server Components
- **React 19.1.0** with TypeScript 5
- **Tailwind CSS 4.1.11** with shadcn/ui (New York variant)
- **Redux Toolkit** with React Redux and Redux Persist
- **next-intl** for internationalization (locale prefix always required)
- **React Hook Form** with Zod validation

## 📁 Project Structure Rules


- **ALL rules are mandatory** - no exceptions or shortcuts allowed
- **Never change instruction files** without explicit permission
- **No markdown reports** after tasks - focus on code implementation
- **Never create duplicate folders/files** - edit existing ones
- **Maintain project structure** and follow established patterns
- **Ensure configuration integrity** across all changes

### Development Prohibitions

- **No top-down development** - always bottom-up approach
- **No testing with npm run dev/start** (except with MCPs)
- **No deviation from file naming conventions**
- **No creation of new component folders** without justification
- **No bypassing of internationalization requirements**
