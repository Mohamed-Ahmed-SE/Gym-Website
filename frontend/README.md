# IronGym Frontend

React frontend application for the IronGym fitness website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

3. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

## Project Structure

```
frontend/
├── src/
│   ├── api/              # API service layer
│   ├── components/       # React components
│   │   ├── common/       # Reusable components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # UI primitives
│   ├── context/          # React Context providers
│   ├── pages/            # Page components
│   ├── routes/           # Route configuration
│   └── utils/            # Utility functions
├── index.html
└── package.json
```
