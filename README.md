# Express Typescript Webpack Starter

Start project for Node.js with Express framework. Support Typescript and webpack.

## Features

- Node.js
- Typescript 4.6
- Express.js 4.1
- Webpack 4
- Hot Reload
- Alias Support

## Documentation

### Start Project

For the user who are using `npm`

```
git clone https://github.com/CarmenChanCKY/express-typescript-webpack-starter.git
npm install
npm run start:dev
```

For the user who are using `yarn`

```
git clone https://github.com/CarmenChanCKY/express-typescript-webpack-starter.git
yarn install
yarn start:dev
```

### Change the output directory and/or file name

In `webpack.config.js`,

```
module.exports = {
  ...
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "dist",
  },
};
```

- `path`: The path of the output directory. For example, `path.resolve(__dirname, "dist")` equals `/dist` if `webpack.config.js` locates in the root folder
- `filename`: The name of the output file
- `publicPath`: The path of the output directory for browser. For example, import a picture named `test.png` will become
  ```
  <img src="/dist/test.png">
  ```
  If the `publicPath` is dist

In `tsconfig.json`, set the `outDir` to your output directory name.

```
{
  "compilerOptions": {
    ...
    "outDir": "dist"
  },
}
```

For more setting about the out directory and file name, please access [webpack official documentation](https://webpack.js.org/configuration/output/).

### Alias

This starter support alias for import declaration. It allows the use of absolute path to import any file.

```
├── src
│   └── index.ts
└── utils
    └── utils.ts
```

Without alias, the import statement of `utils/utils.ts` in `src/index.ts` is:

```
import { testUtils } from"../utils/utils.ts";
```

To add an alias, open `tsconfig.json`.

1. Set the `baseUrl`

   ```
    {
        "compilerOptions": {
            ...
            "baseUrl": "."
        }
    },
   ```

   A single dots means the base directory is same as the directory of `tsconfig.json` located in.

2. Add the following setting.
   ```
   {
       "compilerOptions": {
           ...
           "baseUrl": ".",
           "paths": {
               "@/*": ["utils/*"],
           }
       }
       "include": ["./utils/**/*"],
   },
   ```
   It set the alias for `/utils` to `@`.

Import Statement by using alias of `/utils` in `src/index.ts`:

```
import { testUtils } from "@/utils";
```

## Reference

[webpack](https://webpack.js.org/)

[How to set up an Express.js API using Webpack and TypeScript.](https://medium.com/the-andela-way/how-to-set-up-an-express-api-using-webpack-and-typescript-69d18c8c4f52)

[The Right Usage of Aliases in Webpack and TypeScript](https://betterprogramming.pub/the-right-usage-of-aliases-in-webpack-typescript-4418327f47fa)
