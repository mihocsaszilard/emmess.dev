class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `

        <style>
        #footer {
            display: flex;
            height: 40px;
            width: calc(100vw - 2px);
            position: sticky;
            bottom: 0;
            left: 0;
            z-index: 5;
        }
        
        .wrapper {
            display: inline-flex;
            list-style: none;
            font-family: "Poppins", sans-serif;
            justify-content: center;
            margin: 0;
            }

            .wrapper .icon {
            position: relative;
            background: #dafcff;
            border-radius: 50%;
            margin: 0 10px;
            width: 24px;
            height: 24px;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }

            .wrapper .tooltip {
            width: max-content;
            position: absolute;
            top: 0;
            font-size: 14px;
            background: #dafcff;
            color: #dafcff;
            padding: 5px 8px;
            border-radius: 5px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }

            .wrapper .tooltip::before {
            position: absolute;
            content: "";
            height: 8px;
            width: 8px;
            background: #dafcff;
            bottom: -3px;
            left: 50%;
            transform: translate(-50%) rotate(45deg);
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }

            .wrapper .icon:hover .tooltip {
            top: -36px;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            }

            .wrapper .icon:hover span,
            .wrapper .icon:hover .tooltip {
            text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
            }

            .wrapper .facebook:hover,
            .wrapper .facebook:hover .tooltip,
            .wrapper .facebook:hover .tooltip::before {
            background: #1877f2;
            color: #dafcff;
            }

            .wrapper .instagram:hover,
            .wrapper .instagram:hover .tooltip,
            .wrapper .instagram:hover .tooltip::before {
            background: #e4405f;
            color: #dafcff;
            }

        </style>

  <div id="footer"
    class="w-box cmlbxme cdbrjt6 cabekta cagrwr0 c27gtbe c108d58h cxwdwoy cb7prkk c1vn1s4k c16nxn0p cfxga67 cs127px c1p2q7tt ctudo6g cafpv03 cy5k3t6 c1sjvsc0 c1ei0fn4 c1vo6zhl c1bcr9k5 cdqulwk cenvgme cdgulpx c1m62lau c4b3b18 c1gly636 cxhra0r c1y6evaj c150znbb c1kwzhte ce7gcar c1gcv3p3">
    <div class="w-box cdbrjt6 cabekta c1v754yw c1fiqrtv c1ag5i2h c1c06z6f c6wxre c7sodu c36v29b">
      <div class="w-text-1 c1ortxbx c1xpbjtc ctmpnxb cmqtlay cylt02x">
        ©2024
      </div>
      <div class="w-text-1 c1ortxbx ctmpnxb c1xpbjtc cmqtlay cylt02x">
        Mihocsa Szilard -
      </div>
      <a class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk canbhi8 c1uafbj0 cf1e2ma c1pjhlfy cmqtlay cxze075 c1ortxbx c5a3zvw cylt02x crts5jz ctmpnxb c6wxre cugyjby ccyuvzi cre5s67 crcdtlb ci0n7rg"
        href="#">emmess</a>
    </div>
    <div class="w-box ckq0nxn c1xpbjtc cdbrjt6 cabekta c1v754yw">
      <nav aria-label="Main" data-orientation="horizontal" dir="ltr"
        class="w-navigation-menu c1e0k3ls cj0yzls cdbrjt6 c7sodu">
        <div style="position: relative">
            <ul class="wrapper">
                <a href="https://www.facebook.com/profile.php?id=61567117353767" target="_blank" rel="noopener noreferrer">
                    <li class="icon facebook">
                        <span class="tooltip">Facebook</span>
                        <svg
                        viewBox="0 0 320 512"
                        height="1em"
                        fill="#071e21"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                        </svg>
                    </li>
                </a>
                <li class="icon instagram">
                    <span class="tooltip">Coming soon!</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    fill="#071e21"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                    >
                    <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    ></path>
                    </svg>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  </div>
    `
    }
}

customElements.define('footer-component', Footer);