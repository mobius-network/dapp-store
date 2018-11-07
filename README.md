# Mobius Network DApp Store

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Contents**

  - [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Scaffolding](#scaffolding)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting started

```sh
yarn start
```

## Build

### Beta

```sh
yarn run build:beta
```

### Production

```sh
yarn run build:production
```

## Project structure

```sh
├── config            # Configs
├── src               # Sources
│   ├── components    # All UI components
│   │   ├── Feature   # Hierarchy of components grouped by feature
│   │   ├── shared    # Components shared across features
│   ├── state         # State related modules
│   │   ├── Feature   # Reducers, actions, sagas, selectors grouped by feature
│   │   ├── utils     # Redux related utils
│   ├── assets        # Static assets
│   ├── utils         # General purpose utility functions
│   └── styles
└── templates         # Scaffolding templates
```

## Scaffolding

Generate a component:

```sh
yarn create:component
```

Generate a state feature

```sh
yarn create:state
```
