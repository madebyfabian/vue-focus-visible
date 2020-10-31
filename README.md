# Vue Focus Visible 🙌👩‍🦽💪
![Supports Vue.js 2.x](https://img.shields.io/badge/Vue.js-2.x-brightgreen "Supports Vue.js 2.x")
[![0 Dependencies](https://img.shields.io/badge/Zero-Dependencies-brightgreen.svg)](https://www.npmjs.com/package/vue-focus-visible)
[![NPM Version](https://img.shields.io/badge/npm-published-brightgreen.svg)](https://www.npmjs.com/package/vue-focus-visible)
[![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/madebyfabian/vue-focus-visible/blob/master/LICENSE.md)

> ✨ Automagically manage the visibility of :focus states in your app — by recreating the :focus-visible pseudo-selector behaviour.

Do you know that problem when you have custom `:focus` styles, but they're also getting applied on click 😒? Enough of that! Just install and include this component and you'll have a new attribute `v-focus-visible` which you can select via CSS. Examples are below.

Use this polyfill if you want to use the native `:focus-visible` css pseudo-selector in all browsers, since [Browser Support](https://caniuse.com/css-focus-visible) on it is currently very bad.


## 1. Quick start
First install the package as a dependency of your project.
```
npm i vue-focus-visible
```

In your `main.js` file, add the plugin like this:
```js
// main.js

import Vue from 'vue'
// ...

import FocusVisible from 'vue-focus-visible'
Vue.use(FocusVisible)

// ...
```

Then include it into your application, the best place may be `src/App.vue`:
```html
<!-- src/App.vue -->

<template>
  <div id="app" v-focus-visible>
    ... 
    Your App in here
    ...
  </div>
</template>

<style>
  /*
    This package does not modify any of your stylings by default. 
    It adds a `v-focus-visible` HTML attribute (which will be either `"true"` or `"false"`).
    You can simply select it and style the focus. 
  */
  :focus {
    outline: none!important;
  }

  [v-focus-visible=true] :focus {
    box-shadow: 0 0 0 2px #0498FB!important;
  }
</style>
```


## 2. Options
By default (on app load), the value of the `v-focus-visible` is always `true`. You can customize that.
```js
// main.js

import FocusVisible from 'vue-focus-visible'
Vue.use(FocusVisible, { 
  defaultValue: true|false
})
```
<table>
  <thead>
    <tr>
      <th>option</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>defaultValue</td>
      <td>boolean</td>
      <td>true</td>
      <td>Whether the focus should be visible or not on app-load.</td>
    </tr>
  </tbody>
</table>



## 3. API
You can set the visibility state of the focus manually, with the global method `$setFocusVisible(boolean)`. 
> Please note, that the next time the plugin changes the visibility, it will override your custom value.

**Usage:**
```js
export default {
  methods: {
    foo() {
      this.$setFocusVisible(false)
    }
  }
}
```
or
```html
<template>
  <button @click="$setFocusVisible(true)">My button</button>
</template>
```


<br>
<hr>
<br>


## Development
Normally you don't have to deal with this, but if you want to make any contributions, just clone and download this repo, 
- `cd` into it
- hit `npm i` to install everything and then
- `npm start` to start the development server with hot-reload
- `npm run build` to compile and minify for production (will build everything in the `dist` folder).


## Feature requests? 😊 Questions?
Just hit me via a GitHub Issue.


## Contributing
If you want to, just fork this repo and create a PR if you like to add/improve something!
<br>
Also special thanks to [filoxo](https://github.com/filoxo) for creating a similar solution, but it didn't quite fit to what I needed.
