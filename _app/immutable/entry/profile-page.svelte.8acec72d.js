import{S as N,i as x,s as M,k as u,a as k,q as V,l as p,m as g,c as w,r as R,h as m,O as ee,n as P,b as D,G as o,C as T,u as U,e as X,v as te,d as E,f as re,g as I,y as j,z as A,A as C,B as L}from"../chunks/index.62e30ab5.js";const ae=""+new URL("../assets/photo.04423ef6.jpg",import.meta.url).href;function se(f){let e,t,l,n,s,a,h,r,i,d,_,c;return{c(){e=u("div"),t=u("img"),n=k(),s=u("h1"),a=V("Asem Abdelhady"),h=k(),r=u("p"),i=V("21 years"),d=k(),_=u("p"),c=V("Student"),this.h()},l(v){e=p(v,"DIV",{id:!0,class:!0});var b=g(e);t=p(b,"IMG",{src:!0,alt:!0,id:!0,class:!0}),n=w(b),s=p(b,"H1",{});var $=g(s);a=R($,"Asem Abdelhady"),$.forEach(m),h=w(b),r=p(b,"P",{});var q=g(r);i=R(q,"21 years"),q.forEach(m),d=w(b),_=p(b,"P",{});var W=g(_);c=R(W,"Student"),W.forEach(m),b.forEach(m),this.h()},h(){ee(t.src,l=ae)||P(t,"src",l),P(t,"alt","Profile picture"),P(t,"id","profile_picture"),P(t,"class","svelte-pjyc9"),P(e,"id","profile_card"),P(e,"class","svelte-pjyc9")},m(v,b){D(v,e,b),o(e,t),o(e,n),o(e,s),o(s,a),o(e,h),o(e,r),o(r,i),o(e,d),o(e,_),o(_,c)},p:T,i:T,o:T,d(v){v&&m(e)}}}class ne extends N{constructor(e){super(),x(this,e,null,se,M,{})}}function le(f){let e,t,l=f[0].title+"",n,s,a,h=f[0].content+"";return{c(){e=u("li"),t=u("span"),n=V(l),s=k(),a=u("span"),this.h()},l(r){e=p(r,"LI",{class:!0});var i=g(e);t=p(i,"SPAN",{class:!0});var d=g(t);n=R(d,l),d.forEach(m),s=w(i),a=p(i,"SPAN",{class:!0});var _=g(a);_.forEach(m),i.forEach(m),this.h()},h(){P(t,"class","span-title svelte-14ei2wc"),P(a,"class","span-content svelte-14ei2wc"),P(e,"class","svelte-14ei2wc")},m(r,i){D(r,e,i),o(e,t),o(t,n),o(e,s),o(e,a),a.innerHTML=h},p(r,[i]){i&1&&l!==(l=r[0].title+"")&&U(n,l),i&1&&h!==(h=r[0].content+"")&&(a.innerHTML=h)},i:T,o:T,d(r){r&&m(e)}}}function ie(f,e,t){let{listItem:l}=e;return f.$$set=n=>{"listItem"in n&&t(0,l=n.listItem)},[l]}class B extends N{constructor(e){super(),x(this,e,ie,le,M,{listItem:0})}}function oe(f){let e,t,l,n,s,a,h,r,i,d,_;return a=new B({props:{listItem:f[4]}}),r=new B({props:{listItem:f[5]}}),d=new B({props:{listItem:f[6]}}),{c(){e=u("div"),t=u("h2"),l=V("Projects"),n=k(),s=u("ul"),j(a.$$.fragment),h=k(),j(r.$$.fragment),i=k(),j(d.$$.fragment)},l(c){e=p(c,"DIV",{});var v=g(e);t=p(v,"H2",{});var b=g(t);l=R(b,"Projects"),b.forEach(m),n=w(v),s=p(v,"UL",{});var $=g(s);A(a.$$.fragment,$),h=w($),A(r.$$.fragment,$),i=w($),A(d.$$.fragment,$),$.forEach(m),v.forEach(m)},m(c,v){D(c,e,v),o(e,t),o(t,l),o(e,n),o(e,s),C(a,s,null),o(s,h),C(r,s,null),o(s,i),C(d,s,null),_=!0},p:T,i(c){_||(I(a.$$.fragment,c),I(r.$$.fragment,c),I(d.$$.fragment,c),_=!0)},o(c){E(a.$$.fragment,c),E(r.$$.fragment,c),E(d.$$.fragment,c),_=!1},d(c){c&&m(e),L(a),L(r),L(d)}}}function ce(f){let e,t,l,n,s,a,h,r,i,d,_;return a=new B({props:{listItem:f[1]}}),r=new B({props:{listItem:f[2]}}),d=new B({props:{listItem:f[3]}}),{c(){e=u("div"),t=u("h2"),l=V("Skills"),n=k(),s=u("ul"),j(a.$$.fragment),h=k(),j(r.$$.fragment),i=k(),j(d.$$.fragment)},l(c){e=p(c,"DIV",{});var v=g(e);t=p(v,"H2",{});var b=g(t);l=R(b,"Skills"),b.forEach(m),n=w(v),s=p(v,"UL",{});var $=g(s);A(a.$$.fragment,$),h=w($),A(r.$$.fragment,$),i=w($),A(d.$$.fragment,$),$.forEach(m),v.forEach(m)},m(c,v){D(c,e,v),o(e,t),o(t,l),o(e,n),o(e,s),C(a,s,null),o(s,h),C(r,s,null),o(s,i),C(d,s,null),_=!0},p:T,i(c){_||(I(a.$$.fragment,c),I(r.$$.fragment,c),I(d.$$.fragment,c),_=!0)},o(c){E(a.$$.fragment,c),E(r.$$.fragment,c),E(d.$$.fragment,c),_=!1},d(c){c&&m(e),L(a),L(r),L(d)}}}function fe(f){let e,t,l,n;const s=[ce,oe],a=[];function h(r,i){return r[0]?0:1}return e=h(f),t=a[e]=s[e](f),{c(){t.c(),l=X()},l(r){t.l(r),l=X()},m(r,i){a[e].m(r,i),D(r,l,i),n=!0},p(r,[i]){let d=e;e=h(r),e===d?a[e].p(r,i):(te(),E(a[d],1,1,()=>{a[d]=null}),re(),t=a[e],t?t.p(r,i):(t=a[e]=s[e](r),t.c()),I(t,1),t.m(l.parentNode,l))},i(r){n||(I(t),n=!0)},o(r){E(t),n=!1},d(r){a[e].d(r),r&&m(l)}}}function he(f,e,t){let{isSkills:l}=e;const n={title:"Languages:",content:"Java - JS - TS - Solidity - C++ - Python"},s={title:"Web2: ",content:"Node.js - React.js - Next.js - Express.js - Mongo"},a={title:"Web3: ",content:"Hardhat - Truffle - Ethers.js - Web3.js - IPFS - Moralis - The Grpah - Chainlink - Chai.js"},h={title:"LastWords: ",content:'Proejct to let users mint their lastwords in forms in NFTs and show them in a <a href="https://last-words-last-words-nextjs-33go-9k0xbpdgy-asem-abdelhady.vercel.app/" >NFT gallery</a >. You can check: <a href="https://github.com/Asem-Abdelhady/LastWords">here</a>'},r={title:"ERC777: ",content:'My ERC777 token in goerli blockchain and 3 front-end websites that let the holder send ERC777 in a <a href="https://at-bulksend-c8qmsdq5b-asem-abdelhady.vercel.app/" >bulksend</a > or set a <a href="https://at-priceset-pybxgx8fa-asem-abdelhady.vercel.app/" >token-price</a > or do a<a href="https://at-staticsale-mjn891djm-asem-abdelhady.vercel.app/"> static sale</a >. You can check: <a href="https://github.com/Asem-Abdelhady/ERC777">here</a>'},i={title:"TG-BOT to access remote server: ",content:'This is a bot that lets me observe and do commands on my remote server using telegram API. I left instructions on how to make your own telegram bot. You can check: <a href="https://github.com/Asem-Abdelhady/Telegram_bot_to_access_remote_server" >here</a >'};return f.$$set=d=>{"isSkills"in d&&t(0,l=d.isSkills)},[l,n,s,a,h,r,i]}class Z extends N{constructor(e){super(),x(this,e,he,fe,M,{isSkills:0})}}function de(f){let e,t=f[0].header+"",l,n,s,a=f[0].body+"",h;return{c(){e=u("h2"),l=V(t),n=k(),s=u("p"),h=V(a),this.h()},l(r){e=p(r,"H2",{});var i=g(e);l=R(i,t),i.forEach(m),n=w(r),s=p(r,"P",{class:!0});var d=g(s);h=R(d,a),d.forEach(m),this.h()},h(){P(s,"class","svelte-9wrkfy")},m(r,i){D(r,e,i),o(e,l),D(r,n,i),D(r,s,i),o(s,h)},p(r,[i]){i&1&&t!==(t=r[0].header+"")&&U(l,t),i&1&&a!==(a=r[0].body+"")&&U(h,a)},i:T,o:T,d(r){r&&m(e),r&&m(n),r&&m(s)}}}function me(f,e,t){let{paragrpah:l}=e;return f.$$set=n=>{"paragrpah"in n&&t(0,l=n.paragrpah)},[l]}class F extends N{constructor(e){super(),x(this,e,me,de,M,{paragrpah:0})}}function ue(f){let e,t,l,n,s,a,h,r,i,d,_,c,v,b,$,q,W,H,G;return a=new F({props:{paragrpah:f[0]}}),i=new F({props:{paragrpah:f[1]}}),c=new Z({props:{isSkills:!1}}),$=new Z({props:{isSkills:!0}}),H=new F({props:{paragrpah:f[2]}}),{c(){e=u("div"),t=u("h1"),l=V("About"),n=k(),s=u("div"),j(a.$$.fragment),h=k(),r=u("div"),j(i.$$.fragment),d=k(),_=u("div"),j(c.$$.fragment),v=k(),b=u("div"),j($.$$.fragment),q=k(),W=u("div"),j(H.$$.fragment),this.h()},l(y){e=p(y,"DIV",{id:!0,class:!0});var S=g(e);t=p(S,"H1",{});var Y=g(t);l=R(Y,"About"),Y.forEach(m),n=w(S),s=p(S,"DIV",{});var J=g(s);A(a.$$.fragment,J),J.forEach(m),h=w(S),r=p(S,"DIV",{});var O=g(r);A(i.$$.fragment,O),O.forEach(m),d=w(S),_=p(S,"DIV",{});var z=g(_);A(c.$$.fragment,z),z.forEach(m),v=w(S),b=p(S,"DIV",{});var K=g(b);A($.$$.fragment,K),K.forEach(m),q=w(S),W=p(S,"DIV",{});var Q=g(W);A(H.$$.fragment,Q),Q.forEach(m),S.forEach(m),this.h()},h(){P(e,"id","about_card"),P(e,"class","svelte-1nharpa")},m(y,S){D(y,e,S),o(e,t),o(t,l),o(e,n),o(e,s),C(a,s,null),o(e,h),o(e,r),C(i,r,null),o(e,d),o(e,_),C(c,_,null),o(e,v),o(e,b),C($,b,null),o(e,q),o(e,W),C(H,W,null),G=!0},p:T,i(y){G||(I(a.$$.fragment,y),I(i.$$.fragment,y),I(c.$$.fragment,y),I($.$$.fragment,y),I(H.$$.fragment,y),G=!0)},o(y){E(a.$$.fragment,y),E(i.$$.fragment,y),E(c.$$.fragment,y),E($.$$.fragment,y),E(H.$$.fragment,y),G=!1},d(y){y&&m(e),L(a),L(i),L(c),L($),L(H)}}}function pe(f){return[{header:"Bio",body:" Third year Innoplis student. Interseted in new technologies, software architectures and making new projects."},{header:"Work",body:"Web3 | Web2 developer"},{header:"Contact",body:"asemshawkey@gmail.com"}]}class $e extends N{constructor(e){super(),x(this,e,pe,ue,M,{})}}function ge(f){let e,t,l,n,s;return t=new ne({}),n=new $e({}),{c(){e=u("div"),j(t.$$.fragment),l=k(),j(n.$$.fragment),this.h()},l(a){e=p(a,"DIV",{id:!0,class:!0});var h=g(e);A(t.$$.fragment,h),l=w(h),A(n.$$.fragment,h),h.forEach(m),this.h()},h(){P(e,"id","profile_container"),P(e,"class","svelte-1ddn2r1")},m(a,h){D(a,e,h),C(t,e,null),o(e,l),C(n,e,null),s=!0},p:T,i(a){s||(I(t.$$.fragment,a),I(n.$$.fragment,a),s=!0)},o(a){E(t.$$.fragment,a),E(n.$$.fragment,a),s=!1},d(a){a&&m(e),L(t),L(n)}}}class _e extends N{constructor(e){super(),x(this,e,null,ge,M,{})}}function ve(f){let e,t,l;return t=new _e({}),{c(){e=u("main"),j(t.$$.fragment),this.h()},l(n){e=p(n,"MAIN",{class:!0});var s=g(e);A(t.$$.fragment,s),s.forEach(m),this.h()},h(){P(e,"class","svelte-15p71sd")},m(n,s){D(n,e,s),C(t,e,null),l=!0},p:T,i(n){l||(I(t.$$.fragment,n),l=!0)},o(n){E(t.$$.fragment,n),l=!1},d(n){n&&m(e),L(t)}}}class ye extends N{constructor(e){super(),x(this,e,null,ve,M,{})}}export{ye as default};
