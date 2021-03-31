const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <header>
        <nav id="header-nav"> 
            <div class="header-column" id="header-leftColumn">
                <span><a href=Startseite.html>Startseite</a></span>
                <span><a href=Ueber.html>Über</a></span>
                <span><a href=Lebenslauf.html>Lebenslauf</a></span>
            </div>     
            <div class="header-column" id="header-logoColumn">
                <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo%21_Logo.svg" alt="Logo" >   
            </div>   
            <div class="header-column" id="header-rightColumn"> 
                <span><a href=Projekte.html>Projekte</a></span>
                <span><a href=Kontakt.html>Kontakt</a></span>
            </div>
        </nav>
    </header>

    <style>
    
    #logo{
         max-height: 100%;
         margin: 5px;

    }
    #header-leftColumn{
        justify-content: flex-end;
    }
    #header-rightColumn{
        justify-content: flex-start;
    }
    #header-logoColumn{
        place-items: center;

    }
    #header-nav {
        height: 70px;
        display: grid;
        grid-column-gap: 10px;
        grid-template-columns: 2fr auto 2fr;
        background-color:  #0a0a23;
        align-items: center;
        grid-template-rows:100%;
    }
    .header-column{
        place-items: center;
        height: 100% ;
        display: inline-flex;
        overflow: hidden;
        
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