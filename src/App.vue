<template>
  <div id="app">
    <h1>Plugin Demo</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <ul>
      <li><a href="#">This is a link</a></li>
      <li>This is not a link</li>
      <li><a href="#">This is another link</a></li>
    </ul>
    <button>Hello World!</button>
    <textarea name="test" id="test"></textarea>
    <select name="" id="">
      <option value="volvo">Volvo</option>
      <option value="volvo">BMW</option>
    </select>


    <h2>&lt;input&gt;</h2>
    <input type="text" placeholder="Text">

    <input list="browsers" name="browser" placeholder="Datalist">
    <datalist id="browsers">
      <option value="Internet Explorer">Internet Explorer</option>
      <option value="Firefox">Firefox</option>
      <option value="Chrome">Chrome</option>
      <option value="Opera">Opera</option>
      <option value="Safari">Safari</option>
    </datalist>

    <input type="number" placeholder="Number">
    <label>
      <input type="radio" name="radio">
      Dieses
    </label>
    <label>
      <input type="radio" name="radio">
      Oder jenes
    </label>

    <label>
      <input type="checkbox" name="radio">
      Dieses
    </label>
    <label>
      <input type="checkbox" name="radio">
      Oder jenes
    </label>
    <input type="range" name="" id="">
    <input type="date" name="" id="">
    <input type="file" name="" id="">
    <input type="button" value="Input Type Button">
    <input type="reset" value="Reset">
    <input type="submit" value="Submit">


    <h2>divs</h2>
    <div contenteditable>Hay! I'm editable, lol</div>
    <div tabindex="0">I am not, but still focusable</div>
    <div>I am nothing.</div>
    <div tabindex="0">I am also focusable</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'App'
  })
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    font-family: system-ui, 'Segoe UI', Avenir, Helvetica, Arial, sans-serif;
  }

  body {
    padding: 8px 24px;
    margin: 0px;
  }

  input, select, textarea, button {
    display: block;
    margin: 16px 0;
  }

  label {
    display: flex;
    align-items: center;
    margin: -8px 0;
    
    input {
      margin-right: .5rem;
    }
  }

  h2 {
    margin-top: 64px;
  }
</style>
