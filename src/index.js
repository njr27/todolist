import { Container } from './components/Container/index.js'
import { Input } from './components/shared/Input/index.js'
import { Button } from './components/shared/Button/index.js'
import { Icon } from './components/shared/Icon/index.js'

const $root = document.querySelector('#root')


const input = Input({
    icon: 'search',
    placeholder: 'Digite sua pesquisa aqui',
    width: '440px'
})

const button = Button({
    icon: 'plus',
    width: '40px',
    height: '40px',
    class: 'button-add'
})

const button2 = Button({    
    width: '293px',
    height: '40px',
    text: 'Desfazer',
    class: 'button-undo'
})





const container = Container({children: input})

container.appendChild(button)
container.appendChild(button2)

$root.appendChild(container)