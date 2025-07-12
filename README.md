# Portfolio Website - Phạm Thanh Thúy

A modern, responsive portfolio website for Phạm Thanh Thúy, showcasing her experience as a Social Media Intern with expertise in content creation, marketing, and design.

## 🌟 Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Built with React, Tailwind CSS, and shadcn/ui components
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Navigation**: Smooth scrolling between sections
- **Professional Layout**: Clean and modern design showcasing skills and projects

## 🚀 Live Demo

The website showcases:
- Personal introduction and background
- Skills with animated progress bars
- Project portfolio with detailed achievements
- Notable accomplishments and awards
- Contact information and social media links

## 🛠️ Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation & Development

### Prerequisites
- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Setup
```bash
# Clone the repository
git clone <your-repository-url>
cd thuy-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🌐 Deployment on Cloudflare Pages

### Method 1: Connect Git Repository (Recommended)

1. **Push to GitHub/GitLab**:
   ```bash
   # Add your remote repository
   git remote add origin <your-repository-url>
   git push -u origin master
   ```

2. **Deploy on Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Pages" in the sidebar
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose your repository
   - Configure build settings:
     - **Framework preset**: Vite
     - **Build command**: `pnpm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `/` (leave empty)
   - Click "Save and Deploy"

### Method 2: Direct Upload

1. **Build the project**:
   ```bash
   pnpm run build
   ```

2. **Upload to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Pages"
   - Click "Create a project"
   - Select "Upload assets"
   - Upload the contents of the `dist` folder
   - Set project name and deploy

### Method 3: Using Wrangler CLI

1. **Install Wrangler**:
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Deploy**:
   ```bash
   # Build first
   pnpm run build
   
   # Deploy to Cloudflare Pages
   wrangler pages deploy dist --project-name thuy-portfolio
   ```

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic deployment.

### Custom Domain
After deployment, you can add a custom domain in the Cloudflare Pages dashboard:
1. Go to your project settings
2. Navigate to "Custom domains"
3. Add your domain and follow the DNS configuration instructions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Customization

### Colors
The color scheme can be modified in `src/App.css`. The current theme uses:
- Primary: Pink/Purple gradient
- Background: Light pink to purple gradient
- Text: Dark gray for readability

### Content
To update portfolio content:
1. Edit the data arrays in `src/App.jsx`:
   - `skills` - Update skill information
   - `projects` - Modify project details
   - `achievements` - Update accomplishments
2. Modify personal information in the hero and about sections

### Styling
- Global styles: `src/index.css`
- Component styles: `src/App.css`
- Tailwind configuration: Built into the template

## 📄 License

This project is created for Phạm Thanh Thúy's personal portfolio. All rights reserved.

## 🤝 Support

For any questions or support regarding deployment:
1. Check the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/)
2. Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Consult the [React documentation](https://react.dev/)

---

**Built with ❤️ using React and modern web technologies**

