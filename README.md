# NextJS MERN Netflix WebApp

1. add .nvmrc
2. add .npmrc
3. add

```json
"engines": {
    "node": ">=16.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
```

4. in 'package.json' file.
5. run `yarn lint` and modify the file '.eslintrc.json'.
6. install prettier and setting the .prettierrc and .prettierignore files. 6. run `npx mrm@2 lint-staged`
7. add commitlint by running `npm install -g @commitlint/cli @commitlint/config-conventional` and add `echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js`.
