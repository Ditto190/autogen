"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1837],{60225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(85893),s=n(11151);const a={sidebar_label:"context_handling",title:"agentchat.contrib.capabilities.context_handling"},r=void 0,o={id:"reference/agentchat/contrib/capabilities/context_handling",title:"agentchat.contrib.capabilities.context_handling",description:"TransformChatHistory",source:"@site/docs/reference/agentchat/contrib/capabilities/context_handling.md",sourceDirName:"reference/agentchat/contrib/capabilities",slug:"/reference/agentchat/contrib/capabilities/context_handling",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/context_handling",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/capabilities/context_handling.md",tags:[],version:"current",frontMatter:{sidebar_label:"context_handling",title:"agentchat.contrib.capabilities.context_handling"},sidebar:"referenceSideBar",previous:{title:"agent_capability",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/agent_capability"},next:{title:"teachability",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/teachability"}},c={},l=[{value:"TransformChatHistory",id:"transformchathistory",level:2},{value:"__init__",id:"__init__",level:3},{value:"add_to_agent",id:"add_to_agent",level:3},{value:"truncate_str_to_tokens",id:"truncate_str_to_tokens",level:3}];function h(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"transformchathistory",children:"TransformChatHistory"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class TransformChatHistory()\n"})}),"\n",(0,i.jsx)(t.p,{children:"An agent's chat history with other agents is a common context that it uses to generate a reply.\nThis capability allows the agent to transform its chat history prior to using it to generate a reply.\nIt does not permanently modify the chat history, but rather processes it on every invocation."}),"\n",(0,i.jsx)(t.p,{children:"This capability class enables various strategies to transform chat history, such as:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Truncate messages: Truncate each message to first maximum number of tokens."}),"\n",(0,i.jsx)(t.li,{children:"Limit number of messages: Truncate the chat history to a maximum number of (recent) messages."}),"\n",(0,i.jsx)(t.li,{children:"Limit number of tokens: Truncate the chat history to number of recent N messages that fit in\nmaximum number of tokens.\nNote that the system message, because of its special significance, is always kept as is."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The three strategies can be combined. For example, when each of these parameters are specified\nthey are used in the following order:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"First truncate messages to a maximum number of tokens"}),"\n",(0,i.jsx)(t.li,{children:"Second, it limits the number of message to keep"}),"\n",(0,i.jsx)(t.li,{children:"Third, it limits the total number of tokens in the chat history"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"When adding this capability to an agent, the following are modified:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A hook is added to the hookable method ",(0,i.jsx)(t.code,{children:"process_all_messages_before_reply"})," to transform the received messages for possible truncation.\nNot modifying the stored message history."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"__init__",children:"__init__"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"def __init__(*,\n             max_tokens_per_message: Optional[int] = None,\n             max_messages: Optional[int] = None,\n             max_tokens: Optional[int] = None)\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"max_tokens_per_message"})," ",(0,i.jsx)(t.em,{children:"Optional[int]"})," - Maximum number of tokens to keep in each message."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"max_messages"})," ",(0,i.jsx)(t.em,{children:"Optional[int]"})," - Maximum number of messages to keep in the context."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"max_tokens"})," ",(0,i.jsx)(t.em,{children:"Optional[int]"})," - Maximum number of tokens to keep in the context."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"add_to_agent",children:"add_to_agent"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"def add_to_agent(agent: ConversableAgent)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Adds TransformChatHistory capability to the given agent."}),"\n",(0,i.jsx)(t.h3,{id:"truncate_str_to_tokens",children:"truncate_str_to_tokens"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'def truncate_str_to_tokens(text: str,\n                           max_tokens: int,\n                           model: str = "gpt-3.5-turbo-0613") -> str\n'})}),"\n",(0,i.jsx)(t.p,{children:"Truncate a string so that the number of tokens is less than or equal to max_tokens using tiktoken."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"text"})," - The string to truncate."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"max_tokens"})," - The maximum number of tokens to keep."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"model"})," - The target OpenAI model for tokenization alignment."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(t.p,{children:"The truncated string."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(67294);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);