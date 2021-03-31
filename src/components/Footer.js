const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <footer>
        <ul>
            <li>Tel: 0176 12345678</li>
            <li><a href=Kontakt.html>Kontakt</a></li>
        </ul>
        <p>© 2021 by Ahmad Abu Hantash</p>
        
    </footer>
    <style>
    

    footer {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:  #0a0a23;
        color: #fff;
    }

    ul li {
        list-style: none;
        display: inline;
    }

    a {
        font-weight: 700;
        margin: 0 25px;
        color: #fff;
        text-decoration: none;
    }

    a:hover {
        padding-bottom: 5px;
        box-shadow: inset 0 -2px 0 0 #fff;
    }
    </style>
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