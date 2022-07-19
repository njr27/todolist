import { Container } from './components/Container/index.js'
import { Input } from './components/shared/Input/index.js'
import { Button } from './components/shared/Button/index.js'
import { Icon } from './components/shared/Icon/index.js'

const $root = document.querySelector('#root')


const input = Input({
    icon: 'search',
    placeholder: 'Digite sua pesquisa aqui',
    width: '500px'
})

const button = Button({
    icon: 'plus',
    width: '40px',
    height: '40px'
})



let container = Container({children: input})

container.appendChild(button)

$root.appendChild(container)