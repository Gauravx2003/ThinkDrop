# ThinkDrop - Startup Pitch Platform

ThinkDrop is a modern web platform where entrepreneurs can share, discover, and engage with innovative startup ideas. Built with Next.js 14, Sanity CMS, and real-time updates.

![ThinkDrop Platform](public/logo.png)

## Features

- 🚀 **Share Startup Ideas**: Create and publish your startup pitches
- 👥 **User Profiles**: Personalized profiles for entrepreneurs
- 🔍 **Advanced Search**: Find startups by category or keyword
- 📊 **Real-time Analytics**: Track views and engagement
- 🎨 **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- 🔐 **Secure Authentication**: GitHub authentication integration
- 📝 **Rich Content Editor**: Markdown support for detailed pitches

## Tech Stack

- **Frontend**: Next.js 14, React 19, Tailwind CSS
- **Backend**: Sanity CMS
- **Authentication**: NextAuth.js
- **Database**: Sanity.io
- **Styling**: Tailwind CSS, Lucide Icons
- **Content**: MDEditor, Markdown Support
- **Monitoring**: Sentry
- **Type Safety**: TypeScript

## Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd thinkdrop
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**

Create a `.env` file in the root directory with:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_WRITE_TOKEN=your_write_token
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
```

4. **Run the development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## Project Structure

```
thinkdrop/
├── app/                   # Next.js app directory
│   ├── (root)/           # Main application routes
│   ├── api/              # API routes
│   └── studio/          # Sanity Studio
├── components/           # React components
├── lib/                  # Utility functions
├── public/              # Static assets
└── sanity/              # Sanity configuration
```

## Key Features

### For Entrepreneurs
- Create detailed startup pitches
- Track engagement metrics
- Build professional profiles
- Connect with potential investors

### For Visitors
- Discover innovative startups
- Filter by categories
- Real-time updates
- Engage with founders

## Authentication

The platform uses GitHub authentication through NextAuth.js. Users can:
- Sign in with GitHub
- Create and manage profiles
- Access protected features

## Content Management

Sanity CMS powers the content infrastructure:
- Real-time updates
- Structured content
- Rich text editing
- Asset management

## Deployment

The application is designed to be deployed on platforms like Vercel or Netlify:

1. Connect your repository
2. Configure environment variables
3. Deploy automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@thinkdrop.com or open an issue in the repository.