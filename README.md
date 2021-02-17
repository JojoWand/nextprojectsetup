# Setup

## Create The Project
### Bash
- yarn create next-app app-name
- cd app-name

## Delete Default Files
- DELETE public/* FILES
- DELETE README.md FILE
- DELETE styles FOLDER
- DELETE pages FOLDER
## NEW FILES
- COPY src FOLDER AND PASTE ON root

## Add Typescript
### Bash
- yarn add -D typescript @types/react @types/node
- yarn dev (to create .tsconfig)
- Shutdown dev server (ctrl + c)

## Add Eslint
### Bash
- yarn add eslint -D
- yarn eslint --init (Install depedencies with npm)
### NPM FILES
- DELETE package-lock
### Bash
- yarn (Map depedencies)
- yarn add prettier eslint-plugin-prettier eslint-config-prettier -D

## Add eslint configs:
- extend:
	- "plugin:@typescript-eslint/recommended",
	- "prettier/@typescript-eslint",
	- "prettier/airbnb",
	- "prettier/react",
- plugins:
  - "prettier",
- rules:
  - "prettier/prettier": "error",
  - "noImplicitAny": [true, "error"],
  - "react/prop-types": 0
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
## Babel
- presets
  - ["next/babel"]
## Styled Components
### bash
- yarn add styled-components
- yarn add -D @types/styled-components
### Add babel config
- Plugins
  - ["styled-components", { "ssr": true }]
  COPY babel config AND src Folder FROM template, DELETE pages folder AND styles folder
