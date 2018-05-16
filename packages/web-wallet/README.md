# Mobius-Network Web Wallet

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Contents**

  - [Getting started](#getting-started)
  - [Project structure](#project-structure)
    - [Notes on terms and directories](#notes-on-terms-and-directories)
  - [Scaffolding](#scaffolding)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting started

```sh
yarn start
```

## Project structure

```sh
web
├── config            # Configs
├── src               # Wallet sources
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

### Notes on terms and directories

- **shared components** are components shared across features and specific to Web Wallet. Other shared components should be moved to UI kit.

## Scaffolding

Generate a component:

```sh
yarn create:component
```

Generate a state feature

```sh
yarn create:state
```
