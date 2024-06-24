iki warden adresi arasında, her 15 saniyede bir uward gönderir
Spaceward Tx için faydası olur düşüncesiyle tasarlanmıştır.
  
    mkdir wsend
    cd wsend

Gerekli Node.js kütüphanelerini kurmamız gerekiyor:

    npm install @cosmjs/launchpad @cosmjs/crypto @cosmjs/proto-signing @cosmjs/stargate dotenv readline-sync
    npm update
    
    npm install @cosmjs/stargate
    npm install ethers dotenv


wsend klasörü içerisinde iken yukarıda verilen .env ve wsend.js dosyalarını bu klasöre kopyalamanız gerekiyor

    nano .env
    nano wsend.js


Aşağıdaki komutla da screen içerisinde çalıştırınız. Başarılar

    Screen -S wsend
    node wsend.js

CTRL +A+D ile çıkınız


Not :
 wsend.js dosyası içerisindeki rpc adresini kendinizinki veya daha sağlam bir rpc ile değiştirebilirsiniz
