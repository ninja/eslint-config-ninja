## Install for a node-only environment.

```bash
npm install eslint eslint-config-ninja --save-dev
```

Add file: `.eslintrc`

```json
{"extends": "ninja"}
```

## Install for a babel environment.

```bash
npm install babel-eslint eslint eslint-config-ninja eslint-plugin-react --save-dev
```

Add file: `.eslintrc`

```json
{"extends": "ninja/babel"}
```

For more details, see [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs.html).
