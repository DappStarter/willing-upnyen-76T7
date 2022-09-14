require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note still assist just clock metal gauge'; 
let testAccounts = [
"0xdc55a9bf7da9d48e7175112f3296359c726207a7740f8e7ce8e512fa2e021f47",
"0x0f41d41bed44e48806d99b319009b406fc72b60cb3af3f4bf1e25f30bc6e6462",
"0x2d04aca10d54d4a983e49a79ec4f47ee9f8d47522822ceaf6e304b120f3a9118",
"0x9c2a7d6c4ddd86e3d496f726fe0f2c6493fbbab770c0588769dae287067765a5",
"0xed55d87ff00fe6d08a54e3caf75e058df7eeaeccaf44b23005c7a00a93e22870",
"0x6bf77852b96c66500f8e9ac4fa3b9797c0bedaf89c9eb764c118c53f1c5d594b",
"0x93f69dfacf9829887cf2347d12510de945d165032273af190a980ddb90bb4cbe",
"0x53a300433cf9f9832386f2909ebebd2b315b7bd9ca153d35e3f905ecd2d77c7e",
"0xf3d5c088f4f7eb6f7a4764e1960203cecc315b9d888cc298a2734b64f4c78f67",
"0xb511e8939cc85bcdc46bc70ed3081c15b2592c605a29f89531cceed050e8c84c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

