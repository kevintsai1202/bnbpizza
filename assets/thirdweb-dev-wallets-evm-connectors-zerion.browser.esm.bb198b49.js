import{I as e}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.c5c1649b.js";import{b0 as s}from"./index.da2d7cb1.js";import"./url-bc88b2b6.browser.esm.1fc0590b.js";import"./normalizeChainId-e4cc0175.browser.esm.042707b7.js";class u extends e{constructor(n){const t={...{name:"Zerion",getProvider(){var r;function i(o){if(!!(o!=null&&o.isZerion))return o}if(s(globalThis.window))return(r=globalThis.window.ethereum)!=null&&r.providers?globalThis.window.ethereum.providers.find(i):i(globalThis.window.ethereum)}},...n.options};super({chains:n.chains,options:t,connectorStorage:n.connectorStorage})}}export{u as ZerionConnector};
