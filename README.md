# Notes

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