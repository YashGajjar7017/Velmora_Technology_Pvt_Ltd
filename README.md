# 🟢 Velmora
## Transforming Ideas Into <span style=\"color: #10b981; font-weight: bold;\">Digital Reality</span>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-3b82f6?logo=tailwindcss)](https://tailwindcss.com)
[![Bun](https://img.shields.io/badge/Bun-Fast-00D9CC?logo=bun)](https://bun.sh)

<div align=\"center\">
<img src=\"https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footer.png\" width=\"100%\" alt=\"Catppuccin\"/>
</div>

> Velmora delivers **end-to-end IT services** — custom software development, cloud solutions, cybersecurity, mobile apps, AI/ML, and consulting. Built with modern Next.js + shadcn/ui stack.

![Hero](public/hero-image.png)

## ✨ Features

| Service | Description | Tech |
|---------|-------------|------|
| 🕸️ **Web Development** | Custom web apps, PWAs, e-commerce | Next.js, React 19, Tailwind |
| ☁️ **Cloud Solutions** | AWS/Azure/GCP, serverless, Kubernetes | Docker, Prisma, Vercel-ready |
| 🛡️ **Cybersecurity** | Audits, Zero Trust, compliance | Auth, secure APIs |
| 📱 **Mobile Apps** | React Native, Flutter, native | Responsive-first design |
| 🤖 **AI/ML** | Custom models, NLP, computer vision | TanStack Query, Recharts |
| 💡 **Consulting** | Digital transformation roadmaps | Full-stack expertise |

**Stats**: 8+ years, 200+ projects, 150+ clients, 50+ team members.

## 🚀 Quick Start

```bash
# Install dependencies (Bun recommended)
bun install

# Development server (port 3000)
bun run dev

# Build for production
bun run build

# Start production
bun start
```

**Live Demo**: http://localhost:3000/#services (hash navigation)

**Database** (Prisma SQLite):
```bash
bun run db:push
bun run db:studio  # Explore at http://localhost:5555
```

## 📁 Project Structure

```
velmora/
├── src/app/          # Next.js app router + API routes
├── src/components/   # shadcn/ui + pages (Home, Services, etc.)
├── src/lib/          # Data.ts (services, pricing), utils.ts, db.ts
├── prisma/           # Schema.prisma (User, Post models)
├── public/           # Logo.svg, hero-image.png, founder.png
├── examples/         # WebSocket demo
└── package.json      # Bun scripts, deps
```

## 🛠️ Tech Stack

![Tech](public/logo.svg) **Frontend**: Next.js 16, React 19, Tailwind 4, shadcn/ui (150+ components), Framer Motion, Lucide Icons.

**Data & State**: Prisma, TanStack Query/Table, Zustand, React Hook Form, Zod.

**UI Utils**: Class Variance Authority, Tailwind Merge, Sonner Toasts.

**Extras**: Recharts, Embla Carousel, Date-fns, UUID.

<details>
<summary>Full Dependencies (42+)</summary>

| Category | Packages |
|----------|----------|
| UI/Core | `@radix-ui/*`, `lucide-react`, `framer-motion` |
| Charts | `recharts`, `@tanstack/react-table` |
| Forms | `react-hook-form`, `@hookform/resolvers`, `zod` |
| Utils | `clsx`, `tailwind-merge`, `sonner`, `next-themes` |

</details>

## 🎨 Sample Data Preview

### Services
```typescript
SERVICES: Service[] = [
  { icon: Globe, title: 'Web Development', features: ['React, Next.js...', 'PWA...'] },
  // Cloud, Cybersecurity, Mobile, AI/ML, Consulting...
]
```

### Pricing Plans
| Plan | Price | Features |
|------|-------|----------|
| Starter | ₹49k/project | 5 pages, basic SEO |
| **Professional** | ₹99k/project | **Custom UI/UX, API, 15 pages** |
| Enterprise | Custom | Unlimited, 24/7 support |

### Founders
- **Abhishek Vaghela** (CEO): [LinkedIn](https://www.linkedin.com/in/vaghela-abhishek-3753b9291)
- **Yash Gajjar** (CTO): [LinkedIn](https://www.linkedin.com/in/Yash_gajjar_offical/)

![Founders](public/founder.png) ![Co-Founder](public/co-founder.png)

## 📱 Screenshots

![Home Hero](upload/Screenshot%202026-04-18%20at%202.10.10%20PM.png)

**Trusted By**: FinVault, GreenLeaf, LogiCore, MedSync, RetailMax, EduTech.

## 🤝 Contributing

1. Fork & clone
2. `bun install`
3. `bun run dev`
4. PR to `main`

See `worklog.md` for notes.

## 📄 License

MIT - Built with ❤️ for modern IT portfolios.

<div align=\"center\">

![Visitors](https://visit-counter.itsmeow.dev/write/badge.svg?repo_path=yourusername/velmora)

<sub>⭐ Star us on GitHub! | Made with Next.js + shadcn/ui</sub>

</div>
