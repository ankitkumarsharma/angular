(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{aDnW:function(t,n,b){"use strict";b.r(n),b.d(n,"ComponentsModule",function(){return _});var c=b("ofXK");const e=[{name:"Tabs",info:"Building Tabs in Angular",link:"tabs",status:!0},{name:"Accordian",info:"Building accordian in Angular",link:"accordian",status:!0},{name:"Image Slider",info:"Building image Slider in Angular",link:"/",status:!1},{name:"Compare Items",info:"Building Compare items in Angular",link:"/",status:!1}],i=[{label:"Tab 1",content:"content 1"},{label:"Tab 2",content:"content 2"},{label:"Tab 3",content:"content 3"}],a=[{header:"title for header",content:"content for listing",active:!0},{header:"title for header",content:"content for listing",active:!1},{header:"title for header",content:"content for listing",active:!1},{header:"title for header",content:"content for listing",active:!1},{header:"title for header",content:"content for listing",active:!1},{header:"title for header",content:"content for listing",active:!1}];var o=b("fXoL"),s=b("tyNb");function r(t,n){if(1&t&&(o.Fb(0,"div",9),o.Xb(1),o.Eb()),2&t){const t=o.Nb(),n=t.$implicit,b=t.index;o.tb(1),o.Zb(" ",n.content," ",b+1," ")}}const l=function(t){return{active:t}};function d(t,n){if(1&t){const t=o.Gb();o.Fb(0,"div",6),o.Lb("click",function(){o.Tb(t);const b=n.index;return o.Nb().onItemClick(b)}),o.Fb(1,"div",7),o.Xb(2),o.Fb(3,"span"),o.Xb(4),o.Eb(),o.Eb(),o.Wb(5,r,2,2,"div",8),o.Eb()}if(2&t){const t=n.$implicit,b=n.index;o.tb(1),o.Ob("ngClass",o.Rb(5,l,t.active)),o.tb(1),o.Zb(" ",t.header," ",b+1," "),o.tb(2),o.Yb(t.active?"-":"+"),o.tb(1),o.Ob("ngIf",t.active)}}const u=function(){return["/components"]};let g=(()=>{class t{constructor(){this.accList=a}ngOnInit(){}onItemClick(t){for(let n=0;n<this.accList.length;n++)this.accList[n].active=!1,this.accList[t].active=!0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.wb({type:t,selectors:[["app-accordian"]],decls:7,vars:3,consts:[[1,"primary-btn",3,"routerLink"],[1,"space-20"],[1,"row"],[1,"col-md-6"],[1,"accordian-block"],["class","acc-item",3,"click",4,"ngFor","ngForOf"],[1,"acc-item",3,"click"],[1,"acc-item-header",3,"ngClass"],["class","acc-item-content",4,"ngIf"],[1,"acc-item-content"]],template:function(t,n){1&t&&(o.Fb(0,"button",0),o.Xb(1,"<< Back"),o.Eb(),o.Db(2,"div",1),o.Fb(3,"div",2),o.Fb(4,"div",3),o.Fb(5,"div",4),o.Wb(6,d,6,7,"div",5),o.Eb(),o.Eb(),o.Eb()),2&t&&(o.Ob("routerLink",o.Qb(2,u)),o.tb(6),o.Ob("ngForOf",n.accList))},directives:[s.b,c.i,c.h,c.j],styles:[".accordian-block[_ngcontent-%COMP%]   .acc-item[_ngcontent-%COMP%]{margin:10px 0}.accordian-block[_ngcontent-%COMP%]   .acc-item[_ngcontent-%COMP%]   .acc-item-header[_ngcontent-%COMP%]{background:#ccc;padding:5px;cursor:pointer}.accordian-block[_ngcontent-%COMP%]   .acc-item[_ngcontent-%COMP%]   .acc-item-header.active[_ngcontent-%COMP%]{cursor:default}.accordian-block[_ngcontent-%COMP%]   .acc-item[_ngcontent-%COMP%]   .acc-item-content[_ngcontent-%COMP%]{padding:5px;background:#b1e6b1}.accordian-block[_ngcontent-%COMP%]   .acc-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right}"]}),t})();const m=function(t){return{"active show":t}};function f(t,n){if(1&t&&(o.Fb(0,"div",15),o.Fb(1,"h3"),o.Xb(2,"HOME"),o.Eb(),o.Fb(3,"p"),o.Xb(4,"Some content."),o.Eb(),o.Eb()),2&t){const t=o.Nb();o.Ob("ngClass",o.Rb(1,m,1==t.tabItem))}}function p(t,n){if(1&t&&(o.Fb(0,"div",16),o.Fb(1,"h3"),o.Xb(2,"Menu 1"),o.Eb(),o.Fb(3,"p"),o.Xb(4,"Some content in menu 1."),o.Eb(),o.Eb()),2&t){const t=o.Nb();o.Ob("ngClass",o.Rb(1,m,2==t.tabItem))}}function v(t,n){if(1&t&&(o.Fb(0,"div",16),o.Fb(1,"h3"),o.Xb(2,"Menu 2"),o.Eb(),o.Fb(3,"p"),o.Xb(4,"Some content in menu 2."),o.Eb(),o.Eb()),2&t){const t=o.Nb();o.Ob("ngClass",o.Rb(1,m,3==t.tabItem))}}const F=function(t){return{active:t}};function O(t,n){if(1&t){const t=o.Gb();o.Fb(0,"li",7),o.Lb("click",function(){o.Tb(t);const b=n.index;return o.Nb().dynamicTabSelect(b+1)}),o.Fb(1,"a",9),o.Xb(2),o.Eb(),o.Eb()}if(2&t){const t=n.$implicit,b=n.index,c=o.Nb();o.tb(1),o.Ob("ngClass",o.Rb(2,F,c.dynamicTabItem==b+1)),o.tb(1),o.Yb(t.label)}}function h(t,n){if(1&t&&(o.Fb(0,"div",16),o.Fb(1,"h3"),o.Xb(2),o.Eb(),o.Fb(3,"p"),o.Xb(4),o.Eb(),o.Eb()),2&t){const t=o.Nb(),n=t.index,b=t.$implicit,c=o.Nb();o.Ob("ngClass",o.Rb(3,m,c.dynamicTabItem==n+1)),o.tb(2),o.Yb(b.content),o.tb(2),o.Yb(b.content)}}function k(t,n){if(1&t&&(o.Fb(0,"div"),o.Wb(1,h,5,5,"div",12),o.Eb()),2&t){const t=n.index,b=o.Nb();o.tb(1),o.Ob("ngIf",b.dynamicTabItem==t+1)}}const E=function(){return["/components"]};let C=(()=>{class t{constructor(){this.tabItem=1,this.dynamicTabItem=1,this.dynamicTab=i}ngOnInit(){}tabSelect(t){this.tabItem=t}dynamicTabSelect(t){this.dynamicTabItem=t}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.wb({type:t,selectors:[["app-tabs"]],decls:30,vars:16,consts:[[1,"primary-btn",3,"routerLink"],[1,"space-20"],[1,"row"],[1,"col-md-6"],[1,"ak-title"],[1,"tab-block"],[1,"nav","nav-tabs"],[1,"nav-item",3,"click"],["data-toggle","tab",1,"nav-link","active",3,"ngClass"],["data-toggle","tab",1,"nav-link",3,"ngClass"],[1,"tab-content"],["class","tab-pane fade show active",3,"ngClass",4,"ngIf"],["class","tab-pane fade",3,"ngClass",4,"ngIf"],["class","nav-item",3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"tab-pane","fade","show","active",3,"ngClass"],[1,"tab-pane","fade",3,"ngClass"]],template:function(t,n){1&t&&(o.Fb(0,"button",0),o.Xb(1,"<< Back"),o.Eb(),o.Db(2,"div",1),o.Fb(3,"div",2),o.Fb(4,"div",3),o.Fb(5,"h2",4),o.Xb(6,"Static Tabs"),o.Eb(),o.Fb(7,"div",5),o.Fb(8,"ul",6),o.Fb(9,"li",7),o.Lb("click",function(){return n.tabSelect(1)}),o.Fb(10,"a",8),o.Xb(11,"Home"),o.Eb(),o.Eb(),o.Fb(12,"li",7),o.Lb("click",function(){return n.tabSelect(2)}),o.Fb(13,"a",9),o.Xb(14,"Menu 1"),o.Eb(),o.Eb(),o.Fb(15,"li",7),o.Lb("click",function(){return n.tabSelect(3)}),o.Fb(16,"a",9),o.Xb(17,"Menu 2"),o.Eb(),o.Eb(),o.Eb(),o.Fb(18,"div",10),o.Wb(19,f,5,3,"div",11),o.Wb(20,p,5,3,"div",12),o.Wb(21,v,5,3,"div",12),o.Eb(),o.Eb(),o.Eb(),o.Fb(22,"div",3),o.Fb(23,"h2",4),o.Xb(24,"Dynamic Tabs"),o.Eb(),o.Fb(25,"div",5),o.Fb(26,"ul",6),o.Wb(27,O,3,4,"li",13),o.Eb(),o.Fb(28,"div",10),o.Wb(29,k,2,1,"div",14),o.Eb(),o.Eb(),o.Eb(),o.Eb()),2&t&&(o.Ob("routerLink",o.Qb(9,E)),o.tb(10),o.Ob("ngClass",o.Rb(10,F,1==n.tabItem)),o.tb(3),o.Ob("ngClass",o.Rb(12,F,2==n.tabItem)),o.tb(3),o.Ob("ngClass",o.Rb(14,F,3==n.tabItem)),o.tb(3),o.Ob("ngIf",1==n.tabItem),o.tb(1),o.Ob("ngIf",2==n.tabItem),o.tb(1),o.Ob("ngIf",3==n.tabItem),o.tb(6),o.Ob("ngForOf",n.dynamicTab),o.tb(2),o.Ob("ngForOf",n.dynamicTab))},directives:[s.b,c.h,c.j,c.i],styles:[".tab-block[_ngcontent-%COMP%]{min-height:118px;margin-bottom:15px;border:1px solid #ccc;padding:15px;border-radius:4px}.tab-block[_ngcontent-%COMP%], .tab-block[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{cursor:pointer}.tab-block[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{cursor:default}"]}),t})();const I=function(t){return{disabled:t}};function M(t,n){if(1&t&&(o.Fb(0,"div",4),o.Fb(1,"div",5),o.Fb(2,"div",6),o.Fb(3,"h2",7),o.Xb(4),o.Eb(),o.Fb(5,"h3",8),o.Xb(6),o.Eb(),o.Eb(),o.Eb(),o.Eb()),2&t){const t=n.$implicit;o.Pb("title",t.status?"Done":"Pending"),o.tb(1),o.Pb("routerLink",t.link),o.Ob("ngClass",o.Rb(5,I,!t.status)),o.tb(3),o.Yb(t.name),o.tb(2),o.Yb(t.info)}}const y=function(){return["/"]},P=[{path:"",component:(()=>{class t{constructor(){this.componentType=e}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.wb({type:t,selectors:[["app-components"]],decls:5,vars:3,consts:[[1,"primary-btn",3,"routerLink"],[1,"space-20"],[1,"row"],["class","col-3",3,"title",4,"ngFor","ngForOf"],[1,"col-3",3,"title"],[1,"card",3,"routerLink","ngClass"],[1,"card-body"],[1,"ak-title"],[1,"ak-sub-title"]],template:function(t,n){1&t&&(o.Fb(0,"button",0),o.Xb(1,"<< Back"),o.Eb(),o.Db(2,"div",1),o.Fb(3,"div",2),o.Wb(4,M,7,7,"div",3),o.Eb()),2&t&&(o.Ob("routerLink",o.Qb(2,y)),o.tb(4),o.Ob("ngForOf",n.componentType))},directives:[s.b,c.i,c.h],styles:[""]}),t})()},{path:"tabs",component:C},{path:"accordian",component:g}];let X=(()=>{class t{}return t.\u0275mod=o.Ab({type:t}),t.\u0275inj=o.zb({factory:function(n){return new(n||t)},imports:[[s.c.forChild(P)],s.c]}),t})(),_=(()=>{class t{}return t.\u0275mod=o.Ab({type:t}),t.\u0275inj=o.zb({factory:function(n){return new(n||t)},imports:[[c.b,X]]}),t})()}}]);