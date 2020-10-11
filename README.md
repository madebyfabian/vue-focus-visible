# Vue A11Y Focus Util 🙌👩‍🦽💪
![Supports Vue.js 2.x](https://img.shields.io/badge/Vue.js-2.x-brightgreen "Supports Vue.js 2.x")
[![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/madebyfabian/vue-focus-visible/blob/master/LICENSE.md)

> ✨ Automagically manage the visibility of :focus states in your app, showing them when a user uses your app with a keyboard/screen reader/etc. and hiding it when the user is only using the mouse.

There is already a CSS Selector which can solve this: `*:focus:not(:focus-visible)`, but it's not widely supported (not even in Chrome 85 and below).

## Installation
First install the package as a dependency of your project.
```
npm i vue-focus-visible
```

### Compile and hot-reload for development
```
npm start
```

### Compile and minify for production
```
npm run build
```
