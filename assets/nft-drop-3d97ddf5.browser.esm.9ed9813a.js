var f=Object.defineProperty;var C=(p,s,t)=>s in p?f(p,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[s]=t;var n=(p,s,t)=>(C(p,typeof s!="symbol"?s+"":s,t),t);import{N as w,C as W,A,a as T,ak as y,c as b,d as S,e as k,f as E,al as R,i as N,G as v,h as I,k as U,am as x,an as O,l as _,m as F,B as i,a4 as m,n as M,o as L,p as c,T as u}from"./index.1c9641a0.js";import{S as B}from"./erc-721-standard-423437dd.browser.esm.bdb2e879.js";import{P as D}from"./thirdweb-checkout-bf0791b2.browser.esm.25228fd1.js";const d=class extends B{constructor(t,r,a){let e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,o,e,a);super(g,a,l);n(this,"createBatch",c(async(t,r)=>this.erc721.lazyMint.prepare(t,r)));n(this,"claimTo",c((()=>{var t=this;return async function(r,a){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc721.claimTo.prepare(r,a,{checkERC20Allowance:e})}})()));n(this,"claim",c((()=>{var t=this;return async function(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,a)}})()));n(this,"burn",c(async t=>this.erc721.burn.prepare(t)));n(this,"transfer",c(async(t,r)=>this.erc721.transfer.prepare(t,r)));n(this,"setApprovalForAll",c(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)));n(this,"setApprovalForToken",c(async(t,r)=>u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[t,r]})));this.abi=A.parse(o||[]),this.metadata=new T(this.contractWrapper,y,this.storage),this.app=new b(this.contractWrapper,this.metadata,this.storage),this.roles=new S(this.contractWrapper,d.contractRoles),this.royalties=new k(this.contractWrapper,this.metadata),this.sales=new E(this.contractWrapper),this.claimConditions=new R(this.contractWrapper,this.metadata,this.storage),this.encoder=new N(this.contractWrapper),this.estimator=new v(this.contractWrapper),this.events=new I(this.contractWrapper),this.platformFees=new U(this.contractWrapper),this.revealer=new x(this.contractWrapper,this.storage,O.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new _(this.contractWrapper),this.owner=new F(this.contractWrapper),this.checkout=new D(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){const t=await this.totalClaimedSupply(),r=await this.totalUnclaimedSupply();return t.add(r)}async getAllClaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||m).toNumber(),e=Math.min((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r+a);return await Promise.all(Array.from(Array(e).keys()).map(o=>this.get(o.toString())))}async getAllUnclaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||m).toNumber(),e=i.from(Math.max((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r)),o=i.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),e.toNumber()+a));return await Promise.all(Array.from(Array(o.sub(e).toNumber()).keys()).map(l=>this.erc721.getTokenMetadata(e.add(l).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[M("transfer"),L])}async getClaimTransaction(t,r){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return this.erc721.getClaimTransaction(t,r,{checkERC20Allowance:a})}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}async prepare(t,r,a){return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};let h=d;n(h,"contractRoles",w);export{h as NFTDrop};
