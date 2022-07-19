import { importCss } from '../../modules/importCSS/index.js'

importCss('./components/Container/styles.css')

export const Container = (props) => {
    const _container = document.createElement('section')
    _container.classList.add('container')

    _container.append(props.children)

    return _container
}