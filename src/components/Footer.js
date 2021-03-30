const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <footer>
        <ul>
            <li>Tel: 0176 12345678</li>
            <li><a href=Kontakt.html>Kontakt</a></li>
        </ul>
        <p>© 2021 by Ahmad Abu Hantash</p>
        
    </footer>
`;


class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);