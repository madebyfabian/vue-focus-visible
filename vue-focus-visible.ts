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


const handleDirectiveCall = ( el: Element, options: PluginOptions ) => {
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
  }, { passive: true })

  el.addEventListener('touchstart', () => {
    setFocusVisible(false)
  }, { passive: true })

  el.addEventListener('compositionstart', () => {
    setFocusVisible(true)
  })

  document.addEventListener('keydown', () => {
    setFocusVisible(true)
  }, true)
}


export const FocusVisible = {
  install( vueInstance: any, options: any ) {
    const isVue3 = vueInstance.version.startsWith('3')

    options = <PluginOptions>{ ...defaultOptions, ...options }

    if (isVue3) {
      vueInstance.config.globalProperties.$setFocusVisible = ( newVal: boolean ) => {
        setFocusVisible(newVal)
      }

      vueInstance.directive('focus-visible', {
        beforeMount: ( el: Element ) => {
          handleDirectiveCall(el, options)
        }
      })
    } else {
      vueInstance.prototype.$setFocusVisible = ( newVal: boolean ) => {
        vueInstance.nextTick(() => setFocusVisible(newVal))
      }

      vueInstance.directive('focus-visible', {
        bind: ( el: Element ) => {
          handleDirectiveCall(el, options)
        }
      })
    }
  }
}


// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(FocusVisible)
}


export default FocusVisible