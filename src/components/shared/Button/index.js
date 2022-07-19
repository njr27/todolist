import { importCss } from '../../../modules/importCSS/index.js'
import { Icon } from '../Icon/index.js'

importCss('./components/shared/Button/styles.css')

export const Button = (props) =>{

    const _button = document.createElement('button')
    _button.classList.add('button', props.class)
    props?.width && (_button.style.width = props.width) 
    props?.height && (_button.style.height = props.height) 

    const _icon = Icon(props?.icon)
    props?.icon && _button.append(_icon)

    
    props?.text && (_button.textContent = props.text)

    

    return _button
}