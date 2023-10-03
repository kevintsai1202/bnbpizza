var m=Object.defineProperty;var f=(i,t,a)=>t in i?m(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a;var c=(i,t,a)=>(f(i,typeof t!="symbol"?t+"":t,a),a);import{aA as y,C as b,A as R,a as v,aB as A,c as C,d as P,i as T,G as k,h as O,l as I,B as w,u as s,M as S,ag as B,I as E,p,T as o}from"./index.66a6c62b.js";const u=class{constructor(t,a,e){c(this,"withdraw",p(async t=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address)",args:[await s(t)]})));c(this,"withdrawToken",p(async(t,a)=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address,address)",args:[await s(a),await s(t)]})));c(this,"distribute",p(async()=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute()",args:[]})));c(this,"distributeToken",p(async t=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute(address)",args:[await s(t)]})));let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new b(t,a,n,r,e);this._chainId=d,this.abi=R.parse(n||[]),this.contractWrapper=l,this.storage=e,this.metadata=new v(this.contractWrapper,A,this.storage),this.app=new C(this.contractWrapper,this.metadata,this.storage),this.roles=new P(this.contractWrapper,u.contractRoles),this.encoder=new T(this.contractWrapper),this.estimator=new k(this.contractWrapper),this.events=new O(this.contractWrapper),this.interceptor=new I(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAllRecipients(){const t=[];let a=w.from(0);const e=await this.contractWrapper.read("payeeCount",[]);for(;a.lt(e);)try{const r=await this.contractWrapper.read("payee",[a]);t.push(await this.getRecipientSplitPercentage(r)),a=a.add(1)}catch(r){if("method"in r&&r.method.toLowerCase().includes("payee(uint256)"))break;throw r}return t}async balanceOfAllRecipients(){const t=await this.getAllRecipients(),a={};for(const e of t)a[e.address]=await this.balanceOf(e.address);return a}async balanceOfTokenAllRecipients(t){const a=await s(t),e=await this.getAllRecipients(),r={};for(const n of e)r[n.address]=await this.balanceOfToken(n.address,a);return r}async balanceOf(t){const a=await s(t),e=await this.contractWrapper.getProvider().getBalance(this.getAddress()),r=await this.contractWrapper.read("totalReleased",[]),n=e.add(r);return this._pendingPayment(a,n,await this.contractWrapper.read("released",[a]))}async balanceOfToken(t,a){const e=await s(a),r=await s(t),d=await new S(e,B,this.contractWrapper.getProvider()).balanceOf(this.getAddress()),l=await this.contractWrapper.read("totalReleased",[e]),g=d.add(l),W=await this._pendingPayment(r,g,await this.contractWrapper.read("released",[e,r]));return await E(this.contractWrapper.getProvider(),e,W)}async getRecipientSplitPercentage(t){const a=await s(t),[e,r]=await Promise.all([this.contractWrapper.read("totalShares",[]),this.contractWrapper.read("shares",[t])]);return{address:a,splitPercentage:r.mul(w.from(1e7)).div(e).toNumber()/1e5}}async _pendingPayment(t,a,e){return a.mul(await this.contractWrapper.read("shares",[await s(t)])).div(await this.contractWrapper.read("totalShares",[])).sub(e)}async prepare(t,a,e){return o.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:e})}async call(t,a,e){return this.contractWrapper.call(t,a,e)}};let h=u;c(h,"contractRoles",y);export{h as Split};
