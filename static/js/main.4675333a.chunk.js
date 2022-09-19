(this["webpackJsonpqa-mesto-stand-front"]=this["webpackJsonpqa-mesto-stand-front"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(19),s=n.n(o),r=(n(29),n(9)),i=n(23),l=n(2),u=n(3),p=n(8),d=n.p+"static/media/logo.fc3e6875.svg",j=n(0);var m=function(e){var t=e.onSignOut,n=e.email;return Object(j.jsxs)("header",{className:"header page__section",children:[Object(j.jsx)("img",{src:d,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 Mesto",className:"logo header__logo"}),Object(j.jsx)(u.b,{exact:!0,path:"/",children:Object(j.jsxs)("div",{className:"header__wrapper",children:[Object(j.jsx)("p",{className:"header__user",children:n}),Object(j.jsx)("button",{className:"header__logout",onClick:function(){t()},children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(j.jsx)(u.b,{path:"/signup",children:Object(j.jsx)(p.b,{className:"header__auth-link",to:"signin",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(j.jsx)(u.b,{path:"/signin",children:Object(j.jsx)(p.b,{className:"header__auth-link",to:"signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})},b=c.a.createContext();var h=function(e){var t=e.card,n=e.onCardEdit,a=e.onCardClick,o=e.onCardLike,s=e.onCardDelete,r={backgroundImage:"url(".concat(t.link,")")},i=c.a.useContext(b),l=t.likes.some((function(e){return e===i._id})),u="card__like-button ".concat(l&&"card__like-button_is-active"),p=t.owner===i._id,d="card__delete-button ".concat(p?"card__delete-button_visible":"card__delete-button_hidden");return Object(j.jsxs)("li",{className:"places__item card",children:[Object(j.jsx)("div",{className:"card__image",style:r,onClick:function(){a(t)}}),p&&Object(j.jsx)("button",{type:"button",className:"card__edit-button",onClick:function(){return n(t)}}),Object(j.jsx)("button",{type:"button",className:d,onClick:function(){s(t)}}),Object(j.jsxs)("div",{className:"card__description",children:[Object(j.jsx)("h2",{className:"card__title",children:t.name}),Object(j.jsxs)("div",{className:"card__likes",children:[Object(j.jsx)("button",{type:"button",className:u,onClick:function(){o(t)}}),Object(j.jsx)("p",{className:"card__like-count",children:t.likes.length})]})]})]})};var _=function(e){var t=e.cards,n=e.onEditProfile,a=e.onAddPlace,o=e.onEditAvatar,s=e.onCardClick,r=e.onCardLike,i=e.onCardDelete,l=e.onCardEdit,u=c.a.useContext(b),p={backgroundImage:"url(".concat(u.avatar,")")};return Object(j.jsxs)("main",{className:"content",children:[Object(j.jsxs)("section",{className:"profile page__section",children:[Object(j.jsx)("div",{className:"profile__image",onClick:o,style:p}),Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsx)("h1",{className:"profile__title",children:u.name}),Object(j.jsx)("button",{className:"profile__edit-button",type:"button",onClick:n}),Object(j.jsx)("p",{className:"profile__description",children:u.about})]}),Object(j.jsx)("button",{className:"profile__add-button",type:"button",onClick:a})]}),Object(j.jsx)("section",{className:"places page__section",children:Object(j.jsx)("ul",{className:"places__list",children:t.map((function(e){return Object(j.jsx)(h,{card:e,onCardClick:s,onCardLike:r,onCardDelete:i,onCardEdit:l},e._id)}))})})]})};var f=function(){return Object(j.jsx)("footer",{className:"footer page__section",children:Object(j.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var O=function(e){var t=e.title,n=e.name,a=e.isOpen,c=e.buttonText,o=void 0===c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":c,s=e.onSubmit,r=e.onClose,i=e.children,l=e.disabled;return Object(j.jsx)("div",{className:"popup popup_type_".concat(n," ").concat(a?"popup_is-opened":""),children:Object(j.jsx)("div",{className:"popup__content",children:Object(j.jsxs)("form",{className:"popup__form",name:n,noValidate:!0,onSubmit:s,children:[Object(j.jsx)("button",{type:"button",className:"popup__close",onClick:r}),Object(j.jsx)("h3",{className:"popup__title",children:t}),i,Object(j.jsx)("button",{disabled:l,type:"submit",className:"button popup__button",children:o})]})})})};var x=function(e){var t=e.card,n=e.onClose;return Object(j.jsx)("div",{className:"popup popup_type_image ".concat(t?"popup_is-opened":""),children:Object(j.jsxs)("div",{className:"popup__content popup__content_content_image",children:[Object(j.jsx)("button",{type:"button",className:"popup__close",onClick:n}),Object(j.jsx)("img",{alt:t?t.name:"",src:t?t.link:"",className:"popup__image"}),Object(j.jsx)("p",{className:"popup__caption",children:t?t.name:""})]})})},g=n(21),v=n(22),N="https://bb34-78-106-206-15.eu.ngrok.io",C=new(function(){function e(t){var n=t.address;Object(g.a)(this,e),this._address=n}return Object(v.a)(e,[{key:"getAppInfo",value:function(e){return Promise.all([this.getCardList(e),this.getUserInfo(e)])}},{key:"getCardList",value:function(e){return fetch("".concat(this._address,"/cards"),{headers:{authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addCard",value:function(e,t){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateCard",value:function(e,t,n){return fetch("".concat(this._address,"/cards/").concat(t),{method:"PUT",headers:{authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"removeCard",value:function(e,t){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:"Bearer ".concat(t)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(e){return fetch("".concat(this._address,"/users/me"),{headers:{authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e,t){var n=e.name,a=e.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({name:n,about:a})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setUserAvatar",value:function(e,t){var n=e.avatar;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({avatar:n})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t,n){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:t?"PUT":"DELETE",headers:{authorization:"Bearer ".concat(n),"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({address:N});var y=function(e){var t=e.isOpen,n=e.onUpdateUser,a=e.onClose,o=c.a.useState(""),s=Object(l.a)(o,2),r=s[0],i=s[1],u=c.a.useState(""),p=Object(l.a)(u,2),d=p[0],m=p[1],h=c.a.useContext(b);return c.a.useEffect((function(){h&&(i(h.name),m(h.about))}),[h]),Object(j.jsxs)(O,{isOpen:t,onSubmit:function(e){e.preventDefault(),n({name:r,about:d})},onClose:a,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",children:[Object(j.jsxs)("label",{className:"popup__label",children:[Object(j.jsx)("input",{type:"text",name:"userName",id:"owner-name",className:"popup__input popup__input_type_name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",pattern:"[a-zA-Z\u0430-\u044f\u0410-\u042f -]{1,}",value:r||"",onChange:function(e){i(e.target.value)}}),Object(j.jsx)("span",{className:"popup__error",id:"owner-name-error"})]}),Object(j.jsxs)("label",{className:"popup__label",children:[Object(j.jsx)("input",{type:"text",name:"userDescription",id:"owner-description",className:"popup__input popup__input_type_description",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",required:!0,minLength:"2",maxLength:"200",value:d||"",onChange:function(e){m(e.target.value)}}),Object(j.jsx)("span",{className:"popup__error",id:"owner-description-error"})]})]})};var k=function(e){var t=e.isOpen,n=e.onUpdateAvatar,a=e.onClose,o=c.a.useRef();return Object(j.jsx)(O,{isOpen:t,onSubmit:function(e){e.preventDefault(),n({avatar:o.current.value})},onClose:a,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",children:Object(j.jsxs)("label",{className:"popup__label",children:[Object(j.jsx)("input",{type:"url",name:"avatar",id:"owner-avatar",className:"popup__input popup__input_type_description",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0,ref:o}),Object(j.jsx)("span",{className:"popup__error",id:"owner-avatar-error"})]})})},S=n(13),w={name:"",link:"",description:"",address:"",type:""};var P=function(e){var t=e.isOpen,n=e.onAddPlace,c=e.onEditPlace,o=e.onClose,s=e.card,i=Object(a.useState)(w),u=Object(l.a)(i,2),p=u[0],d=u[1];Object(a.useEffect)((function(){t&&d(s?{name:s.name,link:s.link,description:s.description||"",address:s.address||"",type:s.type}:w)}),[t,s]);var m=function(e,t){return d((function(n){return Object(r.a)(Object(r.a)({},n),{},Object(S.a)({},t,e.target.value))}))},b=p.name,h=p.address,_=p.link,f=p.description,x=p.type,g=Boolean(b&&_&&x);return Object(j.jsxs)(O,{isOpen:t,disabled:!g,onSubmit:function(e){e.preventDefault(),s?c(p,s._id):n(p)},onClose:o,title:s?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e":"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"new-card",children:[Object(j.jsxs)("label",{className:"popup__label",children:[Object(j.jsx)("input",{type:"text",name:"name",id:"place-name",className:"popup__input popup__input_type_card-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",value:b,onChange:function(e){return m(e,"name")}}),Object(j.jsx)("span",{className:"popup__error",id:"place-name-error"})]}),Object(j.jsxs)("label",{className:"popup__label",children:[Object(j.jsx)("input",{type:"url",name:"link",id:"place-link",className:"popup__input popup__input_type_url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:_,onChange:function(e){return m(e,"link")}}),Object(j.jsx)("span",{className:"popup__error",id:"place-link-error"})]}),Object(j.jsxs)("label",{className:"popup__label",children:[Object(j.jsx)("input",{type:"text",name:"description",id:"place-description",className:"popup__input popup__input_type_card-name",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:f,onChange:function(e){return m(e,"description")}}),Object(j.jsx)("span",{className:"popup__error",id:"place-description-error"})]}),Object(j.jsxs)("label",{className:"popup__label",children:[Object(j.jsx)("input",{type:"text",name:"address",id:"place-address",className:"popup__input popup__input_type_card-name",placeholder:"\u0410\u0434\u0440\u0435\u0441",value:h,onChange:function(e){return m(e,"address")}}),Object(j.jsx)("span",{className:"popup__error",id:"place-address-error"})]}),Object(j.jsx)("p",{className:"popup__radio-input-title",children:"\u041c\u0435\u0441\u0442\u043e:"}),Object(j.jsx)("input",{type:"radio",id:"place-type-1",className:"popup__radio-input",name:"type",value:"public",checked:"public"===x,onChange:function(e){return m(e,"type")}}),Object(j.jsx)("label",{for:"place-type-1",className:"popup__radio-input-label",children:"\u041e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0435"}),Object(j.jsx)("input",{type:"radio",id:"place-type-2",className:"popup__radio-input",name:"type",value:"private",checked:"private"===x,onChange:function(e){return m(e,"type")}}),Object(j.jsx)("label",{for:"place-type-2",className:"popup__radio-input-label",children:"\u0427\u0430\u0441\u0442\u043d\u043e\u0435"})]})};var E=function(e){var t=e.onRegister,n=c.a.useState(""),a=Object(l.a)(n,2),o=a[0],s=a[1],r=c.a.useState(""),i=Object(l.a)(r,2),u=i[0],d=i[1];return Object(j.jsx)("div",{className:"auth-form",children:Object(j.jsxs)("form",{className:"auth-form__form",onSubmit:function(e){e.preventDefault(),t({email:o,password:u})},children:[Object(j.jsxs)("div",{className:"auth-form__wrapper",children:[Object(j.jsx)("h3",{className:"auth-form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsx)("label",{className:"auth-form__input",children:Object(j.jsx)("input",{type:"text",name:"email",id:"email",className:"auth-form__textfield",placeholder:"Email",onChange:function(e){return s(e.target.value)},required:!0})}),Object(j.jsx)("label",{className:"auth-form__input",children:Object(j.jsx)("input",{type:"password",name:"password",id:"password",className:"auth-form__textfield",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return d(e.target.value)},required:!0})})]}),Object(j.jsxs)("div",{className:"auth-form__wrapper",children:[Object(j.jsx)("button",{className:"auth-form__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsxs)("p",{className:"auth-form__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(j.jsx)(p.b,{className:"auth-form__link",to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})})};n(39);var I=function(e){var t=e.onLogin,n=c.a.useState(""),a=Object(l.a)(n,2),o=a[0],s=a[1],r=c.a.useState(""),i=Object(l.a)(r,2),u=i[0],p=i[1];return Object(j.jsx)("div",{className:"auth-form",children:Object(j.jsxs)("form",{className:"auth-form__form",onSubmit:function(e){e.preventDefault(),t({email:o,password:u})},children:[Object(j.jsxs)("div",{className:"auth-form__wrapper",children:[Object(j.jsx)("h3",{className:"auth-form__title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsx)("label",{className:"auth-form__input",children:Object(j.jsx)("input",{type:"text",name:"name",id:"email",className:"auth-form__textfield",placeholder:"Email",onChange:function(e){return s(e.target.value)},required:!0})}),Object(j.jsx)("label",{className:"auth-form__input",children:Object(j.jsx)("input",{type:"password",name:"password",id:"password",className:"auth-form__textfield",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return p(e.target.value)},required:!0})})]}),Object(j.jsx)("button",{className:"auth-form__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})},T=n.p+"static/media/success-icon.ae3d962f.svg",A=n.p+"static/media/error-icon.7204b460.svg";var L=function(e){var t=e.isOpen,n=e.onClose,a=e.status;return Object(j.jsx)("div",{className:"popup ".concat(t&&"popup_is-opened"),children:Object(j.jsx)("div",{className:"popup__content",children:Object(j.jsxs)("form",{className:"popup__form",noValidate:!0,children:[Object(j.jsx)("button",{type:"button",className:"popup__close",onClick:n}),"success"===a?Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:"popup__icon",src:T,alt:""}),Object(j.jsx)("p",{className:"popup__status-message",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c"})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:"popup__icon",src:A,alt:""}),Object(j.jsxs)("p",{className:"popup__status-message",children:["\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!",Object(j.jsx)("br",{}),"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."]})]})]})})})},U=n(24),B=function(e){var t=e.component,n=Object(U.a)(e,["component"]);return Object(j.jsx)(u.b,{exact:!0,children:function(){return n.loggedIn?Object(j.jsx)(t,Object(r.a)({},n)):Object(j.jsx)(u.a,{to:"./signin"})}})};var D=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],o=c.a.useState({isOpen:!1,card:null}),s=Object(l.a)(o,2),p=s[0],d=s[1],h=c.a.useState(!1),g=Object(l.a)(h,2),v=g[0],S=g[1],w=c.a.useState(null),T=Object(l.a)(w,2),A=T[0],U=T[1],D=c.a.useState([]),q=Object(l.a)(D,2),z=q[0],J=q[1],R=c.a.useState({}),M=Object(l.a)(R,2),H=M[0],V=M[1],W=c.a.useState(!1),G=Object(l.a)(W,2),Z=G[0],$=G[1],F=c.a.useState(""),K=Object(l.a)(F,2),Q=K[0],X=K[1],Y=c.a.useState(!1),ee=Object(l.a)(Y,2),te=ee[0],ne=ee[1],ae=c.a.useState(""),ce=Object(l.a)(ae,2),oe=ce[0],se=ce[1],re=Object(u.g)();function ie(){a(!1),d({isOpen:!1,card:null}),S(!1),$(!1),U(null)}function le(e){var t=e.email,n=e.password;(function(e,t){return fetch("".concat(N,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(t){return localStorage.setItem("jwt",t.jwt),localStorage.setItem("email",e),t}))})(t,n).then((function(e){e.token?(localStorage.setItem("jwt",e.token),se(t),ne(!0),re.push("/")):(X("fail"),$(!0))})).catch((function(e){X("fail"),$(!0)}))}return c.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&te&&C.getAppInfo(e).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];V(a.data),J(n.data)})).catch((function(e){return console.log(e)}))}),[te]),c.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(N,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){if(200===e.status)return e.json()})).then((function(e){return e}))}(e).then((function(e){e?(se(e.data.email),ne(!0),re.push("/")):localStorage.removeItem("jwt")})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)(b.Provider,{value:H,children:Object(j.jsxs)("div",{className:"page__content",children:[Object(j.jsx)(m,{email:oe,onSignOut:function(){localStorage.removeItem("jwt"),ne(!1),re.push("/signin")}}),Object(j.jsxs)(u.d,{children:[Object(j.jsx)(B,{exact:!0,path:"/",component:_,cards:z,onEditProfile:function(){a(!0)},onAddPlace:function(){d({isOpen:!0,card:null})},onEditAvatar:function(){S(!0)},onCardClick:function(e){U(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e===H._id}));C.changeLikeCardStatus(e._id,!t,localStorage.getItem("jwt")).then((function(t){J((function(n){return n.map((function(n){return n._id===e._id?t.data:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){C.removeCard(e._id,localStorage.getItem("jwt")).then((function(){J((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log(e)}))},onCardEdit:function(e){return d({isOpen:!0,card:e})},loggedIn:te}),Object(j.jsx)(u.b,{path:"/signup",children:Object(j.jsx)(E,{onRegister:function(e){var t=e.email,n=e.password;(function(e,t){return fetch("".concat(N,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){if(201===e.status)return e.json()})).then((function(e){return e}))})(t,n).then((function(e){e.data._id?(X("success"),$(!0),le({email:t,password:n})):(X("fail"),$(!0))})).catch((function(e){X("fail"),$(!0)}))}})}),Object(j.jsx)(u.b,{path:"/signin",children:Object(j.jsx)(I,{onLogin:le})})]}),Object(j.jsx)(f,{}),Object(j.jsx)(y,{isOpen:n,onUpdateUser:function(e){C.setUserInfo(e,localStorage.getItem("jwt")).then((function(e){V(e.data),ie()})).catch((function(e){return console.log(e)}))},onClose:ie}),Object(j.jsx)(P,Object(r.a)(Object(r.a)({},p),{},{onEditPlace:function(e,t){C.updateCard(e,t,localStorage.getItem("jwt")).then((function(e){J((function(n){return n.map((function(n){return n._id===t?e.data:n}))})),ie()})).catch((function(e){return console.log(e)}))},onAddPlace:function(e){C.addCard(e,localStorage.getItem("jwt")).then((function(e){J([e.data].concat(Object(i.a)(z))),ie()})).catch((function(e){return console.log(e)}))},onClose:ie})),Object(j.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"remove-card",buttonText:"\u0414\u0430"}),Object(j.jsx)(k,{isOpen:v,onUpdateAvatar:function(e){C.setUserAvatar(e,localStorage.getItem("jwt")).then((function(e){V(e.data),ie()})).catch((function(e){return console.log(e)}))},onClose:ie}),Object(j.jsx)(x,{card:A,onClose:ie}),Object(j.jsx)(L,{isOpen:Z,onClose:ie,status:Q})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p.a,{children:Object(j.jsx)(D,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.4675333a.chunk.js.map