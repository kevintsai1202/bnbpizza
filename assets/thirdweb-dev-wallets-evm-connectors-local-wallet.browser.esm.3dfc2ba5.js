import{aI as u,aJ as o,aK as c,aL as e,aM as r,aN as d}from"./index.1c9641a0.js";import{n as w}from"./normalizeChainId-e4cc0175.browser.esm.042707b7.js";var i=new WeakMap,s=new WeakMap;class v extends u{constructor(t){super(),o(this,"id","local_wallet"),o(this,"name","Local Wallet"),c(this,i,{writable:!0,value:void 0}),c(this,s,{writable:!0,value:void 0}),o(this,"shimDisconnectKey","localWallet.shimDisconnect"),o(this,"onChainChanged",n=>{const a=w(n),p=!this.options.chains.find(g=>g.chainId===a);this.emit("change",{chain:{id:a,unsupported:p}})}),this.options=t}async connect(t){return t.chainId&&this.switchChain(t.chainId),await(await this.getSigner()).getAddress()}async disconnect(){e(this,i,void 0),e(this,s,void 0)}async getAddress(){const t=await this.getSigner();if(!t)throw new Error("No signer found");return await t.getAddress()}async isConnected(){try{return!!await this.getAddress()}catch{return!1}}async getProvider(){return r(this,i)||e(this,i,d(this.options.chain,{clientId:this.options.clientId,secretKey:this.options.secretKey})),r(this,i)}async getSigner(){if(!r(this,s)){const t=await this.getProvider();e(this,s,l(this.options.ethersWallet,t))}return r(this,s)}async switchChain(t){const n=this.options.chains.find(a=>a.chainId===t);if(!n)throw new Error(`Chain not found for chainId ${t}, please add it to the chains property when creating this wallet`);e(this,i,d(n,{clientId:this.options.clientId,secretKey:this.options.secretKey})),e(this,s,l(this.options.ethersWallet,r(this,i))),this.onChainChanged(t)}async setupListeners(){}updateChains(t){this.options.chains=t}}function l(h,t){return t?h.connect(t):h}export{v as LocalWalletConnector};
