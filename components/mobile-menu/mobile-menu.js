class MobileMenu extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const logoUrl = 'https://api.github.com/repos/mihocsaszilard/emmess.dev/git/blobs/3b2e97d511692a6aa2ba028506bf3a16f9ab6fd9'
        const logo = await fetch(logoUrl).then(res => res.json());

        this.innerHTML = `
        <section>
            <input type="checkbox" id="overlay-input" />
            <label for="overlay-input" id="overlay-button"><span></span></label>
            <div id="overlay">
            <div id="overlay-content">
                <div>
               <img style="width:200px" src="data:image/png;base64, ${logo.content}"/>
                </div>

                <ul>
                <a href="/#home"
                    class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">home</a>
                <a href="/about"
                    class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">about</a>
                <a href="/projects#top"
                    class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">portfolio</a>
                <a href="/#contact"
                    class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">contact</a>
                </ul>

                <div></div>
            </div>
            </div>
        </section>`
    }
}

customElements.define('mobile-menu-component', MobileMenu);