require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid gloom tape slab chest note right provide gesture merry flock system'; 
let testAccounts = [
"0x1ba76709d956c73a8a4736d63fa066bd53ae391fde9698a9fbc3bdd0efa2f147",
"0x64429e360d0fc5a8a003e54fd3cb17145f6e56af30f4fce60021f2aafcb0fba7",
"0xa0c93ef5f304ab2ac247a0a7be29a1429e576deeab209d71d014de8c9692019d",
"0x23d9f5a7765cc2291731cf9c027c0894f02facd5135bc6f2156bd5909ce1d5fa",
"0x50345d7ad97c54d873563baa172f30b4390986945a4e0789fd43329fe3c3c95e",
"0xe84cec6b7250e161c8d649ba600bbbca7373a62544c2ffbc226886fa7afc373f",
"0xc1e1a7612e9dd351d540db93249bff8f6a80327a26b74a31302c8f442b9844bc",
"0x2de512efed6678e283cda6522fcadc52877c1237d3eead5c6cca9d3028b186df",
"0xddc8d019ee1db70360f3a42a2fc4332b9b73e91b13f37b7554323bd8c48d55c7",
"0x3de48dc46e9cfeb364959e47ec4ad0aa4a9dbbf8efd2c32e8fdfd963346836bb"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


