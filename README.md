# Mobius Network wallet monorepo

## Development

Install dependencies for all packages:

```sh
yarn
```

Run command for each package:

```sh
yarn run-all <command>
```

Start packages from the root folder:

```sh
yarn start:web
yarn start:mobile
yarn start:components
```

Run custom command for one package from the root folder:

```sh
yarn workspace <package-name-from-package.json> run <command>
```

### Mobile Wallet

To start mobile application in the simulator:

1. Install deps from the root folder: `yarn`
2. Link native modules: `yarn workspace @mobius-network/mobile-wallet run link`
3. Start metro bundler server: `yarn start:mobile`
4. Build app and open it in emulator: `yarn start:mobile:ios` or `yarn start:mobile:android`
