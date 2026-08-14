import {defineConfig} from 'vitepress'

export default defineConfig({
    base: '/elemento/',
    title: 'Elemento',
    description: 'A Java library for building web UIs with GWT and J2CL',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/get-started'},
            {text: 'API Docs', link: '/apidocs/'},
            {
                text: 'Samples',
                items: [
                    {text: 'Overview', link: '/samples'},
                    {text: 'Todo (GWT)', link: 'https://hal.github.io/elemento/samples/todo/gwt/'},
                    {text: 'Todo (J2CL)', link: 'https://hal.github.io/elemento/samples/todo/j2cl/'},
                    {text: 'Flow', link: 'https://hal.github.io/elemento/samples/flow/'},
                    {text: 'Router', link: 'https://hal.github.io/elemento/samples/music/'}
                ]
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    {text: 'Get Started', link: '/get-started'},
                    {text: 'Builder API', link: '/builder-api'},
                    {text: 'Event Handlers', link: '/event-handlers'},
                    {text: 'Typesafe CSS Selectors', link: '/selectors'},
                    {text: 'Custom Elements', link: '/custom-elements'},
                    {text: 'Attach and Detach Handlers', link: '/attach-detach'},
                    {text: 'Iterators / Iterables / Streams', link: '/iterators'},
                    {text: 'Manipulate the DOM Tree', link: '/dom'},
                    {text: 'Router', link: '/router'},
                    {text: 'Flow', link: '/flow'},
                    {text: 'Logger', link: '/logger'},
                    {text: 'Internationalization', link: '/intl'},
                    {text: 'SVG', link: '/svg'},
                    {text: 'MathML', link: '/mathml'},
                    {text: 'Samples', link: '/samples'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/hal/elemento'}
        ]
    }
})
