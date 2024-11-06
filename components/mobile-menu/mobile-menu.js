class MobileMenu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

        <style>
            #mobile-menu {
                @media (min-width: 767px) {
                    display: none;
                }
            }

            @media (max-width: 767px) {

            #hero-image {
                width:50%;
                padding: 16px;
                justify-content: center;
            }

            @keyframes bugfix {
                from {
                    padding: 0;
                }
                to {
                    padding: 0;
                }
            }
            @-webkit-keyframes bugfix {
                from {
                    padding: 0;
                }
                to {
                    padding: 0;
                }
            }
            #overlay-button {
                position: fixed;
                right: 8px;
                top: 8px;
                padding: 26px 11px;
                z-index: 99999;
                cursor: pointer;
                user-select: none;
            }
            #overlay-button span {
                height: 4px;
                width: 35px;
                border-radius: 2px;
                background-color: white;
                position: relative;
                display: block;
                transition: all 0.2s ease-in-out;
            }
            #overlay-button span:before {
                top: -10px;
                visibility: visible;
            }
            #overlay-button span:after {
                top: 10px;
            }
            #overlay-button span:before, #overlay-button span:after {
                height: 4px;
                width: 35px;
                border-radius: 2px;
                background-color: white;
                position: absolute;
                content: "";
                transition: all 0.2s ease-in-out;
            }
            #overlay-button:hover span, #overlay-button:hover span:before, #overlay-button:hover span:after {
                background: #23b58e;
            }
            input[type=checkbox] {
                display: none;
            }
            input[type=checkbox]:checked ~ #overlay {
                visibility: visible;
            }
            input[type=checkbox]:checked ~ #overlay-button:hover span, input[type=checkbox]:checked ~ #overlay-button span {
                background: transparent;
            }
            input[type=checkbox]:checked ~ #overlay-button span:before {
                transform: rotate(45deg) translate(7px, 7px);
                opacity: 1;
            }
            input[type=checkbox]:checked ~ #overlay-button span:after {
                transform: rotate(-45deg) translate(7px, -7px);
            }
            #overlay {
                height: 100vh;
                width: 100vw;
                background: rgba(7, 30, 33, 0.75);
                z-index: 99998;
                visibility: hidden;
                position: fixed;
                top:0;
                left:0;
            }

            #overlay-content{
                width:60%;
                height: 100%;
                background: #0a2f31;
                padding: 32px;
                display: flex;
                flex-direction: column;
                align-items:center;
                justify-content:space-around;
            }

            #overlay.active {
                visibility: visible;
            }
            #overlay ul {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
                padding-left: 0;
                margin:0;
                list-style-type: none;
            }
            #overlay ul a {
                color: white;
                text-decoration: none;
                font-size: 1.5em;
                margin: 8px;
            }

            #overlay ul a:hover {
                color: #23b58e;
            }
        </style>

        <section id="mobile-menu">
            <input type="checkbox" id="overlay-input" />
            <label for="overlay-input" id="overlay-button"><span></span></label>
            <div id="overlay">
            <div id="overlay-content">
                <div>
                    <svg width="100px" viewBox="0 0 73 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 28C2.55864 28.6276 0.833333 29 0 29V37C6 37 6 41.5 6 44V53C6.5 64 13.5 65 18.5 65H42.5V57H22C19.5 57 15.5 57.5379 15.5 54.2177V42.5C15.5 38.5 14.5 36 11.5 33C13.5 31.5 15.5 28.5 15.5 24V13C15.5 9.8 17 8.5 20 8.5H42.5V0.5H34.5H19C8 0.5 6 8 6 12V23C6 25.5 5 27 3.5 28Z" fill="#23B58E"/>
                    <path d="M11.5 33C6.7 36.6 2 37 0 37C6 37 6 41.5 6 44V51H15.5V44C15.5 40 15.5 37 11.5 33Z" fill="url(#paint0_linear_1_69)"/>
                    <path d="M69 28.5C69.9414 29.1276 71.6667 29 72.5 29V37C66.5 37 66.5 42 66.5 44.5V53.5C66 64.5 59 65 54 65H50.5V57H53C56.2669 57 57 54.5 57 51.5V43C57 39 58 36 61 33C59 31.5 57 29 57 24.5V13.5C57 10.3 55 8.5 53 8.5H50.5V0.5H53.5C64.5 0.5 66.5 8.5 66.5 12.5V23.5C66.5 26 67.5 27.5 69 28.5Z" fill="#23B58E" fill-opacity="0.75"/>
                    <path d="M38.5 37H20C19.5 36 19 34 17 33C19 31.5 19.5 30.1667 20 29H38.5V37Z" fill="#23B58E"/>
                    <path d="M38.5 37H20C19.5 36 19 34 17 33C19 31.5 19.5 30.1667 20 29H38.5V37Z" fill="url(#paint1_linear_1_69)"/>
                    <path d="M70.8937 29.0273C71.2696 29.0085 71.639 29 72 29C72 29 71.5436 29.083 70.8937 29.0273C67.6248 29.1905 63.87 30.13 61 33C58 30.5 57 27.6628 57 24.5L56.9999 15H66.4999V22.7274C66.5 27.9049 69.2876 28.8896 70.8937 29.0273Z" fill="url(#paint2_linear_1_69)" fill-opacity="0.5"/>
                    <defs>
                    <linearGradient id="paint0_linear_1_69" x1="4.5" y1="32" x2="12" y2="43" gradientUnits="userSpaceOnUse">
                    <stop stop-opacity="0.5"/>
                    <stop offset="1" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_69" x1="27" y1="40" x2="19.5" y2="29" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-opacity="0.5"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1_69" x1="54.5" y1="18.5" x2="64.75" y2="33.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" stop-opacity="0"/>
                    <stop offset="1" stop-opacity="0.5"/>
                    </linearGradient>
                    </defs>
                    </svg>

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