
root kulanıcınız yoksa veya şifre tanımlanmamışsa aşağıdaki yapın varsa gerek yok.

	sudo passwd root
 ![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/a273c5b1-3630-4ddb-bb81-58cce039d5ed)

 
 ssh root bağlantısı için
 
 	sudo nano /etc/ssh/sshd_config
  
  Dosyanın içinde bulunan "PermitRootLogin without-password" yazan kısmı "PermitRootLogin yes" olarak değiştiriyor, yoksa oralara ekliyoruz
  #Include /etc/ssh/sshd_config.d/*.conf şeklinde başına işaret koyun
  CTRL X

	service ssh restart

### Ubuntu Desktop için mate Kurulumu

	sudo apt update
	sudo apt upgrade
	sudo apt install ubuntu-mate-desktop
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/7992682e-10fa-4a8b-94ad-e4ed17578e11)

lightdm'yi kullanın. 


### 2_ Ubuntu Uzak Masa Üstü bağlantısı Nasıl Yapılır

 	sudo su
	apt-get install xrdp
 	systemctl enable xrdp
  	systemctl start xrdp
 	usermod -a -G ssl-cert xrdp
 	sudo service xrdp restart
  	systemctl status xrdp
   ![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/6d18cfca-aeb0-4339-be7b-a6cd5e09e46e)

   xrdp kullanıcısını “ssl-cert” grubuna ekleyin. 

    	usermod -a -G ssl-cert xrdp
     	systemctl restart xrdp

  ufw varsa

   	ufw allow from 192.168.1.0/24 to any port 3389



Terminalle işimiz bitmiş görünüyor.



Şimdi kendi windows bilgisayarınıza giderek, sol alttaki uygulama arama kısmına "uzak" yazın ve aşağıdakini bulup çalıştırın.
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/9a0d446a-11da-47e6-b897-5ade3b80cf3e)

Karşı sunucunun ip adresini girin
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/545cf801-84d1-4b9f-971d-baff79a5815a)

Yukarıda yeni açtıınız kullanıcı adınızı, "yenikulanici" ve şifrenizi girerek, karşı sunucuya bağlanmanız lazım.
bu panelde "kimlik bilgilerimi kaydet" seçeneğini işaretli hale getiriniz

![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/25f922ae-abb2-4321-840a-34a93658ca45)

Bağlandıktan sonra aşağıdaki gibi bir ekrana ulaşmanız lazım. Buraya tekrar root ve  şifrenizi giriyor ve masa üstünüze ulaşıyorsunuz

![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/11c319ae-e752-4bb4-885f-4bf5d50a86e4)


### 3_ Ubuntu Chrome yükleme

Terminal pencerenize dönüp
	
 	wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

indirilen yükleyiciyi çalıştırın:
		
  	sudo apt install ./google-chrome-stable_current_amd64.deb

tarayıcıyı başlatın:
		
  	google-chrome

Şimdi uzak masaüstünden ubuntı mate masa üstüne bağlanıp, menu/internet/chrome çalıştırın 
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/98e76abc-65a6-4af7-bea2-90087856b78e)


### 4_ Rivalzi indirme ve kurma
 Chrome uzantı mağazasına gidip, metamask uzantısını ekleyin. Eski veya yeni adres alıp kelimeleri saklayın.
 Sonra rivalzi.io sitesine yine sunucu üzerinden giderek For Linux olanı indirip kurun.

Uygulamalar/Dosya yönetici tıklayıp "indirilenler/download" klasörüne gidip

  	not. Aşağıda sorun yaşarsanız
		sudo apt install libfuse2
  
Sağ tıklayıp, özellikler/izinler paket gibi yükle.. kapat
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/c336c962-c778-4d8f-a024-753e800bf858)


Sonrasını [rivalzi](https://rivalz.ai?r=Serhatim77) görevlerinden yapıyorsunuz işte


Yıldız verirseniz memnun olurum. İyi çalışmalar
