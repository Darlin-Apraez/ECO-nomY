import * as solanaWeb3 from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey } from '@solana/web3.js';


import { fetch as fetchPolyfill } from 'whatwg-fetch'
global.fetch = fetchPolyfill

////////////////////////////////////////////////////////////
//  Funciones de Solana-web3 para la creacion de cuentas  //
////  obtener el balance y transferir SOL y SPL Tokens  ////
////////////////////////////////////////////////////////////

//variables
const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new solanaWeb3.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")
const LAMPORTS_PER_SOL = solanaWeb3.LAMPORTS_PER_SOL 

//crear conexion
function createConnection(cluster:string) {
    return new solanaWeb3.Connection(solanaWeb3.clusterApiUrl(cluster))
}

//Create keypair
async function createAccount() {
    const response = await fetch('Aqui va tu direccion')
    const json = await response.json()
    return json
}

//buscar cuentas asociadas a tokens
async function findAssociatedTokenAddress(
    walletAddress: PublicKey,
    tokenMintAddress: PublicKey
  ): Promise<PublicKey> {
    return (
      await solanaWeb3.PublicKey.findProgramAddress(
        [
          walletAddress.toBuffer(),
          TOKEN_PROGRAM_ID.toBuffer(),
          tokenMintAddress.toBuffer(),
        ],
        SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
      )
    )[0];
}

//obtener balance del token ECOPUNTO
async function getToken(publicKey: string, splToken: string){
    const connection = createConnection("mainnet-beta")
    const account = await findAssociatedTokenAddress(new PublicKey(publicKey), new PublicKey(splToken))

  try {
    const balance = await connection.getTokenAccountBalance(new PublicKey(account.toString()))
    return balance.value.uiAmount
  } catch (e) {
    return 0
  }
}

export {
    createAccount,
    getToken
}