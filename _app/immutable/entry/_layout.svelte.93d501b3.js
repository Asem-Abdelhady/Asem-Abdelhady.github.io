import{S as W,i as x,s as $,e as ae,b as F,C as P,h as v,D as T,E as Z,m as y,n as a,F as K,G as d,k as w,y as X,a as D,l as C,z as Y,c as N,A as q,g as S,d as B,B as G,q as R,r as j,H as re,I as ne,J as ie,K as fe}from"../chunks/index.62e30ab5.js";import{b as ee}from"../chunks/paths.b3d7a751.js";/* empty css                                                     */const Q=parseFloat;function te(s,e=";"){let t;if(Array.isArray(s))t=s.filter(r=>r);else{t=[];for(const r in s)s[r]&&t.push(`${r}:${s[r]}`)}return t.join(e)}function oe(s,e,t,r){let f,o;const n="1em";let h,m,_,c="-.125em";const l="visible";return r&&(_="center",o="1.25em"),t&&(f=t),e&&(e=="lg"?(m="1.33333em",h=".75em",c="-.225em"):e=="xs"?m=".75em":e=="sm"?m=".875em":m=e.replace("x","em")),te([te({float:f,width:o,height:n,"line-height":h,"font-size":m,"text-align":_,"vertical-align":c,"transform-origin":"center",overflow:l}),s])}function ce(s,e,t,r,f,o=1,n="",h=""){let m=1,_=1;return f&&(f=="horizontal"?m=-1:f=="vertical"?_=-1:m=_=-1),te([`translate(${Q(e)*o}${n},${Q(t)*o}${n})`,`scale(${m*Q(s)},${_*Q(s)})`,r&&`rotate(${r}${h})`]," ")}function se(s){let e,t,r,f,o,n,h,m;function _(i,g){return typeof i[10][4]=="string"?me:ue}let c=_(s),l=c(s);return{c(){e=T("svg"),t=T("g"),r=T("g"),l.c(),this.h()},l(i){e=Z(i,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var g=y(e);t=Z(g,"g",{transform:!0,"transform-origin":!0});var k=y(t);r=Z(k,"g",{transform:!0});var p=y(r);l.l(p),p.forEach(v),k.forEach(v),g.forEach(v),this.h()},h(){a(r,"transform",s[12]),a(t,"transform",f="translate("+s[10][0]/2+" "+s[10][1]/2+")"),a(t,"transform-origin",o=s[10][0]/4+" 0"),a(e,"id",n=s[1]||void 0),a(e,"class",h="svelte-fa "+s[0]+" svelte-1cj2gr0"),a(e,"style",s[11]),a(e,"viewBox",m="0 0 "+s[10][0]+" "+s[10][1]),a(e,"aria-hidden","true"),a(e,"role","img"),a(e,"xmlns","http://www.w3.org/2000/svg"),K(e,"pulse",s[4]),K(e,"spin",s[3])},m(i,g){F(i,e,g),d(e,t),d(t,r),l.m(r,null)},p(i,g){c===(c=_(i))&&l?l.p(i,g):(l.d(1),l=c(i),l&&(l.c(),l.m(r,null))),g&4096&&a(r,"transform",i[12]),g&1024&&f!==(f="translate("+i[10][0]/2+" "+i[10][1]/2+")")&&a(t,"transform",f),g&1024&&o!==(o=i[10][0]/4+" 0")&&a(t,"transform-origin",o),g&2&&n!==(n=i[1]||void 0)&&a(e,"id",n),g&1&&h!==(h="svelte-fa "+i[0]+" svelte-1cj2gr0")&&a(e,"class",h),g&2048&&a(e,"style",i[11]),g&1024&&m!==(m="0 0 "+i[10][0]+" "+i[10][1])&&a(e,"viewBox",m),g&17&&K(e,"pulse",i[4]),g&9&&K(e,"spin",i[3])},d(i){i&&v(e),l.d()}}}function ue(s){let e,t,r,f,o,n,h,m,_,c;return{c(){e=T("path"),n=T("path"),this.h()},l(l){e=Z(l,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),y(e).forEach(v),n=Z(l,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),y(n).forEach(v),this.h()},h(){a(e,"d",t=s[10][4][0]),a(e,"fill",r=s[6]||s[2]||"currentColor"),a(e,"fill-opacity",f=s[9]!=!1?s[7]:s[8]),a(e,"transform",o="translate("+s[10][0]/-2+" "+s[10][1]/-2+")"),a(n,"d",h=s[10][4][1]),a(n,"fill",m=s[5]||s[2]||"currentColor"),a(n,"fill-opacity",_=s[9]!=!1?s[8]:s[7]),a(n,"transform",c="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")},m(l,i){F(l,e,i),F(l,n,i)},p(l,i){i&1024&&t!==(t=l[10][4][0])&&a(e,"d",t),i&68&&r!==(r=l[6]||l[2]||"currentColor")&&a(e,"fill",r),i&896&&f!==(f=l[9]!=!1?l[7]:l[8])&&a(e,"fill-opacity",f),i&1024&&o!==(o="translate("+l[10][0]/-2+" "+l[10][1]/-2+")")&&a(e,"transform",o),i&1024&&h!==(h=l[10][4][1])&&a(n,"d",h),i&36&&m!==(m=l[5]||l[2]||"currentColor")&&a(n,"fill",m),i&896&&_!==(_=l[9]!=!1?l[8]:l[7])&&a(n,"fill-opacity",_),i&1024&&c!==(c="translate("+l[10][0]/-2+" "+l[10][1]/-2+")")&&a(n,"transform",c)},d(l){l&&v(e),l&&v(n)}}}function me(s){let e,t,r,f;return{c(){e=T("path"),this.h()},l(o){e=Z(o,"path",{d:!0,fill:!0,transform:!0}),y(e).forEach(v),this.h()},h(){a(e,"d",t=s[10][4]),a(e,"fill",r=s[2]||s[5]||"currentColor"),a(e,"transform",f="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")},m(o,n){F(o,e,n)},p(o,n){n&1024&&t!==(t=o[10][4])&&a(e,"d",t),n&36&&r!==(r=o[2]||o[5]||"currentColor")&&a(e,"fill",r),n&1024&&f!==(f="translate("+o[10][0]/-2+" "+o[10][1]/-2+")")&&a(e,"transform",f)},d(o){o&&v(e)}}}function he(s){let e,t=s[10][4]&&se(s);return{c(){t&&t.c(),e=ae()},l(r){t&&t.l(r),e=ae()},m(r,f){t&&t.m(r,f),F(r,e,f)},p(r,[f]){r[10][4]?t?t.p(r,f):(t=se(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:P,o:P,d(r){t&&t.d(r),r&&v(e)}}}function _e(s,e,t){let{class:r=""}=e,{id:f=""}=e,{style:o=""}=e,{icon:n}=e,{size:h=""}=e,{color:m=""}=e,{fw:_=!1}=e,{pull:c=""}=e,{scale:l=1}=e,{translateX:i=0}=e,{translateY:g=0}=e,{rotate:k=""}=e,{flip:p=!1}=e,{spin:z=!1}=e,{pulse:V=!1}=e,{primaryColor:E=""}=e,{secondaryColor:b=""}=e,{primaryOpacity:O=1}=e,{secondaryOpacity:I=.4}=e,{swapOpacity:A=!1}=e,H,L,M;return s.$$set=u=>{"class"in u&&t(0,r=u.class),"id"in u&&t(1,f=u.id),"style"in u&&t(13,o=u.style),"icon"in u&&t(14,n=u.icon),"size"in u&&t(15,h=u.size),"color"in u&&t(2,m=u.color),"fw"in u&&t(16,_=u.fw),"pull"in u&&t(17,c=u.pull),"scale"in u&&t(18,l=u.scale),"translateX"in u&&t(19,i=u.translateX),"translateY"in u&&t(20,g=u.translateY),"rotate"in u&&t(21,k=u.rotate),"flip"in u&&t(22,p=u.flip),"spin"in u&&t(3,z=u.spin),"pulse"in u&&t(4,V=u.pulse),"primaryColor"in u&&t(5,E=u.primaryColor),"secondaryColor"in u&&t(6,b=u.secondaryColor),"primaryOpacity"in u&&t(7,O=u.primaryOpacity),"secondaryOpacity"in u&&t(8,I=u.secondaryOpacity),"swapOpacity"in u&&t(9,A=u.swapOpacity)},s.$$.update=()=>{s.$$.dirty&16384&&t(10,H=n&&n.icon||[0,0,"",[],""]),s.$$.dirty&237568&&t(11,L=oe(o,h,c,_)),s.$$.dirty&8126464&&t(12,M=ce(l,i,g,k,p,512))},[r,f,m,z,V,E,b,O,I,A,H,L,M,o,n,h,_,c,l,i,g,k,p]}class ve extends W{constructor(e){super(),x(this,e,_e,he,$,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}const U=ve;var de={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},ge={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},ye={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Ee={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]};function pe(s){let e,t,r,f,o,n,h,m,_,c,l,i,g,k,p,z,V;return f=new U({props:{icon:ye,style:"height:25px"}}),m=new U({props:{icon:ge,style:"height:25px"}}),i=new U({props:{icon:Ee,style:"height:25px"}}),z=new U({props:{icon:de,style:"height:25px"}}),{c(){e=w("footer"),t=w("div"),r=w("a"),X(f.$$.fragment),o=D(),n=w("div"),h=w("a"),X(m.$$.fragment),_=D(),c=w("div"),l=w("a"),X(i.$$.fragment),g=D(),k=w("div"),p=w("a"),X(z.$$.fragment),this.h()},l(E){e=C(E,"FOOTER",{class:!0});var b=y(e);t=C(b,"DIV",{class:!0});var O=y(t);r=C(O,"A",{href:!0,id:!0,class:!0});var I=y(r);Y(f.$$.fragment,I),I.forEach(v),O.forEach(v),o=N(b),n=C(b,"DIV",{class:!0});var A=y(n);h=C(A,"A",{href:!0,id:!0,class:!0});var H=y(h);Y(m.$$.fragment,H),H.forEach(v),A.forEach(v),_=N(b),c=C(b,"DIV",{class:!0});var L=y(c);l=C(L,"A",{href:!0,id:!0,class:!0});var M=y(l);Y(i.$$.fragment,M),M.forEach(v),L.forEach(v),g=N(b),k=C(b,"DIV",{class:!0});var u=y(k);p=C(u,"A",{href:!0,id:!0,class:!0});var J=y(p);Y(z.$$.fragment,J),J.forEach(v),u.forEach(v),b.forEach(v),this.h()},h(){a(r,"href","https://github.com/Asem-Abdelhady"),a(r,"id","gh-link"),a(r,"class","svelte-17yso8s"),a(t,"class","container svelte-17yso8s"),a(h,"href","https://www.linkedin.com/in/asem-abdelhady-21151b17a/"),a(h,"id","linkedIn-link"),a(h,"class","svelte-17yso8s"),a(n,"class","container svelte-17yso8s"),a(l,"href","https://t.me/AsemSH2"),a(l,"id","tg-link"),a(l,"class","svelte-17yso8s"),a(c,"class","container svelte-17yso8s"),a(p,"href","mailto:asemshawkey@gmail.com"),a(p,"id","email"),a(p,"class","svelte-17yso8s"),a(k,"class","container svelte-17yso8s"),a(e,"class","anchors_icons svelte-17yso8s")},m(E,b){F(E,e,b),d(e,t),d(t,r),q(f,r,null),d(e,o),d(e,n),d(n,h),q(m,h,null),d(e,_),d(e,c),d(c,l),q(i,l,null),d(e,g),d(e,k),d(k,p),q(z,p,null),V=!0},p:P,i(E){V||(S(f.$$.fragment,E),S(m.$$.fragment,E),S(i.$$.fragment,E),S(z.$$.fragment,E),V=!0)},o(E){B(f.$$.fragment,E),B(m.$$.fragment,E),B(i.$$.fragment,E),B(z.$$.fragment,E),V=!1},d(E){E&&v(e),G(f),G(m),G(i),G(z)}}}class we extends W{constructor(e){super(),x(this,e,null,pe,$,{})}}function Ce(s){let e,t,r,f,o,n,h,m,_,c,l,i,g,k,p,z,V;return{c(){e=w("nav"),t=w("div"),r=R("El3os"),f=D(),o=w("ul"),n=w("div"),h=w("li"),m=w("a"),_=R("Home"),c=D(),l=w("li"),i=w("a"),g=R("Profile"),k=D(),p=w("li"),z=w("a"),V=R("Comic"),this.h()},l(E){e=C(E,"NAV",{class:!0});var b=y(e);t=C(b,"DIV",{class:!0});var O=y(t);r=j(O,"El3os"),O.forEach(v),f=N(b),o=C(b,"UL",{class:!0});var I=y(o);n=C(I,"DIV",{class:!0});var A=y(n);h=C(A,"LI",{class:!0});var H=y(h);m=C(H,"A",{href:!0,class:!0});var L=y(m);_=j(L,"Home"),L.forEach(v),H.forEach(v),c=N(A),l=C(A,"LI",{class:!0});var M=y(l);i=C(M,"A",{href:!0,class:!0});var u=y(i);g=j(u,"Profile"),u.forEach(v),M.forEach(v),k=N(A),p=C(A,"LI",{class:!0});var J=y(p);z=C(J,"A",{href:!0,class:!0});var le=y(z);V=j(le,"Comic"),le.forEach(v),J.forEach(v),A.forEach(v),I.forEach(v),b.forEach(v),this.h()},h(){a(t,"class","logo svelte-12vum3m"),a(m,"href",ee+"/"),a(m,"class","svelte-12vum3m"),a(h,"class","svelte-12vum3m"),a(i,"href",ee+"/profile"),a(i,"class","svelte-12vum3m"),a(l,"class","svelte-12vum3m"),a(z,"href",ee+"/comic"),a(z,"class","svelte-12vum3m"),a(p,"class","svelte-12vum3m"),a(n,"class","menu svelte-12vum3m"),a(o,"class","nav-links svelte-12vum3m"),a(e,"class","navbar svelte-12vum3m")},m(E,b){F(E,e,b),d(e,t),d(t,r),d(e,f),d(e,o),d(o,n),d(n,h),d(h,m),d(m,_),d(n,c),d(n,l),d(l,i),d(i,g),d(n,k),d(n,p),d(p,z),d(z,V)},p:P,i:P,o:P,d(E){E&&v(e)}}}class be extends W{constructor(e){super(),x(this,e,null,Ce,$,{})}}function ze(s){let e,t,r,f,o,n,h;t=new be({});const m=s[1].default,_=re(m,s,s[0],null);return n=new we({}),{c(){e=w("div"),X(t.$$.fragment),r=D(),f=w("main"),_&&_.c(),o=D(),X(n.$$.fragment),this.h()},l(c){e=C(c,"DIV",{class:!0});var l=y(e);Y(t.$$.fragment,l),r=N(l),f=C(l,"MAIN",{class:!0});var i=y(f);_&&_.l(i),i.forEach(v),o=N(l),Y(n.$$.fragment,l),l.forEach(v),this.h()},h(){a(f,"class","svelte-49smys"),a(e,"class","app")},m(c,l){F(c,e,l),q(t,e,null),d(e,r),d(e,f),_&&_.m(f,null),d(e,o),q(n,e,null),h=!0},p(c,[l]){_&&_.p&&(!h||l&1)&&ne(_,m,c,c[0],h?fe(m,c[0],l,null):ie(c[0]),null)},i(c){h||(S(t.$$.fragment,c),S(_,c),S(n.$$.fragment,c),h=!0)},o(c){B(t.$$.fragment,c),B(_,c),B(n.$$.fragment,c),h=!1},d(c){c&&v(e),G(t),_&&_.d(c),G(n)}}}function ke(s,e,t){let{$$slots:r={},$$scope:f}=e;return s.$$set=o=>{"$$scope"in o&&t(0,f=o.$$scope)},[f,r]}class Ie extends W{constructor(e){super(),x(this,e,ke,ze,$,{})}}export{Ie as default};
