# 👻 GhostGram

<div align="center">

![GhostGram Logo](public/witch.png)

**Anonymous Q&A Platform for Creators**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[Live Demo](https://ghostgram.nayalsaurav.in) · [Report Bug](https://github.com/nayalsaurav/GhostGram/issues) · [Request Feature](https://github.com/nayalsaurav/GhostGram/issues)

</div>

---

## 📖 Overview

GhostGram is an anonymous Q&A platform where creators can receive questions from their audience without revealing the sender's identity. Perfect for AMAs, feedback collection, and building authentic connections with your community.

### ✨ Key Features

- **🔗 Unique Shareable Links** - Each creator gets a personalized link to share publicly
- **👻 Anonymous Questions** - Anyone with the link can send questions completely anonymously
- **📊 Private Dashboard** - Manage and view all your received questions in one place
- **⏸️ Toggle Availability** - Pause or resume incoming questions anytime
- **🎨 Clean Interface** - Minimal, modern design for a seamless experience
- **🌙 Dark Mode** - Beautiful dark theme support
- **🔐 Secure Authentication** - Sign in with credentials or Google OAuth

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 15](https://nextjs.org/) with App Router |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Database** | [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) |
| **Authentication** | [NextAuth.js](https://next-auth.js.org/) (Credentials + Google OAuth) |
| **UI Components** | [Radix UI](https://www.radix-ui.com/) + [Lucide Icons](https://lucide.dev/) |
| **Animations** | [Motion](https://motion.dev/) (Framer Motion) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Google OAuth credentials (optional, for Google sign-in)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nayalsaurav/GhostGram.git
   cd GhostGram
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   MONGODB_URI=mongodb+srv://your-connection-string

   # NextAuth
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000

   # Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
GhostGram/
├── app/
│   ├── (auth)/          # Authentication pages (signin, signup)
│   ├── (root)/          # Main app pages (home, dashboard, profile)
│   ├── actions/         # Server actions
│   ├── api/             # API routes
│   ├── robots.ts        # Dynamic robots.txt
│   └── sitemap.ts       # Dynamic sitemap
├── components/          # Reusable UI components
├── lib/                 # Utility functions & configurations
│   ├── auth.ts          # NextAuth configuration
│   ├── database.ts      # MongoDB connection
│   └── utils.ts         # Helper functions
├── model/               # Mongoose models
└── public/              # Static assets
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Saurav Nayal**

- Website: [nayalsaurav.in](https://nayalsaurav.in)
- GitHub: [@nayalsaurav](https://github.com/nayalsaurav)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ and lots of ☕

</div>
