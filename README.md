# 🚀 Aaryan Mahipal - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-0.0.0-000000?style=for-the-badge)](https://ui.shadcn.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Groq AI](https://img.shields.io/badge/Groq_AI-LLaMA3-8B-00FF00?style=for-the-badge)](https://groq.com/)

## 📱 About the Web App

This is a modern, interactive portfolio website showcasing my work as a mechanical engineer, designer, and developer. Built with cutting-edge web technologies, it features an AI-powered chat assistant that provides personalized tours of my projects and experience.

### ✨ Key Features

- **AI Chat Assistant**: Interactive chat interface powered by Groq AI (LLaMA3-8B) with context-aware responses about Aaryan's work
- **Dynamic Content Management**: JSON-based content system for easy updates without code changes
- **Responsive Design**: Mobile-first approach with smooth animations and transitions
- **Interactive Portfolio**: Project showcases with image galleries and detailed descriptions
- **Command System**: Quick navigation using chat commands (e.g., `/about`, `/work`, `/contact`)
- **Vector Store Integration**: Smart context retrieval for AI responses
- **Modern UI Components**: Built with shadcn/ui for consistent, accessible design
- **Performance Optimized**: Next.js 14 with App Router for optimal loading and SEO

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

### Backend & AI
- **Groq AI** - LLaMA3-8B model for intelligent chat responses
- **Vector Store** - Context-aware information retrieval
- **Next.js API Routes** - Serverless API endpoints

### Development Tools
- **Cursor + v0** - AI-powered code editor and development environment
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Groq API key (for AI chat functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aaryan-mahipal.git
   cd aaryan-mahipal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Groq API key:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   GROQ_MODEL=llama3-8b-8192
   GROQ_MAX_TOKENS=1000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🎨 Content Management

### Updating Portfolio Content

All content is managed through JSON files for easy updates:

- **`data/portfolio-data.json`** - Personal info, experience, skills
- **`lib/projects.ts`** - Project showcases and galleries
- **`public/`** - Project images and assets

### Adding New Projects

1. Add project images to `public/images/[project-name]/`
2. Update `lib/projects.ts` with project details
3. The changes will automatically appear on the `/work` page

### Customizing the AI Assistant

The chat assistant uses context from your portfolio data. To improve responses:

1. Update project descriptions in `lib/projects.ts`
2. Add relevant information to `data/portfolio-data.json`
3. The vector store will automatically index new content

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**
   - Push code to GitHub/GitLab
   - Connect repository to Vercel

2. **Configure environment variables**
   - Add `GROQ_API_KEY` in Vercel dashboard
   - Set other environment variables as needed

3. **Deploy**
   - Vercel will automatically deploy on push
   - Custom domain can be configured in settings

### Environment Variables for Production

```env
GROQ_API_KEY=your_production_groq_key
GROQ_MODEL=llama3-8b-8192
GROQ_MAX_TOKENS=1000
NODE_ENV=production
```

## 🔧 Development with Cursor + v0

This project was developed using **Cursor** (AI-powered code editor) and **v0** (AI development platform), which significantly accelerated the development process:


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


**Built with ❤️ using Cursor + v0**

*For questions or support, reach out to Aaryan at [mahipalaaryan@gmail.com](mailto:mahipalaaryan@gmail.com)*
