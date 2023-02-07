"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[826],{8034:function(e,t,n){n.d(t,{Z:function(){return j}});var s=n(5893),a=n(7294),r=n(4539),o=n(3950),i=n(243),l=n(7886),c=n(9431),d=n(6245),m=n(6426),u=n(6188),g=n(5335),x=function(e){let t=e.originator,{chatData:n}=(0,a.useContext)(l.p),r=n.originatorDetails[t].profilePictureUrl;if(null===r)return(0,s.jsx)(s.Fragment,{});let o=n.originatorDetails[t].firstName;return null===o?(0,s.jsx)("img",{className:"w-6 h-6 rounded-full -mt-3",src:r,alt:"Profile Picture"}):(0,s.jsx)("img",{className:"w-6 h-6 rounded-full -mt-3",src:r,alt:o})};let f=e=>new Date(e).toLocaleString();function h(){let{chatData:e}=(0,a.useContext)(l.p),t=null,n=()=>{null!=t&&t.scrollIntoView({behavior:"smooth"})};return(0,a.useEffect)(n,[e.messageHistory]),(0,a.useEffect)(()=>{n()},[e.messageHistory]),(0,s.jsxs)("div",{className:"flex-1 max-h-96 overflow-scroll",children:[(0,s.jsx)("div",{className:"flex flex-col h-full",children:e.messageHistory.map((t,n)=>{let{message:a,originator:r,timestamp:o}=t;f(o);let i=e.originatorDetails[r].firstName;return(0,s.jsx)("div",{className:"flex ".concat("client"===r?"justify-end":"justify-start"," mb-4"),children:(0,s.jsxs)("div",{className:"flex flex-col items-start p-2",children:[(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsx)("span",{className:"text-xs ml-2 leading-relaxed text-gray-400",children:i})}),(0,s.jsxs)("div",{className:"flex flex-col items-end",children:[(0,s.jsx)("div",{className:"py-2 px-4 rounded-xl rounded-br-none ".concat("client"===r?"bg-orange-400 text-white":"bg-gray-400 text-white"," max-w-xs"),children:a.replaceAll("{agent_name}",e.originatorDetails.agent.firstName?e.originatorDetails.agent.firstName:"agent").replaceAll("{client_name}",e.originatorDetails.client.firstName?e.originatorDetails.client.firstName:"client")}),(0,s.jsx)(x,{originator:r})]})]})},n)})}),(0,s.jsx)("div",{ref:e=>{t=e}})]})}function p(){let{chatData:e,setChatData:t}=(0,a.useContext)(l.p),[n,r]=(0,a.useState)(!0),o=async n=>{let s;let a=n.credential;if(console.log(a),void 0==a)return;let r=(0,d.Z)(a);console.log(r),e.originatorDetails.client.firstName=r.given_name,e.originatorDetails.client.lastName=r.family_name,e.originatorDetails.client.email=r.email,e.originatorDetails.client.profilePictureUrl=r.picture,e.googleIdToken=a,null===e.pendingQuestion?s=[{originator:"agent",message:"Hi {client_name}, it's great to meet you! Thank you for signing in. How can I help you today?",timestamp:Date.now()}]:(s=[{originator:"agent",message:"Hi {client_name}, it's great to meet you! Thank you for signing in.",timestamp:Date.now()},{originator:"client",message:e.pendingQuestion,timestamp:Date.now()}],e.pendingQuestion=null);let o=[...e.messageHistory,...s],i={...e,messageHistory:o};t(i),(0,g.w)(i)&&await (0,u.P)(i,t)};return((0,a.useEffect)(()=>{r(null==e.googleIdToken)},[e]),n)?(0,s.jsx)("div",{className:"max-w-xs m-auto pb-6",children:(0,s.jsx)(m.kZ,{onSuccess:o,onError:()=>{console.log("Login Failed")}})}):(0,s.jsx)(s.Fragment,{})}function b(){let{chatData:e,setChatData:t}=(0,a.useContext)(l.p),[n,r]=(0,a.useState)(""),o=n=>{let s={originator:"client",message:n,timestamp:Date.now()},a=[...e.messageHistory,s],r={...e,messageHistory:a};t(r),(0,u.P)(r,t)},i=e=>{r(e.target.value)},d=e=>{e.preventDefault(),o(n),r("")},m=e=>{e.preventDefault()};return(0,s.jsx)("div",{className:"flex items-center justify-between p-1 border-gray-200",children:(0,s.jsx)("form",{className:"flex w-full",onSubmit:m,children:(0,s.jsxs)("div",{className:"flex w-full bg-gray-400 items-center rounded-lg",children:[(0,s.jsx)("input",{type:"text",className:"w-full px-4 py-2 border border-gray-20000 rounded-l-md focus:outline-none focus:border-orange-600",placeholder:"Ask us about enrolment or application ...",value:n,onChange:i,disabled:(0,g.w)(e)}),(0,s.jsx)("button",{type:"submit",className:"bg-orange-400 w-12 justify-center h-full flex rounded-r-lg focus:ring-offset-2 hover:bg-gray-400 focus:ring-white",onClick:d,disabled:""===n||(0,g.w)(e),children:(0,s.jsx)(c,{className:"h-6 w-6 self-center text-white"})})]})})})}var y=function(){return(0,s.jsxs)("div",{className:"flex flex-col flex-1 h-96 bg-gray-800",children:[(0,s.jsx)(h,{}),(0,s.jsx)(p,{}),(0,s.jsx)(b,{})]})},j=function(){let{chatData:e,setChatData:t}=(0,a.useContext)(l.p),n=()=>{t({...e,openModel:null})};return(0,s.jsx)(r.u,{appear:!0,show:"chat"===e.openModel,as:a.Fragment,children:(0,s.jsxs)(o.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:n,children:[(0,s.jsx)(r.u.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,s.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,s.jsx)("div",{className:"flex min-h-full items-center justify-center p-2 text-center",children:(0,s.jsx)(r.u.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,s.jsxs)(o.V.Panel,{className:"w-full rounded max-w-2xl transform bg-gray-800 overflow-visible mb-2 p-2 text-left align-middle shadow-5xl transition-all",children:[(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("button",{children:(0,s.jsx)(i,{className:"h-6 w-6 text-gray-500 rounded border border-gray-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:text-orange-200 sfocus:ring-offset-2","aria-hidden":"true",onClick:n})})}),(0,s.jsx)(y,{})]})})})})," "]})})}},7291:function(e,t,n){n.d(t,{Z:function(){return o}});var s=n(5893),a=n(1251),r=n(114);function o(e){return(0,s.jsx)("div",{id:"MoreInfo",className:"relative bg-white",children:(0,s.jsxs)("div",{className:"mx-auto max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8",children:[(0,s.jsx)("div",{className:"relative flex justify-items-center lg:col-span-7 xl:inset-0",children:(0,s.jsx)("iframe",{className:"w-screen aspect-video mt-10 pl-2 pr-2 bg-gray-50 object-cover lg:p-6 lg:w-full",src:e.videoLink,title:e.videoTitle,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),(0,s.jsx)("div",{className:"px-6 pt-10 pb-24 sm:pb-32 lg:col-span-5 lg:px-0 lg:pb-56 ",children:(0,s.jsxs)("div",{className:"mx-auto space-y-12 max-w-2xl lg:mx-0",children:[(0,s.jsx)("h1",{className:"pt-4 mt-10 text-5xl capitalize tracking-normal leading-none border-orange-400 border-t-4",children:e.heading}),(0,s.jsx)("h3",{className:"text-xl w-4/5 tracking-wide leading-tight font-light text-gray-800",children:e.subHeading}),(0,s.jsx)(r.Z,{question:e.ChatButtonText,buttonClassName:"inline-flex items-center rounded-md border uppercase border-transparent bg-orange-400 px-4 py-2 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",bubbleClassName:"-ml-1 mr-3 h-8 w-8",textClassName:"leading-none text-white text-sm text-left uppercase"}),(0,s.jsx)("div",{className:"h-11",children:(0,s.jsxs)("button",{type:"button",href:e.learnButtonLink,className:" bg-orange-400 px-4 py-2 text-sm text-left leading-none text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:[(0,s.jsx)(a,{className:"-ml-1 mr-3 w-8 h-8 ","aria-hidden":"true"}),e.learnButtonText]})})]})})]})})}},4022:function(e,t,n){n.d(t,{Z:function(){return f}});var s=n(5893),a=n(7294),r=n(6512),o=n(243),i=n(1799),l=n(8796),c=n(2525),d=n(2829),m=n(7886),u={src:"/_next/static/media/Logo.8ab847ad.gif",height:500,width:500},g=n(5675),x=n.n(g);function f(){let{chatData:e,setChatData:t}=(0,a.useContext)(m.p);function n(){t({...e,openModel:"chat"})}function g(){t({...e,openModel:"enquire"})}return(0,s.jsx)(r.p,{as:"nav",className:"bg-white shadow w-screen fixed z-10",children:e=>{let{open:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"flex h-16 justify-between",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"-ml-2 mr-2 flex items-center md:hidden",children:(0,s.jsxs)(r.p.Button,{className:"inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500",children:[(0,s.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?(0,s.jsx)(o,{className:"block h-6 w-6","aria-hidden":"true"}):(0,s.jsx)(i,{className:"block h-6 w-6","aria-hidden":"true"})]})}),(0,s.jsxs)("div",{className:"flex flex-shrink-0 items-center",children:[(0,s.jsx)(x(),{className:"block h-14 w-auto lg:hidden",src:u,alt:"Global Talent"}),(0,s.jsx)(x(),{className:"hidden h-12 w-auto lg:block",src:u,alt:"Global Talent"})]}),(0,s.jsxs)("div",{className:"hidden md:ml-6 md:flex md:space-x-8",children:[(0,s.jsx)("a",{href:"#MoreInfo",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-orange-400 hover:text-orange-700 hover:border-orange-500",children:"More Info"}),(0,s.jsx)("a",{href:"#Reviews",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-orange-400 hover:text-orange-700 hover:border-orange-500",children:"Reviews"}),(0,s.jsx)("a",{href:"#StudentExperience",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-orange-400 hover:text-orange-700 hover:border-orange-500",children:"Student Experience"})]})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsxs)("button",{type:"button",onClick:n,className:"text-gray-600 flex-col text-md inline-flex items-center px-4 py-2 rounded-md shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",children:[(0,s.jsx)(l,{className:"h-5 w-5 text-orange-600","aria-hidden":"true"}),(0,s.jsx)("span",{className:"text-gray-600 text-xs",children:"Chat"})]}),(0,s.jsxs)("button",{type:"button",className:"text-gray-600 flex-col text-md inline-flex items-center px-4 py-2 rounded-md shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",onClick:()=>window.open("https://forms.gle/bJohSSgcd2g61WKSA"),children:[(0,s.jsx)(c,{className:"h-5 w-5 text-orange-600","aria-hidden":"true"}),(0,s.jsx)("span",{className:"text-gray-600 text-xs",children:"Apply"})]}),(0,s.jsxs)("button",{type:"button",onClick:g,className:"text-gray-600 flex-col text-md inline-flex items-center px-4 py-2 rounded-md shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",children:[(0,s.jsx)(d,{className:"h-5 w-5 text-orange-600","aria-hidden":"true"}),(0,s.jsx)("span",{className:"text-gray-600 text-xs",onClick:g,children:"Enquire"})]})]})]})}),(0,s.jsx)(r.p.Panel,{className:"md:hidden",children:(0,s.jsxs)("div",{className:"space-y-1 pt-2 pb-3",children:[(0,s.jsx)(r.p.Button,{as:"a",href:"#MoreInfo",className:"block border-l-4 border-orange-500 bg-orange-50 py-2 pl-3 pr-4 text-base font-medium text-orange-700 sm:pl-5 sm:pr-6",children:"More Info"}),(0,s.jsx)(r.p.Button,{as:"a",href:"#Reviews",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-orange-300 sm:pl-5 sm:pr-6",children:"Reviews"}),(0,s.jsx)(r.p.Button,{as:"a",href:"#StudentExperience",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-orange-300 sm:pl-5 sm:pr-6",children:"Student Experience"}),(0,s.jsx)(r.p.Button,{as:"a",href:"#blog",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-orange-300 sm:pl-5 sm:pr-6",children:"Blogs"})]})})]})}})}},114:function(e,t,n){var s=n(5893),a=n(7294),r=n(9762),o=n(7886);t.Z=function(e){let{chatData:t,setChatData:n}=(0,a.useContext)(o.p),i=()=>{n({...t,openModel:"chat",pendingQuestion:e.question})};return(0,s.jsxs)("button",{className:e.buttonClassName,type:"button",onClick:i,children:[(0,s.jsx)(r,{className:e.bubbleClassName}),(0,s.jsx)("h3",{className:e.textClassName,children:e.question})]})}},7886:function(e,t,n){n.d(t,{W:function(){return a},p:function(){return r}});var s=n(7294);let a={openModel:null,googleIdToken:null,assistanceToken:null,taskPrompt:"You work for Global Talent. You are trying to sell Alphacrucis Courses. Your customer's name is {client_name}.  Assume that {client_name} is not able to access information from anywhere else except by talking to you. As such, do not redirect them to any website or other sources.\n\nKeep in mind the below points in everything you say:\n\n- Personalise with the customer's name\n- Clearly communicate course objectives, outcomes, and unique features\n- Ask open-ended questions to understand student's needs\n- Show genuine empathy and interest in student's situation\n- Provide data, testimonials, and case studies for credibility\n- Create a sense of urgency for enrolment\n- Ensure consistency in messaging, tone, and branding.",messageHistory:[{originator:"agent",message:"Hi, my name is {agent_name}. Before we begin, please sign in.",timestamp:Date.now()}],pendingQuestion:null,originatorDetails:{client:{},agent:{firstName:"Michael",profilePictureUrl:"https://www.w3schools.com/howto/img_avatar.png"}}},r=(0,s.createContext)({chatData:a,setChatData:e=>{}})},6188:function(e,t,n){n.d(t,{P:function(){return a}});var s=n(1778);async function a(e,t){let n=e.originatorDetails.agent.firstName||"{agent_name}",a="";for(let t of e.messageHistory){let n=e.originatorDetails[t.originator].firstName,s=t.message;a+="".concat(n,": ").concat(s,"\n\n")}let r={agent_name:n,task_prompt:e.taskPrompt,transcript:a};e.googleIdToken&&(r.google_id_token=e.googleIdToken),e.assistanceToken&&(r.assistance_token=e.assistanceToken);let o=await (0,s.W)(r),i=[...e.messageHistory,{originator:"agent",message:o.agent_message,timestamp:Date.now()}],l={...e,messageHistory:i,assistanceToken:o.assistance_token};t(l)}},5335:function(e,t,n){n.d(t,{w:function(){return s}});let s=e=>{let t=e.messageHistory;if(0===t.length)return!1;let n=t[t.length-1];return"client"===n.originator}}}]);