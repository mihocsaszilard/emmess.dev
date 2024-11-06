class ContactForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
        <style>
            #contact-form {
                width: 100%;
            }        
        </style>
        
        <form action="https://api.web3forms.com/submit" method="post" state="initial"
            class="w-form cdbrjt6 cxxtn2o cabekta c1v754yw">

            <input type="hidden" name="apikey" value="9e981141-7fb1-404d-83c1-4ccedaec52b1">
            <input type="hidden" name="subject" value="New Submission from home page">
            <input type="hidden" name="from_name" value="emmess.dev">
            <input type="hidden" name="redirect" value="https://www.emmess.dev">

            <div class="w-box cdbrjt6 cabekta c1v754yw cxxtn2o cmlbxme c1e2t8lu">
                <div class="w-box cmlbxme cxd9ghl">
                <input placeholder="name" required
                    class="w-text-input c1swgcny cy1nydl c1pggr7 ccw0luv crk8h2s cdfuaub cc3ck66 c1n3z5u0 cb7prkk cm6jgge c1bmvxdh cmlbxme c1li90jp cmqtlay c1s5rzwo c1q406iy c117vcti csl455m ccmnndv ci5jx9b c14c2xr0 cmg76fh c1oa6fvg chr9f5c c1pb337a c1voxtzt c7fwkib c93sz9b c12ystn4 cf56o25 cjf9v7b czaryot cl3mvaf c15p7vyx c1arh7c"
                    type="text" name="name" />
                </div>
                <div class="w-box cmlbxme cxd9ghl">
                <input placeholder="e-mail" required class="w-text-input c1swgcny cy1nydl c1pggr7 ccw0luv crk8h2s cdfuaub cc3ck66 c1n3z5u0 cb7prkk cm6jgge c1bmvxdh cmlbxme c1li90jp cmqtlay c1s5rzwo c1q406iy c117vcti csl455m ccmnndv ci5jx9b c14c2xr0 cmg76fh c1oa6fvg chr9f5c c1pb337a c1voxtzt c7fwkib c93sz9b c12ystn4 cf56o25 cjf9v7b czaryot cl3mvaf c15p7vyx c1arh7c"
                    type="email" name="email" id="sender" />
                </div>
                <div class="w-box cmlbxme cxd9ghl">
                <textarea placeholder="message" name="message" required
                    class="w-text-area c1swgcny cy1nydl c1pggr7 ccw0luv crk8h2s cdfuaub c1y8osv7 c1n3z5u0 cb7prkk cm6jgge c1bmvxdh cmlbxme c1li90jp cmqtlay chg2uf2 c1s5rzwo c1q406iy c117vcti csl455m ccmnndv ci5jx9b c14c2xr0 cmg76fh c1oa6fvg chr9f5c c1pb337a c1voxtzt c7fwkib c93sz9b c12ystn4 cf56o25 cjf9v7b czaryot cl3mvaf c15p7vyx c1arh7c"></textarea>
                </div>
                <button type="submit" name="submit"
                class="w-button cpbts2t c1xz90o3 csi3kvf c1rcu2z c103rlt6 c1u3zjep c1li90jp c11kjtmf cy1nydl c1pggr7 ccw0luv crk8h2s c1ff3sbd c11pp6bd cxze075 cfkvtxm c6wxre cnlpu6l c12dtkkz c2fkex4 c1quqltk csy8cb8 c1js0vls c1rwbnys c152qlvy c1ymozjn c15ppwdl c3k70dx cqzs56e c1ldk7nd ci5jx9b cnmsy6 ch1ppcl cnga94e c15r4q1i c1qistx5 c12b1kyj cyxpt4q cl8se6q c1go0x90 c1je1uax">
                Send
                </button>
            </div>
        </form>`
    }
}

customElements.define('contact-form', ContactForm);