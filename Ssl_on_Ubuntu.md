Ubuntu 22.04 üzerine SSL kurulumu

Aşağıdaki Komut ile openssl kurun
    
    sudo apt install openssl
Özel Anahtar oluşturun
    
    openssl genrsa -out private.key 2048

Csr oluşturacağız. Bu esnada size isim, şehir, Tr falan soracak. Sembolik birşeyler yazın
    
    openssl req -new -key private.key -out csr.pem

CSR kullanarak Sertifika oluşturalım (1yılık)

    openssl x509 -req -days 365 -in csr.pem -signkey private.key -out public.crt
    
Sertifika dosyalarını (/etc/ssl/certs) dizinine kopyalayın.


Sertifika public.crt dosyalarını (/etc/ssl/certs) dizinine kopyalayın.
    
    cp public.crt /etc/ssl/certs/public.crt
    cp csr.pem /etc/ssl/certs/csr.pem
    
Özel anahtar private.key dosyasını  (/etc/ssl/private) dizinine kopyalayın.

    cp private.key /etc/ssl/private/private.key


Ubuntu Nginx ssl sertifikası yükleme
Nginx yüklediyseniz

        nano /etc/nginx/nginx.conf
        
/etc/nginx/nginx.conf içerisinden # SSL Settings kısmına girip, aşağıdaki satırların başlarındaki # işaretlerini kaldıralım
 	
	
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE
	ssl_prefer_server_ciphers on;
ctrl +x 
yes

Nginx yeniden başlatalım

      service nginx  restart

Sub Domain yönlendirme
1. Yöntem
   Node sunucunuza cpanel, plesk, cwp benzeri bir panel kurabbilirsiniz veya
   
2. Domain aldınız, hosting aldınız. Domain aldığınız yerden ns1 leri hostinginize sorarak isimlerini ve iplerini ilgili alanlara girerek hostinginize yönlendiriyorsunuz.
   Hosting paneline girip, rpc.domaininiz.com, evm.domaininiz.com, rest.domaininiz.com şeklinde 3 tane sub domain oluşturuyorsunuz.
   A kayıtlarını düzenleme yerine girip bunların ve domaininiz.com olanların vs hepsini, node kurduğunuz sunucu ip si yapıyorsunuz.
Panelden Dns yeniden başlatıyorsunuz.

10 saat kadar sonra http://domaininiz.com linkine tıkladığınızda node sunucunuzun nginx sayfasına ulaşmanız lazım



Nginx dosyalarının yapılandırılması

    nano etc/nginx/sites-available/domaininiz.com

içerisine

    server {
       listen 443 ssl;
       listen [::]:443 ssl;
       include snippets/self-signed.conf;
       include snippets/ssl-params.conf;
       server_name domaininiz.com www.domaininiz.com;
       server_name sunucu_ipniz;
       root /var/www/domaininiz.com;
       index index.html;
    location / {
               try_files $uri $uri/ =404;
       }
    }

    server {
       listen 443 ssl;
       listen [::]:443 ssl;
       include snippets/self-signed.conf;
       include snippets/ssl-params.conf;
       server_name rpc.domaininiz.com;
       server_name sunucu_ipniz;

        location / {
            proxy_pass http://localhost:26657;
        }   
    }

aynısını bu defa da
    
    nano etc/nginx/sites-enabled/domaininiz.com

içerisine

    server {
       listen 443 ssl;
       listen [::]:443 ssl;
       include snippets/self-signed.conf;
       include snippets/ssl-params.conf;
       server_name domaininiz.com www.domaininiz.com;
       server_name sunucu_ipniz;
       root /var/www/domaininiz.com;
       index index.html;
    location / {
               try_files $uri $uri/ =404;
       }
    }

    server {
       listen 443 ssl;
       listen [::]:443 ssl;
       include snippets/self-signed.conf;
       include snippets/ssl-params.conf;
       server_name rpc.domaininiz.com;
       server_name sunucu_ipniz;

        location / {
            proxy_pass http://localhost:26657;
        }   
    }

Nginx yeniden başlatalım

      service nginx  restart
