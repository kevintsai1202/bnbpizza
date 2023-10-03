import{aJ as m,aU as l,aK as p,aL as w,aM as f,aV as g,aW as C}from"./index.b1dedcb5.js";import{C as I,U as u,R as v}from"./url-bc88b2b6.browser.esm.e893ed7c.js";import{I as _}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.63526d99.js";import"./normalizeChainId-e4cc0175.browser.esm.042707b7.js";var a=new WeakMap;class A extends _{constructor(t){const s={...{name:"MetaMask",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:C},...t.options};super({chains:t.chains,options:s,connectorStorage:t.connectorStorage}),m(this,"id",l.metamask),p(this,a,{writable:!0,value:void 0}),w(this,a,s.UNSTABLE_shimOnConnectSelectAccount)}async connect(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new I;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if(f(this,a)&&((r=this.options)==null?void 0:r.shimDisconnect)&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))&&(n=await this.getAccount().catch(()=>null),!!n))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(d){if(this.isUserRejectedRequestError(d))throw new u(d)}if(!n){const o=await e.request({method:"eth_requestAccounts"});n=g(o[0])}let i=await this.getChainId(),c=this.isChainUnsupported(i);if(t.chainId&&i!==t.chainId)try{await this.switchChain(t.chainId),i=t.chainId,c=this.isChainUnsupported(t.chainId)}catch(o){console.error(`Could not switch to chain id : ${t.chainId}`,o)}(s=this.options)!=null&&s.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={chain:{id:i,unsupported:c},provider:e,account:n};return this.emit("connect",h),h}catch(e){throw this.isUserRejectedRequestError(e)?new u(e):e.code===-32002?new v(e):e}}async switchAccount(){await(await this.getProvider()).request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}export{A as MetaMaskConnector};
