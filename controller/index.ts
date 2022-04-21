import * as solanaWeb3 from '@solana/web3.js';

import { fetch as fetchPolyfill } from 'whatwg-fetch'
global.fetch = fetchPolyfill

////////////////////////////////////////////////////////////
//  Funciones de Solana-web3 para la creacion de cuentas  //
////  obtener el balance y transferir SOL y SPL Tokens  ////
////////////////////////////////////////////////////////////

//Create keypair
async function createAccount() {
    const response = await fetch('http://192.168.1.53:3000/keypair')
    const json = await response.json()
    return json
}

export {
    createAccount
}