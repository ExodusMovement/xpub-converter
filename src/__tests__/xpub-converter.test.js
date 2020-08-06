import xpubConverter from '..'

const xpub =
  'xpub6D4KjGHFvbCy6Tb46PAnx2ZqzTjAU3mcNWxDHaMKTguY2aANe9jb3KLvF6Yo1bFN241mrezpTDCv5VECoUeFHr3SUoKeLb6VjoKRSQHjS6F'
const zpub =
  'zpub6rirLbd6DxHvo3yHm6k3NCkrLQ24MHkcCjzerN96DhfJ8mnq9U4iHSfCHWTy1QZCqLFPMcBwNXv1r4TLEsUGtKQeDUiVWQjUHFSiDajxURU'

test('convert xpub to zpub', () => {
  expect(xpubConverter(xpub, 'zpub')).toEqual(zpub)
})

test('convert zpub to xpub', () => {
  expect(xpubConverter(zpub, 'xpub')).toEqual(xpub)
})

test('no error when requesting current format', () => {
  expect(xpubConverter(xpub, 'xpub')).toEqual(xpub)
  expect(xpubConverter(zpub, 'zpub')).toEqual(zpub)
})
