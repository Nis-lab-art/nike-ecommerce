# Nike-Ecommerce

A starter Next.js 14 ecommerce experience with TypeScript, Tailwind CSS, Better Auth, Neon PostgreSQL, Drizzle ORM, and Zustand state.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

- Copy `.env.example` to `.env.local` and set `DATABASE_URL` to your Neon connection string.
- Provide `APP_URL` for Better Auth callbacks.

3. Run migrations and seed sample Nike products:

```bash
npm run db:push
npm run db:seed
```

4. Start the dev server:

```bash
npm run dev
```

## Tech Stack

- **Next.js 14** with the App Router and TypeScript
- **Tailwind CSS** for styling
- **Better Auth** placeholder setup for authentication
- **Neon PostgreSQL** connection via **Drizzle ORM**
- **Zustand** for client-side cart state
