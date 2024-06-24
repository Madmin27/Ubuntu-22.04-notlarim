require('dotenv').config();
const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const { SigningStargateClient } = require('@cosmjs/stargate');

//const axios = require('axios');

const mnemonic = process.env.MNEMONIC; 
const rpcEndpoint = 'https://wardentestnet-rpc.minen.com.tr/'; // RPC endpoint
const fromAddress = process.env.FROM_ADDRESS; 
const toAddress = process.env.TO_ADDRESS; 
// const toAddress = 'wardenxxxxx'; // Alıcı adresi
const amountToSend = '100'; // Gönderilecek miktar

async function main() {
  if (!mnemonic) {
    console.error("Lütfen cüzdan kelimelerinizi .env dosyasına girdiğinizi kontrol edin");
    process.exit(1);
  }

  // Cüzdan oluştur
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'warden' });

  // Stargate client oluştur
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);

  // Token gönderme fonksiyonu
  const sendTokens = async () => {
    try {
      // Token gönder
      const result = await client.sendTokens(
        fromAddress,
        toAddress,
        [{ denom: 'uward', amount: amountToSend }],
        {
          amount: [{ denom: 'uward', amount: '500' }], // İşlem ücreti olarak 500uward ekleniyor
          gas: '200000' // Gaz limiti
        },
        'memo'
      );

      console.log(`Başarıyla ${amountToSend} uward ${toAddress} adresine gönderildi. İşlem Hash: ${result.transactionHash}`);
    } catch (error) {
      console.error('uward token gönderme başarısız:', error);
    }
  };

  // Her 15 saniyede bir sendTokens fonksiyonunu çağır
  setInterval(sendTokens, 15000);
}

main().catch(console.error);
