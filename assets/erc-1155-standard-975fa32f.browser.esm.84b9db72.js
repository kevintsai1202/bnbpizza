var p=Object.defineProperty;var o=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var n=(e,r,t)=>(o(e,typeof r!="symbol"?r+"":r,t),t);import{E as u,p as i}from"./index.e9e0d510.js";class l{constructor(r,t,a){n(this,"transfer",i((()=>{var r=this;return async function(t,a,s){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[0];return r.erc1155.transfer.prepare(t,a,s,c)}})()));n(this,"setApprovalForAll",i(async(r,t)=>this.erc1155.setApprovalForAll.prepare(r,t)));n(this,"airdrop",i((()=>{var r=this;return async function(t,a,s){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[0];return r.erc1155.airdrop.prepare(t,a,s,c)}})()));this.contractWrapper=r,this.storage=t,this.erc1155=new u(this.contractWrapper,this.storage,a),this._chainId=a}get chainId(){return this._chainId}onNetworkUpdated(r){this.contractWrapper.updateSignerOrProvider(r)}getAddress(){return this.contractWrapper.address}async get(r){return this.erc1155.get(r)}async totalSupply(r){return this.erc1155.totalSupply(r)}async balanceOf(r,t){return this.erc1155.balanceOf(r,t)}async balance(r){return this.erc1155.balance(r)}async isApproved(r,t){return this.erc1155.isApproved(r,t)}}export{l as S};
