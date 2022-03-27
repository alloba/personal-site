export default class NavigationComponent {
    constructor(name = '', description = '', link = '', component = undefined) {
        this.title = name
        this.description = description
        this.link = link
        this.component = component
    }
}
