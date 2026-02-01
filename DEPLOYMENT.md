# Design Dojo - Vercel Deployment Guide

## Pre-Deployment Checklist

### ✅ Completed Configuration
- [x] `vercel.json` - Vercel deployment configuration
- [x] `next.config.ts` - Optimized for serverless deployment
- [x] `.env.example` - Environment variables documentation
- [x] `.gitignore` - Updated to allow `.env.example`
- [x] `src/db/drizzle.ts` - Serverless-optimized database connection

---

## Required Environment Variables

Set these in **Vercel Dashboard > Project > Settings > Environment Variables**:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXTAUTH_SECRET` | JWT signing secret. Generate with `openssl rand -base64 32` | ✅ Yes |
| `DATABASE_URL` | PostgreSQL connection string with `?sslmode=require` | ✅ Yes |
| `NEXT_PUBLIC_LIVEBLOCKS_KEY` | Liveblocks public API key for real-time collaboration | ⚠️ Optional |

> **Note:** `NEXTAUTH_URL` is automatically set by Vercel in production.

---

## Database Setup

Your app uses **PostgreSQL with Drizzle ORM**. Choose one of these options:

### Option 1: Vercel Postgres (Recommended)
1. Go to Vercel Dashboard > Storage > Create Database > Postgres
2. Connect to your project
3. `DATABASE_URL` will be automatically added to environment variables

### Option 2: Neon (Free tier available)
1. Create account at https://neon.tech
2. Create a new database
3. Copy the connection string to `DATABASE_URL`

### Option 3: Supabase
1. Create project at https://supabase.com
2. Go to Settings > Database > Connection string
3. Copy to `DATABASE_URL`

### After Database Setup
Run migrations to create tables:
```bash
npx drizzle-kit push
```

Or if you have migrations:
```bash
npx drizzle-kit migrate
```

---

## Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

### 2. Connect to Vercel
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel will auto-detect Next.js

### 3. Configure Environment Variables
Add the required variables in the Vercel dashboard before deploying.

### 4. Deploy
Click "Deploy" and wait for the build to complete.

---

## Known Limitations & Notes

### Authentication
- Currently using **Credentials provider** with mock authentication
- In production, implement proper database user verification in `src/lib/auth.ts`
- Consider adding OAuth providers (Google, GitHub) for easier login

### Database Operations
- Some server actions have placeholder/mock implementations:
  - `src/server/dojo/service.ts` - `assignToCohort` logs but doesn't persist
  - `src/server/portfolio/actions.ts` - `createProject`, `getProjects` return mock data
  - `src/server/modules/actions.ts` - `updateProgress` logs but doesn't persist
  
> **Action Required:** Complete these implementations before production use with real users.

### Liveblocks (Real-time Collaboration)
- Using placeholder key `pk_test_placeholder`
- Get real keys from https://liveblocks.io/dashboard
- Required for collaborative whiteboard features

### Middleware Warning
- Next.js 16 shows deprecation warning for "middleware" convention
- This is informational only and doesn't affect functionality
- Consider migrating to "proxy" convention in future

---

## Post-Deployment Verification

After deploying, verify these work:

1. ✓ Homepage loads (`/`)
2. ✓ Login/Signup pages (`/auth/login`, `/auth/signup`)
3. ✓ Authentication flow works
4. ✓ Dashboard accessible after login (`/dashboard`)
5. ✓ Modules list loads (`/modules`)
6. ✓ Portfolio page works (`/portfolio`)
7. ✓ Dojo quiz works (`/dojo`)
8. ✓ Case studies page loads (`/case-studies`)

---

## Troubleshooting

### Build Fails with Database Error
- Ensure `DATABASE_URL` is set in Vercel environment variables
- Make sure the database is accessible (whitelist Vercel IPs if needed)

### Authentication Not Working
- Verify `NEXTAUTH_SECRET` is set
- Check that it's at least 32 characters

### 500 Errors on Dynamic Pages
- Check Vercel Function logs for errors
- Verify database connection string is correct
- Ensure SSL mode is enabled (`?sslmode=require`)

---

## Support

For issues specific to:
- **Vercel**: https://vercel.com/docs
- **Next.js**: https://nextjs.org/docs
- **Drizzle ORM**: https://orm.drizzle.team/docs
- **NextAuth.js**: https://authjs.dev/getting-started
