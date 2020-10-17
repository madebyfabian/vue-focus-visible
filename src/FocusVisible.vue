<template>
  <div
    v-bind:is="elType"
    :focus-visible="focusVisible.toString()"
    @mousedown="handleMousedown"
    @compositionstart="handleCompositionstart"
    @touchstart="handleTouchstart">

    <slot />
  </div>
</template>

<script>
  export default {
    name: 'FocusVisible',

    props: {
      elType: {
        type: String,
        default: 'div'
      }
    },

    data: () => ({
      focusVisible: true
    }),

    methods: {
      handleCompositionstart() {
        this.focusVisible = true
      },

      handleKeydown() {
        this.focusVisible = true
      },

      handleFocusin() {
        this.focusVisible = true
      },

      handleTouchstart() {
        this.focusVisible = false
      },

      handleMousedown(e) {
        const target = e.target,
              targetTagName = target.tagName.toLowerCase()

        if (target.isContentEditable || targetTagName === 'textarea')
          return this.focusVisible = true

        if (targetTagName === 'input') 
          return this.focusVisible = ![ 
            'radio', 
            'checkbox', 
            'range', 
            'button', 
            'file', 
            'reset', 
            'submit'
          ].includes(target.type)

        return this.focusVisible = false
      }
    },

    mounted() {
      window.addEventListener('keydown', this.handleKeydown)
    }
  }
</script>