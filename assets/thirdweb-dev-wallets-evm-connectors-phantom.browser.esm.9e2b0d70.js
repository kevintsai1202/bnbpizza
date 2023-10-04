import{aJ as m,aU as l,aK as p,aL as w,aM as f,aV as g,b5 as C}from"./index.a3681770.js";import{C as I,U as u,R as v}from"./url-bc88b2b6.browser.esm.859bcf5d.js";import{I as P}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.b4016821.js";import"./normalizeChainId-e4cc0175.browser.esm.042707b7.js";var c=new WeakMap;class A extends P{constructor(t){const n={...{name:"Phantom",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:C},...t.options};super({chains:t.chains,options:n,connectorStorage:t.connectorStorage}),m(this,"id",l.phantom),p(this,c,{writable:!0,value:void 0}),w(this,c,n.UNSTABLE_shimOnConnectSelectAccount)}async connect(){var r,n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new I;this.setupListeners(),this.emit("message",{type:"connecting"});let s=null;if(f(this,c)&&((r=this.options)==null?void 0:r.shimDisconnect)&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))&&(s=await this.getAccount().catch(()=>null),!!s))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(d){if(this.isUserRejectedRequestError(d))throw new u(d)}if(!s){const o=await e.request({method:"eth_requestAccounts"});s=g(o[0])}let i=await this.getChainId(),a=this.isChainUnsupported(i);if(t.chainId&&i!==t.chainId)try{await this.switchChain(t.chainId),i=t.chainId,a=this.isChainUnsupported(t.chainId)}catch(o){console.error(`Could not switch to chain id : ${t.chainId}`,o)}(n=this.options)!=null&&n.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={chain:{id:i,unsupported:a},provider:e,account:s};return this.emit("connect",h),h}catch(e){throw this.isUserRejectedRequestError(e)?new u(e):e.code===-32002?new v(e):e}}async switchAccount(){await(await this.getProvider()).request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}export{A as PhantomConnector};
