import{I as i}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.9ae2e960.js";import{aU as e}from"./index.66a6c62b.js";import"./url-bc88b2b6.browser.esm.51240344.js";import"./normalizeChainId-e4cc0175.browser.esm.042707b7.js";class w extends i{constructor(t){const s={...{name:"Trust",getProvider(){var r;function n(o){if(!!(o!=null&&o.isTrust))return o}if(e(globalThis.window))return(r=globalThis.window.ethereum)!=null&&r.providers?globalThis.window.ethereum.providers.find(n):n(globalThis.window.ethereum)}},...t.options};super({chains:t.chains,options:s,connectorStorage:t.connectorStorage})}}export{w as TrustConnector};
