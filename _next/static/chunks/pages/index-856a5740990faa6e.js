(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9401)}])},9401:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return D}});var i=t(5893),n=t(7294),s=t(9008),r=t.n(s),o=t(6426),l=t(4022),d=t(8034),u=t(4539),c=t(3950),h=t(335),m=t(7886),g=function(){let{chatData:e,setChatData:a}=(0,n.useContext)(m.p),[t,s]=(0,n.useState)(!1),[r,o]=(0,n.useState)(!1),l=(e,a)=>{d(a,e.target.value)},d=(t,i)=>{let n={...e.originatorDetails.client,[t]:i},s={...e.originatorDetails,client:n};a({...e,originatorDetails:s})};function g(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter(Boolean).join(" ")}(0,n.useEffect)(()=>{d("agreeToTerms",t)},[t]),(0,n.useEffect)(()=>{o(p())},[e]);let p=()=>{let a=e.originatorDetails.client;return f(a.firstName)&&f(a.lastName)&&f(a.email)&&f(a.phoneNumber)&&f(a.enquiryMessage)&&!0===a.agreeToTerms},f=e=>null!=e&&""!==e,x=()=>{a({...e,openModel:null})};return(0,i.jsx)(u.u,{appear:!0,show:"enquire"===e.openModel,as:n.Fragment,children:(0,i.jsxs)(c.V,{as:"div",className:"relative z-10 ",onClose:x,children:[(0,i.jsx)(u.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,i.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,i.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,i.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,i.jsx)(u.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,i.jsxs)(c.V.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all",children:[(0,i.jsx)(c.V.Title,{as:"h3",className:"text-3xl font-medium leading-none text-orange-400",children:"Contact Us"}),(0,i.jsx)("div",{className:"mt-5",children:(0,i.jsxs)("form",{action:"#",method:"POST",className:"grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"first-name",className:"block text-sm font-medium text-orange-300",children:"First name"}),(0,i.jsx)("div",{className:"mt-1",children:(0,i.jsx)("input",{type:"text",name:"first-name",id:"first-name",value:e.originatorDetails.client.firstName||"",onChange:e=>l(e,"firstName"),autoComplete:"given-name",className:"block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"last-name",className:"block text-sm font-medium text-orange-300",children:"Last name"}),(0,i.jsx)("div",{className:"mt-1",children:(0,i.jsx)("input",{type:"text",name:"last-name",id:"last-name",value:e.originatorDetails.client.lastName||"",onChange:e=>l(e,"lastName"),autoComplete:"family-name",className:"block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"})})]}),(0,i.jsxs)("div",{className:"sm:col-span-2",children:[(0,i.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-orange-300",children:"Email"}),(0,i.jsx)("div",{className:"mt-1",children:(0,i.jsx)("input",{id:"email",name:"email",type:"email",value:e.originatorDetails.client.email||"",onChange:e=>l(e,"email"),autoComplete:"email",className:"block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"})})]}),(0,i.jsxs)("div",{className:"sm:col-span-2",children:[(0,i.jsx)("label",{htmlFor:"phone-number",className:"block text-sm font-medium text-orange-300",children:"Phone Number"}),(0,i.jsx)("div",{className:"relative mt-1 rounded-md shadow-sm",children:(0,i.jsx)("input",{type:"text",name:"phone-number",id:"phone-number",value:e.originatorDetails.client.phoneNumber||"",onChange:e=>l(e,"phoneNumber"),autoComplete:"tel",className:"block w-full rounded-md border-gray-300 py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500",placeholder:"+61 1234 5678"})})]}),(0,i.jsxs)("div",{className:"sm:col-span-2",children:[(0,i.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-orange-300",children:"Message"}),(0,i.jsx)("div",{className:"mt-1",children:(0,i.jsx)("textarea",{id:"message",name:"message",value:e.originatorDetails.client.enquiryMessage||"",onChange:e=>l(e,"enquiryMessage"),rows:4,className:"block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"})})]}),(0,i.jsx)("div",{className:"sm:col-span-2",children:(0,i.jsxs)("div",{className:"flex items-start",children:[(0,i.jsx)("div",{className:"flex-shrink-0",children:(0,i.jsxs)(h.r,{checked:t,onChange:s,className:g(t?"bg-indigo-600":"bg-gray-200","relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"),children:[(0,i.jsx)("span",{className:"sr-only",children:"Agree to policies"}),(0,i.jsx)("span",{"aria-hidden":"true",className:g(t?"translate-x-5":"translate-x-0","inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out")})]})}),(0,i.jsx)("div",{className:"ml-3",children:(0,i.jsxs)("p",{className:"text-base text-gray-500",children:["By selecting this, you agree to the"," ",(0,i.jsx)("a",{href:"#",className:"font-medium text-orange-300 underline",children:"Privacy Policy"})," ","and"," ",(0,i.jsx)("a",{href:"#",className:"font-medium text-orange-300 underline",children:"Cookie Policy"}),"."]})})]})}),(0,i.jsx)("div",{className:"sm:col-span-2",children:(0,i.jsx)("button",{type:"submit",disabled:!r,className:g(r?" bg-indigo-600  hover:bg-indigo-700":" bg-gray-600","inline-flex w-full items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"),children:"Let's talk"})})]})})]})})})})]})})},p=t(114),f=t(3614),x=t.n(f);function b(e){var a={strings:["Discover God's Purpose for you in <u>Ministry</u>","Discover God's Purpose for you in <u>Counselling </u>","Discover God's Purpose for you in <u>Education</u>","Discover God's Purpose for you in <u>Business</u>","Discover God's Purpose for your <u>Life</u>"],typeSpeed:10,backSpeed:25,backDelay:1200,loop:!0,loopCount:1,showCursor:!1,bindInputFocusEvents:!0};let t=(0,n.useRef)(null),[s,r]=(0,n.useState)(null);(0,n.useEffect)(()=>{let e=new(x())(t.current,a);return r(e),()=>{e.destroy()}},[]);var o={strings:["We will help you find the right course and connect you to your purpose"],typeSpeed:20,backDelay:1350,startDelay:9200,loop:!0,loopCount:1,showCursor:!1};let l=(0,n.useRef)(null),[d,u]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let e=new(x())(l.current,o);return u(e),()=>{e.destroy()}},[]),(0,i.jsxs)("div",{className:"w-screen h-screen",children:[(0,i.jsx)("img",{className:"absolute opacity-30 -z-10 w-screen h-screen md:hidden",src:e.portraitPicture,alt:e.alt}),(0,i.jsx)("img",{className:"absolute opacity-30 -z-10 w-screen h-screen hidden md:block",src:e.landscapePicture,alt:e.alt}),(0,i.jsxs)("div",{className:"grid grid-rows-6 w-screen h-screen",children:[(0,i.jsx)("div",{className:"row-span-1 lg:row-span-2"}),(0,i.jsxs)("div",{className:"space-y-6 w-screen",children:[(0,i.jsxs)("div",{className:"row-span-4 relative w-screen space-y-4 ",children:[(0,i.jsx)("hr",{className:"border-orange-400 border-2 w-10/12 ml-10"}),(0,i.jsx)("h1",{className:"text-5xl pl-10 tracking-normal leading-none",ref:t}),(0,i.jsx)("h3",{className:"text-xl pl-10 pr-10 tracking-wide leading-tight font-light text-gray-800 w-screen",ref:l})]}),(0,i.jsx)(p.Z,{question:e.ChatButtonText,buttonClassName:"row-span-1 inset-10 relative bg-orange-400 inline-flex w-9/12 rounded-md py-1 px-4 shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 lg:w-1/3 lg:justify-self-end space-x-4",bubbleClassName:"-ml-1 self-center text-white h-12 w-12",textClassName:"text-sm font-medium text-white uppercase leading-none text-left place-self-center"})]}),(0,i.jsx)("div",{className:"w-screen"})]})]})}var y=t(7291),w=t(5335),v=t(6188);let j=(0,n.lazy)(()=>t.e(859).then(t.bind(t,7859))),C=(0,n.lazy)(()=>t.e(982).then(t.bind(t,1982))),N=(0,n.lazy)(()=>t.e(862).then(t.bind(t,3862)));function k(e){let[a,t]=(0,n.useState)(m.W);return(0,n.useEffect)(()=>{let e=async()=>{if(null==a.googleIdToken||(0,w.w)(a)||!a.pendingQuestion)return;let e={originator:"client",message:a.pendingQuestion,timestamp:Date.now()},i=[...a.messageHistory,e],n={...a,messageHistory:i,pendingQuestion:null};t(n),await (0,v.P)(n,t)};e()},[a]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"Global Talent"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(o.rg,{clientId:"332533892028-gmefpu618mrv51k25lhpjtfn09mep8kq.apps.googleusercontent.com",children:(0,i.jsxs)(m.p.Provider,{value:{chatData:a,setChatData:t},children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)(d.Z,{}),(0,i.jsx)(g,{}),(0,i.jsx)(b,{portraitPicture:e.data.hero.portraitPicture,landscapePicture:e.data.hero.landscapePicture,alt:e.data.hero.alt,courseTitle:e.data.hero.courseTitle,headLine1:e.data.hero.headLine1,headLine2:e.data.hero.headLine2,headLine3:e.data.hero.headLine3,headLine4:e.data.hero.headLine4,headLine5:e.data.hero.headLine5,headLine6:e.data.hero.headLine6,subHeading:e.data.hero.subHeading,learnButtonText:e.data.hero.learnButtonText,learnButtonLink:e.data.hero.learnButtonLink,ChatButtonText:e.data.hero.ChatButtonText},e.data.hero.id),(0,i.jsx)(y.Z,{heading:e.data.moreInfo.heading,subHeading:e.data.moreInfo.subHeading,learnButtonText:e.data.moreInfo.learnButtonText,learnButtonLink:e.data.moreInfo.learnButtonLink,ChatButtonText:e.data.moreInfo.ChatButtonText,videoLink:e.data.moreInfo.videoLink,videoTitle:e.data.moreInfo.videoTitle},e.data.moreInfo.id),(0,i.jsx)(n.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(j,{careerSnapshot:e.data.reviews.careerSnapshot,careerSlogan:e.data.reviews.careerSlogan,sidePanel:e.data.reviews.sidePanel,featured:e.data.reviews.featured},e.data.reviews.id)}),(0,i.jsx)(n.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(C,{blogsHeading:e.data.blog.blogsHeading,blogsSubHeading:e.data.blog.blogsSubHeading,posts:e.data.blog.posts},e.data.blog.id)}),(0,i.jsx)(n.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(N,{})})]})}),";"]})}var T=JSON.parse('{"hero":{"id":"general","portraitPicture":"https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80","landscapePicture":"https://images.unsplash.com/photo-1580317092843-52bb0adbed4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","alt":"Counselling Picture ","courseTitle":"COURSE RESOURCES ","headLine1":"Discover God\'s Purpose for you in Counselling","headLine2":"Discover God\'s Purpose for you in Education","headLine3":"Discover God\'s Purpose for you in Ministry","headLine4":"Discover God\'s Purpose for you in Leadership","headLine5":"Discover God\'s Purpose for you in Business","headLine6":"Discover God\'s Purpose for you in Life","subHeading":"We\'ll connect you to the right course and help you find your purpose","learnButtonText":"Study With Our Partner Alphacrucis University College","learnButtonLink":"https://www.ac.edu.au/healthbrochure","ChatButtonText":"How can you help me align my faith and my career?"},"moreInfo":{"id":1,"heading":"It\'s time to align your faith with your future","subHeading":"We will find you the best study pathway to maximise your God gifted talents","learnButtonText":"Email us to find out more","learnButtonLink":"#Enquire","ChatButtonText":"Do I qualify for FEE-HELP?","videoLink":"https://www.youtube.com/embed/XH4dHf5O7u4","videoTitle":"Thank you"},"reviews":{"id":1,"careerSnapshot":"Why Our Partners","careerSlogan":"Make your Faith your Career edge","sidePanel":[{"id":1,"headline":"","subheading":"Starting Salary"},{"id":2,"headline":"↑40% ","subheading":"Of all Australians will need counselling at some point in their lives"},{"id":3,"headline":"> 85%","subheading":"Feel that their career is meaningful and rewarding"}],"featured":[{"id":1,"content":"<p>The evidence based teaching at AC has really transformed the impact of my ministry</p>","author":"Bradley M","action":"I Enrolled for","reason":"Purpose Driven Study","titlelocation":"- Senior Member of Churches of Christ, WA.","course":"Master of Counselling","avatarSrc":"https://randomuser.me/api/portraits/men/75.jpg"},{"id":2,"content":"<p>I was studying the same degree at another university and the lecturer said that our worldview affects everything we do. At that moment, I realised I needed to find a new place to learn</p>","author":"Abigail C","action":"I Applied for","reason":"Christ Centered Learning","titlelocation":"","course":"- Bachelor of Applied Social Science","avatarSrc":"https://randomuser.me/api/portraits/women/65.jpg"},{"id":3,"content":"<p>The evidence based teaching at AC has really transformed the impact of my ministry</p>","author":"Anne L -","action":"I GRADUATED WITH","reason":"a meaningful career path","titlelocation":"Founder, ","course":" Chaplaincy Australia","avatarSrc":"https://randomuser.me/api/portraits/women/72.jpg"}]},"studentExperience":{"id":1,"videoLink":"https://www.youtube.com/embed/3_AoWp1tFMA","videoTitle":"Student Experience","ChatButtonText":"What is studying at Alphacrucis like?"},"blog":{"id":"1","blogsHeading":"Read and Inspire","blogsSubHeading":"Invest wisely in your Talents","posts":[{"id":1,"title":"Why a Christian Counselling Degree is Unique and Impactful","href":"#","BlogCategory":{"name":"Video","href":"#"},"description":"A Christian Counselling degree is unique in that it combines the best practices of traditional counselling with a biblical perspective. This allows for a holistic approach to helping individuals and families overcome their struggles and find healing. Learn more about the benefits of studying Christian Counselling at Alphacrucis.","date":"January 1, 2022","datetime":"2022-01-01T12:00:00","imageUrl":"https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80","readingTime":"5 minute read","author":{"name":"Jane Smith","href":"#","imageUrl":"https://xsgames.co/randomusers/assets/avatars/female/34.jpg"},"content":""},{"id":2,"title":"Career Opportunities with a Christian Counselling Degree","href":"#","BlogCategory":{"name":"Article","href":"#"},"description":"A Christian Counselling degree can open up a variety of career paths in the helping professions. From working in a church setting to private practice, the options are endless. Learn more about the different career opportunities available with a Christian Counselling degree from Alphacrucis.","date":"February 15, 2022","datetime":"2022-02-15T12:00:00","imageUrl":"https://images.unsplash.com/photo-1472162314594-eca3c3d90df1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80","readingTime":"7 minute video","author":{"name":"Jesse Doe","href":"#","imageUrl":"https://xsgames.co/randomusers/assets/avatars/male/31.jpg"}},{"id":3,"title":"Student Testimonials: Studying Christian Counselling at Alphacrucis","href":"#","BlogCategory":{"name":"Article","href":"#"},"description":"Hear from current and former students about their experiences studying Christian Counselling at Alphacrucis. Learn about the impact the program has had on their personal and professional lives, and why they recommend it to others. Discover what makes Alphacrucis a premier institution for Christian Counselling education.","date":"March 1, 2022","datetime":"2022-03-01T12:00:00","imageUrl":"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","readingTime":"10 minute read","author":{"name":"Alphacrucis Student Services","href":"#","imageUrl":"https://xsgames.co/randomusers/assets/avatars/female/68.jpg"}}]}}');function D(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(k,{data:T})})}}},function(e){e.O(0,[436,698,826,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);