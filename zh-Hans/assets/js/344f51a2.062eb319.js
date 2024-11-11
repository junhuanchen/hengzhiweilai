"use strict";(self.webpackChunkheng_docs=self.webpackChunkheng_docs||[]).push([[9463],{9054:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=d(4848),t=d(8453);const i={sidebar_label:"\u63a2\u7d22\u7cfb\u5217\uff08\u4e00\uff09\uff1aAPP \u8fdb\u9636\u73a9\u6cd5",sidebar_position:4},n="\u63a2\u7d22\u7cfb\u5217\uff08\u4e00\uff09\uff1aAPP \u8fdb\u9636\u73a9\u6cd5",c={id:"tutorial-basics/create_a_blog_post",title:"\u63a2\u7d22\u7cfb\u5217\uff08\u4e00\uff09\uff1aAPP \u8fdb\u9636\u73a9\u6cd5",description:"\u4e00\u3001\u524d\u8a00",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorial-basics/create_a_blog_post.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create_a_blog_post",permalink:"/heng-docs/zh-Hans/docs/tutorial-basics/create_a_blog_post",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create_a_blog_post.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"\u63a2\u7d22\u7cfb\u5217\uff08\u4e00\uff09\uff1aAPP \u8fdb\u9636\u73a9\u6cd5",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u7cfb\u5217\uff1aAPP \u73a9\u6cd5",permalink:"/heng-docs/zh-Hans/docs/tutorial-basics/app_user"},next:{title:"\u63a2\u7d22\u7cfb\u5217\uff08\u4e8c\uff09\uff1aPython API",permalink:"/heng-docs/zh-Hans/docs/tutorial-basics/python_api"}},l={},h=[{value:"\u4e00\u3001\u524d\u8a00",id:"\u4e00\u524d\u8a00",level:2},{value:"\u4e8c\u3001\u51c6\u5907\u5de5\u4f5c",id:"\u4e8c\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u4e09\u3001\u5173\u952e\u5e27\u6a21\u5f0f",id:"\u4e09\u5173\u952e\u5e27\u6a21\u5f0f",level:2},{value:"3.1 \u8fdb\u5165\u5173\u952e\u5e27\u6a21\u5f0f",id:"31-\u8fdb\u5165\u5173\u952e\u5e27\u6a21\u5f0f",level:3},{value:"3.2 \u65b0\u5efa\u5173\u952e\u5e27",id:"32-\u65b0\u5efa\u5173\u952e\u5e27",level:3},{value:"3.3 \u793a\u4f8b\u5173\u952e\u5e27\uff08\u62c6\u89e3\u6b65\u9aa4\uff09",id:"33-\u793a\u4f8b\u5173\u952e\u5e27\u62c6\u89e3\u6b65\u9aa4",level:3},{value:"3.4 \u8c03\u6574\u53c2\u6570\u9879",id:"34-\u8c03\u6574\u53c2\u6570\u9879",level:3},{value:"\u56db\u3001\u7ed3\u8bed",id:"\u56db\u7ed3\u8bed",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"\u63a2\u7d22\u7cfb\u5217\u4e00app-\u8fdb\u9636\u73a9\u6cd5",children:"\u63a2\u7d22\u7cfb\u5217\uff08\u4e00\uff09\uff1aAPP \u8fdb\u9636\u73a9\u6cd5"})}),"\n",(0,r.jsx)(s.h2,{id:"\u4e00\u524d\u8a00",children:"\u4e00\u3001\u524d\u8a00"}),"\n",(0,r.jsx)("div",{className:"indent-first-line",children:(0,r.jsx)(s.p,{children:"\u201c\u563f\uff0c\u672a\u6765\u7684\u673a\u5668\u72d7\u8bad\u7ec3\u5927\u5e08\uff01\u60a8\u5df2\u7ecf\u548c\u54ee\u5929\u4e00\u8d77\u8e0f\u4e0a\u4e86\u63a2\u7d22\u4e4b\u65c5\uff0c\u719f\u6089\u4e86\u5b83\u7684\u542f\u52a8\u3001\u4e92\u52a8\u53ca\u4f7f\u7528\u8fc7\u7a0b\uff0c\u8fd9\u65e0\u7591\u4e3a\u751f\u6d3b\u589e\u6dfb\u4e86\u8bb8\u591a\u4e50\u8da3\u3002\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u66f4\u8fdb\u4e00\u6b65\u6765\u73a9\u8f6c\u52a8\u4f5c\u7f16\u8f91\uff0c\u4e3a\u54ee\u5929\u521b\u9020\u66f4\u591a\u72ec\u4e00\u65e0\u4e8c\u7684\u52a8\u4f5c\u7ec4\uff01\u201d"})}),"\n",(0,r.jsx)(s.h2,{id:"\u4e8c\u51c6\u5907\u5de5\u4f5c",children:"\u4e8c\u3001\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u6b65\u9aa4"}),(0,r.jsx)(s.th,{children:"\u8be6\u7ec6\u4ecb\u7ecd"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u8f6f\u4ef6\uff1a\u4e0b\u8f7d\u597d APP \u5e76\u6839\u636e\u63d0\u793a\u5b89\u88c5"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"app_qr",src:d(8952).A+"",width:"382",height:"516"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u73af\u5883\uff1a\u54ee\u5929\u5df2\u8054\u7f51\u5e76\u5df2\u6210\u529f\u8fde\u63a5\u624b\u673a app"})}),(0,r.jsxs)(s.td,{children:["\u6b64\u6587\u6863\u4e0d\u518d\u5bf9\u57fa\u7840\u914d\u7f6e\u7b49\u4f7f\u7528\u64cd\u4f5c\u8fdb\u884c\u9610\u8ff0\uff0c\u76f8\u5173\u8d44\u6599\u8bf7\u53c2\u8003\u6b64\u6587\u6863\uff1a",(0,r.jsx)(s.a,{href:"/heng-docs/zh-Hans/docs/tutorial-basics/quick_start_guide",children:"\u5f00\u7bb1\u5927\u653e\u9001"})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u4e09\u5173\u952e\u5e27\u6a21\u5f0f",children:"\u4e09\u3001\u5173\u952e\u5e27\u6a21\u5f0f"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u5173\u952e\u5e27\u6a21\u5f0f\uff08\u7f16\u8f91\u6a21\u5f0f\uff09"}),"\uff1a\u63d0\u4f9b\u4e86\u66f4\u7cbe\u51c6\u7684\u63a7\u5236\u80fd\u529b\uff0c\u5141\u8bb8\u8c03\u6574\u54ee\u5929\u6bcf\u4e00\u5e27\u7684\u52a8\u4f5c\u7ec6\u8282\uff1a\u5305\u62ec\u901f\u5ea6\u3001\u52a0\u901f\u5ea6\u3001\u505c\u987f\u65f6\u95f4\u4ee5\u53ca\u89d2\u5ea6\u7b49\u53c2\u6570\uff1b\u7f16\u8f91\u53c2\u6570\u7684\u540c\u65f6\u4f1a\u628a\u6570\u503c\u53d1\u9001\u5230\u673a\u8eab\u540c\u6b65\u8c03\u6574\u3002\u8fd9\u79cd\u6a21\u5f0f\u4f7f\u5f97\u6bcf\u4e00\u5e27\u52a8\u4f5c\u90fd\u80fd\u5f97\u5230\u7cbe\u51c6\u8c03\u6574\uff0c\u4ece\u800c\u5b9e\u73b0\u66f4\u9ad8\u7cbe\u5ea6\u548c\u9ad8\u63a7\u5236\u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)("iframe",{width:"780",height:"400",src:"https://www.youtube.com/embed/razfjav5x6A?si=_TeCl-8AE6svFB4b",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u7528\u6237\u53ef\u6839\u636e\u6548\u679c\u89c6\u9891\u719f\u6089\u5173\u952e\u5e27\u6a21\u5f0f\u7684\u4f7f\u7528\uff0c\u4e0b\u6587\u4e3a\u6587\u5b57\u7248\u7684\u6b65\u9aa4\u62c6\u89e3\uff0c\u5982\u6709\u7591\u95ee\u53ef\u53c2\u8003\u8be6\u60c5\u3002"})}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"31-\u8fdb\u5165\u5173\u952e\u5e27\u6a21\u5f0f",children:"3.1 \u8fdb\u5165\u5173\u952e\u5e27\u6a21\u5f0f"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u793a\u4f8b\u56fe"}),(0,r.jsx)(s.th,{children:"\u64cd\u4f5c\u63cf\u8ff0"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"open_editor_mode",src:d(4263).A+"",width:"1024",height:"1382"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.strong,{children:"\u6807\u6ce8\u4e00"}),"\uff1a\u901a\u8fc7\u9876\u680f\u5207\u6362\u5230\u7f16\u8f91\u6a21\u5f0f\uff1b",(0,r.jsx)(s.strong,{children:"\u6807\u6ce8\u4e8c"}),"\uff1a\u8fdb\u5165\u9875\u9762\u540e\u63d0\u793a\u6062\u590d\u521d\u59cb\u59ff\u6001\uff0c\u6309\u201c\u786e\u8ba4\u201d\u5373\u53ef\u3002\u7f16\u8f91\u9875\u9762\u5c55\u793a\u4e86\u54ee\u5929\u5728\u521d\u59cb\u59ff\u6001\u65f6\u7684\u5173\u8282\u53c2\u6570\uff0c\u4f9b\u7528\u6237\u5728\u7f16\u8f91\u52a8\u4f5c\u65f6\u4f5c\u4e3a\u53c2\u8003\u4f9d\u636e"]})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"32-\u65b0\u5efa\u5173\u952e\u5e27",children:"3.2 \u65b0\u5efa\u5173\u952e\u5e27"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u793a\u4f8b\u56fe"}),(0,r.jsx)(s.th,{children:"\u64cd\u4f5c\u63cf\u8ff0"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"new_editor",src:d(6523).A+"",width:"1024",height:"921"})}),(0,r.jsx)(s.td,{children:"**\u6807\u6ce8\u4e00\uff1a\uff08\u65b0\u5efa\u5173\u952e\u5e27\uff09**\u70b9\u51fb \u201c\u6dfb\u52a0\u5173\u952e\u5e27\u201d\u8fdb\u5165\u7f16\u8f91\u9875\u9762\uff1b**\u6807\u6ce8\u4e8c\uff1a\uff08\u7f16\u8f91\u9875\u9762\uff09**\u7528\u6237\u53ef\u5728\u9875\u9762\u4fee\u6539\u5934\u90e8\u3001\u673a\u8eab\u3001\u53f3\u540e\u817f\u3001\u5de6\u540e\u817f\u3001\u5de6\u524d\u817f\u3001\u53f3\u524d\u817f\u7684 XYZ \u4e09\u8f74\u53c2\u6570\u5e76\u521b\u5efa\u54ee\u5929\u4e00\u5e27\u7684\u5173\u952e\u5e27\uff0c\u5e76\u8fdb\u884c\u4fdd\u5b58\u3001\u53e6\u5b58\u4e3a\u3001\u5220\u9664\u7b49\u64cd\u4f5c\u3002"})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"33-\u793a\u4f8b\u5173\u952e\u5e27\u62c6\u89e3\u6b65\u9aa4",children:"3.3 \u793a\u4f8b\u5173\u952e\u5e27\uff08\u62c6\u89e3\u6b65\u9aa4\uff09"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u4ee5\u4e0b\u4e3a\u521b\u9020\u4e00\u5e27\u54ee\u5929\u7684\u62ac\u5934\u626d\u5c41\u80a1\u7684\u5173\u952e\u5e27\u793a\u4f8b\uff0c\u5177\u4f53\u53c2\u6570\u503c\u4ec5\u4f9b\u53c2\u8003\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u5173\u8282"}),(0,r.jsx)(s.th,{children:"\u53c2\u6570\u5b9a\u4e49"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u5934\u90e8"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"Yaw"}),"\uff1a\u63a7\u5236\u9888\u90e8\u5de6\u53f3\u8f6c\u52a8\u3001",(0,r.jsx)(s.code,{children:"Pitch"}),"\uff1a\u63a7\u5236\u5934\u90e8\u4e0a\u4e0b\u8fd0\u52a8\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u673a\u8eab"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"Roll"}),"\uff1a\u63a7\u5236\u673a\u8eab\u7684\u6eda\u8f6c\u8fd0\u52a8\u3001",(0,r.jsx)(s.code,{children:"Pitch"}),"\uff1a\u63a7\u5236\u673a\u8eab\u7684\u4fef\u4ef0\u8fd0\u52a8\u3001",(0,r.jsx)(s.code,{children:"Yaw"}),"\uff1a\u63a7\u5236\u673a\u8eab\u7684\u504f\u822a\u8fd0\u52a8\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u817f\u90e8"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"X\u8f74"}),"\uff1a\u63a7\u5236\u817f\u90e8\u524d\u540e\u79fb\u52a8\u3001",(0,r.jsx)(s.code,{children:"Y\u8f74"}),"\uff1a\u63a7\u5236\u817f\u90e8\u5de6\u53f3\u6446\u52a8\u3001",(0,r.jsx)(s.code,{children:"Z\u8f74"}),"\uff1a\u63a7\u5236\u817f\u90e8\u4e0a\u4e0b\u6d3b\u52a8\u3002"]})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"\u4e86\u89e3\u6211\u4eec\u53ef\u4fee\u6539\u7684\u5173\u8282\u90e8\u4f4d\u3001\u53c2\u6570\u53ca\u5b83\u7684\u5b9a\u4e49\u540e\u5c31\u5f00\u59cb\u521b\u9020\u4e00\u5e27\u65b0\u7684\u5173\u952e\u5e27\u5566\uff01"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u64cd\u4f5c\u6b65\u9aa4"}),(0,r.jsx)(s.th,{children:"\u793a\u4f8b\u56fe\uff08\u4e0a\u4e0b\u4e3a\u4fee\u6539\u5bf9\u6bd4\u56fe\uff09"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.strong,{children:"\u7b2c\u4e00\u6b65\u7f16\u8f91\u5934\u90e8\u53c2\u6570"}),"\uff1a\u6211\u4eec\u8981\u5b9e\u73b0\u4e00\u5e27\u54ee\u5929\u62ac\u5934\u626d\u5c41\u80a1\u7684\u5173\u952e\u5e27\u3002\u4e3a\u6b64\u5934\u90e8\u9700\u4fee\u6539 ",(0,r.jsx)(s.code,{children:"Pitch \u53c2\u6570"}),"\u6765\u5b9e\u73b0\u62ac\u8d77\uff0c\u540c\u65f6\u4e3a\u4e86\u8ba9\u54ee\u5929\u770b\u8d77\u6765\u66f4\u52a0\u7075\u52a8\uff0c\u5bf9 ",(0,r.jsx)(s.code,{children:"Yaw \u53c2\u6570"}),"\u8fdb\u884c\u4fee\u6539\u5b9e\u73b0\u9888\u90e8\u5de6\u53f3\u8f6c\u5411\u529f\u80fd\u3002"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"editor_head",src:d(293).A+"",width:"1024",height:"921"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.strong,{children:"\u7b2c\u4e8c\u6b65\u7f16\u8f91\u673a\u8eab\u53c2\u6570"}),"\uff1a\u5934\u90e8\u62ac\u8d77\u65f6\uff0c\u4e3a\u4e86\u8ba9\u6574\u4f53\u52a8\u4f5c\u66f4\u52a0\u534f\u8c03\u5c1d\u8bd5\u673a\u8eab\u4e5f\u4fee\u6539 ",(0,r.jsx)(s.code,{children:"Pitch \u53c2\u6570"}),"\uff0c\u4ee5\u673a\u8eab\u5c3e\u90e8\u7684\u5c41\u80a1\u62ac\u9ad8\uff0c\u524d\u90e8\u4f4e\u4e0b\u7684\u59ff\u6001\u53bb\u5b9e\u73b0\u626d\u5c41\u80a1\u7684\u52a8\u4f5c\uff0c\u800c\u5728\u9888\u90e8\u6211\u4eec\u8fd8\u6dfb\u52a0 ",(0,r.jsx)(s.code,{children:"Yaw \u53c2\u6570"}),"\uff0c\u673a\u8eab\u4e5f\u53ef\u4ee5\u5fae\u8c03\u6b64\u53c2\u6570\u3002"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"editor_body",src:d(9223).A+"",width:"1024",height:"921"})})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u7b2c\u4e09\u6b65\u7f16\u8f91\u56db\u8db3\u53c2\u6570"}),"\uff1a\u8c03\u6574\u65f6\u9700\u6ce8\u610f\u5404\u817f\u90e8\u7684\u539f\u59cb\u53c2\u6570\uff0c\u4ee5\u786e\u4fdd\u52a8\u4f5c\u81ea\u7136\u534f\u8c03\u3002\u817f\u90e8\u53ef\u8fdb\u884c\u4fee\u6539\u7684\u6709\u5de6\u540e\u817f\u3001\u53f3\u540e\u817f\u3001\u5de6\u524d\u817f\u53ca\u53f3\u524d\u817f\uff0c\u914d\u5408\u673a\u8eab\u7684\u59ff\u52bf\u9700\u8c03\u6574\u817f\u90e8\u7684\u4e0a\u4e0b\u53c2\u6570\uff0c\u5c06\u524d\u817f\u7684\u4f4d\u7f6e\u8c03\u4f4e\u3001\u540e\u817f\u7684\u4f4d\u7f6e\u8c03\u9ad8\u8ba9\u54ee\u5929\u5b9e\u73b0\u626d\u5c41\u80a1\u7684\u59ff\u6001\u3002"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53f3\u540e\u817f\u793a\u610f\u56fe"}),(0,r.jsx)(s.th,{children:"\u5de6\u540e\u817f\u793a\u610f\u56fe"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"right_after",src:d(5264).A+"",width:"1024",height:"921"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"left_after",src:d(6721).A+"",width:"1024",height:"921"})})]})})]}),"\n",(0,r.jsx)(s.p,{children:"\u4f46\u6b64\u65f6\u5728\u5fae\u8c03\u7684\u8fc7\u7a0b\u4e2d\u6211\u4eec\u53d1\u73b0\u540e\u817f\u8c03\u9ad8\u540e\uff0c\u54ee\u5929\u53ef\u80fd\u4f1a\u51fa\u73b0\u7ad9\u4e0d\u7a33\u7684\u60c5\u51b5\u3002\u8fd9\u65f6\u53ef\u5fae\u8c03\u540e\u817f\u7684\u524d\u540e\u3001\u5de6\u53f3\u53c2\u6570\uff0c\u8ba9\u540e\u817f\u7684\u652f\u6491\u9762\u66f4\u5e7f\u5e76\u7ad9\u7684\u66f4\u7a33\u5f53\u3002"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u5de6\u524d\u817f\u793a\u610f\u56fe"}),(0,r.jsx)(s.th,{children:"\u53f3\u524d\u817f\u793a\u610f\u56fe"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"the_front_left",src:d(3178).A+"",width:"1024",height:"921"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"the_front_right",src:d(8635).A+"",width:"1024",height:"921"})})]})})]}),"\n",(0,r.jsx)(s.p,{children:"\u5b8c\u6210\u6240\u6709\u7684\u8c03\u6574\u53c2\u6570\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5173\u952e\u5e27\u8c03\u6574\u5230 200ms \u6765\u89c2\u5bdf\u54ee\u5929\uff0c\u5728 200ms \u5185\u6211\u4eec\u53ef\u4ee5\u3002"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u6b65\u9aa4"}),(0,r.jsx)(s.th,{children:"\u793a\u4f8b\u56fe"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.strong,{children:"\u7b2c\u56db\u6b65\u4fdd\u5b58\u5173\u952e\u5e27"}),"\uff1a\u7f16\u8f91\u5b8c\u6210\u540e\u70b9\u51fb\u5de6\u4fa7\u7684\u4fdd\u5b58\u6309\u952e\uff08",(0,r.jsx)(s.strong,{children:"\u6807\u6ce8\u4e00"}),"\uff09\u8fdb\u884c\u8fd9\u4e00\u5e27\u7684\u5173\u952e\u5e27\u4fdd\u5b58\u3002"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"save",src:d(4286).A+"",width:"1000",height:"450"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.strong,{children:"\u7b2c\u4e94\u6b65\u64ad\u653e\u5173\u952e\u5e27"}),"\uff1a\u70b9\u51fb\u5de6\u4e0a\u89d2\u64ad\u653e\u56fe\u6807\uff08\u4e09\u89d2\u5f62\uff09\u540e\u4f1a\u8fdb\u884c\u5bf9\u6b64\u5173\u952e\u5e27\u8fdb\u884c\u64ad\u653e\u64cd\u4f5c\u3002"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"app_play",src:d(4531).A+"",width:"2400",height:"1080"})})]})]})]}),"\n",(0,r.jsx)("iframe",{width:"780",height:"400",src:"https://www.youtube.com/embed/razfjav5x6A?si=_TeCl-8AE6svFB4b",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,r.jsx)(s.h3,{id:"34-\u8c03\u6574\u53c2\u6570\u9879",children:"3.4 \u8c03\u6574\u53c2\u6570\u9879"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"\u6807\u6ce8\u4e00\uff1a\u5148\u70b9\u51fb\u64ad\u653e\u952e\u540e\u4f1a\u5f39\u51fa\u7f16\u8f91\u952e\u3002"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"\u6807\u6ce8\u4e8c\uff1a\u70b9\u51fb\u5373\u53ef\u8fdb\u5165\u53c2\u6570\u7f16\u8f91\u9875\u9762\u3002"})}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"app_parameter",src:d(3444).A+"",width:"800",height:"360"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"\u8c03\u6574\u7535\u673a\u53c2\u6570"})}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570\u9879"}),(0,r.jsx)(s.th,{children:"\u76f8\u5173\u542b\u4e49\u53ca\u64cd\u4f5c"}),(0,r.jsx)(s.th,{children:"\u5907\u6ce8"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"aia",src:d(5002).A+"",width:"2400",height:"1080"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u8c03\u8282\u7535\u673a\u901f\u5ea6\uff08\u6807\u6ce8\u4e00\uff09"})}),(0,r.jsx)(s.td,{children:"\u7535\u673a\u901f\u5ea6\u8c03\u8282\u6709\u56db\u4e2a\u9009\u9879\uff1a\u6700\u5feb\u3001\u5feb\u3001\u6162\u3001\u6700\u6162"}),(0,r.jsx)(s.td,{children:"\u5982\u679c\u5c06\u7535\u673a\u901f\u5ea6\u8c03\u81f3\u6700\u5feb\uff0c\u7535\u673a\u7684\u53cd\u5e94\u901f\u5ea6\u6700\u5feb\uff0c\u4e5f\u5c31\u4ee3\u8868\u4f1a\u5feb\u901f\u5b8c\u6210\u52a8\u4f5c\u7ec4\u7684\u52a8\u4f5c\u3002\u4ee5\u6b64\u7c7b\u63a8\uff0c\u5982\u679c\u5c06\u7535\u673a\u901f\u5ea6\u8c03\u81f3\u6700\u6162\uff0c\u800c\u52a8\u4f5c\u7ec4\u7684\u52a8\u4f5c\u5219\u4f1a\u4ee5\u7f13\u6162\u4e14\u4e1d\u6ed1\u7684\u72b6\u6001\u5b8c\u6210\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u8c03\u8282\u7535\u673a\u52a0\u901f\u5ea6\uff08\u6807\u6ce8\u4e8c)"})}),(0,r.jsx)(s.td,{children:"\u7535\u673a\u52a0\u901f\u5ea6\u8c03\u8282\u6709\u56db\u4e2a\u9009\u9879\uff1a\u6700\u5feb\u3001\u5feb\u3001\u6162\u3001\u6700\u6162"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u8c03\u8282\u5173\u952e\u5e27\u65f6\u95f4\uff08\u6807\u6ce8\u4e09\uff09"})}),(0,r.jsx)(s.td,{children:"\u53ef\u5728\u6b64\u8c03\u8282\u5173\u952e\u5e27\u7684\u65f6\u95f4\uff0c\u5efa\u8bae\u4ee5200ms\u4e3a\u4e00\u5e27\u7684\u65f6\u95f4\u3002"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"\u4fdd\u5b58\u3001\u53e6\u5b58\u4e3a\u3001\u5220\u9664\u5173\u952e\u5e27"})}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u53c2\u6570\u9879"}),(0,r.jsx)(s.th,{children:"\u76f8\u5173\u542b\u4e49\u53ca\u64cd\u4f5c"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{alt:"save",src:d(4286).A+"",width:"1000",height:"450"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u6807\u6ce8\u4e00\uff1a\u4fdd\u5b58\u81f3\u6b64\u5173\u952e\u5e27"})}),(0,r.jsx)(s.td,{children:"\u70b9\u51fb\u6b64\u9009\u9879\u53ef\u5c06\u5f53\u524d\u7f16\u8f91\u7684\u5173\u952e\u5e27\u4fdd\u5b58\u81f3\u5f53\u524d\u52a8\u4f5c\u5e8f\u5217\u4e2d\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u6807\u6ce8\u4e8c\uff1a\u53e6\u5b58\u81f3\u65b0\u5173\u952e\u5e27"})}),(0,r.jsx)(s.td,{children:"\u9009\u62e9\u6b64\u9009\u9879\u53ef\u4ee5\u5c06\u5f53\u524d\u7f16\u8f91\u7684\u5173\u952e\u5e27\u4f5c\u4e3a\u4e00\u4e2a\u65b0\u7684\u72ec\u7acb\u5173\u952e\u5e27\u4fdd\u5b58\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:"\u6807\u6ce8\u4e09\uff1a\u5220\u9664\u6b64\u5173\u952e\u5e27"})}),(0,r.jsx)(s.td,{children:"\u70b9\u51fb\u6b64\u9009\u9879\u53ef\u4ece\u52a8\u4f5c\u5e8f\u5217\u4e2d\u79fb\u9664\u5f53\u524d\u9009\u62e9\u7684\u5173\u952e\u5e27\u3002"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u56db\u7ed3\u8bed",children:"\u56db\u3001\u7ed3\u8bed"}),"\n",(0,r.jsx)("div",{className:"indent-first-line",children:(0,r.jsx)(s.p,{children:'"\u4ee5\u4e0a\u5185\u5bb9\u662f\u5173\u4e8e\u8fdb\u9636\u9065\u63a7\u73a9\u6cd5\u7684\u4f7f\u7528\u6307\u5357\u3002\u5bf9\u4e8e\u597d\u5947\u7684\u7528\u6237\u6765\u8bf4\uff0c\u4e86\u89e3\u8fd9\u4e9b\u9065\u63a7\u64cd\u4f5c\u80cc\u540e\u7684\u539f\u7406\u540c\u6837\u91cd\u8981\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u63a5\u4e0b\u6765\u5c06\u63a2\u8ba8\u9065\u63a7\u64cd\u4f5c\u7684\u6838\u5fc3\u2014\u2014\u9065\u63a7 API \u63a5\u53e3\u3002\u8ba9\u6211\u4eec\u4e00\u8d77\u63a2\u7d22\u5427\uff01"'})})]})}function j(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},5002:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/aia-e14b2f1a3d337b0df6a307615f6c66f4.jpg"},3444:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/app_parameter-92e55c3fb5d5b22966ef73d57617d854.jpg"},4531:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/app_play-9735e1ca2102d1487e5102b7170ed475.jpg"},8952:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/app_qr-1af80c146ed504a289ed6bb31088df9c.jpg"},9223:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/editor_body-447ba365042005ec688bd02e7867bead.jpg"},293:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/editor_head-da4b0c0c391887697ce6bc50df79ab96.jpg"},6721:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/left_after-af3761e907d68842a3cedf0b3a105ec3.jpg"},6523:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/new_editor-13fdc71598eccd65a2843fbbfc2f999d.jpg"},4263:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/open_editor_mode-93a77803cea3c242a7bbaa54c500a22e.jpg"},5264:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/right_after-911913044502222af608e6ebaec25bac.jpg"},4286:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/save-42ca5f378f40d120fc1d83a3ee51d42b.jpg"},3178:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/the_front_left-fa39e21a8ff26c5052486c2dd52925b9.jpg"},8635:(e,s,d)=>{d.d(s,{A:()=>r});const r=d.p+"assets/images/the_front_right-4d84a1988d97f9e6005c968c195b90c3.jpg"},8453:(e,s,d)=>{d.d(s,{R:()=>n,x:()=>c});var r=d(6540);const t={},i=r.createContext(t);function n(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);