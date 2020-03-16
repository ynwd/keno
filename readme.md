# Keno

Fast monolithic webapp. Build with `fastify-di`, `react`, `typeorm`, and `webpack`. Hot module replacement (HMR) ready.

- [Folder Structure](#folder-structure)
- [Production Usage](#production-usage)
- [Development](#development)
- [Add new end point](#add-new-end-point)

## Folder Structure
```
.
├── src
│   ├── main.ts
│   ├── components
│   │   └── index.tsx
│   ├── plugins
│   │   ├── ejs.plugin.ts
│   │   ├── hmr.plugin.ts
│   │   └── static.plugin.ts
│   ├── react.controller.ts
│   ├── templates
│   │   ├── hmr.html
│   │   └── react.ejs
│   └── webpack.config.ts
├── server.config.js
├── package.json
├── tsconfig.build.json
└── tsconfig.json
```
## Production Usage
```
npm install
npm run build
npm start
```
## Development
```
npm run dev
```

## Add new end point
Just make a new controller & service class. Check this example for detail: https://github.com/ynwd/fastify-di-example

