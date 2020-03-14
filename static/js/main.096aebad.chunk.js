(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{39:function(e,a,t){e.exports=t(71)},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),o=(t(44),t(5)),i=t(6),s=t(8),m=t(7),u=t(9),d=(t(45),t(46),t(75)),p=t(74),E=t(16),h=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={navExpanded:!1},t.setNavExpanded=function(e){t.setState({navExpanded:e})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",(function(){window.scrollY>100&&console.log("scrolled")}))}},{key:"handleSetActive",value:function(e){document.getElementById(e).style.color="orange"}},{key:"handleSetInactive",value:function(e){document.getElementById(e).style.color="gainsboro"}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,{onToggle:this.setNavExpanded,expanded:this.state.navExpanded,sticky:"top",collapseOnSelect:!0,bg:"dark",expand:"lg",variant:"dark"},l.a.createElement(d.a.Brand,{href:"#"},l.a.createElement("p1",null,l.a.createElement("b",null,"KEVIN SUTRISNO",l.a.createElement("br",null))),l.a.createElement("p2",null,"FRONT-END / GAME DEVELOPER")),l.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(p.a,{className:"center-navbar"},l.a.createElement("div",{class:"nav-item",id:"two"},l.a.createElement(E.Link,{activeClassName:"active",exact:!0,to:"section-two",spy:!0,smooth:!0,offset:-250,duration:500,ignoreCancelEvents:!0,onSetActive:function(){return e.handleSetActive("two")},onSetInactive:function(){return e.handleSetInactive("two")}},"ABOUT")),l.a.createElement("div",{class:"nav-item",id:"zero"},l.a.createElement(E.Link,{activeClassName:"active",exact:!0,to:"section-zero",spy:!0,smooth:!0,offset:-95,duration:500,ignoreCancelEvents:!0,onSetActive:function(){return e.handleSetActive("zero")},onSetInactive:function(){return e.handleSetInactive("zero")}},"EXPERIENCES")),l.a.createElement("div",{class:"nav-item",id:"one"},l.a.createElement(E.Link,{activeClassName:"active",exact:!0,to:"section-one",spy:!0,smooth:!0,offset:-80,duration:500,ignoreCancelEvents:!0,onSetActive:function(){return e.handleSetActive("one")},onSetInactive:function(){return e.handleSetInactive("one")}},"PROJECTS")),l.a.createElement("a",{href:"resume.pdf",target:"blank",class:"nav-item",id:"three"}," ","RESUME"))))}}]),a}(n.Component);t(65);var f=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"social-links"},l.a.createElement("a",{href:"/#",onClick:function(){return window.open("https://linkedin.com/in/kevin-sutrisno")}},l.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),l.a.createElement("a",{href:"/#",onClick:function(){return window.open("https://github.com/ksutrisno")}},l.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})),l.a.createElement("a",{href:"/#",onClick:function(){return window.open("https://twitter.com/sutrisno_kevin")}},l.a.createElement("i",{className:"fa fa-twitter-square","aria-hidden":"true"})),l.a.createElement("a",{href:"/#",onClick:function(){return window.open("https://www.instagram.com/kejosus")}},l.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"}))),l.a.createElement("div",{className:"email"},l.a.createElement("e",null,"kevinjsutrisno@gmail.com")))},g=t(38),v=(t(66),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"projects",id:"section-one"},l.a.createElement("div",{class:"projects-header"},l.a.createElement("h2",null,l.a.createElement("b",null,"Commercial Project"))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"desc-col"},l.a.createElement("h3",{className:"project-title"},"TAP RUSH"),l.a.createElement("h5",{className:"project-platform"},"Android"),l.a.createElement("p",null,"Tap rush is a mobile arcade game with multiple different game modes. The player need to match the color of the upcoming projectile with the wheel. This game aim to train the player reflex and hand-eye coordination"),l.a.createElement("h5",null," Features:"),l.a.createElement("ul",null,l.a.createElement("li",{className:"point"}," 3 different game modes"),l.a.createElement("li",{className:"point"}," ","Various patterns of incoming projectiles"),l.a.createElement("li",{className:"point"}," High score & leaderboard"),l.a.createElement("li",{className:"point"}," ","Store for cosmetics and customization")),l.a.createElement("div",{className:"horizontal-container"},l.a.createElement("a",{className:"link",href:"https://play.google.com/store/apps/details?id=com.ThreeOneNine.ColorRush"},l.a.createElement("img",{class:"gplaylogo",src:"googleplaylogo.png",alt:"googleplay"})),l.a.createElement("img",{class:"unity",src:"unitylogo.png",alt:"googleplay"}))),l.a.createElement("div",{className:"video-col"}," ",l.a.createElement("iframe",{title:"taprush",width:"100%",height:"100%",src:"https://www.youtube.com/embed/a4fP8sVVePI",frameborder:"0",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"})," ")),l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",{class:"projects-header"},l.a.createElement("h2",null,l.a.createElement("b",null,"Personal Projects"))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"desc-col"},l.a.createElement("h3",{className:"project-title"},"DIMENSION HUNTER"),l.a.createElement("h5",{className:"project-platform"},"Windows"),l.a.createElement("p",null,"Dimension Hunter is a 2D Metroidvania game about a renowned bounty hunter named X. His mission is to enter the mysterious tower created by the Mastedmind in order to find the rare artifact hidden within the tower."),l.a.createElement("h5",null," Features:"),l.a.createElement("ul",null,l.a.createElement("li",{className:"point"}," Fast pace combat"),l.a.createElement("li",{className:"point"}," Multiple enemies"),l.a.createElement("li",{className:"point"}," Different weapon to choose from"),l.a.createElement("li",{className:"point"}," Boss fights")),l.a.createElement("a",{className:"link",href:"https://drive.google.com/open?id=1tBuVscpTUzAQZcRLetrIIeVWry-veYut",target:"blank"},l.a.createElement("button",{className:"button",type:"button"},"DOWNLOAD DEMO"))),l.a.createElement("div",{className:"video-col"}," ",l.a.createElement("iframe",{title:"dimensionhunter",width:"100%",height:"100%",src:"https://www.youtube.com/embed/E8NqJmagab4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"})," ")),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"desc-col"},l.a.createElement("h3",{className:"project-title"},"SLIME ESCAPE FROM HELL"),l.a.createElement("h5",{className:"project-platform"},"Windows"),l.a.createElement("p",null," ","Escape From Hell is a 2D roguelike dungeon crawler with randomly generated maps. The game features 8 different weapons and 5 different enemies. This game is orginally made as a group project during school."),l.a.createElement("h5",null," Features:"),l.a.createElement("ul",null,l.a.createElement("li",{class:"point"}," 5 unique enemies"),l.a.createElement("li",{class:"point"}," 8 unique weapons"),l.a.createElement("li",{class:"point"}," Traps and surprises"),l.a.createElement("li",{class:"point"}," Randomly generated maps")),l.a.createElement("a",{className:"link",href:"https://askeladd2802.itch.io/slime-escape-from-hell",target:"blank"},l.a.createElement("button",{className:"button",type:"button"},"DOWNLOAD DEMO"))),l.a.createElement("div",{className:"video-col"}," ",l.a.createElement("iframe",{title:"slime",width:"100%",height:"100%",src:"https://www.youtube.com/embed/tatxG39f2f4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"})," ")),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"desc-col"},l.a.createElement("h3",{className:"project-title"},"UNREAL ENGINE AI DEMO - BEHAVIOUR TREE"),l.a.createElement("h5",{className:"project-platform"},"Windows"),l.a.createElement("p",null," ","A demonstration of Unreal Engine Behaviour Tree. This demo was made during my Midterm of AI Programming class at Academy of Art."),l.a.createElement("a",{className:"link",href:"https://drive.google.com/open?id=1-kp3eVKD1o-3T9HVtmCcnZdifctKKWIa",target:"blank"},l.a.createElement("button",{className:"button",type:"button"},"DOWNLOAD DEMO"))),l.a.createElement(g.a,{className:"behaviour-tree",small:"behaviourtree_unreal.png",large:"behaviourtree_unreal_lg.png",alt:"Behaviour Tree"})),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"desc-col"},l.a.createElement("h3",{className:"project-title"},"Multiplayer Minesweeper"),l.a.createElement("h5",{className:"project-platform"},"Windows x64"),l.a.createElement("p",null," ","A multiplayer minesweeper game made with C++ and SDL Development Library. The networking is made using Win32 Socket API and the data is serialized using Google Protobuf. I didn't implement the whole minesweeper mechanic because the main aim of the project is to show understanding over network programming."),l.a.createElement("a",{className:"link",href:"https://drive.google.com/open?id=1xBhvxdGrdz-CHMzY8Pe_GXPYlRBVds_z",target:"blank"},l.a.createElement("button",{className:"button",type:"button"},"SOURCE CODE"))),l.a.createElement("div",{className:"image-col"},l.a.createElement("img",{src:"minesweeper.png",alt:"minesweeper",class:"minesweeper"}))),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"desc-col"},l.a.createElement("h3",{className:"project-title"},"Pacman Clone"),l.a.createElement("h5",{className:"project-platform"},"Windows x86"),l.a.createElement("p",null," ","A pacman clone made during my final year in University. The game is made using my classmates game Engine. The engine uses Lua as the scripting language."),l.a.createElement("h5",null," Teamates:"),l.a.createElement("ul",null,l.a.createElement("li",{class:"point"}," Shane King(Engine Owner)"),l.a.createElement("li",{class:"point"}," Tedo Pranowo")),l.a.createElement("a",{className:"link",href:"https://drive.google.com/open?id=1a6-MoSSR6yIon4cqxb176tZoY2r1mMr6",target:"blank"},l.a.createElement("button",{className:"button",type:"button"},"DOWNLOAD GAME"))),l.a.createElement("div",{className:"image-col"},l.a.createElement("img",{src:"pacman.png",alt:"pacman",class:"pacman"})))))}}]),a}(n.Component));t(67);var w=function(){return l.a.createElement("div",{id:"section-two",className:"about-container"},l.a.createElement("img",{src:"/photo.png",alt:"Avatar",className:"center"}),l.a.createElement("h2",null,"About Me"),l.a.createElement("div",{className:"aboutme"},l.a.createElement("p",{className:"bio"},"Hi, I'm a Game/Front-End Developer based in San Francisco and originally from Jakarta, Indonesia. Since I was a little kid, I have always enjoyed creating games out of papers and tools found around my house. Whether using a pen cap as a top, or creating a board game out of pen and paper, I always love to channel my creativity. In 2012, I started to pick up programming and in 2015 I started making my own video games.",l.a.createElement("br",null),"  ",l.a.createElement("br",null),"Recently I have been working as a contract Unity Developer for a few different game companies in San Francisco. Currently, I have 4 years of experience developing games using Unity. In my spare time, I developed Android games for the Play Store. I am also a self taught web-developer with knowledge in CSS, HTML, JS and React.js. My dream is to start my own game company and keep making games that everyone can enjoy!",l.a.createElement("br",null),"  ",l.a.createElement("br",null),l.a.createElement("b",null,"C# | C++ | Unity | Unreal-Engine | JavaScript | HTML | CSS | React.js | Node.js"))))},b=(t(68),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"scrollToTop",value:function(){E.animateScroll.scrollToTop()}},{key:"render",value:function(){return l.a.createElement("div",{className:"backToTop"},l.a.createElement("button",{className:"toTopButton",onClick:this.scrollToTop},"GO BACK TO TOP"))}}]),a}(n.Component)),y=(t(69),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",{className:"experiences",id:"section-zero"},l.a.createElement("div",{className:"experiences-container"},l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement("b",null,"Professional Experiences"))),l.a.createElement("div",{className:"experiences-item"},l.a.createElement("a",{href:"https://www.krikey.com"},l.a.createElement("img",{src:"/Krikey.jpg",alt:"krikey",class:"logo"}))),l.a.createElement("div",{class:"experiences-item"},l.a.createElement("h3",null,"Unity Developer (Contract) \u2013 San Francisco, CA "),l.a.createElement("ul",null,l.a.createElement("li",{className:"point"}," Developed Augmented Reality mini games for both IOS and Android "),l.a.createElement("li",{className:"point"}," Product ownership over each game features and implementation"),l.a.createElement("li",{className:"point"},"  Worked on both single player and multiplayer aspect of the mini games "),l.a.createElement("li",{className:"point"},"  Contribute in both design and user experiences of the mini games "))),l.a.createElement("div",{className:"experiences-item"},l.a.createElement("a",{href:"https://www.playtable.com"},l.a.createElement("img",{src:"/playtable.png",alt:"playtable",class:"logo"}))),l.a.createElement("div",{className:"experiences-item"},l.a.createElement("h3",null,"Unity Developer (Contract) \u2013 South San Francisco, CA "),l.a.createElement("ul",null,l.a.createElement("li",{className:"point"}," Worked on multiple classic card games such as Hearts/ Spades and party games",l.a.createElement("br",null),"such as Card Against Humanity for both the PlayTable console and Handheld (mobile) "),l.a.createElement("li",{className:"point"}," Programmed the gameplay as well as the cards and UI animation in Unity "))))))}}]),a}(n.Component)),N=(t(70),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(f,null),l.a.createElement(w,null),l.a.createElement(y,null),l.a.createElement(v,null),l.a.createElement(b,null))}}]),a}(n.Component));c.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.096aebad.chunk.js.map