var M=Object.defineProperty;var U=(m,t,r)=>t in m?M(m,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):m[t]=r;var i=(m,t,r)=>(U(m,typeof t!="symbol"?t+"":t,r),r);import{o as w,L as y,W as E,B as s,r as W,u as V,v as l,w as S,p,x as O,y as R,z as v,T as h,F as I,H as q,I as P,J as L,K as N,M as _,O as T,P as x,Q as z,S as H,U as K,V as Y,i as F,h as $,X as G,Y as Q,Z,_ as D,$ as J,a0 as B,a1 as X,C as j,A as tt,a as rt,a2 as et,c as at,d as nt,G as st,k as ot,l as ct,n as A,a3 as it,a4 as dt}from"./index.422bf3ad.js";let g=function(m){return m[m.Direct=0]="Direct",m[m.Auction=1]="Auction",m}({});class pt{constructor(t,r){i(this,"createListing",p(async t=>{O(t);const r=await l(t.assetContractAddress),e=await l(t.currencyContractAddress);await R(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await v(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e);let n=Math.floor(t.startTimestamp.getTime()/1e3);const c=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return n<c&&(n=c),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:I(e),listingType:g.Direct,quantityToList:t.quantity,reservePricePerToken:a,secondsUntilEndTime:t.listingDurationInSeconds,startTime:s.from(n)}],parse:u=>({id:this.contractWrapper.parseLogs("ListingAdded",u==null?void 0:u.logs)[0].args.listingId,receipt:u})})}));i(this,"createListingsBatch",p(async t=>{const r=await Promise.all(t.map(async e=>(await this.createListing.prepare(e)).encode()));return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:e=>this.contractWrapper.parseLogs("ListingAdded",e==null?void 0:e.logs).map(n=>({id:n.args.listingId,receipt:e}))})}));i(this,"makeOffer",p(async(t,r,e,a,n)=>{if(q(e))throw new Error("You must use the wrapped native token address when making an offer with a native token");const o=await v(this.contractWrapper.getProvider(),a,e);try{await this.getListing(t)}catch(C){throw console.error("Failed to get listing, err =",C),new Error(`Error getting the listing with id ${t}`)}const c=s.from(r),u=s.from(o).mul(c),d=await this.contractWrapper.getCallOverrides()||{};await P(this.contractWrapper,u,e,d);let f=D;return n&&(f=s.from(Math.floor(n.getTime()/1e3))),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,r,e,o,f],overrides:d})}));i(this,"acceptOffer",p(async(t,r)=>{await this.validateListing(s.from(t));const e=await l(r),a=await this.contractWrapper.read("offers",[t,e]);return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t,e,a.currency,a.pricePerToken]})}));i(this,"buyoutListing",p(async(t,r,e)=>{const a=await this.validateListing(s.from(t)),{valid:n,error:o}=await this.isStillValidListing(a,r);if(!n)throw new Error(`Listing ${t} is no longer valid. ${o}`);const c=e||await this.contractWrapper.getSignerAddress(),u=s.from(r),d=s.from(a.buyoutPrice).mul(u),f=await this.contractWrapper.getCallOverrides()||{};return await P(this.contractWrapper,d,a.currencyContractAddress,f),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buy",args:[t,c,u,a.currencyContractAddress,d],overrides:f})}));i(this,"updateListing",p(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.buyoutPrice,t.buyoutPrice,await l(t.currencyContractAddress),t.startTimeInSeconds,t.secondsUntilEnd]})));i(this,"cancelListing",p(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelDirectListing",args:[t]})));this.contractWrapper=t,this.storage=r}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===w)throw new y(this.getAddress(),t.toString());if(r.listingType!==g.Direct)throw new E(this.getAddress(),t.toString(),"Auction","Direct");return await this.mapListing(r)}async getActiveOffer(t,r){await this.validateListing(s.from(t)),W(V(r),"Address must be a valid address");const e=await this.contractWrapper.read("offers",[t,await l(r)]);if(e.offeror!==w)return await S(this.contractWrapper.getProvider(),s.from(t),e)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:s.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await L(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInSeconds:t.startTime,asset:await N(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),secondsUntilEnd:t.endTime,sellerAddress:t.tokenOwner,type:g.Direct}}async isStillValidListing(t,r){if(!await _(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.sellerAddress))return{valid:!1,error:`Token '${t.tokenId}' from contract '${t.assetContractAddress}' is not approved for transfer`};const a=this.contractWrapper.getProvider(),n=new T(t.assetContractAddress,x,a),o=await n.supportsInterface(z),c=await n.supportsInterface(H);if(o){const u=new T(t.assetContractAddress,K,a);let d;try{d=await u.ownerOf(t.tokenId)}catch{}const f=(d==null?void 0:d.toLowerCase())===t.sellerAddress.toLowerCase();return{valid:f,error:f?void 0:`Seller is not the owner of Token '${t.tokenId}' from contract '${t.assetContractAddress} anymore'`}}else if(c){const f=(await new T(t.assetContractAddress,Y,a).balanceOf(t.sellerAddress,t.tokenId)).gte(r||t.quantity);return{valid:f,error:f?void 0:`Seller does not have enough balance of Token '${t.tokenId}' from contract '${t.assetContractAddress} to fulfill the listing`}}else return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."}}}class ut{constructor(t,r){i(this,"createListing",p(async t=>{O(t);const r=await l(t.assetContractAddress),e=await l(t.currencyContractAddress);await R(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await v(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e),n=await v(this.contractWrapper.getProvider(),t.reservePricePerToken,e);let o=Math.floor(t.startTimestamp.getTime()/1e3);const u=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return o<u&&(o=u),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:I(e),listingType:g.Auction,quantityToList:t.quantity,reservePricePerToken:n,secondsUntilEndTime:t.listingDurationInSeconds,startTime:s.from(o)}],parse:d=>({id:this.contractWrapper.parseLogs("ListingAdded",d==null?void 0:d.logs)[0].args.listingId,receipt:d})})}));i(this,"createListingsBatch",p(async t=>{const r=await Promise.all(t.map(async e=>(await this.createListing.prepare(e)).encode()));return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:e=>this.contractWrapper.parseLogs("ListingAdded",e==null?void 0:e.logs).map(n=>({id:n.args.listingId,receipt:e}))})}));i(this,"buyoutListing",p(async t=>{const r=await this.validateListing(s.from(t)),e=await G(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,Q(r.buyoutPrice,e.decimals))}));i(this,"makeBid",p(async(t,r)=>{const e=await this.validateListing(s.from(t)),a=await v(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(a.eq(s.from(0)))throw new Error("Cannot make a bid with 0 value");const n=await this.contractWrapper.read("bidBufferBps",[]),o=await this.getWinningBid(t);if(o){const f=Z(o.pricePerToken,a,n);W(f,"Bid price is too low based on the current winning bid and the bid buffer")}else{const f=a,C=s.from(e.reservePrice);W(f.gte(C),"Bid price is too low based on reserve price")}const c=s.from(e.quantity),u=a.mul(c),d=await this.contractWrapper.getCallOverrides()||{};return await P(this.contractWrapper,u,e.currencyContractAddress,d),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,e.quantity,e.currencyContractAddress,a,D],overrides:d})}));i(this,"cancelListing",p(async t=>{const r=await this.validateListing(s.from(t)),e=s.from(Math.floor(Date.now()/1e3)),a=s.from(r.startTimeInEpochSeconds),n=await this.contractWrapper.read("winningBid",[t]);if(e.gt(a)&&n.offeror!==w)throw new J(t.toString());return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[s.from(t),await this.contractWrapper.getSignerAddress()]})}));i(this,"closeListing",p(async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());const e=await this.validateListing(s.from(t));try{return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[s.from(t),r]})}catch(a){throw a.message.includes("cannot close auction before it has ended")?new B(t.toString(),e.endTimeInEpochSeconds.toString()):a}}));i(this,"executeSale",p(async t=>{const r=await this.validateListing(s.from(t));try{const e=await this.getWinningBid(t);W(e,"No winning bid found");const a=this.encoder.encode("closeAuction",[t,r.sellerAddress]),n=this.encoder.encode("closeAuction",[t,e.buyerAddress]);return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a,n]})}catch(e){throw e.message.includes("cannot close auction before it has ended")?new B(t.toString(),r.endTimeInEpochSeconds.toString()):e}}));i(this,"updateListing",p(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.reservePrice,t.buyoutPrice,t.currencyContractAddress,t.startTimeInEpochSeconds,t.endTimeInEpochSeconds]})));this.contractWrapper=t,this.storage=r,this.encoder=new F(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.listingId.toString()!==t.toString())throw new y(this.getAddress(),t.toString());if(r.listingType!==g.Auction)throw new E(this.getAddress(),t.toString(),"Direct","Auction");return await this.mapListing(r)}async getWinningBid(t){await this.validateListing(s.from(t));const r=await this.contractWrapper.read("winningBid",[t]);if(r.offeror!==w)return await S(this.contractWrapper.getProvider(),s.from(t),r)}async getWinner(t){const r=await this.validateListing(s.from(t)),e=await this.contractWrapper.read("winningBid",[t]),a=s.from(Math.floor(Date.now()/1e3)),n=s.from(r.endTimeInEpochSeconds);if(a.gt(n)&&e.offeror!==w)return e.offeror;const u=(await new $(this.contractWrapper).getEvents("AuctionClosed")).find(d=>d.data.listingId.eq(s.from(t)));if(!u)throw new Error(`Could not find auction with listingId ${t} in closed auctions`);return u.data.winningBidder}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getMinimumNextBid(t){const[r,e,a]=await Promise.all([this.getBidBufferBps(),this.getWinningBid(t),await this.validateListing(s.from(t))]),n=e?e.currencyValue.value:a.reservePrice,o=n.add(n.mul(r).div(1e4));return L(this.contractWrapper.getProvider(),a.currencyContractAddress,o)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:s.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await L(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInEpochSeconds:t.startTime,asset:await N(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),reservePriceCurrencyValuePerToken:await L(this.contractWrapper.getProvider(),t.currency,t.reservePricePerToken),reservePrice:s.from(t.reservePricePerToken),endTimeInEpochSeconds:t.endTime,sellerAddress:t.tokenOwner,type:g.Auction}}}const b=class{constructor(t,r,e){i(this,"getAll",this.getAllListings);i(this,"buyoutListing",p(async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new y(this.getAddress(),t.toString());switch(a.listingType){case g.Direct:return W(r!==void 0,"quantityDesired is required when buying out a direct listing"),await this.direct.buyoutListing.prepare(t,r,e);case g.Auction:return await this.auction.buyoutListing.prepare(t);default:throw Error(`Unknown listing type: ${a.listingType}`)}}));i(this,"makeOffer",p(async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new y(this.getAddress(),t.toString());const n=await this.contractWrapper.getChainID();switch(a.listingType){case g.Direct:return W(e,"quantity is required when making an offer on a direct listing"),await this.direct.makeOffer.prepare(t,e,q(a.currency)?it[n].wrapped.address:a.currency,r);case g.Auction:return await this.auction.makeBid.prepare(t,r);default:throw Error(`Unknown listing type: ${a.listingType}`)}}));i(this,"setBidBufferBps",p(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getTimeBufferInSeconds();return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[r,s.from(t)]})}));i(this,"setTimeBufferInSeconds",p(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getBidBufferBps();return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[s.from(t),r]})}));i(this,"allowListingFromSpecificAssetOnly",p(async t=>{const r=[];return(await this.roles.get("asset")).includes(w)&&r.push(this.encoder.encode("revokeRole",[A("asset"),w])),r.push(this.encoder.encode("grantRole",[A("asset"),t])),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})}));i(this,"allowListingFromAnyAsset",p(async()=>{const t=[],r=await this.roles.get("asset");for(const e in r)t.push(this.encoder.encode("revokeRole",[A("asset"),e]));return t.push(this.encoder.encode("grantRole",[A("asset"),w])),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[t]})}));let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new j(t,r,n,a,e);this._chainId=o,this.abi=tt.parse(n||[]),this.contractWrapper=c,this.storage=e,this.metadata=new rt(this.contractWrapper,et,this.storage),this.app=new at(this.contractWrapper,this.metadata,this.storage),this.roles=new nt(this.contractWrapper,b.contractRoles),this.encoder=new F(this.contractWrapper),this.estimator=new st(this.contractWrapper),this.direct=new pt(this.contractWrapper,this.storage),this.auction=new ut(this.contractWrapper,this.storage),this.events=new $(this.contractWrapper),this.platformFees=new ot(this.contractWrapper),this.interceptor=new ct(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===w)throw new y(this.getAddress(),t.toString());switch(r.listingType){case g.Auction:return await this.auction.mapListing(r);case g.Direct:return await this.direct.mapListing(r);default:throw new Error(`Unknown listing type: ${r.listingType}`)}}async getActiveListings(t){const r=await this.getAllListingsNoFilter(!0),e=this.applyFilter(r,t),a=s.from(Math.floor(Date.now()/1e3));return e.filter(n=>n.type===g.Auction&&s.from(n.endTimeInEpochSeconds).gt(a)&&s.from(n.startTimeInEpochSeconds).lte(a)||n.type===g.Direct&&s.from(n.quantity).gt(0))}async getAllListings(t){const r=await this.getAllListingsNoFilter(!1);return this.applyFilter(r,t)}async getTotalCount(){return await this.contractWrapper.read("totalListings",[])}async isRestrictedToListerRoleOnly(){return!await this.contractWrapper.read("hasRole",[A("lister"),w])}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getTimeBufferInSeconds(){return this.contractWrapper.read("timeBuffer",[])}async getOffers(t){const r=await this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:t}});return await Promise.all(r.map(async e=>await S(this.contractWrapper.getProvider(),s.from(t),{quantityWanted:e.data.quantityWanted,pricePerToken:e.data.quantityWanted.gt(0)?e.data.totalOfferAmount.div(e.data.quantityWanted):e.data.totalOfferAmount,currency:e.data.currency,offeror:e.data.offeror})))}async getAllListingsNoFilter(t){return(await Promise.all(Array.from(Array((await this.contractWrapper.read("totalListings",[])).toNumber()).keys()).map(async e=>{let a;try{a=await this.getListing(e)}catch(n){if(n instanceof y)return;console.warn(`Failed to get listing ${e}' - skipping. Try 'marketplace.getListing(${e})' to get the underlying error.`);return}if(a.type===g.Auction)return a;if(t){const{valid:n}=await this.direct.isStillValidListing(a);if(!n)return}return a}))).filter(e=>e!==void 0)}applyFilter(t,r){let e=[...t];const a=s.from((r==null?void 0:r.start)||0).toNumber(),n=s.from((r==null?void 0:r.count)||dt).toNumber();return r&&(r.seller&&(e=e.filter(o=>{var c;return o.sellerAddress.toString().toLowerCase()===((c=r==null?void 0:r.seller)==null?void 0:c.toString().toLowerCase())})),r.tokenContract&&(e=e.filter(o=>{var c;return o.assetContractAddress.toString().toLowerCase()===((c=r==null?void 0:r.tokenContract)==null?void 0:c.toString().toLowerCase())})),r.tokenId!==void 0&&(e=e.filter(o=>{var c;return o.tokenId.toString()===((c=r==null?void 0:r.tokenId)==null?void 0:c.toString())})),e=e.filter((o,c)=>c>=a),e=e.slice(0,n)),e}async prepare(t,r,e){return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}};let k=b;i(k,"contractRoles",X);export{k as Marketplace};
