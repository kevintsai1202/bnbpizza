var s=Object.defineProperty;var i=(t,r,a)=>r in t?s(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;var e=(t,r,a)=>(i(t,typeof r!="symbol"?r+"":r,a),a);import{ax as o,p as c}from"./index.e9e0d510.js";class l{constructor(r,a,n){e(this,"transfer",c(async(r,a)=>this.erc20.transfer.prepare(r,a)));e(this,"transferFrom",c(async(r,a,n)=>this.erc20.transferFrom.prepare(r,a,n)));e(this,"setAllowance",c(async(r,a)=>this.erc20.setAllowance.prepare(r,a)));e(this,"transferBatch",c(async r=>this.erc20.transferBatch.prepare(r)));this.contractWrapper=r,this.storage=a,this.erc20=new o(this.contractWrapper,this.storage,n),this._chainId=n}get chainId(){return this._chainId}onNetworkUpdated(r){this.contractWrapper.updateSignerOrProvider(r)}getAddress(){return this.contractWrapper.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(r){return this.erc20.balanceOf(r)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(r){return await this.erc20.allowance(r)}async allowanceOf(r,a){return await this.erc20.allowanceOf(r,a)}}export{l as S};
