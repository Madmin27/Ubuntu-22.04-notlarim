Dym roollap için subdomain yönlendirme

Bu klavuzda yönlendirilecekleriniz:
1. Node sunucunuza SSL kurulumu
2. Node sunucunuza Nginx kurulumu
3. Domain alımı, hosting kiralamanız
4. Hostinginiz üzerinden sub domainler açıp, node sunucunuza yönlendirmeniz.


1. Ssl kurulumu

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

2. Nginx kurulumu
	Bu anlatımda sunucunuzda apache olmadığı, gerek olmadığı veya kaldırdığınız varsayılmıştır.
        Node sunucunuzun işletim versiyonuna göre nginx kurmuş olmanız gerekiyor. Bu adımda ubuntu 22.04 için kurulumu anlatılacak.

		sudo apt update
		sudo apt install nginx
Güvenlik duvarı ayarları. Ufw yüklü ise

		sudo ufw app list
aşağıdaki gibi birr çıktı almanız gerekli
OutputAvailable applications:
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
  OpenSSH

		sudo ufw allow 'Nginx HTTP'
  kontrol edelim
  		
    sudo ufw status
Aşağıdaki gibi bir çıktı alacaksınız
 OutputStatus: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere                  
Nginx HTTP                 ALLOW       Anywhere                  
OpenSSH (v6)               ALLOW       Anywhere (v6)             
Nginx HTTP (v6)            ALLOW       Anywhere (v6)



Nginx çalışıyor mu kontorl edin

		systemctl status nginx

Aşağıdakine benzer bir çıktı almanız lazım
 nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Sun 2024-02-11 13:05:39 +03; 42min ago
       Docs: man:nginx(8)
    Process: 192319 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exit>
    Process: 192322 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, statu>
   Main PID: 192326 (nginx)
      Tasks: 29 (limit: 57330)
     Memory: 25.0M
        CPU: 297ms
     CGroup: /system.slice/nginx.service
             ├─192326 "nginx: master process /usr/sbin/nginx -g daemon on; master_process on;"
             ├─192327 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ">
             ├─192328 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ">
             ├─192329 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ">
             ├─192330 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ">
             ├─192331 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" 

Herşey normal görünüyorsa chrome veya benzeri http://sunucu_ipiniz  ile nginx karşılama sayfasını görmeniz lazım

2.1 Nginx domain tanımlama

		sudo mkdir -p /var/www/domaininiz.com
  		sudo chown -R $USER:$USER /var/www/domaininiz.com
    		sudo chmod -R 755 /var/www/domaininiz.com
Şimdi domain adresinize girdiğinizde açılmasını istediğiniz sayfayı kabaca tasarlayalım


		nano /var/www/domaininiz.com/index.html
  içerisine aşağıdakini girip ctrl+x yes çıkalım

  		<html>
    <head>
        <title>Nignx calisiyor</title>
    </head>
    <body>
        <h1>Bu sayfaya acildiysa Nginx calisiyor demektir</h1>
    </body>
	</html>

Şimdi domainizi Nginx'e tanıtacağız
	
 	sudo nano /etc/nginx/sites-available/domaininiz.com

  Aşağıdakileri girin
  
  	server {
        listen 80;
        listen [::]:80;

        root /var/www/domaininiz.com;
        index index.html index.htm index.nginx-debian.html;

        server_name domaininiz.com www.domaininiz.com;

        location / {
                try_files $uri $uri/ =404;
        }
	}

 Dosyayı etkinleştirin

 	udo ln -s /etc/nginx/sites-available/domaininiz.com /etc/nginx/sites-enabled/
  
Ufak bir ayar kaldı

	sudo nano /etc/nginx/nginx.conf

 aşağıdaki değeri bulup değiştirin
 
 	http {
    ...
    server_names_hash_bucket_size 64;
    ...
	}

 Nginx yapılandırmasını kontrol edelim

  	 nginx -t

Hata vermediyse 

	systemctl restart nginx

 

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

aynısını bu defa da sites-enabled/domaininiz.com
    
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
