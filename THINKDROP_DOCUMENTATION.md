# ThinkDrop - Complete Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & Tech Stack](#architecture--tech-stack)
3. [Project Structure](#project-structure)
4. [Features & Functionality](#features--functionality)
5. [Database Schema](#database-schema)
6. [Authentication System](#authentication-system)
7. [API Routes](#api-routes)
8. [Components Architecture](#components-architecture)
9. [Styling & Design System](#styling--design-system)
10. [Environment Setup](#environment-setup)
11. [Development Workflow](#development-workflow)
12. [Deployment](#deployment)
13. [Security Features](#security-features)
14. [Performance Optimizations](#performance-optimizations)
15. [Monitoring & Error Tracking](#monitoring--error-tracking)
16. [Future Enhancements](#future-enhancements)

---

## Project Overview

**ThinkDrop** is a modern startup pitch platform where entrepreneurs can share, discover, and engage with innovative startup ideas. It serves as a community-driven platform for startup founders to showcase their ideas, get feedback, and connect with potential investors and collaborators.

### Key Objectives
- **Democratize Startup Exposure**: Give every entrepreneur a platform to showcase their ideas
- **Community Building**: Foster connections between founders, investors, and enthusiasts
- **Idea Validation**: Provide a space for market validation through community engagement
- **Discovery Platform**: Help users discover trending and innovative startup concepts

### Target Audience
- **Primary**: Startup founders and entrepreneurs
- **Secondary**: Investors, mentors, and startup enthusiasts
- **Tertiary**: Students and aspiring entrepreneurs

---

## Architecture & Tech Stack

### Frontend Technologies
- **Next.js 14**: React framework with App Router for server-side rendering and routing
- **React 19**: Latest React version for component-based UI development
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Modern icon library for consistent iconography

### Backend & Database
- **Sanity CMS**: Headless CMS for content management and real-time data
- **Sanity Studio**: Built-in content management interface
- **Next.js API Routes**: Server-side API endpoints for custom functionality

### Authentication & Security
- **NextAuth.js**: Authentication library with GitHub OAuth integration
- **GitHub OAuth**: Social authentication provider
- **Server Actions**: Secure server-side form handling

### Development & Deployment Tools
- **ESLint**: Code linting and quality assurance
- **Sentry**: Error monitoring and performance tracking
- **Vercel**: Deployment platform (recommended)
- **Git**: Version control system

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Shadcn/ui**: Pre-built component library
- **React Markdown**: Markdown rendering for rich content
- **MDEditor**: Rich text editor for pitch creation
- **Sonner**: Toast notifications

---

## Project Structure

```
thinkdrop/
├── app/                          # Next.js App Router directory
│   ├── (root)/                   # Main application routes
│   │   ├── layout.tsx           # Root layout component
│   │   ├── page.tsx             # Homepage
│   │   ├── startup/             # Startup-related pages
│   │   │   ├── [id]/           # Individual startup page
│   │   │   └── create/         # Create startup page
│   │   └── user/               # User profile pages
│   ├── about/                   # About page
│   ├── api/                     # API routes
│   │   ├── auth/               # Authentication endpoints
│   │   ├── seed/               # Database seeding
│   │   └── sentry-example-api/ # Sentry testing
│   ├── category/               # Category pages
│   ├── studio/                 # Sanity Studio
│   ├── globals.css             # Global styles
│   └── layout.tsx              # Root layout
├── components/                  # Reusable React components
│   ├── ui/                     # Base UI components
│   ├── Navbar.tsx              # Navigation component
│   ├── SearchForm.tsx          # Search functionality
│   ├── StartupCard.tsx         # Startup display card
│   └── StartForm.tsx           # Startup creation form
├── lib/                        # Utility functions and configurations
│   ├── action/                 # Server actions
│   ├── utils.ts                # Helper functions
│   └── validation.ts           # Form validation schemas
├── sanity/                     # Sanity CMS configuration
│   ├── lib/                    # Sanity client and queries
│   ├── schemaTypes/            # Content schemas
│   └── types.ts                # Generated TypeScript types
├── public/                     # Static assets
└── Configuration files         # Various config files
```

---

## Features & Functionality

### Core Features

#### 1. User Authentication
- **GitHub OAuth Integration**: Seamless login with GitHub accounts
- **Automatic Profile Creation**: User profiles created on first login
- **Session Management**: Secure session handling with NextAuth.js
- **Protected Routes**: Authentication-required pages and actions

#### 2. Startup Management
- **Create Startups**: Rich form with markdown editor for detailed pitches
- **View Startups**: Detailed startup pages with full information
- **Edit Capabilities**: Authors can modify their startup entries
- **Image Support**: URL-based image integration for visual appeal

#### 3. Discovery & Search
- **Advanced Search**: Search by title, category, or author name
- **Category Filtering**: Browse startups by specific categories
- **Trending Display**: Homepage showcases popular startups
- **Real-time Updates**: Live content updates using Sanity's real-time features

#### 4. User Profiles
- **Personal Profiles**: Dedicated pages for each user
- **Startup Portfolio**: Display of user's created startups
- **Bio and Information**: Comprehensive user information display
- **Social Integration**: GitHub profile integration

#### 5. Content Management
- **Rich Text Editor**: Markdown support for detailed pitches
- **Image Management**: URL-based image system
- **Category System**: Organized content categorization
- **View Tracking**: Automatic view counting for startups

### Advanced Features

#### 1. Real-time Capabilities
- **Live Updates**: Content updates without page refresh
- **View Counting**: Real-time view tracking
- **Dynamic Content**: Server-side rendering with live data

#### 2. Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Progressive Enhancement**: Works across different browsers
- **Accessibility**: WCAG compliant design patterns

#### 3. Performance Features
- **Server-Side Rendering**: Fast initial page loads
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **Caching**: Intelligent caching strategies

---

## Database Schema

### Content Types (Sanity Schemas)

#### 1. Author Schema
```typescript
{
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    { name: 'id', type: 'number' },           // GitHub ID
    { name: 'name', type: 'string' },         // Display name
    { name: 'bio', type: 'text' },           // User biography
    { name: 'email', type: 'string' },        // Email address
    { name: 'username', type: 'string' },     // GitHub username
    { name: 'image', type: 'url' }           // Profile image URL
  ]
}
```

#### 2. Startup Schema
```typescript
{
  name: 'startup',
  title: 'Startup',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },        // Startup title
    { name: 'slug', type: 'slug' },          // URL slug
    { name: 'author', type: 'reference' },    // Reference to author
    { name: 'description', type: 'text' },    // Short description
    { name: 'views', type: 'number' },        // View count
    { name: 'Category', type: 'string' },     // Category classification
    { name: 'image', type: 'url' },          // Featured image
    { name: 'pitch', type: 'markdown' }      // Detailed pitch content
  ]
}
```

#### 3. Playlist Schema
```typescript
{
  name: 'playlist',
  title: 'Playlist',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },        // Playlist title
    { name: 'slug', type: 'slug' },          // URL slug
    { name: 'select', type: 'array' }        // Array of startup references
  ]
}
```

### Relationships
- **Author → Startup**: One-to-many relationship
- **Playlist → Startup**: Many-to-many relationship through references
- **Category → Startup**: One-to-many relationship (string-based)

---

## Authentication System

### NextAuth.js Configuration

#### Providers
- **GitHub OAuth**: Primary authentication method
- **Automatic Account Creation**: New users automatically get profiles

#### Session Management
```typescript
// Session callback
async session({ session, token }) {
  Object.assign(session, { id: token.id });
  return session;
}

// JWT callback
async jwt({ token, account, profile }) {
  if (account && profile) {
    const user = await client.fetch(AUTHOR_BY_GITHUB_ID, { 
      id: profile?.id 
    });
    token.id = user._id;
  }
  return token;
}
```

#### User Creation Flow
1. User clicks "Login" button
2. Redirected to GitHub OAuth
3. GitHub returns user data
4. System checks if user exists in Sanity
5. If new user, creates author document
6. Session established with user ID

### Protected Routes
- `/startup/create` - Requires authentication
- User profile editing - Requires ownership
- Startup editing - Requires authorship

---

## API Routes

### Authentication Routes
- `GET/POST /api/auth/[...nextauth]` - NextAuth.js handler
- Handles OAuth flow and session management

### Utility Routes
- `GET /api/seed` - Seeds database with sample authors
- `GET /api/seed/startups` - Seeds database with sample startups
- `GET /api/sentry-example-api` - Sentry error testing

### Server Actions
- `loginAction()` - Handles user login
- `logoutAction()` - Handles user logout
- `createPitch()` - Creates new startup entries

---

## Components Architecture

### Layout Components

#### 1. Root Layout (`app/layout.tsx`)
- Global font configuration (Work Sans)
- Metadata setup
- CSS imports

#### 2. Main Layout (`app/(root)/layout.tsx`)
- Navbar integration
- Toast notifications
- Client-side layout wrapper

### Core Components

#### 1. Navbar (`components/Navbar.tsx` & `NavbarClient.tsx`)
- **Server Component**: Fetches session data
- **Client Component**: Handles interactions
- **Features**:
  - Logo and branding
  - Authentication status display
  - Navigation links (About, Create, Explore)
  - User avatar and profile access
  - Responsive design

#### 2. SearchForm (`components/SearchForm.tsx`)
- **Advanced Search Interface**: Multi-field search capability
- **Real-time Search**: Updates results as user types
- **Visual Enhancements**: Animated backgrounds and effects
- **Reset Functionality**: Clear search with animated reset button

#### 3. StartupCard (`components/StartupCard.tsx`)
- **Responsive Card Design**: Works on all screen sizes
- **Rich Information Display**: Author, date, views, category
- **Interactive Elements**: Hover effects and animations
- **Image Optimization**: Automatic image handling
- **Skeleton Loading**: Loading states for better UX

#### 4. StartForm (`components/StartForm.tsx`)
- **Multi-step Form**: Title, description, category, image, pitch
- **Rich Text Editor**: Markdown support for detailed pitches
- **Real-time Validation**: Zod schema validation
- **Error Handling**: Comprehensive error display
- **Loading States**: Visual feedback during submission

### UI Components (Shadcn/ui)
- **Button**: Consistent button styling with variants
- **Input**: Form input components with validation states
- **Textarea**: Multi-line text input
- **Avatar**: User profile image display
- **Skeleton**: Loading state components
- **Sonner**: Toast notification system

### Utility Components
- **View**: Real-time view counter with automatic updates
- **Ping**: Animated notification indicator
- **LoadingScreen**: Full-screen loading animation
- **ExploreModal**: Category exploration modal

---

## Styling & Design System

### Tailwind CSS Configuration
- **Custom Colors**: Brand-specific color palette
- **Typography**: Work Sans font family integration
- **Animations**: Custom blob animations and transitions
- **Responsive Design**: Mobile-first approach

### Design Principles

#### 1. Color Palette
```css
:root {
  --color-primary: #EE2B69;      /* Brand pink */
  --color-primary-100: #FFE8F0;  /* Light pink */
  --color-secondary: #FBE843;    /* Brand yellow */
  --color-black: #000000;        /* Pure black */
  --color-white: #FFFFFF;        /* Pure white */
}
```

#### 2. Typography Scale
- **Headings**: Work Sans font with various weights
- **Body Text**: Consistent line heights and spacing
- **Code**: Monospace font for technical content

#### 3. Component Patterns
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with backdrop blur

#### 4. Animation System
- **Blob Animations**: Organic floating elements
- **Hover Effects**: Smooth transitions on interactive elements
- **Loading States**: Skeleton screens and spinners
- **Page Transitions**: Smooth navigation between pages

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

---

## Environment Setup

### Required Environment Variables

#### Development (.env.local)
```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_WRITE_TOKEN=your_write_token

# Authentication
GITHUB_ID=your_github_app_id
GITHUB_SECRET=your_github_app_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Sentry (Optional)
SENTRY_AUTH_TOKEN=your_sentry_token
```

#### Production Environment
```env
# Same as development but with production URLs
NEXTAUTH_URL=https://your-domain.com
# Production Sanity tokens
# Production GitHub OAuth app credentials
```

### Installation Steps

#### 1. Clone Repository
```bash
git clone <repository-url>
cd thinkdrop
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Environment Setup
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

#### 4. Sanity Setup
```bash
# Generate TypeScript types
npm run typegen

# Start Sanity Studio (optional)
npm run dev
# Visit http://localhost:3000/studio
```

#### 5. GitHub OAuth Setup
1. Create GitHub OAuth App
2. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
3. Add Client ID and Secret to environment variables

#### 6. Start Development Server
```bash
npm run dev
```

---

## Development Workflow

### Code Organization

#### 1. File Naming Conventions
- **Components**: PascalCase (e.g., `StartupCard.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Types**: PascalCase (e.g., `StartupCardType`)

#### 2. Import Organization
```typescript
// External libraries
import React from 'react';
import Link from 'next/link';

// Internal components
import StartupCard from '@/components/StartupCard';

// Utilities and types
import { formatDate } from '@/lib/utils';
import type { StartupCardType } from '@/components/StartupCard';
```

#### 3. Component Structure
```typescript
// Props interface
interface ComponentProps {
  prop1: string;
  prop2?: number;
}

// Main component
const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Hooks
  const [state, setState] = useState();
  
  // Event handlers
  const handleClick = () => {};
  
  // Render
  return <div>Component content</div>;
};

export default Component;
```

### Development Scripts

#### Available Commands
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Sanity
npm run typegen      # Generate TypeScript types
npm run predev       # Pre-development setup
npm run prebuild     # Pre-build setup
```

#### Git Workflow
1. **Feature Branches**: Create branches for new features
2. **Commit Messages**: Use conventional commit format
3. **Pull Requests**: Code review before merging
4. **Testing**: Ensure all features work before deployment

---

## Deployment

### Vercel Deployment (Recommended)

#### 1. Vercel Setup
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

#### 2. Environment Variables
Set all production environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_WRITE_TOKEN`
- `GITHUB_ID`
- `GITHUB_SECRET`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

#### 3. Domain Configuration
- Set custom domain in Vercel dashboard
- Update `NEXTAUTH_URL` to production domain
- Update GitHub OAuth callback URL

### Alternative Deployment Options

#### 1. Netlify
- Connect GitHub repository
- Set build command: `npm run build`
- Set publish directory: `.next`
- Configure environment variables

#### 2. Railway
- Connect GitHub repository
- Auto-deploy on push
- Configure environment variables
- Set up custom domain

#### 3. Self-hosted
- Build application: `npm run build`
- Start production server: `npm start`
- Configure reverse proxy (Nginx)
- Set up SSL certificates

---

## Security Features

### Authentication Security
- **OAuth Integration**: Secure GitHub authentication
- **Session Management**: Encrypted session tokens
- **CSRF Protection**: Built-in NextAuth.js protection
- **Secure Cookies**: HTTPOnly and Secure flags

### Data Security
- **Input Validation**: Zod schema validation
- **SQL Injection Prevention**: Sanity's built-in protection
- **XSS Prevention**: React's built-in escaping
- **Content Security Policy**: Configured headers

### API Security
- **Rate Limiting**: Prevent API abuse
- **Authentication Checks**: Protected routes verification
- **Error Handling**: Secure error messages
- **Input Sanitization**: Clean user inputs

### Environment Security
- **Environment Variables**: Sensitive data protection
- **Secret Management**: Secure token storage
- **HTTPS Enforcement**: Production SSL requirements
- **Security Headers**: Comprehensive header configuration

---

## Performance Optimizations

### Next.js Optimizations
- **Server-Side Rendering**: Fast initial page loads
- **Static Generation**: Pre-built pages where possible
- **Image Optimization**: Automatic image processing
- **Code Splitting**: Automatic bundle optimization

### Sanity Optimizations
- **CDN Usage**: Global content delivery
- **Query Optimization**: Efficient GROQ queries
- **Real-time Updates**: Minimal data transfer
- **Caching Strategy**: Intelligent cache management

### Frontend Optimizations
- **Lazy Loading**: Components loaded on demand
- **Bundle Analysis**: Regular bundle size monitoring
- **Tree Shaking**: Unused code elimination
- **Compression**: Gzip and Brotli compression

### Database Optimizations
- **Efficient Queries**: Optimized GROQ queries
- **Indexing**: Proper field indexing
- **Pagination**: Large dataset handling
- **Caching**: Query result caching

---

## Monitoring & Error Tracking

### Sentry Integration
- **Error Monitoring**: Automatic error capture
- **Performance Tracking**: Application performance metrics
- **User Feedback**: Built-in feedback widget
- **Release Tracking**: Deployment monitoring

### Analytics Setup
- **User Behavior**: Track user interactions
- **Performance Metrics**: Core Web Vitals monitoring
- **Error Rates**: Monitor application stability
- **Usage Patterns**: Understand user flows

### Logging Strategy
- **Server Logs**: API request logging
- **Client Logs**: Browser error tracking
- **Database Logs**: Query performance monitoring
- **Security Logs**: Authentication attempt tracking

---

## Future Enhancements

### Planned Features

#### 1. Enhanced Social Features
- **Comments System**: User feedback on startups
- **Rating System**: Community-driven startup ratings
- **Follow System**: Follow favorite entrepreneurs
- **Notifications**: Real-time activity updates

#### 2. Advanced Search & Discovery
- **AI-Powered Recommendations**: Personalized startup suggestions
- **Advanced Filters**: Multiple filter combinations
- **Saved Searches**: Bookmark search queries
- **Trending Analytics**: Detailed trending insights

#### 3. Monetization Features
- **Premium Profiles**: Enhanced profile features
- **Featured Listings**: Promoted startup visibility
- **Analytics Dashboard**: Detailed startup analytics
- **Investor Tools**: Investment tracking features

#### 4. Content Enhancements
- **Video Pitches**: Video upload and streaming
- **Document Attachments**: Business plan uploads
- **Interactive Demos**: Embedded demo links
- **Multi-language Support**: International expansion

### Technical Improvements

#### 1. Performance Enhancements
- **Edge Computing**: Global edge deployment
- **Advanced Caching**: Multi-layer caching strategy
- **Database Optimization**: Query performance improvements
- **Mobile App**: Native mobile applications

#### 2. Security Upgrades
- **Two-Factor Authentication**: Enhanced security
- **Advanced Permissions**: Granular access control
- **Audit Logging**: Comprehensive activity tracking
- **Compliance Features**: GDPR and privacy compliance

#### 3. Developer Experience
- **API Documentation**: Comprehensive API docs
- **SDK Development**: Third-party integrations
- **Webhook System**: Real-time event notifications
- **Testing Suite**: Comprehensive test coverage

---

## Conclusion

ThinkDrop represents a modern, scalable platform for startup discovery and community building. Built with cutting-edge technologies and following best practices, it provides a solid foundation for growth and feature expansion.

The platform successfully combines:
- **Modern Web Technologies**: Next.js, React, TypeScript
- **Robust Backend**: Sanity CMS with real-time capabilities
- **Secure Authentication**: GitHub OAuth integration
- **Responsive Design**: Mobile-first approach
- **Performance Optimization**: Server-side rendering and caching
- **Developer Experience**: Type safety and modern tooling

This documentation serves as a comprehensive guide for developers, stakeholders, and contributors to understand, maintain, and extend the ThinkDrop platform.

---

## Contact & Support

For questions, issues, or contributions:
- **GitHub Repository**: [Project Repository]
- **Documentation**: This file and inline code comments
- **Issue Tracking**: GitHub Issues
- **Community**: GitHub Discussions

---

*Last Updated: January 2025*
*Version: 1.0.0*