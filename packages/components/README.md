# Mobius Network components library

## Web

### Development

```sh
npm start
```

Then open [http://localhost:6060](http://localhost:6060) in your browser.

### Third party usage

```sh
npm i -S ${repo-url} react-native-web
npm i -D babel-plugin-react-native-web
```

Add `react-native-web` to babel plugins.
Add `node_modules/mobius-ui-core` to `babel-loader` `include` option.

## Native

### Development

Run the React-Native app via simulator

```sh
npm run start:rn
npm run start:ios
npm run start:android
```
### Third party usage

No additional setup required. Just install component lib.

```sh
npm i -S ${repo-url}
```

## Common Caveats

[react-native-web](https://github.com/necolas/react-native-web) does not support everything, components requiring DeviceInfo is a common breaking point for example. Configuring components or selections in your `styleguide.config.js` to only select ui components is recommended. A good rule of thumb is to expect an approximate visual representation with code examples and props documentation.

[react-native-vector-icons](https://oblador.github.io/react-native-vector-icons/) (or any other dependency using external assets) can be solved by adding a custom template to `styleguide.config.js`
