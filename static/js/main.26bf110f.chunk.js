(this["webpackJsonpgoit-react-hw-06-phonebook-class-redux"]=this["webpackJsonpgoit-react-hw-06-phonebook-class-redux"]||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=(n(22),n(5)),u=n(6),l=n(8),b=n(7),m=n(2),d="contacts/add",j="contacts/delete",h="contacts/changeFilter",f=n(35),p=(n(29),Object(m.b)((function(e){var t=e.contacts,n=t.filter,c=t.contact,a=n.toLowerCase().trim();return{contacts:c.filter((function(e){return e.name.toLowerCase().includes(a)}))}}),(function(e){return{onDeleteContact:function(t){return e({type:j,payload:t})}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(c.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(c.jsxs)("li",{className:"item__contact",children:[Object(c.jsx)("p",{className:"item__text",children:a}),Object(c.jsx)("p",{className:"item__text",children:r}),Object(c.jsx)("button",{className:"item__buttom",onClick:function(){return n(t)},children:"\u0441\u0442\u0435\u0440\u0442\u0438"})]},t)}))})}))),O=n(14),v=(n(30),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,c=n.name,a=n.value;e.setState(Object(O.a)({},c,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,c=n.name,a=n.number;if(e.props.contact.find((function(e){return e.name.toLowerCase()===c.toLowerCase()})))return alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(c," \u0437 \u0442\u0430\u043a\u0438\u043c \u0456\u043c\u2019\u044f\u043c \u0432\u0436\u0435 \u0454.")),void e.reset();e.props.onSubmit(c,a),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(c.jsxs)("form",{className:"item__form",onSubmit:this.handleSubmit,children:[Object(c.jsxs)("label",{children:["\u0406\u043c\u2019\u044f",Object(c.jsx)("input",{className:"item__input",type:"text",name:"name",placeholder:"Jony Dep",value:t,onChange:this.handleChange})]}),Object(c.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",Object(c.jsx)("input",{className:"item__input",type:"text",name:"number",placeholder:"111-11-11",value:n,onChange:this.handleChange})]}),Object(c.jsx)("button",{type:"submit",disabled:""===t||""===n,children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}}]),n}(a.Component)),x=Object(m.b)((function(e){return{contact:e.contacts.contact}}),(function(e){return{onSubmit:function(t,n){return e(function(e,t){return{type:d,payload:{id:Object(f.a)(),name:e,number:t}}}(t,n))}}}))(v),g=(n(31),Object(m.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e((n=t.target.value,{type:h,payload:n}));var n}}}))((function(e){var t=e.value,n=e.onChange;return Object(c.jsxs)("label",{className:"item__filter",children:[Object(c.jsx)("p",{className:"item__text-filter",children:"\u041f\u043e\u0448\u0443\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432"}),Object(c.jsx)("input",{className:"item__element",type:"text",value:t,onChange:n})]})}))),y=(n(32),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.contact;return Object(c.jsxs)("div",{className:"Containet",children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(x,{}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(g,{}),!e.length&&Object(c.jsx)("div",{children:"\u041d\u0435\u043c\u0430\u0454 \u0436\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443, \u0434\u043e\u0434\u0430\u0439\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(c.jsx)(p,{})]})}}]),n}(r.a.Component)),C=Object(m.b)((function(e){return{contact:e.contacts.contact}}))(y),_=n(3),S=n(15),w=n(16),N=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],k=Object(_.combineReducers)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case d:return[].concat(Object(w.a)(e),[c]);case j:return e.filter((function(e){return e.id!==c}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h:return c;default:return e}}}),D=Object(_.combineReducers)({contacts:k}),J=Object(_.createStore)(D,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}(),Object(S.composeWithDevTools)());J.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(n){console.warn(n)}}(J.getState())}));var L=J;i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m.a,{store:L,children:Object(c.jsx)(C,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.26bf110f.chunk.js.map