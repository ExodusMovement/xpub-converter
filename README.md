# xpub-converter

This is based off of work done by Jameson Lopp here: https://github.com/jlopp/xpub-converter `index.js` is adapted from https://github.com/jlopp/xpub-converter/blob/40765efc6793ecfba3a8b2771ba66eecbfd58147/js/xpubConvert.js

## Usage

```js
const xpubConverter = require('xpub-converter')

const xpub =
  'xpub6D4KjGHFvbCy6Tb46PAnx2ZqzTjAU3mcNWxDHaMKTguY2aANe9jb3KLvF6Yo1bFN241mrezpTDCv5VECoUeFHr3SUoKeLb6VjoKRSQHjS6F'
xpubConverter(xpub, 'zpub')
// -> "zpub6rirLbd6DxHvo3yHm6k3NCkrLQ24MHkcCjzerN96DhfJ8mnq9U4iHSfCHWTy1QZCqLFPMcBwNXv1r4TLEsUGtKQeDUiVWQjUHFSiDajxURU"
```
