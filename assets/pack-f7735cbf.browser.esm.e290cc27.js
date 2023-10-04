var q=Object.defineProperty;var U=(m,s,t)=>s in m?q(m,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):m[s]=t;var u=(m,s,t)=>(U(m,typeof s!="symbol"?s+"":s,t),t);import{ao as F,a5 as $,ap as E,C as W,A as N,a as x,aq as _,c as M,d as z,e as D,i as V,G as K,h as b,l as B,m as Y,n as Q,o as j,B as w,X as y,Y as A,p as k,T as f,af as G,v as T,z as H,M as I,a9 as X,ar as R,as as Z,at as l,au as J,av as tt,aw as rt,ag as at,ax as et,ay as O,az as nt}from"./index.e9e0d510.js";import{h as st}from"./hasERC20Allowance-a494776d.browser.esm.62ddee30.js";import{S as ot}from"./erc-1155-standard-975fa32f.browser.esm.84b9db72.js";const v=R.object({contractAddress:nt}),ct=v.extend({quantity:O}),dt=v.extend({tokenId:l}),it=v.extend({tokenId:l,quantity:l}),pt=ct.omit({quantity:!0}).extend({quantityPerReward:O}),ht=dt,ut=it.omit({quantity:!0}).extend({quantityPerReward:l}),gt=(()=>pt.extend({totalRewards:l.default("1")}))(),wt=ht,lt=(()=>ut.extend({totalRewards:l.default("1")}))(),L=(()=>R.object({erc20Rewards:R.array(gt).default([]),erc721Rewards:R.array(wt).default([]),erc1155Rewards:R.array(lt).default([])}))(),mt=(()=>L.extend({packMetadata:Z,rewardsPerPack:l.default("1"),openStartTime:J.default(new Date)}))();class kt{constructor(s,t,e,n,r){u(this,"featureName",E.name);u(this,"open",k((()=>{var s=this;return async function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;return f.fromContractWrapper({contractWrapper:s.contractWrapper,method:"openPack",args:[t,e],overrides:{gasLimit:n},parse:r=>{let o=w.from(0);try{o=s.contractWrapper.parseLogs("PackOpenRequested",r==null?void 0:r.logs)[0].args.requestId}catch{}return{receipt:r,id:o}}})}})()));u(this,"claimRewards",k((()=>{var s=this;return async function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:5e5;return f.fromContractWrapper({contractWrapper:s.contractWrapper,method:"claimRewards",args:[],overrides:{gasLimit:t},parse:async e=>{const n=s.contractWrapper.parseLogs("PackOpened",e==null?void 0:e.logs);if(n.length===0)throw new Error("PackOpened event not found");const r=n[0].args.rewardUnitsDistributed;return await s.parseRewards(r)}})}})()));let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:new W(s,t,tt,n,e);this.contractWrapper=o,this.storage=e,this.chainId=r,this.events=new b(this.contractWrapper)}onNetworkUpdated(s){this.contractWrapper.updateSignerOrProvider(s)}getAddress(){return this.contractWrapper.address}async parseRewards(s){const t=[],e=[],n=[];for(const r of s)switch(r.tokenType){case 0:{const o=await y(this.contractWrapper.getProvider(),r.assetContract);t.push({contractAddress:r.assetContract,quantityPerReward:A(r.totalAmount,o.decimals).toString()});break}case 1:{e.push({contractAddress:r.assetContract,tokenId:r.tokenId.toString()});break}case 2:{n.push({contractAddress:r.assetContract,tokenId:r.tokenId.toString(),quantityPerReward:r.totalAmount.toString()});break}}return{erc20Rewards:t,erc721Rewards:e,erc1155Rewards:n}}async addPackOpenEventListener(s){return this.events.addEventListener("PackOpened",async t=>{s(t.data.packId.toString(),t.data.opener,await this.parseRewards(t.data.rewardUnitsDistributed))})}async canClaimRewards(s){const t=await T(s||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("canClaimRewards",[t])}async openAndClaim(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;const n=await this.contractWrapper.sendTransaction("openPackAndClaimRewards",[s,t,e],{gasLimit:w.from(5e5)});let r=w.from(0);try{r=this.contractWrapper.parseLogs("PackOpenRequested",n==null?void 0:n.logs)[0].args.requestId}catch{}return{receipt:n,id:r}}async getLinkBalance(){return this.getLinkContract().balanceOf(this.contractWrapper.address)}async transferLink(s){await this.getLinkContract().transfer(this.contractWrapper.address,s)}getLinkContract(){const s=rt[this.chainId];if(!s)throw new Error(`No LINK token address found for chainId ${this.chainId}`);const t=new W(this.contractWrapper.getSignerOrProvider(),s,at,this.contractWrapper.options,this.storage);return new et(t,this.storage,this.chainId)}}const P=class extends ot{constructor(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,e,o,r.gasless&&"openzeppelin"in r.gasless?{...r,gasless:{...r.gasless,openzeppelin:{...r.gasless.openzeppelin,useEOAForwarder:!0}}}:r,n);super(i,n,p);u(this,"create",k(async t=>{const e=await this.contractWrapper.getSignerAddress();return this.createTo.prepare(e,t)}));u(this,"addPackContents",k(async(t,e)=>{const n=await this.contractWrapper.getSignerAddress(),r=await L.parseAsync(e),{contents:o,numOfRewardUnits:p}=await this.toPackContentArgs(r);return f.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addPackContents",args:[t,o,p,n],parse:i=>{const c=this.contractWrapper.parseLogs("PackUpdated",i==null?void 0:i.logs);if(c.length===0)throw new Error("PackUpdated event not found");const a=c[0].args.packId;return{id:a,receipt:i,data:()=>this.erc1155.get(a)}}})}));u(this,"createTo",k(async(t,e)=>{const n=await G(e.packMetadata,this.storage),r=await mt.parseAsync(e),{erc20Rewards:o,erc721Rewards:p,erc1155Rewards:i}=r,c={erc20Rewards:o,erc721Rewards:p,erc1155Rewards:i},{contents:a,numOfRewardUnits:h}=await this.toPackContentArgs(c);return f.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createPack",args:[a,h,n,r.openStartTime,r.rewardsPerPack,await T(t)],parse:d=>{const g=this.contractWrapper.parseLogs("PackCreated",d==null?void 0:d.logs);if(g.length===0)throw new Error("PackCreated event not found");const S=g[0].args.packId;return{id:S,receipt:d,data:()=>this.erc1155.get(S)}}})}));u(this,"open",k((()=>{var t=this;return async function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;if(t._vrf)throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");return f.fromContractWrapper({contractWrapper:t.contractWrapper,method:"openPack",args:[e,n],overrides:{gasLimit:r},parse:async o=>{const p=t.contractWrapper.parseLogs("PackOpened",o==null?void 0:o.logs);if(p.length===0)throw new Error("PackOpened event not found");const i=p[0].args.rewardUnitsDistributed,c=[],a=[],h=[];for(const d of i)switch(d.tokenType){case 0:{const g=await y(t.contractWrapper.getProvider(),d.assetContract);c.push({contractAddress:d.assetContract,quantityPerReward:A(d.totalAmount,g.decimals).toString()});break}case 1:{a.push({contractAddress:d.assetContract,tokenId:d.tokenId.toString()});break}case 2:{h.push({contractAddress:d.assetContract,tokenId:d.tokenId.toString(),quantityPerReward:d.totalAmount.toString()});break}}return{erc20Rewards:c,erc721Rewards:a,erc1155Rewards:h}}})}})()));this.abi=N.parse(o||[]),this.metadata=new x(this.contractWrapper,_,this.storage),this.app=new M(this.contractWrapper,this.metadata,this.storage),this.roles=new z(this.contractWrapper,P.contractRoles),this.royalties=new D(this.contractWrapper,this.metadata),this.encoder=new V(this.contractWrapper),this.estimator=new K(this.contractWrapper),this.events=new b(this.contractWrapper),this.interceptor=new B(this.contractWrapper),this.owner=new Y(this.contractWrapper),this._vrf=this.detectVrf()}get vrf(){return $(this._vrf,E)}onNetworkUpdated(t){var e;this.contractWrapper.updateSignerOrProvider(t),(e=this._vrf)==null||e.onNetworkUpdated(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[Q("transfer"),j])}async getPackContents(t){const{contents:e,perUnitAmounts:n}=await this.contractWrapper.read("getPackContents",[t]),r=[],o=[],p=[];for(let i=0;i<e.length;i++){const c=e[i],a=n[i];switch(c.tokenType){case 0:{const h=await y(this.contractWrapper.getProvider(),c.assetContract),d=A(a,h.decimals),g=A(w.from(c.totalAmount).div(a),h.decimals);r.push({contractAddress:c.assetContract,quantityPerReward:d,totalRewards:g});break}case 1:{o.push({contractAddress:c.assetContract,tokenId:c.tokenId.toString()});break}case 2:{p.push({contractAddress:c.assetContract,tokenId:c.tokenId.toString(),quantityPerReward:a.toString(),totalRewards:w.from(c.totalAmount).div(a).toString()});break}}}return{erc20Rewards:r,erc721Rewards:o,erc1155Rewards:p}}async toPackContentArgs(t){const e=[],n=[],{erc20Rewards:r,erc721Rewards:o,erc1155Rewards:p}=t,i=this.contractWrapper.getProvider(),c=await this.contractWrapper.getSignerAddress();for(const a of r){const d=(await H(i,a.quantityPerReward,a.contractAddress)).mul(a.totalRewards);if(!await st(this.contractWrapper,a.contractAddress,d))throw new Error(`ERC20 token with contract address "${a.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${a.contractAddress}").setAllowance("${this.getAddress()}", ${d});

`);n.push(a.totalRewards),e.push({assetContract:a.contractAddress,tokenType:0,totalAmount:d,tokenId:0})}for(const a of o){if(!await I(this.contractWrapper.getProvider(),this.getAddress(),a.contractAddress,a.tokenId,c))throw new Error(`ERC721 token "${a.tokenId}" with contract address "${a.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${a.contractAddress}").setApprovalForToken("${this.getAddress()}", ${a.tokenId});

`);n.push("1"),e.push({assetContract:a.contractAddress,tokenType:1,totalAmount:1,tokenId:a.tokenId})}for(const a of p){if(!await I(this.contractWrapper.getProvider(),this.getAddress(),a.contractAddress,a.tokenId,c))throw new Error(`ERC1155 token "${a.tokenId}" with contract address "${a.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${a.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);n.push(a.totalRewards),e.push({assetContract:a.contractAddress,tokenType:2,totalAmount:w.from(a.quantityPerReward).mul(w.from(a.totalRewards)),tokenId:a.tokenId})}return{contents:e,numOfRewardUnits:n}}async prepare(t,e,n){return f.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:n})}async call(t,e,n){return this.contractWrapper.call(t,e,n)}detectVrf(){if(X(this.contractWrapper,"PackVRF"))return new kt(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.address,this.storage,this.contractWrapper.options,this.chainId)}};let C=P;u(C,"contractRoles",F);export{C as Pack};
