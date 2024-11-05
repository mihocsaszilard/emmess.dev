class Header extends HTMLElement {
  constructor() {
    super();
  }


  async connectedCallback() {

    const logoUrl = 'https://api.github.com/repos/mihocsaszilard/emmess.dev/git/blobs/3b2e97d511692a6aa2ba028506bf3a16f9ab6fd9'
    const emmessUrl = 'https://api.github.com/repos/mihocsaszilard/emmess.dev/git/blobs/50d21627a2c79f6646fd5410498ecd60b7383cee'
    const logo = await fetch(logoUrl).then(res => res.json());
    const emmess = await fetch(emmessUrl).then(res => res.json());

    // When the user scrolls down 50px from the top of the document, resize the header's font size
    window.onscroll = function () {
      scrollFunction();
    };

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
        }

        #home-logo-link {
          display: flex;
          align-items: center;
        }
        </style>

    <div id="header"
    class="w-box cdbrjt6 c1ezjr48 c1rw68fh cabekta cagrwr0 cmlbxme cwiaclc c1wf35m5 c36v29b c1mqtedc c58z5p6 cd8kon4 cggid8d c2fkex4 c1quqltk csy8cb8 c1js0vls csqrka1 c1rgiuj9 c1d3glnc cub492t c1cxyv9c ckq0nxn c17eg0m2 c11x0o56">
    <div class="w-box c19q49ft ckq0nxn">
      <a href="/#home" id="home-logo-link" class="w-link cdbrjt6 c1m82nho c1r15jgl c19q49ft">
     <!-- <img style="width:64px" src="data:image/png;base64, ${"logo.content"}"/>
      <img style="width:120px" height="40px" src="data:image/png;base64, ${emmess.content}"/> -->
     </a>
    </div>
    <div id=""
      class="w-box cdbrjt6 cabekta c1v754yw c1aw2b96 c1ddd406 cylt02x c1xpbjtc c1s9uvgq c1jz0n5m cd6f459 cci31kk c2clyrt c1kylpxu">
      <a href="/#home"
        class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">home</a>
      <a href="/about"
        class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">about</a>
      <a href="/projects#top"
        class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">portfolio</a>
      <a href="/#contact"
        class="w-link cy7ulgk csy8cb8 c2fkex4 c1quqltk cmqtlay cxze075 c1t1j5f3 c1wcolv3 cylt02x crts5jz c1xpbjtc cdbrjt6 cabekta c1v754yw c12a08fm cwffqi5 c1n175p1 c1271w8q cugyjby c1tdrey9 cx86fyv c7g36ny cgfdz9b cwn85cu">contact</a>
    </div>
    <div class="w-box cdbrjt6 cabekta c1v754yw c1aw2b96 c1ddd406 c19q49ft ckq0nxn">
      <a href="https://github.com/mihocsaszilard" target="_blank" class="w-link"><img alt="" width="24" height="24"
          src="./assets/github-dark-svgrepo-com_EYGjUKUs-tNTIvoKsa2K1.svg"
          class="w-image c13f4nn3 c19749vk c1w22i21 c1jvlunl cf18525 c1qqxi6u cjt4iq8 ct7esof c16cc0n0 c17c502v c7djfi4 c1jmzkmf ct5bhb8"
          sizes="100vw" srcset="
              ./assets/github-dark-svgrepo-com_EYGjUKUs-tNTIvoKsa2K1.svg 16w,
              ./assets/github-dark-svgrepo-com_EYGjUKUs-tNTIvoKsa2K1.svg 32w,
              ./assets/github-dark-svgrepo-com_EYGjUKUs-tNTIvoKsa2K1.svg 48w
            " decoding="async" loading="lazy" /></a><a href="https://www.linkedin.com/in/mihocsaszilard/"
        target="_blank" class="w-link"><img alt="" width="24" height="24"
          src="./assets/linkedin-dark-161-svgrepo-com_O4XtyE-Pehz-Qp2zjLuQt.svg"
          class="w-image c13f4nn3 c19749vk c1w22i21 c1jvlunl cf18525 c1qqxi6u cjt4iq8 ct7esof csxau51 c16cc0n0 c17c502v c7djfi4 c1jmzkmf ct5bhb8"
          sizes="100vw" srcset="
              ./assets/linkedin-dark-161-svgrepo-com_O4XtyE-Pehz-Qp2zjLuQt.svg 16w,
              ./assets/linkedin-dark-161-svgrepo-com_O4XtyE-Pehz-Qp2zjLuQt.svg 32w,
              ./assets/linkedin-dark-161-svgrepo-com_O4XtyE-Pehz-Qp2zjLuQt.svg 48w
            " decoding="async" loading="lazy" /></a>

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
      <a href="/#contact" class="w-link cmlbxme c1xpbjtc cdbrjt6 cabekta c1v754yw"><img alt="" width="32" height="32"
          src="./assets/mail-pencil-svgrepo-com__USA82IwnwlaKFcE3Tr_w.svg" class="w-image c1nkgqg3" sizes="100vw"
          srcset="
              ./assets/mail-pencil-svgrepo-com__USA82IwnwlaKFcE3Tr_w.svg 16w,
              ./assets/mail-pencil-svgrepo-com__USA82IwnwlaKFcE3Tr_w.svg 32w,
              ./assets/mail-pencil-svgrepo-com__USA82IwnwlaKFcE3Tr_w.svg 48w,
              ./assets/mail-pencil-svgrepo-com__USA82IwnwlaKFcE3Tr_w.svg 64w
            " decoding="async" loading="lazy" /></a>
    </div>
  </div>
    `
  }
}

customElements.define('header-component', Header);