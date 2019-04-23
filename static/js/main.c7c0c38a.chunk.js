(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{232:function(e,t,a){e.exports=a(449)},237:function(e,t,a){},238:function(e,t,a){},449:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a.n(i),s=(a(237),a(10)),c=a(11),o=a(13),m=a(12),u=a(14),d=a(36),h=(a(238),a(4)),p=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto",height:"100%"}},r.a.createElement(h.Grid,{className:"landing-grid",style:{height:"100%"}},r.a.createElement(h.Cell,{col:12},r.a.createElement("span",{alt:"avatar",className:"avatarImage"}),r.a.createElement("div",{className:"bannerText"},r.a.createElement("h1",null,"Full Stack Web Developer"),r.a.createElement("p",null,"I use web developement to help you reach your goals"),r.a.createElement("hr",null),r.a.createElement("p",null,"HTML/CSS | JS | PHP | MySQL | AWS | Apache | React | Node | Express | MongoDB"),r.a.createElement("a",{href:"https://linkedin.com/in/steinchristensen",target:"_blank"},r.a.createElement("i",{class:"fab fa-linkedin"})),r.a.createElement("a",{href:"https://twitter.com/steinparkit",target:"_blank"},r.a.createElement("i",{class:"fab fa-twitter-square"}))))))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About"))}}]),t}(n.Component),b=a(29),E=(a(62),a(143)),f=a.n(E),y=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Grid,{style:{background:"#292929",width:"100%"}},r.a.createElement(h.Cell,{col:5},r.a.createElement("img",{style:{maxWidth:"100%"},src:this.props.entryImage})),r.a.createElement(h.Cell,{col:7},r.a.createElement("div",{style:{}},r.a.createElement("h2",{style:{color:"white"}},this.props.title),r.a.createElement("h4",{style:{color:"white"}},this.props.subtitle)))),r.a.createElement(h.Grid,{style:{width:"100%",color:"#292929"}},r.a.createElement(h.Cell,{col:5},r.a.createElement("p",null,this.props.description)),r.a.createElement(h.Cell,{col:7},r.a.createElement(f.a,{images:this.props.images}))))}}]),t}(n.Component);var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e,t){console.log(t),a.setState({activeTab:t})},a.state={activeTab:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},function(e){if(0===e.activeTab)return r.a.createElement(y,{images:[{src:"/img/parkit1.jpg",thumbnail:"/img/parkit1.jpg",thumbnailWidth:320,thumbnailHeight:174},{src:"/img/parkit2.jpg",thumbnail:"/img/parkit2.jpg",thumbnailWidth:320,thumbnailHeight:212},{src:"/img/parkit3.jpg",thumbnail:"/img/parkit3.jpg",thumbnailWidth:320,thumbnailHeight:212}],entryImage:"/img/parkitentry.png",title:"ParkIt",subtitle:"A monthly parking management system to streamline parking operations.",description:"As CTO and co-founder, I have worked with my business partner to identify a gap in the market for a robust but easy to use cloud based monthly parking management software. I am the sole developer responsible for creating and maintaining this web application. Our system helps parking operations grow without needing to hire additional staff to handle invoicing, applications, and accounting."});if(1===e.activeTab)return r.a.createElement(y,{images:[{src:"/img/portfolio1.JPG",thumbnail:"/img/portfolio1.JPG",thumbnailWidth:320,thumbnailHeight:174}],entryImage:"/img/portfolioentry.png",title:"Portfolio Manager",subtitle:"A stock management tool to organize your allocations.",description:"This tool stores your stocks and compares your current asset class allocations to your goal allocations based on live stock price data."});if(2===e.activeTab)return r.a.createElement(y,{images:[{src:"/img/paul1.JPG",thumbnail:"/img/paul1.JPG",thumbnailWidth:320,thumbnailHeight:174},{src:"/img/paul2.JPG",thumbnail:"/img/paul2.JPG",thumbnailWidth:320,thumbnailHeight:212},{src:"/img/paul3.JPG",thumbnail:"/img/paul3.JPG",thumbnailWidth:320,thumbnailHeight:212}],entryImage:"/img/paulentry.png",title:"Paul Gibbons",subtitle:"A virtual podium to challenge current ways of thinking.",description:"This website was created for a client who provides keynotes, blogs, podcasts, and books to individuals who are interested in the intersection of science and philosophy. His goal was to grow his audience and expand his reach as a recognized authority. As a result of his hard work and creativity the website redesign gave him a platform to share his unique content and draw in."});if(3===e.activeTab)return r.a.createElement(y,{images:[{src:"/img/ceo1.JPG",thumbnail:"/img/ceo1.JPG",thumbnailWidth:320,thumbnailHeight:174,caption:"After Rain (Jeshu John - designerspics.com)"},{src:"/img/ceo2.JPG",thumbnail:"/img/ceo2.JPG",thumbnailWidth:320,thumbnailHeight:212,caption:"Boats (Jeshu John - designerspics.com)"},{src:"/img/ceo3.JPG",thumbnail:"/img/ceo3.JPG",thumbnailWidth:320,thumbnailHeight:212}],entryImage:"/img/ceoadvisoryentry.png",title:"CEO Advisory",subtitle:"An online library to educate potential clients on a new way of viewing their organization.",description:"This website was created for a client who owns a credit union merger advisory firm. His goal was to position his company as a thought leader in the industry and needed an online presence to act as a library of whitepapers and information. As a result of the website rebuilt and new content driven marketing strategy, website traffic increased over 250% and continues to generate valuable business."})}(this.state))}}]),t}(r.a.Component),v=Object(b.withStyles)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}})(w),j=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Grid,null,r.a.createElement(h.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(h.Cell,{col:8},r.a.createElement("h4",{style:{margin:"0px"}},this.props.expirenceName),r.a.createElement("h6",{style:{marginTop:"0px"}},this.props.title),r.a.createElement("p",null,this.props.description)))}}]),t}(n.Component),k=a(7),O=a.n(k),C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:12,sm:4,className:"resumeLeftCol"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{className:"avatarImage"})),r.a.createElement("h2",{style:{paddingTop:"2em"}},"Stein Christensen"),r.a.createElement("h4",{style:{color:"grey"}},"Programmer"),r.a.createElement("hr",{style:{borderTop:"3px solid #860000"}}),r.a.createElement("p",{style:{fontStyle:"italic"}},'"Be humble. Be hungery. And always be the hardest worker in the room."'),r.a.createElement("p",null,'-- Dwayne "The Rock" Johnson '),r.a.createElement("hr",{style:{borderTop:"3px solid #860000"}}),r.a.createElement("h5",null,"Email"),r.a.createElement("p",null,"steinc95@gmail.com"),r.a.createElement("h5",null,"Website"),r.a.createElement("p",null,r.a.createElement("a",{href:"steinkchristensen.github.io"},"www.steinkchristensen.github.io"))),r.a.createElement(O.a,{item:!0,xs:12,sm:8,className:"resumeRightCol"},r.a.createElement("h1",null,"Expirence"),r.a.createElement(j,{startYear:"2018",endYear:"Present",expirenceName:"ParkIt",title:"CTO",description:"Launched and maintained an automated invoicing, accounting, and customer information management system for parking companies."}),r.a.createElement(j,{startYear:"2017",endYear:"2017",expirenceName:"Travelport",title:"Project Manager Intern",description:"Helped guide a team through transition to agile development from waterfall development on a piece of legacy software."}),r.a.createElement(j,{startYear:"2015",endYear:"Present",expirenceName:"Freelance Web Designer",title:"",description:"Help clients develop vision and objective for websites. Create websites based on customer technical and functional requirements."}),r.a.createElement("hr",{style:{borderTop:"3px solid #860000"}}),r.a.createElement("h1",null,"Education"),r.a.createElement(j,{startYear:"2014",endYear:"2017",expirenceName:"Colorado State University",title:"BS in Computer Information Systems",description:"Led Entreprenuership Club and took courses in programming, database design, systems analysis, project management, and more."}),r.a.createElement("h1",null,"Skills"),r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:12,sm:3},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Systems Design"),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Project Management"),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," MongoDB")),r.a.createElement(O.a,{item:!0,xs:12,sm:3},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Express"),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," React"),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Node.js")),r.a.createElement(O.a,{item:!0,xs:12,sm:3},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," PHP"),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Apache"),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Linux")),r.a.createElement(O.a,{item:!0,xs:12,sm:3},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," AWS Routes, Balancing, EC2"),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Javascript"),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," jQuery"),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Stripe")))))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact Page"))}}]),t}(n.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.Grid,{className:"projects-grid"},r.a.createElement(h.Cell,{col:4},r.a.createElement(h.Card,{shadow:5,style:{minwidth:"450px",margin:"auto"}},r.a.createElement(h.CardTitle,{className:"cardTitle ceoAdvisoryCard"}),r.a.createElement(h.CardText,null,r.a.createElement("h2",{className:"card-Heading"},"Paul Gibbons"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."),r.a.createElement(h.CardActions,{border:!0},r.a.createElement(h.Button,{colored:!0},"Get Started")),r.a.createElement(h.CardMenu,{style:{color:"#fff"}},r.a.createElement(h.IconButton,{name:"share"})))),r.a.createElement(h.Cell,{col:4},r.a.createElement(h.Card,{shadow:5,style:{minwidth:"450px",margin:"auto"}},r.a.createElement(h.CardTitle,{className:"cardTitle ceoAdvisoryCard"}),r.a.createElement(h.CardText,null,r.a.createElement("h2",{className:"card-Heading"},"Stock Balancer"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."),r.a.createElement(h.CardActions,{border:!0},r.a.createElement(h.Button,{colored:!0},"Get Started")),r.a.createElement(h.CardMenu,{style:{color:"#fff"}},r.a.createElement(h.IconButton,{name:"share"}))))))}}]),t}(n.Component),S=a(35),N=function(){return r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:p}),r.a.createElement(S.a,{path:"/aboutme",component:g}),r.a.createElement(S.a,{path:"/articles",component:P}),r.a.createElement(S.a,{path:"/projects",component:v}),r.a.createElement(S.a,{path:"/resume",component:C}),r.a.createElement(S.a,{path:"/contact",component:x}))},T=a(30),A=a(23),G=a(146),J=a.n(G),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={drawerActivate:!1,drawer:!1},a.createDrawer=a.createDrawer.bind(Object(d.a)(Object(d.a)(a))),a.destroyDrawer=a.destroyDrawer.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.innerWidth<=600&&this.setState({drawerActivate:!0}),window.addEventListener("resize",function(){window.innerWidth<=600?e.setState({drawerActivate:!0}):e.setState({drawerActivate:!1})})}},{key:"createDrawer",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(A.a,{className:"headerColor",position:"static"},r.a.createElement(A.f,null,r.a.createElement(A.b,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(J.a,{className:this.props.classes.sideBarIcon,onClick:function(){e.setState({drawer:!0})}}),r.a.createElement(A.g,{color:"inherit",variant:"headline"},"Stein Christensen"),r.a.createElement(A.g,{color:"inherit",variant:"headline"})))),r.a.createElement(A.e,{open:this.state.drawer,onClose:function(){e.setState({drawer:!1})},onOpen:function(){e.setState({drawer:!0})}},r.a.createElement("div",{tabIndex:0,role:"button",onClick:function(){e.setState({drawer:!1})},onKeyDown:function(){e.setState({drawer:!1})}},r.a.createElement(A.c,{className:this.props.classes.list},r.a.createElement(A.d,{key:1,button:!0,divider:!0},r.a.createElement(T.b,{className:t.navLinks,to:"/projects"},"Projects")),r.a.createElement(A.d,{key:2,button:!0,divider:!0},r.a.createElement(T.b,{className:t.navLinks,to:"/resume"},"Resume"))))))}},{key:"destroyDrawer",value:function(){var e=this.props.classes;return r.a.createElement(A.a,{className:"headerColor",position:"static"},r.a.createElement(A.f,null,r.a.createElement(A.g,{variant:"headline",style:{flexGrow:1},color:"inherit"},"Stein Christensen"),r.a.createElement(A.g,{variant:"subheading",className:e.padding,color:"inherit"},r.a.createElement(T.b,{className:e.navLinks,style:{color:"white"},to:"/projects"},"Projects")),r.a.createElement(A.g,{variant:"subheading",className:e.padding,color:"inherit"},r.a.createElement(T.b,{className:e.navLinks,style:{color:"white"},to:"/resume"},"Resume"))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.drawerActivate?this.createDrawer():this.destroyDrawer(),r.a.createElement(N,null))}}]),t}(n.Component),W=Object(b.withStyles)({list:{width:200},padding:{paddingRight:30,cursor:"pointer"},navLinks:{textDecoration:"none"},sideBarIcon:{padding:0,color:"white",cursor:"pointer"}})(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(447),a(448);l.a.render(r.a.createElement(T.a,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[232,1,2]]]);
//# sourceMappingURL=main.c7c0c38a.chunk.js.map