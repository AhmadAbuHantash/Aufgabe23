const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <header>
        <nav> 
            <div>
                <span><a href=../Startseite.html>Startseite</a></span>
                <span><a href=../Ueber.html>Über</a></span>
                <span><a href=../Lebenslauf.html>Lebenslauf</a></span>
                <span><a href=../Projekte.html>Projekte</a></span>
                <span><a href=../Kontakt.html>Kontakt</a></span>
            </div>
        </nav>
    </header>

    <style>
    

    nav {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:  #0a0a23;
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


class Header extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);