let _el: any = null

type PluginOptions = {
  defaultValue: boolean
}

const defaultOptions: PluginOptions = {
  defaultValue: true
}

const setFocusVisible = ( newVal: boolean ) => {
  if (!(_el instanceof Element))
    throw new Error('Cannot set the focus-visible value. Maybe you forgot to implement the v-focus-visible directive?')

  _el.setAttribute('v-focus-visible', JSON.stringify(newVal))
}


export const FocusVisible = {
  install( Vue: any, options: any ) {
    options = <PluginOptions>{ ...defaultOptions, ...options }

    Vue.prototype.$setFocusVisible = ( newVal: boolean ) => {
      Vue.nextTick(() => 
        setFocusVisible(newVal))
    }

    Vue.directive('focus-visible', {
      bind: ( el: Element ) => {
        _el = el

        // Initially set default value.
        setFocusVisible(options.defaultValue)

        /**
         * Event listeners to change value.
         */
        el.addEventListener('mousedown', e => {
          const target: any = e.target,
                targetTagName = target.tagName.toLowerCase()

          if (target?.isContentEditable || targetTagName === 'textarea')
            return setFocusVisible(true)

          if (targetTagName === 'input')
            return setFocusVisible(![ 
              'radio', 
              'checkbox', 
              'range', 
              'button', 
              'file', 
              'reset', 
              'submit'
            ].includes(target.type))

          return setFocusVisible(false)
        })

        el.addEventListener('compositionstart', e => {
          setFocusVisible(true)
        })

        el.addEventListener('touchstart', e => {
          setFocusVisible(false)
        })

        document.addEventListener('keydown', e => {
          setFocusVisible(true)
        }, true)
      }
    })
  }
}


// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(FocusVisible)
}


export default FocusVisible