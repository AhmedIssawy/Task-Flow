# TaskFlow - Educational Management System

## 📋 Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Features](#features)
- [Documentation Links](#documentation-links)

## 🎯 Overview

TaskFlow is a comprehensive educational management system built with Next.js 15, featuring a modern, responsive interface with full internationalization support (English/Arabic) and role-based access control. The system serves multiple user types including students, teachers, administrators, and super administrators.

### Key Highlights
- **Multi-role System**: Student, Teacher, Admin, Super Admin roles
- **Internationalization**: Full RTL/LTR support for English and Arabic
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **State Management**: Redux Toolkit with RTK Query for API management
- **Type Safety**: Full TypeScript implementation
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Authentication**: Secure cookie-based authentication with role-based access
- **Performance**: Optimized with Next.js App Router and server-side rendering

## 🏗️ Architecture

### Frontend Architecture Stack
```
┌─────────────────────────────────────┐
│           Presentation Layer        │
│  ┌─────────────┐ ┌─────────────────┐│
│  │   Pages     │ │   Components    ││
│  │  (App Dir)  │ │   (Shadcn/UI)   ││
│  └─────────────┘ └─────────────────┘│
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│            Business Layer           │
│  ┌─────────────┐ ┌─────────────────┐│
│  │    Hooks    │ │   State Mgmt    ││
│  │  (Custom)   │ │ (Redux Toolkit) ││
│  └─────────────┘ └─────────────────┘│
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│             Data Layer              │
│  ┌─────────────┐ ┌─────────────────┐│
│  │ RTK Query   │ │   API Services  ││
│  │ (Caching)   │ │  (HTTP Client)  ││
│  └─────────────┘ └─────────────────┘│
└─────────────────────────────────────┘
```

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.11 with custom RTL support
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **State Management**: Redux Toolkit with RTK Query
- **Internationalization**: next-intl with full RTL/LTR support
- **Authentication**: Cookie-based with role-based access control
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Notifications**: Sonner

## 📁 Project Structure

```
client/
├── docs/                          # Documentation files
├── locales/                       # Internationalization files
│   ├── en.json                   # English translations
│   └── ar.json                   # Arabic translations
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── (user)/              # Protected user routes
│   │   │   ├── admin/           # Admin dashboard pages
│   │   │   ├── student/         # Student dashboard pages
│   │   │   ├── teacher/         # Teacher dashboard pages
│   │   │   └── super-admin/     # Super admin pages
│   │   ├── auth/                # Authentication pages
│   │   ├── mock/                # Mock data for development
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout component
│   │   ├── page.tsx             # Home page
│   │   └── landing.tsx          # Landing page component
│   ├── components/              # React components
│   │   ├── ui/                  # Base UI components (shadcn/ui)
│   │   ├── layout/              # Layout components
│   │   ├── auth/                # Authentication components
│   │   ├── dashboard/           # Dashboard components
│   │   ├── landing/             # Landing page components
│   │   ├── admin/               # Admin-specific components
│   │   ├── tables/              # Table components
│   │   ├── login/               # Login components
│   │   ├── user/                # User-related components
│   │   └── made/                # Custom utility components
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAuth.ts           # Authentication hook
│   │   ├── useLanguage.ts       # Language switching hook
│   │   └── use-mobile.ts        # Mobile detection hook
│   ├── lib/                     # Utility libraries
│   │   ├── utils.ts             # General utilities
│   │   ├── i18n.ts              # Internationalization utilities
│   │   └── baseQueryWithErrorHandling.ts # API error handling
│   ├── store/                   # Redux store configuration
│   │   ├── services/            # RTK Query API services
│   │   ├── slices/              # Redux slices
│   │   ├── types/               # TypeScript type definitions
│   │   ├── index.ts             # Store configuration
│   │   └── hooks.ts             # Typed Redux hooks
│   ├── providers/               # React context providers
│   │   └── ReduxProvider.tsx    # Redux store provider
│   ├── constants/               # Application constants
│   ├── utils/                   # Utility functions
│   └── i18n/                    # Internationalization configuration
├── package.json                 # Dependencies and scripts
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── components.json             # shadcn/ui configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Backend server running (see server documentation)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL_AUTH=http://localhost:5000
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NODE_ENV=development
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## ✨ Features

### 🔐 Authentication & Authorization
- **Multi-role Authentication**: Support for Student, Teacher, Admin, and Super Admin roles
- **Secure Cookie-based Sessions**: HTTP-only cookies for enhanced security
- **Role-based Access Control**: Protected routes based on user roles
- **Auto-logout**: Session management with automatic logout on token expiry

### 🌍 Internationalization
- **Bilingual Support**: Full English and Arabic language support
- **RTL/LTR Layout**: Automatic layout direction switching
- **Dynamic Language Switching**: Real-time language changes without page reload
- **Localized Content**: All UI elements, messages, and content are fully localized

### 📱 Responsive Design
- **Mobile-first Approach**: Optimized for mobile devices
- **Adaptive Layouts**: Components adapt to different screen sizes
- **Touch-friendly Interface**: Optimized for touch interactions
- **Cross-browser Compatibility**: Works across all modern browsers

### 🎨 Modern UI/UX
- **Design System**: Consistent design language using shadcn/ui
- **Dark/Light Theme**: System-aware theme switching
- **Smooth Animations**: Framer Motion powered animations
- **Accessible Components**: WCAG compliant interface elements

### 📊 Dashboard Features
- **Role-specific Dashboards**: Customized interfaces for each user role
- **Real-time Data**: Live updates using RTK Query
- **Interactive Charts**: Data visualization with Recharts
- **Notification System**: Real-time notifications and alerts

### 🔧 Developer Experience
- **TypeScript**: Full type safety across the application
- **Hot Reload**: Fast development with Next.js hot reload
- **Component Library**: Reusable component system
- **Code Splitting**: Automatic code splitting for optimal performance

## 📚 Documentation Links

- [**Architecture Documentation**](./ARCHITECTURE.md) - Detailed system architecture
- [**Component Documentation**](./COMPONENTS.md) - Complete component library reference
- [**API Documentation**](./API_DOCUMENTATION.md) - API endpoints and integration
- [**Styling Guide**](./STYLING_GUIDE.md) - Design system and styling conventions
- [**Internationalization Guide**](./INTERNATIONALIZATION.md) - i18n implementation details
- [**Security Documentation**](./SECURITY.md) - Security best practices and implementation
- [**Deployment Guide**](./DEPLOYMENT.md) - Production deployment instructions
- [**Contributing Guide**](./CONTRIBUTING.md) - Development workflow and contribution guidelines
- [**Changelog**](./CHANGELOG.md) - Version history and updates

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](./CONTRIBUTING.md) for details on our development process, coding standards, and how to submit pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**TaskFlow** - Transforming educational management through modern technology.