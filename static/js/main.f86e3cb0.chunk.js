(this.webpackJsonpmabea=this.webpackJsonpmabea||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/angel.946c7bed.png"},31:function(e,t,a){e.exports=a.p+"static/media/heart.bf24a2b7.png"},32:function(e,t,a){e.exports=a.p+"static/media/Image1.c86c28b9.png"},33:function(e,t,a){e.exports=a.p+"static/media/Image2.5bc4f527.png"},34:function(e,t,a){e.exports=a.p+"static/media/Image3.2e030063.png"},35:function(e,t,a){e.exports=a.p+"static/media/Image4.6f36c854.png"},36:function(e,t,a){e.exports=a.p+"static/media/Image5.f11ea5a0.png"},37:function(e,t,a){e.exports=a.p+"static/media/Image6.ea9ee053.png"},38:function(e,t,a){e.exports=a.p+"static/media/Image7.6a65d30c.png"},39:function(e,t,a){e.exports=a.p+"static/media/Image8.197162a5.png"},40:function(e,t,a){e.exports=a(79)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),o=a.n(s),i=(a(45),a(4)),l=a(5),c=a(7),m=a(6),u=(a(46),function(e){return r.a.createElement("button",{className:"toogle-button",onClick:e.click},r.a.createElement("div",{className:"toggle-button_line"}),r.a.createElement("div",{className:"toggle-button_line"}),r.a.createElement("div",{className:"toggle-button_line"}))}),d=(a(47),a(1)),p=a(29),g=a.n(p),h=function(e){var t="Connexion",a="/LogIn";return e.isLoged&&(t="Deconnexion",a="/Mabea/"),r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar_navigation"},r.a.createElement("div",{className:"toolbar_toogle-button"},r.a.createElement(u,{click:e.drawerClickHandler})),r.a.createElement("div",{className:"toolbar_logo"},r.a.createElement(d.b,{to:"/Mabea/"},r.a.createElement("img",{src:g.a,alt:"angel_logo"}))),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar_navigation-items"},r.a.createElement("ul",null,e.isLoged?r.a.createElement(d.b,{to:"/Read"},r.a.createElement("li",null,"Lire des BA")):null,e.isLoged?r.a.createElement(d.b,{to:"/Publish"},r.a.createElement("li",null,"Publier une BA")):null,e.admin&&e.isLoged?r.a.createElement(d.b,{to:"/Moderation"},r.a.createElement("li",null,"Mod\xe9rer")):null,e.isLoged?r.a.createElement(d.b,{to:a,onClick:e.isLogedHandler},r.a.createElement("li",null,t)):r.a.createElement(d.b,{to:a},r.a.createElement("li",null,t))))))},E=(a(53),function(e){var t="side-drawer";e.show&&(t="side-drawer open");var a="Connexion",n="/LogIn";return e.isLoged&&(a="Deconnexion",n="/Mabea/"),r.a.createElement("nav",{className:t},r.a.createElement("ul",null,r.a.createElement("li",{onClick:e.backdropClickHandler},e.isLoged?r.a.createElement(d.b,{to:"/Read"},"Lire des BA"):null),e.isLoged?r.a.createElement("li",{onClick:e.backdropClickHandler},r.a.createElement(d.b,{to:"/Publish"},"Publier une BA")):null,r.a.createElement("li",{onClick:e.backdropClickHandler},e.admin&&e.isLoged?r.a.createElement(d.b,{to:"/Moderation"},"Mod\xe9rer"):null),r.a.createElement("li",{onClick:e.backdropClickHandler},e.isLoged?r.a.createElement(d.b,{to:n,onClick:e.isLogedHandler},a):r.a.createElement(d.b,{to:n},a))))}),b=(a(54),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.backdropClickHandler})}),f=(a(55),a(9)),k=a.n(f),v=function(e){return e.display?r.a.createElement("div",null,r.a.createElement("button",{onClick:e.clickHandler}," F\xe9liciter ")):r.a.createElement("div",null)},S=(a(73),function(){return r.a.createElement("div",{className:"loader"})}),L=a(31),C=a.n(L),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeBa=function(){k.a.get("https://damp-thicket-56527.herokuapp.com/api/ba").then((function(e){n.setState({posts:e.data}),sessionStorage.setItem("_id",e.data._id),sessionStorage.setItem("greeted",e.data.greets+1),n.setState({display:!0})})).catch((function(e){console.log(e)})).then((function(){n.setState({loading:!1})}))},n.clickHandler=function(){k.a.create({headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}}).patch("https://damp-thicket-56527.herokuapp.com/api/ba/",{_id:sessionStorage.getItem("_id"),greeted:sessionStorage.getItem("greeted")}).then((function(e){n.setState({display:!1}),n.scaleMyHeart()})).catch((function(e){console.log(e)}))},n.scaleMyHeart=function(){n.setState({scale:!0}),setTimeout((function(){return n.setState({scale:!1})}),2e3)},n.state={posts:{},display:!0,loading:!0,scale:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.changeBa()}},{key:"render",value:function(){var e=this.state.posts;return this.state.loading?r.a.createElement(S,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"DisplayBa"},r.a.createElement("p",null,r.a.createElement("span",null,e.ba))),r.a.createElement("div",{className:"Anonyme"},r.a.createElement("p",null,e.username)),r.a.createElement("div",{className:"Greet"},this.state.display?e.greets+" f\xe9licitations":sessionStorage.getItem("greeted")+" f\xe9licitations"),r.a.createElement("div",{className:"Interaction"},this.props.isLoged?r.a.createElement(v,{display:this.state.display,greetingHandler:this.greetingHandler,clickHandler:this.clickHandler}):null,r.a.createElement("button",{onClick:this.changeBa},"Nouvelle BA")),r.a.createElement("div",{className:this.state.scale?"image_container--scaled":"image_container"},r.a.createElement("img",{src:C.a,alt:"heart"})))}}]),a}(r.a.Component),N=(a(74),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).resetStatus=function(){n.setState({status:"",ba:""})},n.handleBaChange=function(e){n.setState({ba:e.target.value})},n.handleSumbit=function(e){e.preventDefault(),k.a.create({headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}}).post("https://damp-thicket-56527.herokuapp.com/api/moderation",n.state).then((function(e){n.setState({status:e.status})})).catch((function(e){console.log(e)}))},n.state={username:n.props.username,ba:"",status:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.ba;return 201===this.state.status?r.a.createElement("div",{className:"Share"},r.a.createElement("h1",null,"Merci pour ton partage !"),r.a.createElement("div",{className:"Share__button"},r.a.createElement(d.b,{to:"/Publish"},r.a.createElement("button",{onClick:this.resetStatus},"Publier une autre BA")),r.a.createElement(d.b,{to:"/Read"},r.a.createElement("button",null,"Lire des BA")))):r.a.createElement("div",{className:"Input2"},r.a.createElement("form",{onSubmit:this.handleSumbit},r.a.createElement("h1",null,"PARTAGER VOTRE BA !"),r.a.createElement("textarea",{type:"text",placeholder:"Ta bonne action...",value:e,onChange:this.handleBaChange}),r.a.createElement("button",{type:"submit"},"Soumettre")))}}]),a}(r.a.Component)),w=(a(75),a(32)),H=a.n(w),O=a(33),I=a.n(O),B=a(34),j=a.n(B),A=a(35),x=a.n(A),M=a(36),D=a.n(M),_=a(37),P=a.n(_),T=a(38),R=a.n(T),z=a(39),U=a.n(z),V=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("mousemove",(function(e){this.querySelectorAll(".Layer1, .Layer2, .Layer3, .Layer4, .Layer5, .Layer6, .Layer7, .Layer8, .Layer9").forEach((function(t){var a=t.getAttribute("data-speed"),n=(window.innerWidth-e.pageX*a)/100,r=(window.innerHeight-e.pageY*a)/100;t.style.transform="translateX(".concat(n,"px) translateY(").concat(r,"px)")}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Welcome"},r.a.createElement("p",null,"Bienvenue sur Mab\xe9a"),r.a.createElement("img",{src:H.a,alt:"","data-speed":"-5",className:"Layer1"}),r.a.createElement("img",{src:I.a,alt:"","data-speed":"2",className:"Layer2"}),r.a.createElement("img",{src:j.a,alt:"","data-speed":"-3",className:"Layer3"}),r.a.createElement("img",{src:x.a,alt:"","data-speed":"3",className:"Layer4"}),r.a.createElement("img",{src:D.a,alt:"","data-speed":"5",className:"Layer5"}),r.a.createElement("img",{src:P.a,alt:"","data-speed":"4",className:"Layer6"}),r.a.createElement("img",{src:R.a,alt:"","data-speed":"-7",className:"Layer7"}),r.a.createElement("img",{src:U.a,alt:"","data-speed":"-8",className:"Layer8"}),r.a.createElement(d.b,{to:"/Read"},r.a.createElement("button",null,"Commencer a lire des BA")))}}]),a}(r.a.Component),W=(a(76),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleEmailChange=function(e){n.setState({email:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),k.a.post("https://damp-thicket-56527.herokuapp.com/api/auth/signup",n.state).then((function(e){n.setState({status:e.status}),console.log(e)})).catch((function(e){console.log(e),n.setState({message:"Email d\xe9j\xe0 utilis\xe9"})}))},n.state={email:"",password:"",message:""},n}return Object(l.a)(a,[{key:"render",value:function(){return 201===this.state.status?r.a.createElement("div",{className:"Signed"},r.a.createElement("h1",null,"Compte cr\xe9e avec succ\xe9s"),r.a.createElement(d.b,{to:"/LogIn"},r.a.createElement("button",null,"Se connecter"))):r.a.createElement("div",{className:"login-box"},r.a.createElement("h1",null,"Cr\xe9er un compte"),r.a.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"email",placeholder:"Email",onChange:this.handleEmailChange}),r.a.createElement("input",{type:"password",placeholder:"Password",onChange:this.handlePasswordChange}),r.a.createElement("div",{className:"error-message"},this.state.message),r.a.createElement("button",{className:"btn",type:"submit"},"S'inscrire")))}}]),a}(n.Component)),F=(a(77),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleEmailChange=function(e){n.setState({email:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),k.a.post("https://damp-thicket-56527.herokuapp.com/api/auth/login",n.state).then((function(e){n.props.getUsername(e.data.username),n.props.getToken(e.data.token),n.props.getAdmin(e.data.admin),n.props.isLogedHandler(),sessionStorage.setItem("username",e.data.username),sessionStorage.setItem("token",e.data.token),sessionStorage.setItem("admin",e.data.admin)})).catch((function(e){n.setState({message:"Email ou mot de passe incorrect"}),console.log(e)}))},n.state={email:"",password:"",message:""},n}return Object(l.a)(a,[{key:"render",value:function(){return this.props.isLoged?r.a.createElement("div",{className:"Loged"},r.a.createElement("h1",null,"Bienvenue, ",r.a.createElement("br",null),r.a.createElement("br",null)," ",this.props.username),r.a.createElement(d.b,{to:"/Read"},r.a.createElement("button",null,"Lire des BA"))):r.a.createElement("div",{className:"login-box"},r.a.createElement("h1",null,"Connexion"),r.a.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"email",placeholder:"Email",onChange:this.handleEmailChange}),r.a.createElement("input",{type:"password",placeholder:"Password",onChange:this.handlePasswordChange}),r.a.createElement("div",{className:"error-message"},this.state.message),r.a.createElement("button",{className:"btn",type:"submit"},"Se connecter")),r.a.createElement(d.b,{to:"/signup"},"Cr\xe9er un compte"))}}]),a}(r.a.Component)),G=(a(78),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeModeration=function(){k.a.create({headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}}).get("https://damp-thicket-56527.herokuapp.com/api/moderation").then((function(e){null==e.data?n.setState({end:!0}):n.setState({posts:e.data,username:e.data.username,ba:e.data.ba,_id:e.data._id})})).catch((function(e){console.log(e)}))},n.ValidationHandler=function(){var e=k.a.create({headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});e.post("https://damp-thicket-56527.herokuapp.com/api/ba",n.state).then((function(){e.patch("https://damp-thicket-56527.herokuapp.com/api/moderation",n.state).then((function(){n.changeModeration()})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},n.DeleteHandler=function(){k.a.create({headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}}).patch("https://damp-thicket-56527.herokuapp.com/api/moderation",n.state).then((function(){n.changeModeration()})).catch((function(e){console.log(e)}))},n.state={posts:{},username:"",ba:"",_id:"",end:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.changeModeration()}},{key:"render",value:function(){var e=this.state.posts;return this.state.end?r.a.createElement("div",{className:"end-ba"},r.a.createElement("p",null,"Plus de BA \xe0 moderer")):r.a.createElement("div",{className:"BA2"},r.a.createElement("div",{className:"DisplayBa2"},r.a.createElement("p",null,e.ba)),r.a.createElement("div",{className:"Anonyme2"},r.a.createElement("p",null,e.username)),r.a.createElement("div",{className:"Moderation"},r.a.createElement("button",{onClick:this.ValidationHandler}," Valider la BA"),r.a.createElement("button",{onClick:this.DeleteHandler}," Supprimer la BA")))}}]),a}(r.a.Component)),J=a(2),X=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getToken=function(e){n.setState({token:e}),sessionStorage.setItem("token",n.state.token)},n.getAdmin=function(e){n.setState({admin:e}),sessionStorage.setItem("admin",n.state.admin)},n.getUsername=function(e){n.setState({username:e}),sessionStorage.setItem("username",n.state.username)},n.isLogedHandler=function(){sessionStorage.clear(),n.setState((function(e){return{isLoged:!e.isLoged}}))},n.drawnerToogleClickHandler=function(){n.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},n.backdropClickHandler=function(){n.setState({sideDrawerOpen:!1})},n.state={sideDrawerOpen:!1,isLoged:!1,username:sessionStorage.getItem("username"),admin:sessionStorage.getItem("admin"),token:sessionStorage.getItem("token")},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){null!=this.state.token&&this.setState({isLoged:"true"})}},{key:"render",value:function(){var e,t=this;return this.state.sideDrawerOpen&&(e=r.a.createElement(b,{backdropClickHandler:this.backdropClickHandler})),r.a.createElement(d.a,null,r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(h,{drawerClickHandler:this.drawnerToogleClickHandler,isLoged:this.state.isLoged,isLogedHandler:this.isLogedHandler,admin:this.state.admin}),r.a.createElement(E,{show:this.state.sideDrawerOpen,backdropClickHandler:this.backdropClickHandler,isLoged:this.state.isLoged,isLogedHandler:this.isLogedHandler,admin:this.state.admin}),e,r.a.createElement("main",null,r.a.createElement(J.a,{path:"/Mabea/",exact:!0,component:V}),r.a.createElement(J.a,{path:"/Read",component:function(){return r.a.createElement(y,{isLoged:t.state.isLoged})}}),r.a.createElement(J.a,{path:"/Publish",component:function(){return r.a.createElement(N,{username:t.state.username})}}),r.a.createElement(J.a,{path:"/LogIn",component:function(){return r.a.createElement(F,{isLogedHandler:t.isLogedHandler,isLoged:t.state.isLoged,getUsername:t.getUsername,username:t.state.username,getToken:t.getToken,getAdmin:t.getAdmin})}}),r.a.createElement(J.a,{path:"/SignUp",component:W}),r.a.createElement(J.a,{path:"/Moderation",component:function(){return r.a.createElement(G,null)}}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,{name:"Nicolas"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.f86e3cb0.chunk.js.map