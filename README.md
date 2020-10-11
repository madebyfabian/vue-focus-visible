# Vue Focus Visible 🙌👩‍🦽💪
![Supports Vue.js 2.x](https://img.shields.io/badge/Vue.js-2.x-brightgreen "Supports Vue.js 2.x")
[![0 Dependencies](https://img.shields.io/badge/Zero-Dependencies-brightgreen.svg)](https://www.npmjs.com/package/vue-focus-visible)
[![NPM Version](https://img.shields.io/badge/npm-v1.0.4-brightgreen.svg)](https://www.npmjs.com/package/vue-focus-visible)
[![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/madebyfabian/vue-focus-visible/blob/master/LICENSE.md)

> ✨ Automagically manage the visibility of :focus states in your app — by recreating the :focus-visible pseudoselector behaviour.

Do you know that problem when you have custom `:focus` styles, but they're also getting applied on button click 😒? Enough of that! Just install and include this component and you'll have a new property `focus-visible` which you can select via CSS. Examples are below.


## Installation
First install the package as a dependency of your project.
```
npm i vue-focus-visible
```

Then include it into your application, the best place may be `src/App.vue`
```vue
<template>
  <FocusVisible>
    ... 
    Your App stuff here
    ...
  </FocusVisible>
</template>

<script>
  import FocusVisible from 'vue-focus-visible'

  export default {
    name: 'App',
    components: { FocusVisible }
  }
</script>
```


## Styling

This package does not modify your stylings by default, but if you wish to, you can include this into your `src/App.vue`.
```vue
...
<script>
  import FocusVisible from 'vue-focus-visible'
  import 'vue-focus-visible/dist/vue-focus-visible.css'
  ...
```

```vue
<style>
  :focus { 
    box-shadow: none!important; 
    outline: none!important
  }

  [focus-visible=true] :focus { 
    box-shadow: 0 0 0 2px #0498fb!important
  }
</style>
```

as you've seen in the CSS, this package adds a property, `focus-visible` (which is either `true` or `false`), directly above your application.
This is how it looks in the end:
```vue
<html lang="en">
  <head>...</head>
  <body>
    <div focus-visible="true|false">
      ... 
      Your App stuff here
      ...
    <div>
  </body>
</html>
```

## API
You can customize the element that is being returned with
```vue
<template>
  <FocusVisible elType="...">
  ...
```
### Options
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        elType
      </td>
      <td>
        string
      </td>
      <td>
        "div"
      </td>
      <td>
        The HTML element that the component will render as. For example "main", "div", "section", ...
      </td>
    </tr>
  </tbody>
</table>


## Development
Normally you don't have to deal with this, but if you want to make any contributions, just clone and download this repo, 
- `cd` into it
- hit `npm i` to install everything and then
- `npm start` to start the development server with hot-reload
- `npm run build` to compile and minify for production (will build everything in the `dist` folder).


## Feature requests? 😊 Questions?
Just hit me via an GitHub Issue.


## Contributing
If you want to, just fork this repo and create a PR if you like to add/improve something!
Also special thanks to (filoxo)[https://github.com/filoxo] for creating a similar solution, but it didn't quite fit to what I needed.
