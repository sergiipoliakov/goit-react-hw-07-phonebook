(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={item:"ContactListItem_item__2THQn",actions:"ContactListItem_actions__2eHF6",name:"ContactListItem_name__32Yb3",number:"ContactListItem_number__3CKnU"}},28:function(t,e,n){t.exports={layout:"Layout_layout__3PvPc",appear:"Layout_appear__28yHE",appearActive:"Layout_appearActive__28_al"}},39:function(t,e,n){t.exports={title:"Title_title__1jlrO"}},40:function(t,e,n){t.exports={button:"Button_button__3QF_k"}},69:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(9),r=n.n(a),o=n(20),u=n(2),i=n(11),s=n(10),l=n.n(s),b=n(23),j=n(14),m=n.n(j),f=Object(u.b)("phoneBook/fetchContactsRequest"),d=Object(u.b)("phoneBook/fetchContactsSuccess"),h=Object(u.b)("phoneBook/fetchContactsError"),O=Object(u.b)("phoneBook/addContactRequest"),p=Object(u.b)("phoneBook/addContactSuccess"),v=Object(u.b)("phoneBook/addContactError"),x=Object(u.b)("phoneBook/deleteContactRequest"),C=Object(u.b)("phoneBook/deleteContactSuccess"),g=Object(u.b)("phoneBook/deleteContactError"),k=Object(u.b)("phoneBook/changeFilter");m.a.defaults.baseURL="http://localhost:4040";var N,y,_=function(){return function(){var t=Object(b.a)(l.a.mark((function t(e){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(f()),t.prev=1,t.next=4,m.a.get("/contacts");case 4:n=t.sent,c=n.data,e(d(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(h(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},B=function(t,e){return function(){var n=Object(b.a)(l.a.mark((function n(c){var a,r,o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={name:t,number:e},c(O()),n.prev=2,n.next=5,m.a.post("/contacts",a);case 5:r=n.sent,o=r.data,c(p(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),c(v(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},L=function(t){return function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(x()),e.prev=1,e.next=4,m.a.delete("/contacts/".concat(t));case 4:n(C(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(g(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},w=n(17),F=function(t){return t.phoneBook.filter},E=function(t){return t.phoneBook.items},S={getLoading:function(t){return t.phoneBook.loading},getFilter:F,getfilteredContacts:Object(w.a)([E,F],(function(t,e){return console.log("\u0421\u043e\u0441\u0442\u043e\u0432\u043b\u044f\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0432\u0438\u0434\u0438\u043c\u044b\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"),t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getAllContacts:E},A=n(3),I=n(4),R=Object(u.c)([],(N={},Object(A.a)(N,d,(function(t,e){return e.payload})),Object(A.a)(N,p,(function(t,e){return[].concat(Object(o.a)(t),[e.payload])})),Object(A.a)(N,C,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),N)),P=Object(u.c)("",Object(A.a)({},k,(function(t,e){return e.payload}))),q=Object(u.c)(!1,(y={},Object(A.a)(y,O,(function(){return!0})),Object(A.a)(y,p,(function(){return!1})),Object(A.a)(y,v,(function(){return!1})),Object(A.a)(y,x,(function(){return!0})),Object(A.a)(y,C,(function(){return!1})),Object(A.a)(y,g,(function(){return!1})),Object(A.a)(y,f,(function(){return!0})),Object(A.a)(y,d,(function(){return!1})),Object(A.a)(y,h,(function(){return!1})),y)),D=Object(I.c)({items:R,filter:P,loading:q}),H=Object(u.b)("counterButton/add"),M=Object(u.c)(0,Object(A.a)({},H,(function(t,e){return t+1}))),T=Object(I.c)({value:M}),U=Object(o.a)(Object(u.d)({serializableCheck:{ignoredActions:[i.a,i.f,i.b,i.c,i.d,i.e]}})),J=Object(u.a)({reducer:{phoneBook:D,counterButton:T},middleware:U}),Q=n(8),z=(n(69),n(18)),K=n(19),Y=n(22),G=n(21),V=n(39),W=n.n(V),X=n(1),Z=function(t){var e=t.label;return Object(X.jsx)("h1",{className:W.a.title,children:e})},$=n(76),tt=n(28),et=n.n(tt),nt=function(t){var e=t.children;return Object(X.jsxs)("div",{className:et.a.layout,children:[Object(X.jsx)($.a,{in:!0,appear:!0,timeout:500,classNames:et.a,unmountOnExit:!0,children:Object(X.jsx)(Z,{label:"Phonebook"})}),e]})};n(71);function ct(t){var e=t.name,n=void 0===e?"no name":e;return Object(X.jsx)("div",{className:"dublucate-name",children:Object(X.jsxs)("p",{children:['"',n,'" is already in contacts']})})}var at=n(40),rt=n.n(at),ot=function(t){var e=t.label,n=t.type,c=void 0===n?"button":n,a=t.onClick,r=void 0===a?function(){return null}:a;return Object(X.jsx)("button",{className:rt.a.button,type:c,onClick:r,children:e})},ut=(n(72),function(t){Object(Y.a)(n,t);var e=Object(G.a)(n);function n(){var t;Object(z.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:"",dublicateName:!1},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(A.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number;if(""!==c&&""!==a)return t.props.contacts.filter((function(t){return t.name===e.target.elements[0].value})).length>0?(t.setState({dublicateName:!t.state.dublicateName}),setTimeout((function(){t.setState({dublicateName:!1})}),2500)):((0,t.props.onSubmit)(c,a),void t.setState({name:"",number:""}));""===c?alert("write NAME!"):""===a&&alert("write NUMBER!!")},t}return Object(K.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=t.dublicateName;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)($.a,{in:c&&Boolean(e),classNames:"dublucate-name-slideIn",timeout:250,unmountOnExit:!0,children:Object(X.jsx)(ct,{name:e})}),Object(X.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(X.jsxs)("label",{className:"form-label",children:["Name",Object(X.jsx)("input",{className:"form-input",type:"name",value:e,onChange:this.handleChange,name:"name"})]}),Object(X.jsxs)("label",{className:"form-label",children:["Number",Object(X.jsx)("input",{className:"form-input",type:"tel",value:n,onChange:this.handleChange,name:"number"})]}),Object(X.jsx)(ot,{label:"Add contact",type:"submit"})]})]})}}]),n}(c.Component));ut.defaultProps={};var it=Object(Q.b)((function(t){return{contacts:S.getAllContacts(t)}}),(function(t){return{onSubmit:function(e,n){return t(B(e,n))}}}))(ut),st=n(77),lt=(n(73),Object(Q.b)((function(t){return{value:S.getFilter(t)}}),(function(t){return{onChangeFilter:function(e){return t(k(e.target.value))}}}))((function(t){var e=t.value,n=t.onChangeFilter;return Object(X.jsx)("div",{className:"form",children:Object(X.jsxs)("label",{className:"form-label",children:["Find contact by name",Object(X.jsx)("input",{type:"text",className:"form-input",value:e,onChange:n})]})})}))),bt=(n(74),n(15)),jt=n.n(bt),mt=function(t){var e=t.id,n=t.name,c=t.number,a=t.onRemove;return Object(X.jsxs)("li",{className:jt.a.item,children:[Object(X.jsxs)("p",{className:jt.a.name,children:[n,": "]}),Object(X.jsxs)("div",{className:jt.a.actions,children:[Object(X.jsx)("p",{className:jt.a.number,children:c}),Object(X.jsx)(ot,{label:"Delete",type:"button",className:"ContactList-button",onClick:a})]})]},e)},ft=mt;mt.defaultProps={name:"noName",number:"123 45 67"};var dt=Object(Q.b)((function(t){return{searchName:S.getFilter(t),contacts:S.getAllContacts(t),filteredContacts:S.getfilteredContacts(t)}}),(function(t){return{onRemoveContact:function(e){return t(L(e))}}}))((function(t){var e=t.filteredContacts,n=t.contacts,c=t.searchName,a=t.onRemoveContact;return console.log("ContactList re-render")||Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)($.a,{in:n.length>1,timeout:500,classNames:"filter-slideIn",unmountOnExit:!0,children:Object(X.jsx)(lt,{})}),Object(X.jsx)($.a,{in:e.length>0,timeout:500,classNames:"ContactList-title-slideIn",unmountOnExit:!0,children:Object(X.jsx)(Z,{label:"Contacts"})}),Object(X.jsx)($.a,{in:0===e.length&&n.length>1,timeout:500,classNames:"ContactList-title-slideIn",unmountOnExit:!0,children:Object(X.jsx)(Z,{label:'Contact name: "'.concat(c,'"  not found')})}),Object(X.jsx)(st.a,{component:"ul",className:"ContactList",children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(X.jsx)($.a,{timeout:250,classNames:"ContactList-item-fade",children:Object(X.jsx)(ft,{id:e,name:n,number:c,onRemove:function(){return a(e)}})},e)}))})]})}));var ht=Object(Q.b)((function(t){return{clicks:t.counterButton.value}}),(function(t){return{onClick:function(){return t(H())}}}))((function(t){var e=t.clicks,n=t.onClick;return Object(X.jsxs)("div",{className:"counterButtonBachground",children:[Object(X.jsx)("h2",{children:"\u043a\u043d\u043e\u043f\u043a\u0430 \u043c\u0435\u043c\u043e\u0438\u0437\u0430\u0446\u0438\u0438"}),Object(X.jsxs)("button",{type:"button",onClick:n,children:["\u041a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 ",e," \u0440\u0430\u0437"]})]})})),Ot=function(t){Object(Y.a)(n,t);var e=Object(G.a)(n);function n(){return Object(z.a)(this,n),e.apply(this,arguments)}return Object(K.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(nt,{children:[Object(X.jsx)(ht,{}),this.props.isLoadingPhoneBook&&Object(X.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0436\u0430\u0435\u043c..."}),Object(X.jsx)(it,{}),Object(X.jsx)(dt,{})]})})}}]),n}(c.Component),pt=Object(Q.b)((function(t){return{isLoadingPhoneBook:S.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t(_())}}}))(Ot);function vt(){return Object(X.jsx)(pt,{})}r.a.render(Object(X.jsx)(X.Fragment,{children:Object(X.jsx)(Q.a,{store:J,children:Object(X.jsx)(vt,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.e4f3656d.chunk.js.map