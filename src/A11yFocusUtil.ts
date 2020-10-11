import _Vue from "vue"

const className = 'has-focus-disabled'

type A11yFocusUtilOptions = {
  focusColor?: string,
  focusWidth?: string | number
}


export const A11yFocusUtil = ( Vue: typeof _Vue, options: A11yFocusUtilOptions = {} ) => {
  options = validateOptions(options)
  console.log({ validatedOptions: options })

  createStyles(options)
  changeFocusMode()

  // When user starts using keyboard
  window.addEventListener('keydown',          e => changeFocusMode({ enableFocus: true }))

  // When user starts using other accessible-related inputs like speech-recognition
  window.addEventListener('compositionstart', e => changeFocusMode({ enableFocus: true }))

  // When user starts using mouse-buttons
  window.addEventListener('mousedown',        e => changeFocusMode({ enableFocus: false }))

  // When user starts using a touch-input
  window.addEventListener('touchstart',       e => changeFocusMode({ enableFocus: false }))
}


const validateOptions = ( options: A11yFocusUtilOptions ) => {
  let validatedOptions: A11yFocusUtilOptions = {}

  // Validate "focusColor"
  let s = <any>new Option().style
  s.color = options.focusColor
  validatedOptions.focusColor = s.color == options.focusColor ? s.color : '#0498FB'

  // Validate "focusWidth"
  if (typeof options.focusWidth === 'number')
    validatedOptions.focusWidth = `${options.focusWidth}px`
  else {
    s.width = options.focusWidth
    validatedOptions.focusWidth = s.width == options.focusWidth ? s.width : '2px'
  }

  return validatedOptions
}


/**
 * Changes the class name of the <body>.
 */
const changeFocusMode = ( options = { enableFocus: true } ) => {
  document.body.classList.toggle(className, !options.enableFocus)
}


/**
 * Creates all the neccessary styles for the focus to work.
 */
const createStyles = ( options: A11yFocusUtilOptions ) => {
  let styleTag = document.createElement('style')
  styleTag.appendChild(document.createTextNode(`
    *:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${options.focusColor};
    }

    ${generateDisabledFocusSelector()} { box-shadow: none; }
  `))
  document.head.appendChild(styleTag)
}


/**
 * Generates a CSS Selector that selects every element that should not have a focus when the focus is disabled.
 * @returns {string} E.g. ".${className} a:focus, .${className} input[radio], ..."
 */ 
const generateDisabledFocusSelector = () => {
  let selectorArr: string[] = []

  let tags = [ 'a', 'area', 'button' ],
      inputTypes = [ 'radio', 'checkbox', 'range', 'button', 'file', 'reset', 'submit' ]
  tags.forEach(( selector: string ) => selectorArr.push(`.${className} ${selector}:focus`))
  inputTypes.forEach(( selector: string ) => selectorArr.push(`.${className} input[type=${selector}]:focus`))

  return selectorArr.join(', ')
}