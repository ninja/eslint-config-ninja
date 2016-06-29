#JavaScript linting rules and dependencies in one module.

## Install.

```bash
npm i -D eslint-config-ninja
```

## Add config to package.json.

```json
{
  "eslintConfig": {
    "extends": "ninja"
  }
}
```

## Add lint as a script to package.json.

```json
{
  "scripts": {
    "lint": "eslint . --fix" 
  }
}
```

## Lint your JavaScript.

```bash
npm run lint 
```

For more details, see ESLint's [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs.html).
