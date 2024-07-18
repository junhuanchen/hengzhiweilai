"use strict";(self.webpackChunkheng_docs=self.webpackChunkheng_docs||[]).push([[3292],{9946:(s,e,d)=>{d.r(e),d.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>x,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var t=d(4848),i=d(8453);const n={sidebar_label:"\u63a2\u7d22 Sparky\uff1a\u73a9\u8f6c\u52a8\u4f5c\u7f16\u8f91",sidebar_position:4},r="\u63a2\u7d22 Sparky\uff1a\u73a9\u8f6c\u52a8\u4f5c\u7f16\u8f91",c={id:"tutorial-basics/create_a_blog_post",title:"\u63a2\u7d22 Sparky\uff1a\u73a9\u8f6c\u52a8\u4f5c\u7f16\u8f91",description:"\u4e00\u3001\u524d\u8a00",source:"@site/docs/tutorial-basics/create_a_blog_post.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create_a_blog_post",permalink:"/heng-docs/zh-Hans/docs/tutorial-basics/create_a_blog_post",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create_a_blog_post.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"\u63a2\u7d22 Sparky\uff1a\u73a9\u8f6c\u52a8\u4f5c\u7f16\u8f91",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u521d\u8bc6 Sparky\uff08\u7eed\uff09\uff1a\u66f4\u591a\u73a9\u6cd5",permalink:"/heng-docs/zh-Hans/docs/tutorial-basics/quick_start_two"},next:{title:"WebSocket API \u4f7f\u7528\u8bf4\u660e",permalink:"/heng-docs/zh-Hans/docs/tutorial-basics/deploy_your_site"}},h={},l=[{value:"\u4e00\u3001\u524d\u8a00",id:"\u4e00\u524d\u8a00",level:2},{value:"\u4e8c\u3001\u51c6\u5907\u5de5\u4f5c",id:"\u4e8c\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2.1 \u786c\u4ef6",id:"21-\u786c\u4ef6",level:3},{value:"2.2 \u8f6f\u4ef6",id:"22-\u8f6f\u4ef6",level:3},{value:"\u4e09\u3001\u793a\u6559\u6a21\u5f0f",id:"\u4e09\u793a\u6559\u6a21\u5f0f",level:2},{value:"3.1 \u8fdb\u5165\u793a\u6559\u6a21\u5f0f",id:"31-\u8fdb\u5165\u793a\u6559\u6a21\u5f0f",level:3},{value:"3.2 \u5f00\u542f\u52a8\u4f5c\u5f55\u5236",id:"32-\u5f00\u542f\u52a8\u4f5c\u5f55\u5236",level:3},{value:"3.3 \u793a\u4f8b\u52a8\u4f5c\u7ec4",id:"33-\u793a\u4f8b\u52a8\u4f5c\u7ec4",level:3},{value:"3.4 \u66f4\u591a\u64cd\u4f5c",id:"34-\u66f4\u591a\u64cd\u4f5c",level:3},{value:"\u56db\u3001\u7f16\u8f91\u6a21\u5f0f",id:"\u56db\u7f16\u8f91\u6a21\u5f0f",level:2},{value:"4.1 \u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f",id:"41-\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f",level:3},{value:"4.2 \u65b0\u5efa\u5173\u952e\u5e27",id:"42-\u65b0\u5efa\u5173\u952e\u5e27",level:3},{value:"4.3 \u793a\u4f8b\u5173\u952e\u5e27",id:"43-\u793a\u4f8b\u5173\u952e\u5e27",level:3},{value:"4.4 \u66f4\u591a\u64cd\u4f5c",id:"44-\u66f4\u591a\u64cd\u4f5c",level:3}];function j(s){const e={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u63a2\u7d22-sparky\u73a9\u8f6c\u52a8\u4f5c\u7f16\u8f91",children:"\u63a2\u7d22 Sparky\uff1a\u73a9\u8f6c\u52a8\u4f5c\u7f16\u8f91"}),"\n",(0,t.jsx)(e.h2,{id:"\u4e00\u524d\u8a00",children:"\u4e00\u3001\u524d\u8a00"}),"\n",(0,t.jsx)("div",{className:"indent-first-line",children:(0,t.jsx)(e.p,{children:"\u201c\u563f\uff0c\u672a\u6765\u7684\u673a\u5668\u72d7\u8bad\u7ec3\u5927\u5e08\uff01\u60a8\u5df2\u7ecf\u548c\u54ee\u5929\u4e00\u8d77\u8e0f\u4e0a\u4e86\u63a2\u7d22\u4e4b\u65c5\uff0c\u719f\u6089\u4e86\u5b83\u7684\u542f\u52a8\u3001\u4e92\u52a8\u53ca\u4f7f\u7528\u8fc7\u7a0b\uff0c\u8fd9\u65e0\u7591\u4e3a\u751f\u6d3b\u589e\u6dfb\u4e86\u8bb8\u591a\u4e50\u8da3\u3002\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u66f4\u8fdb\u4e00\u6b65\u6765\u73a9\u8f6c\u52a8\u4f5c\u7f16\u8f91\uff0c\u4e3a\u54ee\u5929\u521b\u9020\u66f4\u591a\u72ec\u4e00\u65e0\u4e8c\u7684\u52a8\u4f5c\u7ec4\uff01\u201d"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4e8c\u51c6\u5907\u5de5\u4f5c",children:"\u4e8c\u3001\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,t.jsx)(e.p,{children:"\u6b64\u7bc7\u6587\u6863\u662f\u57fa\u4e8e\u5f00\u7bb1\u6307\u5357\u4e0b\u7684 APP \u4f7f\u7528\u65b9\u6cd5\u7684\u5ef6\u7eed\u6587\uff0c\u6587\u6863\u9ed8\u8ba4\u60a8\u5df2\u719f\u6089\u54ee\u5929\u7684\u57fa\u7840\u4f7f\u7528\u6d41\u7a0b\uff0c\u6545\u5728\u8fd9\u4e0d\u4ecb\u7ecd\u524d\u5e8f\u76f8\u5173\u7684\u4f7f\u7528\u6b65\u9aa4\uff0c\u5982\u6709\u9700\u8981\u8bf7\u53c2\u8003\u67e5\u9605\u4ee5\u4e0b\u8d44\u6599\u3002"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u8d44\u6599\uff1a",(0,t.jsx)(e.a,{href:"https://hengbot-dynamics.github.io/heng-docs/docs/tutorial-basics/quick-start-guide",children:"\u521d\u8bc6 Sparky\uff1a\u5f00\u7bb1\u6307\u5357"})]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"21-\u786c\u4ef6",children:"2.1 \u786c\u4ef6"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"\u54ee\u5929"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"sparky",src:d(3163).A+"",width:"5616",height:"3744"})}),"\n",(0,t.jsx)(e.h3,{id:"22-\u8f6f\u4ef6",children:"2.2 \u8f6f\u4ef6"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u54ee\u5929\u4f7f\u7528\u73af\u5883\uff08\u56fa\u4ef6\u7248\u672c\uff1ahzwl831-m2dock-20240621\uff09"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u7b2c\u4e00\u6b65\uff1a\u9ed8\u8ba4\u662f\u5df2\u8054\u7f51\u72b6\u6001\u5e76\u8fdb\u5165\u9065\u63a7\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.li,{children:"\u7b2c\u4e8c\u6b65\uff1a\u53ef\u5728\u5c4f\u5e55\u83b7\u53d6 IP \u5730\u5740\uff08\u4f8b\u5982\u201cIP:192.168.8.232\u201d \uff09"}),"\n",(0,t.jsx)(e.li,{children:"\u7b2c\u4e09\u6b65\uff1a\u5df2\u8fde\u63a5\u597d SPARKY'S APP"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4e09\u793a\u6559\u6a21\u5f0f",children:"\u4e09\u3001\u793a\u6559\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u793a\u6559\u6a21\u5f0f\u4e0b\uff0c\u7528\u6237\u53ef\u6446\u52a8\u54ee\u5929\u7684\u56db\u80a2\u548c\u673a\u8eab\u6765\u6559\u4f1a\u5b83\u65b0\u52a8\u4f5c\u3002\u540c\u65f6\u5b83\u4f1a\u901a\u8fc7\u5176\u7535\u673a\u4f4d\u7f6e\u4f20\u611f\u5668\u6765\u8bb0\u5f55\u52a8\u4f5c\uff0c\u5f53\u9700\u8981\u590d\u73b0\u52a8\u4f5c\u65f6\uff0c\u54ee\u5929\u5c06\u6267\u884c\u8bb0\u5f55\u7684\u6bcf\u4e00\u4e2a\u52a8\u4f5c\u6216\u59ff\u52bf\u3002\u8fd9\u79cd\u6a21\u5f0f\u8ba9\u4e2a\u6027\u5316\u8bad\u7ec3\u8fc7\u7a0b\u53d8\u5f97\u65e2\u7b80\u5355\u53c8\u5145\u6ee1\u4e50\u8da3\u3002"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u4f7f\u7528\u6d41\u7a0b\u56fe",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.img,{alt:"teach_process",src:d(5922).A+"",width:"928",height:"1108"})]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"31-\u8fdb\u5165\u793a\u6559\u6a21\u5f0f",children:"3.1 \u8fdb\u5165\u793a\u6559\u6a21\u5f0f"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u793a\u4f8b\u56fe"}),(0,t.jsx)(e.th,{children:"\u64cd\u4f5c\u63cf\u8ff0"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"teach_mode",src:d(8164).A+"",width:"1024",height:"915"})}),(0,t.jsx)(e.td,{children:"\u6211\u4eec\u53ef\u901a\u8fc7\u9876\u680f\u5207\u6362\u5230\u793a\u6559\u6a21\u5f0f\uff0c\u8fdb\u9875\u9762\u540e\u4f1a\u63d0\u793a\u6062\u590d\u521d\u59cb\u59ff\u6001\uff0c\u6309\u201c\u786e\u8ba4\u201d\u5373\u53ef\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"teach_lock",src:d(6480).A+"",width:"2400",height:"1080"})}),(0,t.jsx)(e.td,{children:"\u9875\u9762\u4e0a\u663e\u793a\u4e86\u54ee\u5929\u7684\u4fef\u89c6\u7ebf\u7a3f\u56fe\uff0c\u6240\u6709\u7535\u673a\u90e8\u4f4d\u9ed8\u8ba4\u4ee5\u7ea2\u8272\u9ad8\u4eae\u663e\u793a\uff0c\u5e76\u5904\u4e8e\u9501\u5b9a\u72b6\u6001\u3002\u8fd9\u610f\u5473\u7740\u8fd9\u4e9b\u90e8\u4f4d\u76ee\u524d\u88ab\u56fa\u5b9a\uff0c\u65e0\u6cd5\u79fb\u52a8\u6216\u6267\u884c\u52a8\u4f5c\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"teach_unlock",src:d(729).A+"",width:"2400",height:"1080"})}),(0,t.jsx)(e.td,{children:"\uff08\u56fe\u4f8b\uff1a\u5168\u8eab\u5173\u8282\u5df2\u89e3\u9501\u72b6\u6001\uff09\u5f00\u542f\u5f55\u5236\u524d\uff0c\u7528\u6237\u6839\u636e\u52a8\u4f5c\u9700\u6c42\u70b9\u51fb \u201c\u9501\u201d \u7684\u56fe\u6807\u89e3\u9501\u76f8\u5e94\u7684\u5173\u8282\uff0c\u89e3\u9501\u540e\u5173\u8282\u5448\u5378\u529b\u7ad9\u7acb\u59ff\u6001\uff0c\u6211\u4eec\u53ef\u5f00\u59cb\u5bf9\u54ee\u5929\u201c\u6446\u52a8\u4f5c\u201d\u8fdb\u884c\u5f55\u5236\u3002"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"32-\u5f00\u542f\u52a8\u4f5c\u5f55\u5236",children:"3.2 \u5f00\u542f\u52a8\u4f5c\u5f55\u5236"}),"\n",(0,t.jsx)(e.admonition,{title:"Take care",type:"danger",children:(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u5f55\u5236\u65b0\u52a8\u4f5c\u65f6\uff0c\u8bf7\u8003\u8651\u54ee\u5929\u7684\u5e73\u8861\u6216\u652f\u6491\u529b\u662f\u5426\u8db3\u591f\uff0c\u9632\u6b62\u54ee\u5929\u590d\u73b0\u52a8\u4f5c\u65f6\u91cd\u529b\u4e0d\u7a33\u5f80\u540e\u5f39\u6216\u8dcc\u5012\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u64ad\u653e\u65b0\u5f55\u5236\u7684\u52a8\u4f5c\u65f6\uff0c\u4e3a\u9632\u6b62\u5f55\u5236\u5b8c\u6210\u540e\u7535\u673a\u4e0a\u7535\u540e\u5bfc\u81f4\u673a\u8eab\u5f39\u8d77\u8bf7\u63e1\u7d27\u673a\u8eab\u3002"}),"\n"]})}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u793a\u4f8b\u56fe"}),(0,t.jsx)(e.th,{children:"\u64cd\u4f5c\u63cf\u8ff0"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"teach_start",src:d(9397).A+"",width:"1024",height:"1843"})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.strong,{children:"\u7b2c\u4e00\u6b65\uff08\u8fdb\u5165\u5f55\u5236\uff09"}),"\uff1a\u70b9\u51fb\u201c\u6dfb\u52a0\u52a8\u4f5c\u201d\u540e\u8fdb\u5165\u201c\u5f55\u5236\u52a8\u4f5c\u201d\uff0c\u9875\u9762\u4f1a\u63d0\u793a\u4e09\u79d2\u6389\u7535\u5012\u8ba1\u65f6\uff0c\u8ba1\u65f6\u7ed3\u675f\u54ee\u5929\u8fdb\u5165\u7ad9\u7acb\u4f46\u5173\u8282\u5378\u529b\u59ff\u6001\u3002",(0,t.jsx)(e.strong,{children:"\u7b2c\u4e8c\u6b65\uff08\u5f00\u59cb\u5f55\u5236\uff09"}),"\uff1a\u5728\u5f55\u5236\u8fc7\u7a0b\u4e2d\uff0c\u9875\u9762\u5c06\u6301\u7eed\u663e\u793a\u8ba1\u65f6\uff0c\u65b9\u4fbf\u719f\u6089\u5f55\u5236\u65f6\u957f\u3002\u6211\u4eec\u53ef\u4e3a\u54ee\u5929\u8bbe\u8ba1\u4e00\u7cfb\u5217\u6709\u8da3\u7684\u52a8\u4f5c\uff0c\u6bd4\u5982\u8ba9\u5b83\u62ac\u5934\u3001\u626d\u52a8\u8eab\u4f53\u7b49\u3002\u540c\u65f6\u4e5f\u53ef\u53c2\u7167\u793a\u4f8b\u52a8\u4f5c\u7ec4\u8fdb\u884c\u5b66\u4e60\u548c\u590d\u73b0\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"teach_stop",src:d(9901).A+"",width:"2400",height:"1080"})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.strong,{children:"\u7b2c\u4e09\u6b65\uff08\u7ed3\u675f\u5f55\u5236\uff09"}),"\uff1a\u5f55\u5236\u5b8c\u52a8\u4f5c\u7ec4\u540e\uff0c\u8bf7\u70b9\u51fb\u201c\u7ed3\u675f\u5f55\u5236\u201d\u9000\u51fa\u5f55\u5236\u7a0b\u5e8f\u5373\u53ef\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"teach_play",src:d(5103).A+"",width:"2400",height:"1080"})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.strong,{children:"\u7b2c\u56db\u6b65\uff08\u590d\u73b0\u64ad\u653e\uff09"}),"\uff1a\u65b0\u6587\u4ef6\u4f1a\u663e\u793a\u5728\u4e0b\u65b9\u5b58\u653e\u680f\uff0c\u53ef\u70b9\u51fb\u201c\u64ad\u653e\u201d\u952e\u8ba9\u54ee\u5929\u590d\u73b0\u65b0\u5f55\u5236\u7684\u52a8\u4f5c\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"teach_setting",src:d(6425).A+"",width:"1024",height:"927"})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.strong,{children:"\u7b2c\u4e94\u6b65"}),"\uff1a\u70b9\u51fb\u6807\u6ce8\u4e00\u8fdb\u5165\u53c2\u6570\u4fee\u6539\u9875\u9762\uff0c\u5728\u6b64\u9875\u9762\u60a8\u53ef\u4ee5\u8c03\u8282\u7535\u673a\u901f\u5ea6\u3001\u7535\u673a\u52a0\u901f\u5ea6\u3001\u64ad\u653e\u901f\u5ea6\u3001\u547d\u540d\u7b49\u53c2\u6570\uff0c\u5e76\u8fdb\u884c\u4fee\u6539\u3001\u4fdd\u5b58\u5012\u5e93\u6216\u5220\u9664\u3002"]})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"33-\u793a\u4f8b\u52a8\u4f5c\u7ec4",children:"3.3 \u793a\u4f8b\u52a8\u4f5c\u7ec4"}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b\u5f85\u8865"}),"\n",(0,t.jsx)(e.h3,{id:"34-\u66f4\u591a\u64cd\u4f5c",children:"3.4 \u66f4\u591a\u64cd\u4f5c"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"teach_more",src:d(9510).A+"",width:"1024",height:"1399"})}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u9879"}),(0,t.jsx)(e.th,{children:"\u76f8\u5173\u542b\u4e49\u53ca\u64cd\u4f5c"}),(0,t.jsx)(e.th,{children:"\u5907\u6ce8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u8c03\u8282\u64ad\u653e\u901f\u5ea6\uff08\u6807\u6ce8\u4e8c\uff09"})}),(0,t.jsx)(e.td,{children:"\u62c9\u52a8\u6ed1\u6761\u8fdb\u884c\u8c03\u8282\u5f55\u5236\u7684\u52a8\u4f5c\u7ec4\u64ad\u653e\u901f\u5ea6"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u5982\u4f55\u91cd\u65b0\u547d\u540d\uff08\u6807\u6ce8\u4e09\uff09"})}),(0,t.jsx)(e.td,{children:"\u5bf9\u6807\u6ce8\u5904\u4fee\u6539\u5373\u53ef\uff0c\u652f\u6301\u4e2d\u82f1\u6587\u66f4\u540d\u3002"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u8c03\u8282\u7535\u673a\u901f\u5ea6\uff08\u6807\u6ce8\u56db\uff09"})}),(0,t.jsx)(e.td,{children:"\u7535\u673a\u901f\u5ea6\u8c03\u8282\u6709\u56db\u4e2a\u9009\u9879\uff1a\u6700\u5feb\u3001\u5feb\u3001\u6162\u3001\u6700\u6162"}),(0,t.jsx)(e.td,{children:"\u5982\u679c\u5c06\u7535\u673a\u901f\u5ea6\u8c03\u81f3\u6700\u5feb\uff0c\u7535\u673a\u7684\u53cd\u5e94\u901f\u5ea6\u6700\u5feb\uff0c\u4e5f\u5c31\u4ee3\u8868\u4f1a\u5feb\u901f\u5b8c\u6210\u52a8\u4f5c\u7ec4\u7684\u52a8\u4f5c\u3002\u4ee5\u6b64\u7c7b\u63a8\uff0c\u5982\u679c\u5c06\u7535\u673a\u901f\u5ea6\u8c03\u81f3\u6700\u6162\uff0c\u800c\u52a8\u4f5c\u7ec4\u7684\u52a8\u4f5c\u5219\u4f1a\u4ee5\u7f13\u6162\u4e14\u4e1d\u6ed1\u7684\u72b6\u6001\u5b8c\u6210\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u8c03\u8282\u7535\u673a\u52a0\u901f\u5ea6\uff08\u6807\u6ce8\u4e94\uff09"})}),(0,t.jsx)(e.td,{children:"\u7535\u673a\u52a0\u901f\u5ea6\u8c03\u8282\u6709\u56db\u4e2a\u9009\u9879\uff1a\u6700\u5feb\u3001\u5feb\u3001\u6162\u3001\u6700\u6162"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u4fdd\u5b58\u52a8\u4f5c\u81f3\u5e93\uff08\u6807\u6ce8\u516d\uff09"})}),(0,t.jsx)(e.td,{children:"\u5c06\u6b64\u52a8\u4f5c\u7ec4\u5b58\u653e\u8fdb\u52a8\u4f5c\u5e93\uff0c\u53ef\u5728\u9065\u63a7\u6a21\u5f0f\u4e0b\u67e5\u8be2\u6b64\u52a8\u4f5c\u7ec4"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.strong,{children:"\u5220\u9664\u52a8\u4f5c\u7ec4\uff08\u6807\u6ce8\u4e03"}),"\uff09"]}),(0,t.jsx)(e.td,{children:"\u70b9\u51fb\u201c\u5220\u9664\u6b64\u52a8\u4f5c\u201d\u5373\u53ef\u79fb\u9664\u76f8\u5e94\u7684\u52a8\u4f5c\u7ec4"}),(0,t.jsx)(e.td,{})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u4e86\u89e3\u9875\u9762\u5982\u4f55\u4f7f\u7528\u540e\uff0c\u63a5\u4e0b\u6765\u8bf7\u8ddf\u968f\u793a\u4f8b\u52a8\u4f5c\u7ec4\u6559\u7a0b\u6765\u521b\u5efa\u54ee\u5929\u7b2c\u4e00\u4e2a\u4e13\u5c5e\u52a8\u4f5c\u7ec4\u5427\uff01"}),"\n",(0,t.jsx)(e.h2,{id:"\u56db\u7f16\u8f91\u6a21\u5f0f",children:"\u56db\u3001\u7f16\u8f91\u6a21\u5f0f"}),"\n",(0,t.jsx)(e.p,{children:'"\u7f16\u8f91\u6a21\u5f0f\u63d0\u4f9b\u4e86\u6bd4\u793a\u6559\u66f4\u7cbe\u51c6\u7684\u63a7\u5236\u80fd\u529b\uff0c\u5141\u8bb8\u8c03\u6574\u54ee\u5929\u6bcf\u4e00\u5e27\u7684\u52a8\u4f5c\u7ec6\u8282\uff1a\u5305\u62ec\u901f\u5ea6\u3001\u52a0\u901f\u5ea6\u3001\u505c\u987f\u65f6\u95f4\u4ee5\u53ca\u89d2\u5ea6\u7b49\u53c2\u6570\uff1b\u7f16\u8f91\u53c2\u6570\u7684\u540c\u65f6\u4f1a\u628a\u6570\u503c\u53d1\u9001\u5230\u673a\u8eab\u540c\u6b65\u8c03\u6574\u3002\u8fd9\u79cd\u6a21\u5f0f\u4f7f\u5f97\u6bcf\u4e00\u5e27\u52a8\u4f5c\u90fd\u80fd\u5f97\u5230\u7cbe\u51c6\u8c03\u6574\uff0c\u4ece\u800c\u5b9e\u73b0\u66f4\u9ad8\u7cbe\u5ea6\u548c\u9ad8\u63a7\u5236\u5ea6\u3002"'}),"\n",(0,t.jsx)(e.h3,{id:"41-\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f",children:"4.1 \u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u793a\u4f8b\u56fe"}),(0,t.jsx)(e.th,{children:"\u64cd\u4f5c\u63cf\u8ff0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"open_editor_mode",src:d(697).A+"",width:"1024",height:"1382"})}),(0,t.jsxs)(e.td,{children:["\u6211\u4eec\u53ef\u901a\u8fc7\u9876\u680f",(0,t.jsx)(e.strong,{children:"\u5207\u6362\u5230\u7f16\u8f91\u6a21\u5f0f\uff0c\u8fdb\u5165\u9875\u9762\u540e\u63d0\u793a\u6062\u590d\u521d\u59cb\u59ff\u6001\uff0c\u6309\u201c\u786e\u8ba4\u201d\u5373\u53ef"}),"\u3002\u7f16\u8f91\u9875\u9762\u5c55\u793a\u4e86\u54ee\u5929\u5728\u521d\u59cb\u59ff\u6001\u65f6\u7684\u5173\u8282\u53c2\u6570\uff0c\u4f9b\u7528\u6237\u5728\u7f16\u8f91\u52a8\u4f5c\u65f6\u4f5c\u4e3a\u53c2\u8003\u4f9d\u636e"]})]})})]}),"\n",(0,t.jsx)(e.h3,{id:"42-\u65b0\u5efa\u5173\u952e\u5e27",children:"4.2 \u65b0\u5efa\u5173\u952e\u5e27"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u793a\u4f8b\u56fe"}),(0,t.jsx)(e.th,{children:"\u64cd\u4f5c\u63cf\u8ff0"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"new_editor",src:d(4693).A+"",width:"1024",height:"921"})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.strong,{children:"\u7b2c\u4e00\u6b65\uff1a\u65b0\u5efa\u5173\u952e\u5e27"}),"\uff1a\u70b9\u51fb \u201c\u6dfb\u52a0\u5173\u952e\u5e27\u201d\u8fdb\u5165\u5173\u952e\u5e27\u7f16\u8f91\u9875\u9762\u3002",(0,t.jsx)(e.strong,{children:"\u7b2c\u4e8c\u6b65\uff1a\u7f16\u8f91\u9875\u9762"}),"\uff1a\u7528\u6237\u53ef\u5728\u7f16\u8f91\u9875\u9762\u4fee\u6539\u5934\u90e8\u3001\u673a\u8eab\u3001\u53f3\u540e\u817f\u3001\u5de6\u540e\u817f\u3001\u5de6\u524d\u817f\u3001\u53f3\u524d\u817f\u7684 XYZ \u4e09\u8f74\u53c2\u6570\u5e76\u521b\u5efa\u54ee\u5929\u4e00\u5e27\u7684\u5173\u952e\u5e27\uff0c\u5e76\u8fdb\u884c\u4fdd\u5b58\u3001\u53e6\u5b58\u4e3a\u3001\u5220\u9664\u7b49\u64cd\u4f5c\u3002"]})]})})]}),"\n",(0,t.jsx)(e.h3,{id:"43-\u793a\u4f8b\u5173\u952e\u5e27",children:"4.3 \u793a\u4f8b\u5173\u952e\u5e27"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u4ee5\u4e0b\u4e3a\u521b\u9020\u4e00\u5e27\u54ee\u5929\u7684\u62ac\u5934\u626d\u5c41\u80a1\u7684\u5173\u952e\u5e27\u793a\u4f8b\uff0c\u5177\u4f53\u53c2\u6570\u503c\u4ec5\u4f9b\u53c2\u8003\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5173\u8282"}),(0,t.jsx)(e.th,{children:"\u53c2\u6570\u5b9a\u4e49"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u5934\u90e8"})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.code,{children:"Yaw"}),"\uff1a\u63a7\u5236\u9888\u90e8\u5de6\u53f3\u8f6c\u52a8\u3001",(0,t.jsx)(e.code,{children:"Pitch"}),"\uff1a\u63a7\u5236\u5934\u90e8\u4e0a\u4e0b\u8fd0\u52a8\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u673a\u8eab"})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.code,{children:"Roll"}),"\uff1a\u63a7\u5236\u673a\u8eab\u7684\u6eda\u8f6c\u8fd0\u52a8\u3001",(0,t.jsx)(e.code,{children:"Pitch"}),"\uff1a\u63a7\u5236\u673a\u8eab\u7684\u4fef\u4ef0\u8fd0\u52a8\u3001",(0,t.jsx)(e.code,{children:"Yaw"}),"\uff1a\u63a7\u5236\u673a\u8eab\u7684\u504f\u822a\u8fd0\u52a8\u3002"]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u817f\u90e8"})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.code,{children:"X\u8f74"}),"\uff1a\u63a7\u5236\u817f\u90e8\u524d\u540e\u79fb\u52a8\u3001",(0,t.jsx)(e.code,{children:"Y\u8f74"}),"\uff1a\u63a7\u5236\u817f\u90e8\u5de6\u53f3\u6446\u52a8\u3001",(0,t.jsx)(e.code,{children:"Z\u8f74"}),"\uff1a\u63a7\u5236\u817f\u90e8\u4e0a\u4e0b\u6d3b\u52a8\u3002"]})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u4e86\u89e3\u6211\u4eec\u53ef\u4fee\u6539\u7684\u5173\u8282\u3001\u53c2\u6570\u53ca\u5b83\u7684\u5b9a\u4e49\u540e\u5c31\u5f00\u59cb\u521b\u9020\u4e00\u5e27\u65b0\u7684\u5173\u952e\u5e27\u5566\uff01"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u64cd\u4f5c\u6b65\u9aa4"}),(0,t.jsx)(e.th,{children:"\u793a\u4f8b\u56fe"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.strong,{children:"\u7b2c\u4e00\u6b65\u7f16\u8f91\u5934\u90e8\u53c2\u6570"}),"\uff1a\u6211\u4eec\u8981\u5b9e\u73b0\u4e00\u5e27\u54ee\u5929\u62ac\u5934\u626d\u5c41\u80a1\u7684\u5173\u952e\u5e27\u3002\u4e3a\u6b64\u5934\u90e8\u9700\u4fee\u6539 ",(0,t.jsx)(e.code,{children:"Pitch \u53c2\u6570"}),"\u6765\u5b9e\u73b0\u62ac\u8d77\uff0c\u540c\u65f6\u4e3a\u4e86\u8ba9\u54ee\u5929\u770b\u8d77\u6765\u66f4\u52a0\u7075\u52a8\uff0c\u5bf9 ",(0,t.jsx)(e.code,{children:"Yaw \u53c2\u6570"}),"\u8fdb\u884c\u4fee\u6539\u5b9e\u73b0\u9888\u90e8\u5de6\u53f3\u8f6c\u5411\u529f\u80fd\u3002"]}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"editor_head",src:d(6795).A+"",width:"1024",height:"921"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.strong,{children:"\u7b2c\u4e8c\u6b65\u7f16\u8f91\u673a\u8eab\u53c2\u6570"}),"\uff1a\u5934\u90e8\u62ac\u8d77\u65f6\uff0c\u4e3a\u4e86\u8ba9\u6574\u4f53\u52a8\u4f5c\u66f4\u52a0\u534f\u8c03\u5c1d\u8bd5\u673a\u8eab\u4e5f\u4fee\u6539 ",(0,t.jsx)(e.code,{children:"Pitch \u53c2\u6570"}),"\uff0c\u4ee5\u673a\u8eab\u5c3e\u90e8\u7684\u5c41\u80a1\u62ac\u9ad8\uff0c\u524d\u90e8\u4f4e\u4e0b\u7684\u59ff\u6001\u53bb\u5b9e\u73b0\u626d\u5c41\u80a1\u7684\u52a8\u4f5c\uff0c\u800c\u5728\u9888\u90e8\u6211\u4eec\u8fd8\u6dfb\u52a0 ",(0,t.jsx)(e.code,{children:"Yaw \u53c2\u6570"}),"\uff0c\u673a\u8eab\u4e5f\u53ef\u4ee5\u5fae\u8c03\u6b64\u53c2\u6570\u3002"]}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"editor_body",src:d(5077).A+"",width:"1024",height:"921"})})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u7b2c\u4e09\u6b65\u7f16\u8f91\u56db\u8db3\u53c2\u6570"}),"\uff1a\u8c03\u6574\u65f6\u9700\u6ce8\u610f\u5404\u817f\u90e8\u7684\u539f\u59cb\u53c2\u6570\uff0c\u4ee5\u786e\u4fdd\u52a8\u4f5c\u81ea\u7136\u534f\u8c03\u3002\u817f\u90e8\u53ef\u8fdb\u884c\u4fee\u6539\u7684\u6709\u5de6\u540e\u817f\u3001\u53f3\u540e\u817f\u3001\u5de6\u524d\u817f\u53ca\u53f3\u524d\u817f\uff0c\u914d\u5408\u673a\u8eab\u7684\u59ff\u52bf\u9700\u8c03\u6574\u817f\u90e8\u7684\u4e0a\u4e0b\u53c2\u6570\uff0c\u5c06\u524d\u817f\u7684\u4f4d\u7f6e\u8c03\u4f4e\u3001\u540e\u817f\u7684\u4f4d\u7f6e\u8c03\u9ad8\u8ba9\u54ee\u5929\u5b9e\u73b0\u626d\u5c41\u80a1\u7684\u59ff\u6001\u3002"]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53f3\u540e\u817f\u793a\u610f\u56fe"}),(0,t.jsx)(e.th,{children:"\u5de6\u540e\u817f\u793a\u610f\u56fe"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"right_after",src:d(9166).A+"",width:"1024",height:"921"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"left_after",src:d(423).A+"",width:"1024",height:"921"})})]})})]}),"\n",(0,t.jsx)(e.p,{children:"\u4f46\u6b64\u65f6\u5728\u5fae\u8c03\u7684\u8fc7\u7a0b\u4e2d\u6211\u4eec\u53d1\u73b0\u540e\u817f\u8c03\u9ad8\u540e\uff0c\u54ee\u5929\u53ef\u80fd\u4f1a\u51fa\u73b0\u7ad9\u4e0d\u7a33\u7684\u60c5\u51b5\u3002\u8fd9\u65f6\u53ef\u5fae\u8c03\u540e\u817f\u7684\u524d\u540e\u3001\u5de6\u53f3\u53c2\u6570\uff0c\u8ba9\u540e\u817f\u7684\u652f\u6491\u9762\u66f4\u5e7f\u5e76\u7ad9\u7684\u66f4\u7a33\u5f53\u3002"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5de6\u524d\u817f\u793a\u610f\u56fe"}),(0,t.jsx)(e.th,{children:"\u53f3\u524d\u817f\u793a\u610f\u56fe"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"the_front_left",src:d(4132).A+"",width:"1024",height:"921"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.img,{alt:"the_front_right",src:d(4325).A+"",width:"1024",height:"921"})})]})})]}),"\n",(0,t.jsxs)(e.p,{children:["\u5b8c\u6210\u6240\u6709\u7684\u8c03\u6574\u53c2\u6570\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5173\u952e\u5e27\u8c03\u6574\u5230 200ms \u6765\u89c2\u5bdf\u54ee\u5929\u3002\u6765\u4e00\u8d77\u770b\u770b\u6548\u679c\u5427\uff01",(0,t.jsx)(e.br,{}),"\n","\u4ee5\u4e0a\u53c2\u6570\u4ec5\u4f9b\u53c2\u8003\uff0c\u7528\u6237\u53ef\u81ea\u884c\u6839\u636e\u60f3\u6cd5\u6765\u8fdb\u884c\u5fae\u8c03\u52a8\u4f5c\u3002"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u89c6\u9891"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"44-\u66f4\u591a\u64cd\u4f5c",children:"4.4 \u66f4\u591a\u64cd\u4f5c"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"\u8c03\u6574\u7535\u673a\u53c2\u6570"})}),"\n"]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u9879"}),(0,t.jsx)(e.th,{children:"\u76f8\u5173\u542b\u4e49\u53ca\u64cd\u4f5c"}),(0,t.jsx)(e.th,{children:"\u5907\u6ce8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u8c03\u8282\u7535\u673a\u901f\u5ea6\uff08\u6807\u6ce8\u4e00\uff09"})}),(0,t.jsx)(e.td,{children:"\u7535\u673a\u901f\u5ea6\u8c03\u8282\u6709\u56db\u4e2a\u9009\u9879\uff1a\u6700\u5feb\u3001\u5feb\u3001\u6162\u3001\u6700\u6162"}),(0,t.jsx)(e.td,{children:"\u5982\u679c\u5c06\u7535\u673a\u901f\u5ea6\u8c03\u81f3\u6700\u5feb\uff0c\u7535\u673a\u7684\u53cd\u5e94\u901f\u5ea6\u6700\u5feb\uff0c\u4e5f\u5c31\u4ee3\u8868\u4f1a\u5feb\u901f\u5b8c\u6210\u52a8\u4f5c\u7ec4\u7684\u52a8\u4f5c\u3002\u4ee5\u6b64\u7c7b\u63a8\uff0c\u5982\u679c\u5c06\u7535\u673a\u901f\u5ea6\u8c03\u81f3\u6700\u6162\uff0c\u800c\u52a8\u4f5c\u7ec4\u7684\u52a8\u4f5c\u5219\u4f1a\u4ee5\u7f13\u6162\u4e14\u4e1d\u6ed1\u7684\u72b6\u6001\u5b8c\u6210\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u8c03\u8282\u7535\u673a\u52a0\u901f\u5ea6\uff08\u6807\u6ce8\u4e8c)"})}),(0,t.jsx)(e.td,{children:"\u7535\u673a\u52a0\u901f\u5ea6\u8c03\u8282\u6709\u56db\u4e2a\u9009\u9879\uff1a\u6700\u5feb\u3001\u5feb\u3001\u6162\u3001\u6700\u6162"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u8c03\u8282\u5173\u952e\u5e27\u65f6\u95f4\uff08\u6807\u6ce8\u4e09\uff09"})}),(0,t.jsx)(e.td,{children:"\u53ef\u5728\u6b64\u8c03\u8282\u5173\u952e\u5e27\u7684\u65f6\u95f4\uff0c\u5efa\u8bae\u4ee5200ms\u4e3a\u4e00\u5e27\u7684\u65f6\u95f4\u3002"}),(0,t.jsx)(e.td,{})]})]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"aia",src:d(2148).A+"",width:"2400",height:"1080"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"\u4fdd\u5b58\u3001\u53e6\u5b58\u4e3a\u3001\u5220\u9664\u5173\u952e\u5e27"})}),"\n"]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u53c2\u6570\u9879"}),(0,t.jsx)(e.th,{children:"\u76f8\u5173\u542b\u4e49\u53ca\u64cd\u4f5c"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u4fdd\u5b58\u81f3\u6b64\u5173\u952e\u5e27"})}),(0,t.jsx)(e.td,{children:"\u70b9\u51fb\u6b64\u9009\u9879\u53ef\u5c06\u5f53\u524d\u7f16\u8f91\u7684\u5173\u952e\u5e27\u4fdd\u5b58\u81f3\u5f53\u524d\u52a8\u4f5c\u5e8f\u5217\u4e2d\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u53e6\u5b58\u81f3\u65b0\u5173\u952e\u5e27"})}),(0,t.jsx)(e.td,{children:"\u9009\u62e9\u6b64\u9009\u9879\u53ef\u4ee5\u5c06\u5f53\u524d\u7f16\u8f91\u7684\u5173\u952e\u5e27\u4f5c\u4e3a\u4e00\u4e2a\u65b0\u7684\u72ec\u7acb\u5173\u952e\u5e27\u4fdd\u5b58\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u5220\u9664\u6b64\u5173\u952e\u5e27"})}),(0,t.jsx)(e.td,{children:"\u70b9\u51fb\u6b64\u9009\u9879\u53ef\u4ece\u52a8\u4f5c\u5e8f\u5217\u4e2d\u79fb\u9664\u5f53\u524d\u9009\u62e9\u7684\u5173\u952e\u5e27\u3002"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"save",src:d(1684).A+"",width:"2400",height:"1080"})})]})}function x(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(j,{...s})}):j(s)}},2148:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/aia-e14b2f1a3d337b0df6a307615f6c66f4.jpg"},5077:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/editor_body-447ba365042005ec688bd02e7867bead.jpg"},6795:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/editor_head-da4b0c0c391887697ce6bc50df79ab96.jpg"},423:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/left_after-af3761e907d68842a3cedf0b3a105ec3.jpg"},4693:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/new_editor-971070fbc03c59ed8aa7f558cb65fa36.jpg"},697:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/open_editor_mode-93a77803cea3c242a7bbaa54c500a22e.jpg"},9166:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/right_after-911913044502222af608e6ebaec25bac.jpg"},1684:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/save-cd90c7c7ededecfa66a8579ee4a78caa.jpg"},3163:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/sparky-096ae94b3d25f8e00d8a6aff73319ed5.jpg"},6480:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/teach_lock-f7d21d58249cbe3814d97de1e2872208.jpg"},8164:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/teach_mode-d5ea4d3a56ea95cc016afd78a7fe2009.jpg"},9510:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/teach_more-ba89f499301748b428f7a4df87b757d9.jpg"},5103:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/teach_play-40c983ed5465cc196c5d92df41dcdf71.jpg"},5922:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/teach_process-ec4ce884a08da7ae30f6cf502ab31dea.jpg"},6425:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/teach_setting-04edadbf892e102fd75f1ab771465d9e.jpg"},9397:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/teach_start-5e4a62fd4fb82668afe61523929eb2ff.jpg"},9901:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/teach_stop-6769286c7d83b8ed40a691f4e178d473.jpg"},729:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/teach_unlock-2fcd3abb612329b0d0539629e2de4721.jpg"},4132:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/the_front_left-fa39e21a8ff26c5052486c2dd52925b9.jpg"},4325:(s,e,d)=>{d.d(e,{A:()=>t});const t=d.p+"assets/images/the_front_right-4d84a1988d97f9e6005c968c195b90c3.jpg"},8453:(s,e,d)=>{d.d(e,{R:()=>r,x:()=>c});var t=d(6540);const i={},n=t.createContext(i);function r(s){const e=t.useContext(n);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:r(s.components),t.createElement(n.Provider,{value:e},s.children)}}}]);