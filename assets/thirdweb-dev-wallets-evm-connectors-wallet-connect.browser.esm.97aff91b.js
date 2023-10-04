import{b1 as d,aJ as l,aU as Q,aK as I,aL as W,b2 as o,aM as s,aV as y,a_ as k,a$ as q,b3 as $}from"./index.a3681770.js";import{W as z,U as L,S as b,g as Y}from"./url-bc88b2b6.browser.esm.859bcf5d.js";const B=new Set([1,137,10,42161,56]),j="eip155",x="wagmi.requestedChains",N="wallet_addEthereumChain",S="last-used-chain-id";var n=new WeakMap,C=new WeakMap,u=new WeakMap,P=new WeakSet,H=new WeakSet,E=new WeakSet,M=new WeakSet,g=new WeakSet,A=new WeakSet,U=new WeakSet,D=new WeakSet;class et extends z{constructor(i){super({...i,options:{isNewChainsStale:!0,...i.options}}),d(this,D),d(this,U),d(this,A),d(this,g),d(this,M),d(this,E),d(this,H),d(this,P),l(this,"id",Q.walletConnect),l(this,"name","WalletConnect"),l(this,"ready",!0),I(this,n,{writable:!0,value:void 0}),I(this,C,{writable:!0,value:void 0}),I(this,u,{writable:!0,value:void 0}),l(this,"onAccountsChanged",e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:y(e[0])})}),l(this,"onChainChanged",async e=>{const a=Number(e),t=this.isChainUnsupported(a);await s(this,u).setItem(S,String(e)),this.emit("change",{chain:{id:a,unsupported:t}})}),l(this,"onDisconnect",async()=>{await o(this,g,f).call(this,[]),await s(this,u).removeItem(S),this.emit("disconnect")}),l(this,"onDisplayUri",e=>{this.emit("message",{type:"display_uri",data:e})}),l(this,"onConnect",()=>{this.emit("connect",{provider:s(this,n)})}),W(this,u,i.options.storage),o(this,P,O).call(this),this.filteredChains=this.chains.length>50?this.chains.filter(e=>B.has(e.chainId)):this.chains}async connect(){var a;let{chainId:i,pairingTopic:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{let t=i;if(!t){const w=await s(this,u).getItem(S),c=w?parseInt(w):void 0;c&&!this.isChainUnsupported(c)?t=c:t=(a=this.filteredChains[0])==null?void 0:a.chainId}if(!t)throw new Error("No chains found on connector.");const r=await this.getProvider();this.setupListeners();const p=await o(this,E,T).call(this);if(r.session&&p&&await r.disconnect(),!r.session||p){const w=this.filteredChains.filter(c=>c.chainId!==t).map(c=>c.chainId);this.emit("message",{type:"connecting"}),await r.connect({pairingTopic:e,chains:[t],optionalChains:w.length>0?w:[t]}),await o(this,g,f).call(this,this.filteredChains.map(c=>{let{chainId:K}=c;return K}))}const v=await r.enable();if(v.length===0)throw new Error("No accounts found on provider.");const _=y(v[0]),m=await this.getChainId(),G=this.isChainUnsupported(m);return{account:_,chain:{id:m,unsupported:G},provider:new k(r)}}catch(t){throw/user rejected/i.test(t==null?void 0:t.message)?new L(t):t}}async disconnect(){const i=()=>{if(!(typeof localStorage>"u"))for(const t in localStorage)t.startsWith("wc@2")&&localStorage.removeItem(t)};i();const e=await this.getProvider();(async()=>{try{await e.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{o(this,M,R).call(this),await o(this,g,f).call(this,[]),i()}})()}async getAccount(){const{accounts:i}=await this.getProvider();if(i.length===0)throw new Error("No accounts found on provider.");return y(i[0])}async getChainId(){const{chainId:i}=await this.getProvider();return i}async getProvider(){let{chainId:i}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(s(this,n)||await o(this,P,O).call(this),i&&await this.switchChain(i),!s(this,n))throw new Error("No provider found.");return s(this,n)}async getSigner(){let{chainId:i}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[e,a]=await Promise.all([this.getProvider({chainId:i}),this.getAccount()]);return new k(e,i).getSigner(a)}async isAuthorized(){try{const[i,e]=await Promise.all([this.getAccount(),this.getProvider()]),a=await o(this,E,T).call(this);if(!i)return!1;if(a&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(i){var a;const e=this.chains.find(t=>t.chainId===i);if(!e)throw new b(`Chain with ID: ${i}, not found on connector.`);try{const t=await this.getProvider(),r=o(this,U,F).call(this),p=o(this,D,J).call(this);if(!r.includes(i)&&p.includes(N)){const _=(a=e.explorers)!=null&&a.length?{blockExplorerUrls:[e.explorers[0].url]}:{};await t.request({method:N,params:[{chainId:q(e.chainId),chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:Y(e),..._}]});const m=await o(this,A,V).call(this);m.push(i),await o(this,g,f).call(this,m)}return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:q(i)}]}),e}catch(t){const r=typeof t=="string"?t:t==null?void 0:t.message;throw/user rejected request/i.test(r)?new L(t):new b(t)}}async setupListeners(){!s(this,n)||(o(this,M,R).call(this),s(this,n).on("accountsChanged",this.onAccountsChanged),s(this,n).on("chainChanged",this.onChainChanged),s(this,n).on("disconnect",this.onDisconnect),s(this,n).on("session_delete",this.onDisconnect),s(this,n).on("display_uri",this.onDisplayUri),s(this,n).on("connect",this.onConnect))}}async function O(){return s(this,C)||W(this,C,o(this,H,X).call(this)),s(this,C)}async function X(){const{default:h,OPTIONAL_EVENTS:i,OPTIONAL_METHODS:e}=await $(()=>import("./index.es.4d747c34.js"),["assets/index.es.4d747c34.js","assets/index.a3681770.js","assets/index.0120bf6b.css","assets/index.d5d1a00d.js","assets/index.2a04ddcb.js","assets/tslib.9dac6094.js"]),[a,...t]=this.filteredChains.map(r=>{let{chainId:p}=r;return p});a&&W(this,n,await h.init({showQrModal:this.options.qrcode!==!1,projectId:this.options.projectId,optionalMethods:e,optionalEvents:i,chains:[a],optionalChains:t,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map(r=>[r.chainId,r.rpc[0]])),qrModalOptions:this.options.qrModalOptions}))}async function T(){if(o(this,D,J).call(this).includes(N)||!this.options.isNewChainsStale)return!1;const i=await o(this,A,V).call(this),e=this.filteredChains.map(t=>{let{chainId:r}=t;return r}),a=o(this,U,F).call(this);return a.length&&!a.some(t=>e.includes(t))?!1:!e.every(t=>i.includes(t))}function R(){!s(this,n)||(s(this,n).removeListener("accountsChanged",this.onAccountsChanged),s(this,n).removeListener("chainChanged",this.onChainChanged),s(this,n).removeListener("disconnect",this.onDisconnect),s(this,n).removeListener("session_delete",this.onDisconnect),s(this,n).removeListener("display_uri",this.onDisplayUri),s(this,n).removeListener("connect",this.onConnect))}async function f(h){await s(this,u).setItem(x,JSON.stringify(h))}async function V(){const h=await s(this,u).getItem(x);return h?JSON.parse(h):[]}function F(){var i,e,a;if(!s(this,n))return[];const h=(a=(e=(i=s(this,n).session)==null?void 0:i.namespaces[j])==null?void 0:e.chains)==null?void 0:a.map(t=>parseInt(t.split(":")[1]||""));return h!=null?h:[]}function J(){var i,e;if(!s(this,n))return[];const h=(e=(i=s(this,n).session)==null?void 0:i.namespaces[j])==null?void 0:e.methods;return h!=null?h:[]}export{et as WalletConnectConnector};
