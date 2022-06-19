import { importCss } from '../../modules/importCSS/index.js'

importCss('./components/Container/styles.css')

export const Container = () => {
    const _container = document.createElement('section')
    _container.classList.add('container')


    return _container
}
