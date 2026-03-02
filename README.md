# Notes

## How to run backend serving the frontend artifacts

- `cd backend && npm i && node index.js`
- go to `localhost:3001`

## How to run frontend

- `cd frontend && cp .env.example .env && npm i && npm run dev`

## Quick Links

- **Random faces API:** https://100k-faces.vercel.app/api/random-image

## Current Focus

- Implement optimistic UI flow for requests.
- Keep dependencies updated to the latest versions.

## Known Issues

- `Fab` does not support an `elevation` prop like `Button`.

## Styling Notes (Material UI)

Material UI uses **Emotion** as the default styling engine.  
It provides a great CSS-in-JS developer experience for dynamic, prop/state-driven styles.

### Trade-offs with Emotion

- Style recalculation happens client-side, which can affect performance during frequent re-renders.
- Limited alignment with React Server Components workflows.

### Pigment CSS

**Pigment CSS** aims to address these limitations while preserving a similar CSS-in-JS authoring experience.

- Can be adopted gradually alongside Emotion.
- Long-term recommendation: fully migrate to Pigment CSS.

## Tooling Notes

- Using the **canary** version of `eslint-plugin-react-hooks` because the latest stable version does not declare ESLint 10 in `peerDependencies`.

## Code splitting in Vite
```javascript
manualChunks(id) {
  if (id.includes('node_modules')) {
    return 'vendor';
  }
  if (id.includes('/src/components/FormDialog.tsx')) {
    return 'form-dialog';
  }
  if (
    id.includes('/src/components/') ||
    id.includes('/src/features/')
  ) {
    return 'ui';
  }
}
``