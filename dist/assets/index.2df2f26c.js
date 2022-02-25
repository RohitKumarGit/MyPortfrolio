var p=Object.defineProperty,f=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var u=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,a=(t,e)=>{for(var n in e||(e={}))y.call(e,n)&&u(t,n,e[n]);if(d)for(var n of d(e))b.call(e,n)&&u(t,n,e[n]);return t},l=(t,e)=>f(t,v(e));import w from"https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";import{T as m,m as S}from"./vendor.e052e423.js";const I=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};I();var h=function(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)},k="#b753e1";const c=[{s:"Hi_",selector:"#header2"},{s:"Resume_",selector:"#header3"},{s:"My Projects_",selector:"#header4"},{s:"Get in touch_",selector:"#header5"}];document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});var g={typeSpeed:100,showCursor:!1};c.forEach(t=>{t.ts=!1});new m("#header2",l(a({},g),{strings:["Hi_"]}));new w({el:"#app",data:{mvisible:!1,experienced:[{heading:"SDE Intern @ Clappia.com - Banglore ",time:"June 2021 - ongoing",sub:"Working on adding new features and removing bugs as and when reported using tools like AWS, AngularJS , Serverless etc",links:[{label:"Clappia.com",link:"http://clappia.com/"}]},{heading:"Front-End Developer @ SUSTAIN HILL PVT LTD. - K K Nagar , Chennai - 78",time:"Aug 2020 - Dec 2020",sub:"Developed the UI for the app and Website for this B2B startup and developed the PWA with the engineering team. Streamlined the DevOps which made the development process faster and helped us to release updates smoothly to clients .",links:[{label:"Letter Of Recommendation",link:"https://drive.google.com/file/d/1g158FB1pW-p8BPTdFifaKVUvCXeGQx-F/view?usp=sharing"},{label:"Certificate of completion",link:"https://drive.google.com/file/d/1Vqz8bH2uQC2fRPuvWPOtQ191Ah7fwVBZ/view"}]},{heading:"Graphic Designer & Front End Engineer @ Quality Ayurveda - Noida Sec 52 ",time:"Oct 2019 - Jan 2020 ",sub:"Created 50+ graphics for social ad-campaigns for the Healthcare Brand.Re-designed the website working closely with the product team ( Vue and React ). Developed and managed a custom system for managing inventory and product distribution with minimum or no human intervention which decreased delivery time by 30% .",links:[]},{heading:" PR Intern @ NSUT IIF In Collaboration with padUp Ventures - NSUT TBI , NSUT , New Delhi",time:"",sub:"Organizing in Campus ad campaigns for events organized by the NSUT IIF team",links:[]}],intro:"CS Student having 1+ experience working in startups and In love with code since Class V . Having passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versedin technology and writing code to create systems that are reliable and user-friendly with my knowledge of DataStructures and Algorithms . Skilled leader who has the proven ability to motivate, educate, and manage a team of programmers to build polished applications in a well documented form . Confident communicator, strategic thinker",educations:[{heading:"Netaji Subash University Of Technology , New Delhi",time:"2019 - 2023",sub:"Computer Science and Engineering With Artificial Intelligence ( CSAI)"},{heading:"Doon Public School , Jharkhand",time:"2017-2019",sub:"Scored 84.5% in XII boards ( CBSE )"},{heading:"Dhanbad Public School , Jharkhand",time:"up to class X",sub:"Scored 10cgpa in class X."},{heading:"Simplilearn AI certification ",time:"2020",sub:"1 Year project based AI course where I learned and worked on projects on AI concepts ( ML , DL & NLP)"}],skills:[[{label:"VueJS",perc:9,ts:!0},{label:"ReactJS",perc:7,ts:!0},{label:"NodeJS",perc:9,ts:!0},{label:"Python",perc:9,ts:!0},{label:"Google Firebase",perc:7,ts:!0}],[{label:"MongoDB",perc:8,ts:!0},{label:"Graphic Designing",perc:7,ts:!0},{label:"Deep Learning",perc:6,ts:!0},{label:"Machine Learning",perc:7,ts:!0},{label:"Data Structures a& Algorithms",perc:9,ts:!0}]]},created(){window.onclick=t=>{this.mvisible&&t.target.id!=="mnav"&&(this.mvisible=!1,document.getElementById("mnav").style.opacity="0")},window.onload=()=>{this.checkAnimations()},window.addEventListener("scroll",t=>{this.checkAnimations(),window.scrollY>44?(console.log("moved"),document.getElementById("navs").classList.add("moved"),console.log(document.querySelectorAll("#navs ul li a ")),document.querySelectorAll("#navs ul li a ").forEach(e=>{document.getElementById(e.id).style.color="red",console.log(document.getElementById(e.id).classList)})):(document.getElementById("navs").classList.remove("moved"),document.querySelectorAll("#navs ul li a").forEach(e=>{document.getElementById(e.id).classList.remove("moved_link")}))})},methods:{nav(){document.getElementById("mnav").style.transform==="scaleY(0)"?document.getElementById("mnav").style.transform="scaleY(1)":document.getElementById("mnav").style.transform="scaleY(0)"},checkAnimations(){c.forEach((e,n)=>{h(document.getElementById(e.selector.replace("#","")))&&!e.ts&&(c[n].ts=!0,new m(e.selector,l(a({},g),{strings:[e.s]})))});const t=document.getElementById("progresses");if(h(t)){let e=0;for(;e<=1;)this.skills[e].forEach((n,r)=>{if(!this.skills[e][r].ts)return;this.skills[e][r].ts=!1,new S.Line("#skill"+(e*5+r),{strokeWidth:2,easing:"easeInOut",duration:1400,color:k,trailColor:"#eee",trailWidth:2,svgStyle:{width:"100%",height:"100%"}}).animate(n.perc*.1)}),e++}}}});
