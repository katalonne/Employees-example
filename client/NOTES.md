The default styling engine of Material UI is Emotion. It lets you write styles in a CSS-in-JS fashion, which is great for dynamic styles that depend on states and props. However, it has some performance drawbacks when it comes to frequent re-renders because the style recalculation happens on the client-side. It also does not fully support React Server Components, a new rendering paradigm that renders components ahead of time on the server.

Pigment CSS aims to solve these problems while keeping the same developer experience of writing styles in a CSS-in-JS fashion. It can work alongside Emotion to ease the migration process, but it is recommended to fully migrate to Pigment CSS in the end.

Generate random faces
https://100k-faces.vercel.app/api/random-image

TODO: implement error boundary, remove carets from packages for security
Optimistic ui flow requests
add prettier

Bug: Fab component has no 'elevation' prop like 'Button'
