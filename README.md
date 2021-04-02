# react-batched-updates

[![npm](https://img.shields.io/npm/v/react-batched-updates.svg)](https://www.npmjs.com/package/react-batched-updates)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/alecdotbiz)

> Cross platform unstable_batchedUpdates

&nbsp;

## Usage

```ts
import { batchedUpdates } from 'react-batched-updates'

batchedUpdates(() => {
  // Any setState calls are batched, instead of triggering 
  // multiple render passes.
})
```

You should call `setBatchedUpdates` or else `batchedUpdates` will be ineffective. 
Except for React Native users, where the bundler prefers `cjs/index.native.js`, 
a module that requires `react-native` to achieve zero configuration.

```ts
import { setBatchedUpdates } from 'react-batched-updates'
import { unstable_batchedUpdates } from 'react-dom'

// Both react-native and react-dom have this export.
setBatchedUpdates(unstable_batchedUpdates)
```

In test environments, you can usually replace `unstable_batchedUpdates` with `act`.

```ts
import { setBatchedUpdates } from 'react-batched-updates'
import { act } from '@testing-library/react'

setBatchedUpdates(act)
```
