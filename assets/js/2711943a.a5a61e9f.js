"use strict";(self.webpackChunkhelpsite=self.webpackChunkhelpsite||[]).push([[8735],{5987:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=n(4848),i=n(8453);const c={sidebar_position:2},r="Understanding Access Keys in NEAR Protocol",o={id:"getting-started/access-keys",title:"Understanding Access Keys in NEAR Protocol",description:"Full Access vs Limited Access Keys",source:"@site/docs/getting-started/access-keys.md",sourceDirName:"getting-started",slug:"/getting-started/access-keys",permalink:"/help-site/getting-started/access-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/near/help-site/tree/main/docs/getting-started/access-keys.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tokens vs Protocol",permalink:"/help-site/getting-started/tokens-vs-protocol"},next:{title:"What is an Epoch?",permalink:"/help-site/getting-started/epoch"}},a={},l=[{value:"<strong>Full Access Keys</strong>",id:"full-access-keys",level:3},{value:"<strong>Limited Access Keys</strong>",id:"limited-access-keys",level:3},{value:"What Happens When an Access Key is Deleted?",id:"what-happens-when-an-access-key-is-deleted",level:3},{value:"Practical Implications",id:"practical-implications",level:3}];function d(e){const s={admonition:"admonition",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"understanding-access-keys-in-near-protocol",children:"Understanding Access Keys in NEAR Protocol"})}),"\n",(0,t.jsx)(s.p,{children:"Full Access vs Limited Access Keys"}),"\n",(0,t.jsxs)(s.p,{children:["In the NEAR Protocol, access keys are essential for managing permissions and controlling access to your account. There are two main types of access keys: ",(0,t.jsx)(s.strong,{children:"Full Access Keys"})," and ",(0,t.jsx)(s.strong,{children:"Limited Access Keys"}),". Here\u2019s a breakdown of the differences between them and what happens when an access key is deleted."]}),"\n",(0,t.jsx)(s.h3,{id:"full-access-keys",children:(0,t.jsx)(s.strong,{children:"Full Access Keys"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Permissions"}),": Full Access Keys have complete control over the account. This means they can perform any action, including transferring tokens, staking, and changing account settings."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Usage"}),": Typically, Full Access Keys are used by the account owner and are stored securely. They are often associated with a private key that should be kept confidential."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsx)(s.p,{children:"If a Full Access Key is compromised, the attacker can take full control of the account and perform any actions, including transferring all assets out of the account."})}),"\n",(0,t.jsx)(s.h3,{id:"limited-access-keys",children:(0,t.jsx)(s.strong,{children:"Limited Access Keys"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Permissions"}),": Limited Access Keys have restricted permissions and can only perform specific actions defined at the time of their creation. For example, they might be allowed to call specific smart contracts or perform non-financial transactions."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Usage"}),": These keys are useful for delegating certain actions to applications or services without giving them full control over your account."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsx)(s.p,{children:"Limited Access Keys provide a way to enhance security by limiting the actions that can be performed with the key, reducing the risk if the key is compromised."})}),"\n",(0,t.jsx)(s.h3,{id:"what-happens-when-an-access-key-is-deleted",children:"What Happens When an Access Key is Deleted?"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Full Access Key Deletion"}),": When a Full Access Key is deleted, all permissions associated with that key are revoked. If this was the only Full Access Key for the account, you would lose complete control over the account, making it impossible to perform any actions, including accessing or transferring tokens."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Limited Access Key Deletion"}),": Deleting a Limited Access Key removes the specific permissions it granted. This means that any application or service relying on that key will no longer be able to perform the actions it was previously allowed to do."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Security Implications"}),": Deleting access keys can be a security measure to prevent unauthorized access, but it also means that any actions or permissions associated with the deleted key are permanently lost."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"practical-implications",children:"Practical Implications"}),"\n",(0,t.jsx)(s.p,{children:"If you find that your access keys have been deleted:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Full Access Key Deleted"}),": If you have no other Full Access Keys linked to your account, you will not be able to access or control your account anymore. This includes transferring tokens, accessing assets, or managing account settings."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Limited Access Key Deleted"}),": You will lose the ability to perform the specific actions that were permitted by that key. However, you can still manage your account with other Full Access Keys, if available."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var t=n(6540);const i={},c=t.createContext(i);function r(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);