# JoinMi

Full-stack TypeScript app with:
- **Web**: React + Vite + TailwindCSS (Auth0 login)
- **API**: Node.js + Express + Mongoose (MongoDB) + Zod

## Project structure

- `web/` — frontend (Vite + React)
- `api/` — backend (Express API)

## Tech stack

### Frontend (`web`)
- React (Vite)
- TailwindCSS
- Auth0 (`@auth0/auth0-react`)
- React Router
- Axios
- Zod

### Backend (`api`)
- Express
- Mongoose (MongoDB)
- Zod
- CORS

## Requirements
- Node.js (recommended: latest LTS)
- npm
- MongoDB connection string (if you use MongoDB Atlas/local)
- Auth0 app (domain + client id) for the web app

## Getting started

### 1) Install dependencies

```bash
cd web
npm install

cd ../api
npm install
```

### 2) Configure environment variables

Create files based on the scripts used in the repo:

#### API env
Create: `api/.env.development.local`

Example:
```bash
# api/.env.development.local
PORT=3001
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
```

#### Web env
Create: `web/.env.local`

Example (Auth0):
```bash
# web/.env.local
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_AUDIENCE=your-api-audience
VITE_API_BASE_URL=http://localhost:3001
```

(Variable names may differ depending on your implementation—adjust to match `web/src` usage.)

### 3) Run in development

#### Start the API
```bash
cd api
npm run dev
```

#### Start the web app
```bash
cd web
npm run dev
```

Then open:
- Web: http://localhost:5173 (default Vite port)

## Production build

### Build API
```bash
cd api
npm run build
npm start
```

### Build Web
```bash
cd web
npm run build
npm run preview
```

## Scripts

### `web/`
- `npm run dev` — start Vite dev server
- `npm run build` — typecheck + build
- `npm run lint` — lint
- `npm run preview` — preview production build

### `api/`
- `npm run dev` — run with Node watch mode (development conditions)
- `npm run build` — TypeScript compile to `dist/`
- `npm start` — run compiled server
