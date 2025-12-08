# Personal Website V2

A modern, full-stack personal website built with Next.js and NestJS in a monorepo architecture. Features a React frontend, RESTful API backend, and containerized deployment with Docker.

## ✨ Features

- 🎨 Modern React UI with Next.js 15 and Tailwind CSS 4
- 🔥 Server-side rendering and optimized performance
- 🌓 Dark/light theme support
- 📱 Fully responsive design
- 🔐 reCAPTCHA integration for contact forms
- 🚀 RESTful API with NestJS
- 🗄️ SQLite database with TypeORM
- 🐳 Docker containerization for consistent environments
- 🧪 Comprehensive testing with Vitest
- 📦 Monorepo structure with Turborepo

## 🛠️ Tech Stack

**Frontend (apps/web)**
- Next.js 15.5.4
- React 19.1.0
- Tailwind CSS 4
- Framer Motion (animations)
- TypeScript 5.9.3

**Backend (apps/api)**
- NestJS 11.0.1
- TypeORM 0.3.20
- SQLite 5.1.7
- TypeScript 5.9.3

**Infrastructure**
- Turborepo 2.5.8 (monorepo orchestration)
- pnpm 10.18.1 (package management)
- Docker & Docker Compose (containerization)
- Node.js 22+

## 📁 Project Structure

```
personal-website-v2/
├── apps/
│   ├── web/              # Next.js frontend application
│   │   ├── src/
│   │   │   ├── app/      # Next.js App Router pages
│   │   │   ├── components/  # React components
│   │   │   └── lib/      # Utilities and contexts
│   │   └── public/       # Static assets
│   └── api/              # NestJS backend application
│       ├── src/
│       │   ├── database/ # Database configuration
│       │   ├── entities/ # TypeORM entities
│       │   └── migrations/
│       └── data/         # SQLite database files
├── packages/
│   ├── config/           # Shared ESLint & Prettier configs
│   ├── types/            # Shared TypeScript type definitions
│   └── utils/            # Shared utility functions
├── Dockerfile.web        # Frontend Docker configuration
├── Dockerfile.api        # Backend Docker configuration
└── docker-compose.yml    # Service orchestration
```

## 🚀 Getting Started

### Prerequisites

Choose your development approach:

**Option 1: Docker (Recommended)**
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed
- Docker Compose (included with Docker Desktop)

**Option 2: Local Development**
- Node.js 22+ installed
- pnpm 10+ installed (`npm install -g pnpm`)

### Quick Start

#### 🐳 With Docker (Easiest)

1. **Clone the repository**
```bash
git clone https://github.com/devcisne/personal-website-v2.git
cd personal-website-v2
```

2. **Set up environment variables**
```bash
cp apps/web/.env.example apps/web/.env
# Edit apps/web/.env and add your configuration
```

3. **Build and start containers**
```bash
pnpm run docker:build
pnpm run docker:up
```

4. **Access the applications**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

#### 💻 Local Development (Without Docker)

1. **Clone and install dependencies**
```bash
git clone https://github.com/devcisne/personal-website-v2.git
cd personal-website-v2
pnpm install
```

2. **Set up environment variables**
```bash
cp apps/web/.env.example apps/web/.env
cp apps/api/.env.example apps/api/.env
# Edit both .env files with your configuration
```

3. **Start development servers**
```bash
pnpm run dev
```

Both frontend and backend will start with hot-reload enabled:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000 (proxied at /api)

## 📋 Available Scripts

### Development
| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start all apps in development mode |
| `pnpm run build` | Build all apps for production |
| `pnpm run lint` | Lint all code |
| `pnpm run format` | Format code with Prettier |
| `pnpm run test` | Run all tests |
| `pnpm run clean` | Clean build artifacts |

### Docker Commands
| Command | Description |
|---------|-------------|
| `pnpm run docker:build` | Build all Docker images |
| `pnpm run docker:up` | Start containers in background |
| `pnpm run docker:down` | Stop containers |
| `pnpm run docker:logs` | View container logs (follow mode) |
| `pnpm run docker:restart` | Restart containers |
| `pnpm run docker:clean` | Stop containers and remove volumes |

## 🐳 Docker Development

### Architecture

```
┌─────────────────┐
│   Frontend      │  Port 3000
│   (Next.js)     │  Next.js 15 + React 19
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Backend API   │  Port 3001
│   (NestJS)      │  RESTful API
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   SQLite DB     │  Volume: api_data
│   (Persistent)  │  TypeORM managed
└─────────────────┘
```

### What's Running?

**Web Service (Frontend)**
- Base Image: Node.js 22 Alpine (~200MB)
- Port: 3000
- Features: Next.js standalone output, optimized static assets
- Hot reload: Supported via volume mounts

**API Service (Backend)**
- Base Image: Node.js 22 Alpine (~250MB)
- Port: 3001
- Features: NestJS server with TypeORM
- Database: SQLite with persistent Docker volume

### Development Workflow

**Starting development:**
```bash
# First time or after dependency changes
pnpm run docker:build

# Start all services
pnpm run docker:up

# View logs in real-time
pnpm run docker:logs
```

**Making code changes:**
```bash
# After code changes
pnpm run docker:build
pnpm run docker:restart
```

**Checking status:**
```bash
# View running containers
docker compose ps

# View specific service logs
docker compose logs web
docker compose logs api
```

### Database Management

The SQLite database persists in a Docker volume. To interact with it:

```bash
# Access the database container
docker compose exec api sh

# Inside container, navigate to database
cd /app/data
ls -la database.sqlite

# Reset database (WARNING: destroys all data!)
pnpm run docker:clean
pnpm run docker:up
```

### Common Issues & Solutions

**Containers won't start:**
```bash
pnpm run docker:clean
pnpm run docker:build
pnpm run docker:up
```

**Port already in use:**
```bash
# Check what's using the ports
lsof -i :3000
lsof -i :3001

# Stop conflicting processes or modify ports in docker-compose.yml
```

**Can't connect to API:**
- Verify both services are running: `docker compose ps`
- Check logs: `pnpm run docker:logs`
- Ensure environment variables are correctly set

**Slow builds:**
```bash
# Rebuild without cache
docker compose build --no-cache
```

## 🧪 Testing

```bash
# Run all tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run tests with coverage
pnpm run test:cov
```

Tests are organized by application:
- `apps/web/src/**/*.test.tsx` - Frontend component tests
- `apps/api/src/**/*.spec.ts` - Backend unit tests
- `apps/api/test/**/*.e2e.ts` - End-to-end API tests

## 🔧 Configuration

### Environment Variables

**Frontend** (`apps/web/.env`):
```env
NEXT_PUBLIC_API_ENDPOINT=http://localhost:4000
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

**Backend** (`apps/api/.env`):
```env
PORT=4000
DATABASE_PATH=apps/api/data/database.sqlite
```

### Updating Dependencies

After modifying `package.json` files:

**Local development:**
```bash
pnpm install
pnpm run dev
```

**Docker:**
```bash
pnpm run docker:build
pnpm run docker:restart
```

## 🚀 Deployment

### Docker Production Deployment

The Docker setup is production-ready:

```bash
# Build production images
pnpm run docker:build

# Start in production mode
pnpm run docker:up
```

**Production Checklist:**
- ✅ Set production environment variables
- ✅ Configure proper database backup strategy
- ✅ Set up reverse proxy (nginx/Traefik) if needed
- ✅ Enable HTTPS/SSL certificates
- ✅ Configure CORS appropriately
- ✅ Set up monitoring and logging

### Platform-Specific Deployment

**Vercel (Frontend only):**
- Connect your GitHub repository
- Configure build settings for `apps/web`
- Add environment variables in Vercel dashboard

**AWS/DigitalOcean/Cloud:**
- Use Docker Compose for orchestration
- Consider container orchestration (Docker Swarm, Kubernetes)
- Set up persistent volume backups for database

## 📊 Performance

**Resource Usage:**
- Docker images: ~200-300MB per service (Alpine-based)
- RAM: ~512MB total (both services)
- CPU: Minimal in idle state
- Build time: ~2-3 minutes (with cache)

**Optimizations:**
- Multi-stage Docker builds for smaller images
- Next.js standalone output for reduced bundle size
- Turbo cache for faster monorepo builds
- pnpm for efficient dependency management

## 📝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

**Diego Cisneros**
- GitHub: [@devcisne](https://github.com/devcisne)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Backend powered by [NestJS](https://nestjs.com/)
- Monorepo managed by [Turborepo](https://turbo.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
