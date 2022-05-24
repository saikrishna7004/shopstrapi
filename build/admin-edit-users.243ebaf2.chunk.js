"use strict";(self.webpackChunkmystrapiapp=self.webpackChunkmystrapiapp||[]).push([[4263],{86294:(V,v,e)=>{e.r(v),e.d(v,{default:()=>ye});var t=e(53547),s=e(79835),o=e(49656),p=e(96486),I=e(92699),l=e(87462),C=e(15861),i=e(87757),P=e.n(i),c=e(97132),D=e(45697),L=e.n(D),Y=e(78718),K=e.n(Y),F=e(27361),S=e.n(F),G=e(57557),Z=e.n(G),U=e(23724),z=e(80831),E=e(94117),M=e(64459),u=e(39272),A=e(35395),_=e(33483),X=e(80117),O=e(9524),r=e(87760),a=e.n(r),n=e(22754),q=e.n(n),b=e(58836),x=e(63955),ne=(B,R,m)=>new Promise((H,d)=>{var Q=W=>{try{J(m.next(W))}catch(w){d(w)}},N=W=>{try{J(m.throw(W))}catch(w){d(w)}},J=W=>W.done?H(W.value):Promise.resolve(W.value).then(Q,N);J((m=m.apply(B,R)).next())});const Ee=B=>ne(void 0,null,function*(){const{data:R}=yield x.be.get(`/admin/users/${B}`);return R.data}),fe=(B,R)=>ne(void 0,null,function*(){const{data:m}=yield x.be.put(`/admin/users/${B}`,R);return m.data}),ge=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"email",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12}},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var ve=e(8278),Pe=e(7676),Me=e(25108),Oe=function(){return window&&window.strapi&&window.strapi.isEE?e(77791).Z:e(26010).Z}(),re=["email","firstname","lastname","username","isActive","roles"],oe=function(R){var m=R.canUpdate,H=(0,c.useIntl)(),d=H.formatMessage,Q=(0,o.useRouteMatch)("/settings/users/:id"),N=Q.params.id,J=(0,o.useHistory)(),W=J.push,w=(0,s.useAppInfos)(),De=w.setUserDisplayName,ae=(0,s.useNotification)(),le=(0,s.useOverlayBlocker)(),Le=le.lockApp,Ae=le.unlockApp;(0,s.useFocusWhenNavigate)();var ie=(0,U.useQuery)(["user",N],function(){return Ee(N)},{retry:!1,keepPreviousData:!1,staleTime:1e3*20,onError:function(f){var g=f.response.status;g===403&&(ae({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),W("/")),Me.log(f.response.status)}}),Te=ie.status,T=ie.data,Ie=function(){var h=(0,C.Z)(P().mark(function f(g,j){var k,te,$,se,ue;return P().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return Le(),y.prev=1,y.next=4,fe(N,Z()(g,"confirmPassword"));case 4:k=y.sent,ae({type:"success",message:d({id:"notification.success.saved",defaultMessage:"Saved"})}),te=s.auth.getUserInfo(),N.toString()===te.id.toString()&&(s.auth.setUserInfo(k),$=S()(g,"username")||(0,b.Pp)(g.firstname,g.lastname),De($)),j.setValues(K()(g,re)),y.next=17;break;case 11:y.prev=11,y.t0=y.catch(1),se=(0,b.Iz)(y.t0.response.data),ue=Object.keys(se).reduce(function(me,pe){return me[pe]=se[pe].id,me},{}),j.setErrors(ue),ae({type:"warning",message:S()(y.t0,"response.data.message","notification.error")});case 17:Ae();case 18:case"end":return y.stop()}},f,null,[[1,11]])}));return function(g,j){return h.apply(this,arguments)}}(),de=Te!=="success",Ce=de?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},ee=Object.keys(K()(T,re)).reduce(function(h,f){return f==="roles"?(h[f]=((T==null?void 0:T.roles)||[]).map(function(g){var j=g.id;return j}),h):(h[f]=T==null?void 0:T[f],h)},{}),Ue=ee.username||(0,b.Pp)(ee.firstname,ee.lastname),ce=d(Ce,{name:Ue});return de?t.createElement(X.Main,{"aria-busy":"true"},t.createElement(s.SettingsPageTitle,{name:"Users"}),t.createElement(A.HeaderLayout,{primaryAction:t.createElement(M.Button,{disabled:!0,startIcon:t.createElement(q(),null),type:"button",size:"L"},d({id:"global.save",defaultMessage:"Save"})),title:ce,navigationAction:t.createElement(s.Link,{startIcon:t.createElement(a(),null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},d({id:"global.back",defaultMessage:"Back"}))}),t.createElement(A.ContentLayout,null,t.createElement(s.LoadingIndicatorPage,null))):t.createElement(X.Main,null,t.createElement(s.SettingsPageTitle,{name:"Users"}),t.createElement(z.Formik,{onSubmit:Ie,initialValues:ee,validateOnChange:!1,validationSchema:ve.YM},function(h){var f=h.errors,g=h.values,j=h.handleChange,k=h.isSubmitting;return t.createElement(s.Form,null,t.createElement(A.HeaderLayout,{primaryAction:t.createElement(M.Button,{disabled:k||!m,startIcon:t.createElement(q(),null),loading:k,type:"submit",size:"L"},d({id:"global.save",defaultMessage:"Save"})),title:ce,navigationAction:t.createElement(s.Link,{startIcon:t.createElement(a(),null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},d({id:"global.back",defaultMessage:"Back"}))}),t.createElement(A.ContentLayout,null,(T==null?void 0:T.registrationToken)&&t.createElement(E.Box,{paddingBottom:6},t.createElement(Oe,{registrationToken:T.registrationToken})),t.createElement(O.Stack,{spacing:7},t.createElement(E.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(O.Stack,{spacing:4},t.createElement(_.Typography,{variant:"delta",as:"h2"},d({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(u.Grid,{gap:5},ge.map(function(te){return te.map(function($){return t.createElement(u.GridItem,(0,l.Z)({key:$.name},$.size),t.createElement(s.GenericInput,(0,l.Z)({},$,{disabled:!m,error:f[$.name],onChange:j,value:g[$.name]||""})))})})))),t.createElement(E.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(O.Stack,{spacing:4},t.createElement(_.Typography,{variant:"delta",as:"h2"},d({id:"global.roles",defaultMessage:"User's role"})),t.createElement(u.Grid,{gap:5},t.createElement(u.GridItem,{col:6,xs:12},t.createElement(Pe.Z,{disabled:!m,error:f.roles,onChange:j,value:g.roles}))))))))}))};oe.propTypes={canUpdate:L().bool.isRequired};const he=oe,ye=()=>{const B=(0,s.useNotification)(),R=(0,t.useMemo)(()=>({read:I.Z.settings.users.read,update:I.Z.settings.users.update}),[]),{isLoading:m,allowedActions:{canRead:H,canUpdate:d}}=(0,s.useRBAC)(R),{state:Q}=(0,o.useLocation)(),N=(0,p.get)(Q,"from","/");return(0,t.useEffect)(()=>{m||!H&&!d&&B({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[m,H,d,B]),m?t.createElement(s.LoadingIndicatorPage,null):!H&&!d?t.createElement(o.Redirect,{to:N}):t.createElement(he,{canUpdate:d})}},53073:(V,v,e)=>{e.d(v,{Z:()=>S});var t=e(53547),s=e(45697),o=e.n(s),p=e(49549),I=e.n(p),l=e(79835),C=e.n(l),i=e(54279),P=e.n(i),c=e(74855),D=e.n(c),L=e(97132),Y=e.n(L);const K=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},t.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},t.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),F=({children:G,target:Z})=>{const U=(0,l.useNotification)(),{formatMessage:z}=(0,L.useIntl)(),E=()=>{U({type:"info",message:{id:"notification.link-copied"}})},M=z({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(l.ContentBox,{endAction:t.createElement(c.CopyToClipboard,{onCopy:E,text:Z},t.createElement(p.IconButton,{label:M,noBorder:!0,icon:t.createElement(P(),null)})),title:Z,titleEllipsis:!0,subtitle:G,icon:t.createElement(K,null),iconBackground:"neutral100"})};F.propTypes={children:o().oneOfType([o().element,o().string]).isRequired,target:o().string.isRequired};const S=F},26010:(V,v,e)=>{e.d(v,{Z:()=>P});var t=e(53547),s=e(97132),o=e.n(s),p=e(45697),I=e.n(p),l=e(71242),C=e(53073);const i=({registrationToken:c})=>{const{formatMessage:D}=(0,s.useIntl)(),L=`${window.location.origin}${l.Z}auth/register?registrationToken=${c}`;return t.createElement(C.Z,{target:L},D({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};i.defaultProps={registrationToken:""},i.propTypes={registrationToken:I().string};const P=i},7676:(V,v,e)=>{e.d(v,{Z:()=>z});var t=e(53547),s=e(45697),o=e.n(s),p=e(97132),I=e.n(p),l=e(2632),C=e.n(l),i=e(23724),P=e.n(i),c=e(78384),D=e(79386),L=e.n(D),Y=e(63955),K=(E,M,u)=>new Promise((A,_)=>{var X=a=>{try{r(u.next(a))}catch(n){_(n)}},O=a=>{try{r(u.throw(a))}catch(n){_(n)}},r=a=>a.done?A(a.value):Promise.resolve(a.value).then(X,O);r((u=u.apply(E,M)).next())});const F=c.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,S=c.default.div`
  animation: ${F} 2s infinite linear;
`,G=()=>t.createElement(S,null,t.createElement(L(),null)),Z=()=>K(void 0,null,function*(){const{data:E}=yield Y.be.get("/admin/roles");return E.data}),U=({disabled:E,error:M,onChange:u,value:A})=>{const{status:_,data:X}=(0,i.useQuery)(["roles"],Z,{staleTime:5e4}),{formatMessage:O}=(0,p.useIntl)(),r=M?O({id:M,defaultMessage:M}):"",a=O({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),n=O({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),q=O({id:"app.components.Select.placeholder",defaultMessage:"Select"}),b=_==="loading"?t.createElement(G,null):void 0;return t.createElement(l.Select,{id:"roles",disabled:E,error:r,hint:n,label:a,name:"roles",onChange:x=>{u({target:{name:"roles",value:x}})},placeholder:q,multi:!0,startIcon:b,value:A,withTags:!0,required:!0},(X||[]).map(x=>t.createElement(l.Option,{key:x.id,value:x.id},x.name)))};U.defaultProps={disabled:!1,error:void 0},U.propTypes={disabled:o().bool,error:o().string,onChange:o().func.isRequired,value:o().array.isRequired};const z=U},8278:(V,v,e)=>{e.d(v,{YM:()=>O,Rw:()=>K});var t=e(53209),s=e(79835),o=Object.defineProperty,p=Object.defineProperties,I=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,P=(r,a,n)=>a in r?o(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,c=(r,a)=>{for(var n in a||(a={}))C.call(a,n)&&P(r,n,a[n]);if(l)for(var n of l(a))i.call(a,n)&&P(r,n,a[n]);return r},D=(r,a)=>p(r,I(a));const L={firstname:t.nK().required(s.translatedErrors.required),lastname:t.nK(),email:t.Z_().email(s.translatedErrors.email).lowercase().required(s.translatedErrors.required),username:t.Z_().nullable(),password:t.Z_().min(8,s.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,s.translatedErrors.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(r,a)=>r?a.required(s.translatedErrors.required):a)},K=D(c({},L),{currentPassword:t.Z_().when(["password","confirmPassword"],(r,a,n)=>r||a?n.required(s.translatedErrors.required):n),preferedLanguage:t.Z_().nullable()}),S={roles:t.IX().min(1,s.translatedErrors.required).required(s.translatedErrors.required)};var G=Object.defineProperty,Z=Object.defineProperties,U=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,u=(r,a,n)=>a in r?G(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,A=(r,a)=>{for(var n in a||(a={}))E.call(a,n)&&u(r,n,a[n]);if(z)for(var n of z(a))M.call(a,n)&&u(r,n,a[n]);return r},_=(r,a)=>Z(r,U(a));const O=t.Ry().shape(A(_(A({},L),{isActive:t.Xg()}),S))},77791:(V,v,e)=>{e.d(v,{Z:()=>P});var t=e(53547),s=e(97132),o=e.n(s),p=e(45697),I=e.n(p),l=e(71242),C=e(53073);const i=({registrationToken:c})=>{const{formatMessage:D}=(0,s.useIntl)();return c?t.createElement(C.Z,{target:`${window.location.origin}${l.Z}auth/register?registrationToken=${c}`},D({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(C.Z,{target:`${window.location.origin}${l.Z}auth/login`},D({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};i.defaultProps={registrationToken:""},i.propTypes={registrationToken:I().string};const P=i}}]);
