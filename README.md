# Setup

## Create The Project
### Bash
```console
yarn create next-app app-name
cd app-name
```

## Delete Default Files
- DELETE public/* FILES
- DELETE README.md FILE
- DELETE styles FOLDER
- DELETE pages FOLDER
## NEW FILES
- COPY src FOLDER AND PASTE ON root

## Add Typescript
### Bash
```console
yarn add -D typescript @types/react @types/node
yarn dev (to create .tsconfig)
Shutdown dev server (ctrl + c)
```

## Add Eslint
### Bash
```console
yarn add eslint -D
yarn eslint --init (Install depedencies with npm)
```
### NPM FILES
- DELETE package-lock
### Bash
```console
yarn
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
```
## Add eslint configs:
```javascript
{
"extend": {
  "plugin:@typescript-eslint/recommended",
  "prettier/@typescript-eslint",
  "prettier/airbnb",
  "prettier/react"
},
"plugins": {
  "prettier"
},
"rules": {
  "prettier/prettier": "error",
  "noImplicitAny": [true, "error"],
  "react/prop-types": 0
}}
```

## Add eslintignore
- CREATE .eslintignore AND add:
  - node_modules
  - .next
  - /*.js
## Add prettierrc:
- CREATE .prettierrc AND add:
  - "arrowParens": "avoid"
## Add editorconfig:
- CREATE .editorconfig AND change:
  - end_of_line = lf
  - final_newline = true
## Styled Components
### bash
```console
yarn add styled-components
yarn add -D @types/styled-components
```
### Add babel config
```javascript
{
  "plugins": {
    ["styled-components", { "ssr": true }]
  }`
}
```
### COPY FILES
  - add _app.tsx
  - add _document.tsx

## Babel
### Bash
```console
  yarn add @babel/core -D
```
### Preset
```javascript
{
  "presets": ["next/babel"]
}
```
### Inline React SVG
#### Bash
```console
  yarn add babel-plugin-inline-react-svg -D
```
### Module Resolver
#### Bash
```console
  yarn add babel-plugin-module-resolver -D
```
#### Add Plugin
```javascript
{
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./"],
        "alias": {
          "@public": "./public",
          "@components": "./src/components",
          "~": "./src"
        }
      }
    ]
  ]
}
```
#### Add Typescript Paths
```javascript
"paths": {
  "@public/*": ["./public/*"],
  "@components/*": ["./src/components/*"],
  "~*": ["./src/*"]
}
```

#### Add Pathintellisense Config
```javascript
"path-intellisense.mappings": {
  "@public": "${workspaceFolder}/public",
  "@components": "${workspaceFolder}/src/components
  "~": "${workspaceFolder}/src"
}
```
