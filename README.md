# first impression with storybook/reactjs

## Setup

- `npx create-react-app`
- `npx -p @storybook/cli sb init --type react`

## Run

- `yarn start`
- `yarn storybook`

## issues

### multiple `babel-loader`

`react-scripts` depends on `babel-loader@8.0.5`, however, a `babel-loader@8.0.6` was installed at `/node_modules`. The temp fix was to delete `babel-loader`.  so both `create-react-app` & `storybook` are happy, for the moment...

```shell
# check all versions of babel-loader in your project root
npm ls babel-loader

+-- babel-loader@8.0.6
`-- react-scripts@3.0.1
  `-- babel-loader@8.0.5
```

### "No preview"

First of all, there are two general ways to load your storybook files

```fs
/src
  /component
  /stories
package.json
```

or

```fs
/src
/stories
package.json
```

either way is fine, all you need to do is update the path inside your `./storybook/config.js`.  However, you will likely encouter this "No preview" on your storybook UI.  The error seems due to the storybook unable to load webpack's config file.  The temp fix is to modify your `config.js`:

```js
// .storybook/config.js

// remove the following codes
// const req = require.context('../src/stories', true, /\.stories\.js$/);
// req.keys().forEach(filename => req(filename));

// use this instead
require('../src/stories');
```
