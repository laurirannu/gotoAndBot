(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a.p+"static/media/robot.ba6b288f.jpg"},167:function(e,t,a){e.exports=a(604)},172:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){e.exports=a.p+"static/media/right-arrow.0b974ee6.svg"},179:function(e,t,a){},604:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),r=a(163),c=a.n(r),o=(a(172),a(166)),i=a(104),u=a.n(i),l=a(164),m=a(39),d=a(40),g=a(42),p=a(41),h=a(43),b=(a(175),a(176),function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header"},s.a.createElement("img",{src:a(107),alt:"logo",className:"pic"}),s.a.createElement("p",{className:"name"},"gotoAndBot"))}}]),t}(s.a.Component)),f=(a(177),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={text:""},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.setState({text:""}),this.props.onSendMessage(this.state.text)}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)},className:"input-wrapper"},s.a.createElement("input",{onChange:function(t){return e.onChange(t)},value:this.state.text,type:"text",placeholder:"Write something...",autoFocus:!0,className:"input"}),s.a.createElement("button",{type:"submit",className:"input__arrow"},s.a.createElement("img",{src:a(178),alt:"right-arrow"})))}}]),t}(s.a.Component)),w=(a(179),function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=Object(g.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).renderMessage=function(e,t){var r=e.username,c=e.text,o=e.date,i=r===n.props.currentUser,u=i?"message message--user":"message message--bot";return s.a.createElement("li",{className:u,key:t},!i&&s.a.createElement("img",{src:a(107),alt:"logo",className:"bot-image"}),s.a.createElement("div",{className:"message__content"},s.a.createElement("div",{className:"message__username"},s.a.createElement("span",null,r),s.a.createElement("span",{className:"message__date"},o.toTimeString().substring(0,5))),s.a.createElement("div",{className:"message__text"},c)))},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.messages;return s.a.createElement("ul",{className:"messages-wrapper"},t.map(function(t,a){return e.renderMessage(t,a)}))}}]),t}(s.a.Component)),v=a(165),y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).botName="gotoAndBot",a.state={messages:[{text:"Hello, my name is ".concat(a.botName," and I know the following commands: /weather and /calc (i.e. /weather tartu, /calc 5+5)"),username:a.botName,date:new Date}],username:"Me"},a.weatherHandler=function(){var e=Object(l.a)(u.a.mark(function e(t){var n,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&APPID=b726b1f2856f8f8529633a409e58de2e"));case 2:return n=e.sent,e.next=5,n.json();case 5:200===(s=e.sent).cod?a.addNewMessage("Weather currently in ".concat(s.name,", ").concat(s.sys.country,": \n      ").concat(s.weather[0].main,", ").concat(s.main.temp,"\xb0C"),a.botName):"404"===s.cod&&a.addNewMessage("I don't know that location!",a.botName);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.messagesHandler=function(e){if("/weather"===e.substring(0,8).toLowerCase()){var t=e.substring(8,e.length);a.weatherHandler(t)}else if("/calc"===e.substring(0,5).toLowerCase()){var n=e.substring(5,e.length);try{var s=v.eval(n);a.addNewMessage("The answer is: ".concat(s),a.botName)}catch(r){a.addNewMessage("I'm sorry, I didn't quite understand that, please type your input in a style like: '/calc 5+5'",a.botName)}}else a.addNewMessage("I'm sorry, I can't understand simple text, please use /weather or /calc",a.botName)},a.addNewMessage=function(e,t){a.setState(function(a){return{messages:[].concat(Object(o.a)(a.messages),[{text:e,username:t,date:new Date}])}})},a.onSendMessage=function(e){e&&(a.addNewMessage(e,"Me"),a.messagesHandler(e))},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.messages!==this.state.messages&&window.scrollTo(0,document.body.scrollHeight)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b,null),s.a.createElement(w,{messages:this.state.messages,currentUser:this.state.username}),s.a.createElement(f,{onSendMessage:this.onSendMessage}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[167,1,2]]]);
//# sourceMappingURL=main.4243d611.chunk.js.map