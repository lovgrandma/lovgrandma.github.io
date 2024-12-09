import { init, h, classModule, propsModule, styleModule, eventListenersModule } from 'https://cdn.jsdelivr.net/npm/snabbdom@3.6.2/+esm'

const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule
])

const lc = document?.getElementById('languages-container')
if (lc) {
    const languages = [ 'Java', 'Go', 'Javascript', 'Python', 'C#', 'Php' ]
    const vLan = languages.map(m => h('div', { style: { border: '1px solid grey' }}, m))
    var v = h('div#languages-subContainer',
        vLan
    )
    patch(lc, v)
}