import { importCss } from '../../../modules/importCSS/index.js'
import { ICONS } from './icons.js'

importCss('./components/shared/Icon/styles.css')

export const Icon = (name) => {
    if (!ICONS[name]) return ''

    const _container = document.createElement('div')
    _container.classList.add('icon-container')

    _container.innerHTML = ICONS[name]

    return _container
}