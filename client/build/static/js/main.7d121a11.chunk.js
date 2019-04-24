(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(65)},36:function(e,t,a){},37:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(28),r=a.n(s),c=(a(36),a(37),a(5)),i=a(12),o=a(9),p=a(10),u=a(13),m=a(11),h=a(14),E=a(4),g=a.n(E),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){g.a.get("/pets").then(function(e){a.setState({pets:e.data.pets})}).catch(function(e){console.log(e)})},a.state={pets:[]},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("fieldset",null,l.a.createElement("legend",null,"These pets are looking for a home!"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,this.state.pets.map(function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(c.b,{to:"/pet/"+e._id},l.a.createElement("button",null,"Details")),l.a.createElement(c.b,{to:"/pet/"+e._id+"/edit"},l.a.createElement("button",null,"Edit"))))})))))}}]),t}(n.Component),d=a(2),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).changeName=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{name:e.target.value})})},a.changeType=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{type:e.target.value})})},a.changeDescription=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{description:e.target.value})})},a.changeSkill1=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{skill1:e.target.value})})},a.changeSkill2=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{skill2:e.target.value})})},a.changeSkill3=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{skill3:e.target.value})})},a.create=function(e){e.preventDefault(),g.a.post("/pets",a.state.pet).then(function(e){console.log(e),e.data.errors?a.setState({errors:e.data.errors.errors}):a.props.history.push("/")}).catch(function(e){console.log(e)})},a.state={pet:{name:"",type:"",description:"",skill1:"",skill2:"",skill3:"",likes:0},errors:{}},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Know of a pet needing a home?"),l.a.createElement("form",{onSubmit:this.create},l.a.createElement("p",null,"Name: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeName}),this.state.errors.name?l.a.createElement("span",null,this.state.errors.name.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Type: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeType}),this.state.errors.type?l.a.createElement("span",null,this.state.errors.type.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Description: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeDescription}),this.state.errors.description?l.a.createElement("span",null," \xa0 ",this.state.errors.description.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skills:"),l.a.createElement("p",null,"Skill1: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeSkill1}),this.state.errors.skill1?l.a.createElement("span",null,"\xa0 ",this.state.errors.skill1.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skill2: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeSkill2}),this.state.errors.skill2?l.a.createElement("span",null," \xa0 ",this.state.errors.skill2.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skill3: \xa0 \xa0",l.a.createElement("input",{type:"text",onChange:this.changeSkill3}),this.state.errors.skill3?l.a.createElement("span",null,this.state.errors.skill3.message):l.a.createElement("span",null)),l.a.createElement("button",{type:"submit"},"Add Pet")," \xa0\xa0"),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",null,"Cancel")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){g.a.get("/pets/".concat(a.props.match.params._id)).then(function(e){a.setState({pet:e.data.pet})}).catch(function(e){console.log(e)})},a.changeName=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{name:e.target.value})})},a.changeType=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{type:e.target.value})})},a.changeDescription=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{description:e.target.value})})},a.changeSkill1=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{skill1:e.target.value})})},a.changeSkill2=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{skill2:e.target.value})})},a.changeSkill3=function(e){a.setState({pet:Object(d.a)({},a.state.pet,{skill3:e.target.value})})},a.update=function(e){e.preventDefault(),g.a.put("/pets/".concat(a.props.match.params._id),a.state.pet).then(function(e){console.log(e),e.data.errors?a.setState({errors:e.data.errors.errors}):a.props.history.push("/")}).catch(function(e){console.log(e)})},a.state={pet:{name:"",type:"",description:"",skill1:"",skill2:"",skill3:"",likes:0},errors:{}},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Edit this pet"),l.a.createElement("form",{onSubmit:this.update},l.a.createElement("p",null,"Name: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.name,onChange:this.changeName}),this.state.errors.name?l.a.createElement("span",null,this.state.errors.name.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Type: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.type,onChange:this.changeType}),this.state.errors.type?l.a.createElement("span",null,this.state.errors.type.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Description: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.description,onChange:this.changeDescription}),this.state.errors.description?l.a.createElement("span",null," \xa0 ",this.state.errors.description.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skills:"),l.a.createElement("p",null,"Skill1: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.skill1,onChange:this.changeSkill1}),this.state.errors.skill1?l.a.createElement("span",null,"\xa0 ",this.state.errors.skill1.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skill2: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.skill2,onChange:this.changeSkill2}),this.state.errors.skill2?l.a.createElement("span",null," \xa0 ",this.state.errors.skill2.message):l.a.createElement("span",null)),l.a.createElement("p",null,"Skill3: \xa0 \xa0",l.a.createElement("input",{type:"text",value:this.state.pet.skill3,onChange:this.changeSkill3}),this.state.errors.skill3?l.a.createElement("span",null,this.state.errors.skill3.message):l.a.createElement("span",null)),l.a.createElement("button",{type:"submit"},"Update Pet Info")," \xa0\xa0"),l.a.createElement(c.b,{to:"/"},l.a.createElement("button",null,"Cancel")))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){g.a.get("/pets/".concat(a.props.match.params._id)).then(function(e){a.setState({pet:e.data.pet})}).catch(function(e){console.log(e)})},a.likePet=function(e){e.preventDefault();var t=a.state.pet.likes;t+=1,a.setState({pet:Object(d.a)({},a.state.pet,{likes:t})},function(){g.a.put("/pets/".concat(a.props.match.params._id),a.state.pet).then(function(e){console.log(e),e.data.errors&&a.setState({errors:e.data.errors.errors})}).catch(function(e){console.log(e)})}),a.setState({isliked:!0})},a.delete=function(e){g.a.delete("/pets/".concat(a.props.match.params._id)).then(function(e){a.props.history.push("/")}).catch(function(e){console.log(e)})},a.state={pet:{name:"",type:"",description:"",skill1:"",skill2:"",skill3:"",likes:0},errors:{},isliked:!1},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Details about ",this.state.pet.name),l.a.createElement("p",null,"Name: \xa0 \xa0",l.a.createElement("span",null,"\xa0 ",this.state.pet.name)),l.a.createElement("p",null,"Type: \xa0 \xa0",l.a.createElement("span",null,"\xa0 ",this.state.pet.type)),l.a.createElement("p",null,"Description: \xa0 \xa0",l.a.createElement("span",null,"\xa0 ",this.state.pet.description)),l.a.createElement("p",null,"Skills:",this.state.pet.skill1?l.a.createElement("span",null,"\xa0 ",this.state.pet.skill1,l.a.createElement("br",null)):l.a.createElement("span",null),this.state.pet.skill2?l.a.createElement("span",null,"\xa0 ",this.state.pet.skill2,l.a.createElement("br",null)):l.a.createElement("span",null),this.state.pet.skill3?l.a.createElement("span",null,"\xa0 ",this.state.pet.skill3,l.a.createElement("br",null)):l.a.createElement("span",null)),l.a.createElement("p",null,"Likes: \xa0 \xa0",l.a.createElement("span",null,"\xa0 ",this.state.pet.likes)),l.a.createElement("button",{type:"submit",onClick:this.likePet,disabled:this.state.isliked,id:"likebutton"},"Like this pet")," \xa0\xa0",l.a.createElement("button",{onClick:this.delete},"Adopt this pet")))}}]),t}(n.Component);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(c.a,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/pets/new"},"New Pet"))),l.a.createElement(i.a,{exact:!0,path:"/",component:k}),l.a.createElement(i.a,{path:"/pets/new",component:f}),l.a.createElement(i.a,{path:"/pet/:_id/edit",component:b}),l.a.createElement(i.a,{exact:!0,path:"/pet/:_id",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.7d121a11.chunk.js.map