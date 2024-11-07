class Header extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    const baseUrl = 'https://emmess.dev';

    // When the user scrolls down 50px from the top of the document, resize the header's font size
    window.onscroll = function () {
      scrollFunction();
    };

    window.addEventListener('load', () => {

      document.getElementById("load").classList.remove('load-overlay-active')
      document.getElementById("wave").style.display = 'none';
      setTimeout(() => {
        document.getElementById("load").style.height = '0px'
      }, 600);

      const menuItems = document.getElementById('menu-items');

      Array.from(menuItems.children).forEach(menuItem => {
        menuItem.addEventListener('click', () => {
          const subDir = menuItem.getAttribute('navigate-to');

          if (window.location.href !== baseUrl + subDir)
            subDir.indexOf('#') === 1 ? window.location = `${baseUrl + subDir}` : animateNavigation(subDir);
        })
      })
    })

    function animateNavigation(subDir) {
      document.getElementById("load").classList.add('load-overlay-active')
      document.getElementById("wave").style.display = 'block';
      setTimeout(() => {
        window.location = `${baseUrl + subDir}`;
      }, 1000);
    }

    function scrollFunction() {
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        document.getElementById("header").style.height = "40px";
        document.getElementById("call-to-action").style.height = "40px";
        document.getElementById("call-to-action").style.right = 0;
      } else {
        document.getElementById("header").style.height = "60px";
        document.getElementById("call-to-action").style.height = "60px";
        document.getElementById("call-to-action").style.right = "-60px";
      }
    }

    this.innerHTML = `

    <style>
      #header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99999999;
      }

      #home-logo-link {
        display: flex;
        align-items: center;
      }

      .load-overlay-active {
        opacity: 1 !important;
        height: 100vh !important;
      }

      #load {
        opacity:0;
        position: fixed;
        display:flex;
        justify-content:center;
        align-items:center;
        top:0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        background: #071e21;
        transition: opacity .5s ease;
      }

      div#wave {
        display: none;
        position:relative;
        text-align:center;
        width:100px;
        height:100px;
        margin-left: auto;
        margin-right: auto;
      }
          
      #wave>.dot {
        display:inline-block;
        width:12px;
        height:12px;
        border-radius:50%;
        margin-right:3px;
        background:#23B58E;
        animation: wave 0.5s linear infinite;
      }
      
      #wave>.dot:nth-child(2) {
        animation-delay: 0.125s;
      }

      #wave>.dot:nth-child(3) {
        animation-delay: 0.25s;
      }

      @keyframes wave {
        0%, 60%, 100% {
          transform: initial;
        }

        30% {
          transform: translateY(-15px);
        }
      }
    </style>

    <div id="load" class="load-overlay-active">
      <div id="wave">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>

    <div id="header"
    class="w-box cdbrjt6 c1ezjr48 c1rw68fh cabekta cagrwr0 cmlbxme cwiaclc c1wf35m5 c36v29b c1mqtedc c58z5p6 cd8kon4 cggid8d c2fkex4 c1quqltk csy8cb8 c1js0vls csqrka1 c1rgiuj9 c1d3glnc cub492t c1cxyv9c ckq0nxn c17eg0m2 c11x0o56">
    <div class="w-box cdbrjt6 c1v754yw c19q49ft ckq0nxn">
      <a href="/#home" id="home-logo-link" class="w-link cdbrjt6 c1m82nho c1r15jgl">
      
      <!-- emmess logo -->
      <svg width="32" viewBox="0 0 73 65" fill="none" xmlns="http://www.w3.org/2000/svg">
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

     </a>
    </div>
    <div id="menu-items"
      class="w-box cdbrjt6 cabekta c1v754yw c1aw2b96 c1ddd406 cylt02x c1xpbjtc c1s9uvgq c1jz0n5m cd6f459 cci31kk c2clyrt c1kylpxu">
      <a navigate-to="/"
        class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">home</a>
      <a navigate-to="/about"
        class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">about</a>
      <a navigate-to="/projects#top"
        class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">portfolio</a>
      <a navigate-to="/#contact"
        class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">contact</a>
    </div>
    <div class="w-box cdbrjt6 cabekta c1v754yw c1aw2b96 c1ddd406 c19q49ft ckq0nxn">
      <a href="https://github.com/mihocsaszilard" target="_blank" class="w-link">
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
          <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#071e21">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <path d="M18.6713 2.62664C18.5628 2.36483 18.3534 2.16452 18.0959 2.07627L18.094 2.07564L18.0922 2.07501L18.0884 2.07374L18.0805 2.07114L18.0636 2.06583C18.0518 2.06223 18.039 2.05856 18.0252 2.05487C17.9976 2.04749 17.966 2.04007 17.9305 2.03319C17.8593 2.01941 17.7728 2.00787 17.6708 2.00279C17.466 1.99259 17.2037 2.00858 16.8817 2.08054C16.3447 2.20053 15.6476 2.47464 14.7724 3.03631C14.7152 3.07302 14.6572 3.11096 14.5985 3.15016C14.5397 3.13561 14.4809 3.12155 14.422 3.108C12.8261 2.74083 11.1742 2.74083 9.57825 3.108C9.51933 3.12156 9.46049 3.13561 9.40173 3.15017C9.34298 3.11096 9.28499 3.07302 9.22775 3.03631C8.35163 2.47435 7.65291 2.20029 7.11455 2.08039C6.79179 2.00852 6.52891 1.99262 6.324 2.00278C6.22186 2.00784 6.13536 2.01931 6.06428 2.03299C6.0288 2.03982 5.99732 2.04717 5.96983 2.05447C5.95609 2.05812 5.94336 2.06176 5.93163 2.06531L5.91481 2.07056L5.90698 2.07311L5.9032 2.07437L5.90135 2.07499L5.89952 2.07561C5.63979 2.16397 5.42877 2.36623 5.32049 2.63061C4.91716 3.6154 4.8101 4.70134 5.00435 5.74306C5.01379 5.79367 5.02394 5.84418 5.0348 5.89458C4.99316 5.95373 4.9527 6.01368 4.91343 6.07439C4.30771 7.01089 3.98553 8.12791 4.00063 9.27493C4.00208 11.7315 4.71965 13.4139 5.9332 14.4965C6.62014 15.1093 7.41743 15.4844 8.21873 15.7208C8.31042 15.7479 8.40217 15.7731 8.49381 15.7967C8.48043 15.8432 8.46796 15.8901 8.45641 15.9373C8.40789 16.1357 8.37572 16.3394 8.36083 16.5461C8.35948 16.5648 8.35863 16.5835 8.35829 16.6022L8.32436 18.421L8.32417 18.4407C8.32417 18.4464 8.32417 18.4521 8.32417 18.4577C8.26262 18.473 8.20005 18.4843 8.13682 18.4916C7.942 18.5141 7.74467 18.4977 7.5561 18.4434C7.36752 18.3891 7.19127 18.2979 7.03752 18.1749C6.88377 18.0519 6.75553 17.8994 6.66031 17.7261L6.6505 17.7087C6.38836 17.2535 6.02627 16.8639 5.59142 16.5695C5.15656 16.275 4.6604 16.0836 4.14047 16.0099C3.59365 15.9324 3.08753 16.3128 3.01002 16.8597C2.93251 17.4065 3.31296 17.9126 3.85978 17.9901C4.07816 18.0211 4.28688 18.1015 4.47012 18.2256C4.65121 18.3482 4.80277 18.5103 4.9134 18.7C5.1346 19.0992 5.43165 19.4514 5.78801 19.7365C6.14753 20.0242 6.56032 20.2379 7.00272 20.3653C7.43348 20.4893 7.88392 20.5291 8.32949 20.4825C8.33039 20.7224 8.33103 20.9065 8.33103 21C8.33103 21.5523 8.75521 22 9.27847 22H14.7558C15.279 22 15.7032 21.5523 15.7032 21V17.2095C15.729 16.7802 15.685 16.3499 15.5738 15.9373C15.5585 15.8805 15.5419 15.824 15.5241 15.7679C15.5838 15.753 15.6435 15.7373 15.7032 15.7208C16.5277 15.4937 17.3513 15.1224 18.0588 14.4983C19.2791 13.4217 19.9982 11.7379 19.9996 9.27493C20.0147 8.12791 19.6925 7.01089 19.0868 6.07439C19.0475 6.01358 19.007 5.95354 18.9652 5.89429C18.976 5.84399 18.9861 5.79358 18.9955 5.74306C19.1893 4.69934 19.0795 3.61142 18.6713 2.62664Z" fill="#071e21"/> </g>
          </svg>
      </a>
      <a href="https://www.linkedin.com/in/mihocsaszilard/" target="_blank" class="w-link">
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
          <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#071e21">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <title>linkedin [#071e21]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#071e21"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#071e21]"> </path> </g> </g> </g> </g>
          </svg>
      </a>

      <!-- lang selector not working -->
      <div class="w-box cbk3xlz c220z9t c8z6v6h ctudo6g c1vn1s4k c1p2q7tt c16nxn0p c126x75w c16xhwp cfxga67 c1ei0fn4">
        <button type="button" role="combobox" aria-controls="radix-:R1mq:" aria-expanded="false" aria-required="false"
          aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
          class="w-select-trigger cdbrjt6 c1xpbjtc cmlbxme cabekta c1v754yw c1kbs3ph c18egezm cyknlik ctu83xr c8s6g5a cgzs84t c91sj54 cmqtlay crts5jz c6wxre c1li90jp c1m82nho c1r15jgl c41f7qn c5gszdz c1lkzhzv czs2jpg c1dqygc5 c10s9upy c1m05mm0 c1uz5cwi">
          <span style="pointer-events: none"></span></button><select aria-hidden="true" tabindex="-1" style="
              position: absolute;
              border: 0;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              white-space: nowrap;
              word-wrap: normal;
            "></select>
      </div>
    </div>
    <div id="call-to-action"
      class="w-box cmt1x88 cxwp040 c1ezjr48 c867ymg cdbrjt6 cabekta c1v754yw c1xz90o3 c1pn78o0 c1614j0m c1d02al4 ccmhdbx c1dni9xk cia1svp c20ca9d">
      <a href="/#contact" class="w-link cmlbxme c1xpbjtc cdbrjt6 cabekta c1v754yw">
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
        <svg width="32px" height="32px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#071e21">
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        <g id="SVGRepo_iconCarrier"> <path d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#071e21" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"/> </g>
        </svg>
      </a>
    </div>
  </div>
    `
  }
}

customElements.define('header-component', Header);