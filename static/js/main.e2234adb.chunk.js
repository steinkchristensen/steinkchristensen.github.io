(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,t,a){e.exports=a(460)},240:function(e,t,a){},241:function(e,t,a){},460:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a.n(i),s=(a(240),a(16)),c=a(17),o=a(19),m=a(18),u=a(20),h=a(38),d=(a(241),a(5)),p=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto",height:"100%"}},r.a.createElement(d.Grid,{className:"landing-grid",style:{height:"100%"}},r.a.createElement(d.Cell,{col:12},r.a.createElement("span",{alt:"avatar",className:"avatarImage"}),r.a.createElement("div",{className:"bannerText"},r.a.createElement("h1",null,"Full Stack Web Developer"),r.a.createElement("p",null,"I use web developement to help you reach your goals"),r.a.createElement("hr",null),r.a.createElement("p",null,"HTML/CSS | JS | PHP | MySQL | AWS | Apache | React | Node | Express | MongoDB"),r.a.createElement("a",{href:"https://linkedin.com/in/steinchristensen",target:"_blank"},r.a.createElement("i",{class:"fab fa-linkedin"})),r.a.createElement("a",{href:"https://twitter.com/steinparkit",target:"_blank"},r.a.createElement("i",{class:"fab fa-twitter-square"}))))))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About"))}}]),t}(n.Component),E=a(29),b=a(67),f=a.n(b),y=a(68),w=a.n(y),v=a(36),j=a.n(v),k=(a(65),a(146)),O=a.n(k),C=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.Grid,{style:{background:"#292929",width:"100%"}},r.a.createElement(d.Cell,{col:5},r.a.createElement("img",{style:{maxWidth:"100%"},src:this.props.entryImage})),r.a.createElement(d.Cell,{col:7},r.a.createElement("div",{style:{}},r.a.createElement("h2",{style:{color:"white"}},this.props.title),r.a.createElement("h4",{style:{color:"white"}},this.props.subtitle)))),r.a.createElement(d.Grid,{style:{width:"100%",color:"#292929"}},r.a.createElement(d.Cell,{col:5},r.a.createElement("p",null,this.props.description)),r.a.createElement(d.Cell,{col:7},r.a.createElement(O.a,{images:this.props.images}))))}}]),t}(n.Component);var x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={activeTab:0},a.handleChange=function(e,t){a.setState({activeTab:t})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleCatagories",value:function(){if(0===this.state.activeTab){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{images:[{src:"/img/parkit1.jpg",thumbnail:"/img/parkit1.jpg",thumbnailWidth:320,thumbnailHeight:174},{src:"/img/parkit2.jpg",thumbnail:"/img/parkit2.jpg",thumbnailWidth:320,thumbnailHeight:212},{src:"/img/parkit3.jpg",thumbnail:"/img/parkit3.jpg",thumbnailWidth:320,thumbnailHeight:212}],entryImage:"/img/parkitentry.png",title:"ParkIt",subtitle:"A monthly parking management system to streamline parking operations.",description:"As CTO and co-founder, I have worked with my business partner to identify a gap in the market for a robust but easy to use cloud based monthly parking management software. I am the sole developer responsible for creating and maintaining this web application. Our system helps parking operations grow without needing to hire additional staff to handle invoicing, applications, and accounting."}))}if(1===this.state.activeTab){return r.a.createElement(C,{images:[{src:"/img/portfolio1.JPG",thumbnail:"/img/portfolio1.JPG",thumbnailWidth:320,thumbnailHeight:174}],entryImage:"/img/portfolioentry.png",title:"Portfolio Manager",subtitle:"A stock management tool to organize your allocations.",description:"This tool stores your stocks and compares your current asset class allocations to your goal allocations based on live stock price data."})}if(2===this.state.activeTab){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{images:[{src:"/img/paul1.JPG",thumbnail:"/img/paul1.JPG",thumbnailWidth:320,thumbnailHeight:174},{src:"/img/paul2.JPG",thumbnail:"/img/paul2.JPG",thumbnailWidth:320,thumbnailHeight:212},{src:"/img/paul3.JPG",thumbnail:"/img/paul3.JPG",thumbnailWidth:320,thumbnailHeight:212}],entryImage:"/img/paulentry.png",title:"Paul Gibbons",subtitle:"A virtual podium to challenge current ways of thinking.",description:"This website was created for a client who provides keynotes, blogs, podcasts, and books to individuals who are interested in the intersection of science and philosophy. His goal was to grow his audience and expand his reach as a recognized authority. As a result of his hard work and creativity the website redesign gave him a platform to share his unique content and draw in."}))}if(3===this.state.activeTab){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{images:[{src:"/img/ceo1.JPG",thumbnail:"/img/ceo1.JPG",thumbnailWidth:320,thumbnailHeight:174,caption:"After Rain (Jeshu John - designerspics.com)"},{src:"/img/ceo2.JPG",thumbnail:"/img/ceo2.JPG",thumbnailWidth:320,thumbnailHeight:212,caption:"Boats (Jeshu John - designerspics.com)"},{src:"/img/ceo3.JPG",thumbnail:"/img/ceo3.JPG",thumbnailWidth:320,thumbnailHeight:212}],entryImage:"/img/ceoadvisoryentry.png",title:"CEO Advisory",subtitle:"An online library to educate potential clients on a new way of viewing their organization.",description:"This website was created for a client who owns a credit union merger advisory firm. His goal was to position his company as a thought leader in the industry and needed an online presence to act as a library of whitepapers and information. As a result of the website rebuilt and new content driven marketing strategy, website traffic increased over 250% and continues to generate valuable business."}))}}},{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{position:"static",color:"default",textColor:"primary",indicatorColor:"primary"},r.a.createElement(w.a,{value:t},r.a.createElement(j.a,{label:"Streamline"}),r.a.createElement(j.a,{label:"Organize"}),r.a.createElement(j.a,{label:"Challenge"}),r.a.createElement(j.a,{label:"Educate"}))))}}]),t}(r.a.Component),S=Object(E.withStyles)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}})(x),P=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.Grid,null,r.a.createElement(d.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(d.Cell,{col:8},r.a.createElement("h4",{style:{margin:"0px"}},this.props.expirenceName),r.a.createElement("h6",{style:{marginTop:"0px"}},this.props.title),r.a.createElement("p",null,this.props.description)))}}]),t}(n.Component),N=a(7),A=a.n(N),T=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,{container:!0},r.a.createElement(A.a,{item:!0,xs:12,sm:4,className:"resumeLeftCol"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{className:"avatarImage"})),r.a.createElement("h2",{style:{paddingTop:"2em"}},"Stein Christensen"),r.a.createElement("h4",{style:{color:"grey"}},"Programmer"),r.a.createElement("hr",{style:{borderTop:"3px solid #860000"}}),r.a.createElement("p",{style:{fontStyle:"italic"}},'"Be humble. Be hungery. And always be the hardest worker in the room."'),r.a.createElement("p",null,'-- Dwayne "The Rock" Johnson '),r.a.createElement("hr",{style:{borderTop:"3px solid #860000"}}),r.a.createElement("h5",null,"Email"),r.a.createElement("p",null,"steinc95@gmail.com"),r.a.createElement("h5",null,"Website"),r.a.createElement("p",null,r.a.createElement("a",{href:"steinkchristensen.github.io"},"www.steinkchristensen.github.io"))),r.a.createElement(A.a,{item:!0,xs:12,sm:8,className:"resumeRightCol"},r.a.createElement("h1",null,"Expirence"),r.a.createElement(P,{startYear:"2018",endYear:"Present",expirenceName:"ParkIt",title:"CTO",description:"Launched and maintained an automated invoicing, accounting, and customer information management system for parking companies."}),r.a.createElement(P,{startYear:"2017",endYear:"2017",expirenceName:"Travelport",title:"Project Manager Intern",description:"Helped guide a team through transition to agile development from waterfall development on a piece of legacy software."}),r.a.createElement(P,{startYear:"2015",endYear:"Present",expirenceName:"Freelance Web Designer",title:"",description:"Help clients develop vision and objective for websites. Create websites based on customer technical and functional requirements."}),r.a.createElement("hr",{style:{borderTop:"3px solid #860000"}}),r.a.createElement("h1",null,"Education"),r.a.createElement(P,{startYear:"2014",endYear:"2017",expirenceName:"Colorado State University",title:"BS in Computer Information Systems",description:"Led Entreprenuership Club and took courses in programming, database design, systems analysis, project management, and more."}),r.a.createElement("h1",null,"Skills"),r.a.createElement(A.a,{container:!0},r.a.createElement(A.a,{item:!0,xs:12,sm:3},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Systems Design"),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Project Management"),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," MongoDB")),r.a.createElement(A.a,{item:!0,xs:12,sm:3},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Express"),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," React"),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Node.js")),r.a.createElement(A.a,{item:!0,xs:12,sm:3},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," PHP"),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Apache"),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Linux")),r.a.createElement(A.a,{item:!0,xs:12,sm:3},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," AWS Routes, Balancing, EC2"),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Javascript"),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," jQuery"),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("i",{class:"fas fa-plus-square"})," Stripe")))))}}]),t}(n.Component),G=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact Page"))}}]),t}(n.Component),J=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.Grid,{className:"projects-grid"},r.a.createElement(d.Cell,{col:4},r.a.createElement(d.Card,{shadow:5,style:{minwidth:"450px",margin:"auto"}},r.a.createElement(d.CardTitle,{className:"cardTitle ceoAdvisoryCard"}),r.a.createElement(d.CardText,null,r.a.createElement("h2",{className:"card-Heading"},"Paul Gibbons"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."),r.a.createElement(d.CardActions,{border:!0},r.a.createElement(d.Button,{colored:!0},"Get Started")),r.a.createElement(d.CardMenu,{style:{color:"#fff"}},r.a.createElement(d.IconButton,{name:"share"})))),r.a.createElement(d.Cell,{col:4},r.a.createElement(d.Card,{shadow:5,style:{minwidth:"450px",margin:"auto"}},r.a.createElement(d.CardTitle,{className:"cardTitle ceoAdvisoryCard"}),r.a.createElement(d.CardText,null,r.a.createElement("h2",{className:"card-Heading"},"Stock Balancer"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..."),r.a.createElement(d.CardActions,{border:!0},r.a.createElement(d.Button,{colored:!0},"Get Started")),r.a.createElement(d.CardMenu,{style:{color:"#fff"}},r.a.createElement(d.IconButton,{name:"share"}))))))}}]),t}(n.Component),I=a(37),W=function(){return r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/",component:p}),r.a.createElement(I.a,{path:"/aboutme",component:g}),r.a.createElement(I.a,{path:"/articles",component:J}),r.a.createElement(I.a,{path:"/projects",component:S}),r.a.createElement(I.a,{path:"/resume",component:T}),r.a.createElement(I.a,{path:"/contact",component:G}))},H=a(31),q=a(24),B=a(149),D=a.n(B),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={drawerActivate:!1,drawer:!1},a.createDrawer=a.createDrawer.bind(Object(h.a)(Object(h.a)(a))),a.destroyDrawer=a.destroyDrawer.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.innerWidth<=600&&this.setState({drawerActivate:!0}),window.addEventListener("resize",function(){window.innerWidth<=600?e.setState({drawerActivate:!0}):e.setState({drawerActivate:!1})})}},{key:"createDrawer",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(q.a,{className:"headerColor",position:"static"},r.a.createElement(q.f,null,r.a.createElement(q.b,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(D.a,{className:this.props.classes.sideBarIcon,onClick:function(){e.setState({drawer:!0})}}),r.a.createElement(q.g,{color:"inherit",variant:"headline"},"Stein Christensen"),r.a.createElement(q.g,{color:"inherit",variant:"headline"})))),r.a.createElement(q.e,{open:this.state.drawer,onClose:function(){e.setState({drawer:!1})},onOpen:function(){e.setState({drawer:!0})}},r.a.createElement("div",{tabIndex:0,role:"button",onClick:function(){e.setState({drawer:!1})},onKeyDown:function(){e.setState({drawer:!1})}},r.a.createElement(q.c,{className:this.props.classes.list},r.a.createElement(q.d,{key:1,button:!0,divider:!0},r.a.createElement(H.b,{className:t.navLinks,to:"/projects"},"Projects")),r.a.createElement(q.d,{key:2,button:!0,divider:!0},r.a.createElement(H.b,{className:t.navLinks,to:"/resume"},"Resume"))))))}},{key:"destroyDrawer",value:function(){var e=this.props.classes;return r.a.createElement(q.a,{className:"headerColor",position:"static"},r.a.createElement(q.f,null,r.a.createElement(q.g,{variant:"headline",style:{flexGrow:1},color:"inherit"},"Stein Christensen"),r.a.createElement(q.g,{variant:"subheading",className:e.padding,color:"inherit"},r.a.createElement(H.b,{className:e.navLinks,style:{color:"white"},to:"/projects"},"Projects")),r.a.createElement(q.g,{variant:"subheading",className:e.padding,color:"inherit"},r.a.createElement(H.b,{className:e.navLinks,style:{color:"white"},to:"/resume"},"Resume"))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.drawerActivate?this.createDrawer():this.destroyDrawer(),r.a.createElement(W,null))}}]),t}(n.Component),M=Object(E.withStyles)({list:{width:200},padding:{paddingRight:30,cursor:"pointer"},navLinks:{textDecoration:"none"},sideBarIcon:{padding:0,color:"white",cursor:"pointer"}})(L);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(458),a(459);l.a.render(r.a.createElement(H.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[235,1,2]]]);
//# sourceMappingURL=main.e2234adb.chunk.js.map