
root kulannıcınız yoksa veya şifre tanımlanmamışsa aşağıdaki yapın

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


### 1_ Ubuntu içerisine XFCE4/XUbuntu Desktop Kurulumu

	sudo su
Putty benzeri terminalinizi açıp karşı sunucunuza bağlanın ve aşağıdaki komutları girin.
		
		sudo apt update

 Desktop görüntüsü için sunucunuz çok kısıtlıysa bu XFCE4 masaüstünü ve temel uygulamaları yükleyin.

		#sudo apt install xfce4

Desktop görüntüsü için sunucunuz biraz iyiyse bu xubuntu-desktop yükleyin.
	Burada hangi oturum açma ekranının (Görüntü Yöneticisi) kullanılacağını seçmenizi isteyebilir. 
 ![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/7992682e-10fa-4a8b-94ad-e4ed17578e11)

Orijinal giriş ekranını korumak için gdm3'ü seçin veya XUbuntu'da varsayılan olana geçmek için lightdm'yi kullanın. 
	ve enterleyin
		
		sudo apt install xubuntu-desktop

  Aşağıdakileri de yapınca sunucuyu restart edin

Edited Hazen:
Konsolu açtıktan sonra, yenikulanici adında yeni bir kullanıcı oluşturacağız. 

	sudo adduser yenikulanici

yazıyoruz sonrasında şifre oluşturmamızı istiyor basit bir şeyler yazabiliriz 0000 veya root ile aynı şfreyi verebilrsiniz. daha sonrasında adres tam isim vs istiyor o kısımları da tam olarak dolduralım. Full name istediği yere ad soyad gibi 2 kısımdan oluşan bir isim yazın yoksa kabul etmiyor

sonra bu kullanıcıya root yetkisi veriyoruz.

	sudo usermod -aG sudo yenikulanici

 yetkiyi verdikten sonra şağıda fotosunu attığım kısımdan bağlanırkenki kullanıcı adını ne koyduysak onu yazıyoruz root yerine. yeniden bağlanırken de kullanıcının şifresini giriyoruz. 0000 gibi. yeniden bağlanınca artık o hataları vermiyor.


Sorunsuz yüklemeyi bitirdinizse, sunucunuzu yeniden başlatın. 
		Not: bazı arkadaşlar yeniden başlatmaya gerek görmediler


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

Bağlandıktan sonra aşağıdaki gibi bir ekrana ulaşmanız lazım. Buraya tekrar (yenikulanici) içi olan şifrenizi giriyor ve masa üstünüze ulaşıyorsunuz

![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/c4a0bab3-6469-4325-8e64-a7499255048d)


### 3_ Ubuntu Chrome yükleme
	Not: aşağıdaki yöntemde hata alanlar, 3_2 Alternatif yöntemi deneyesinler
## 3_1 
sol üstten Uygulamalar/internet Tarayıcısı var tıklayın arama kısmına chrome yazıp aratın ve download kısmında (64 bit .deb (Debian/Ubuntu için)) olanı indirin.
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/c0a97288-93b6-4451-85cd-8921290c9a75)

Yine Uygulamalar/Dosya yönetici tıklayıp "indirilenler/download" klasörüne gidip Chrome bulun. 

	Not: Aşağıdaki işlemi yaparken sorun yaşarsanız. Kendi pc nizdeki terminalden sunucunuza bağlanıp
		sudo apt install gdebi

Sunucunuza inen (google-chrome-stable_current_amd64) dosyasının üzerine sağ tıklayıp "Gdebi paket kurucu ile aç" tıklayın.
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/8bb8b837-264f-4606-86f0-28a6129c5d24)

Sorun yaşıyorsanız

	sudo apt-get update && sudo apt-get dist-upgrade 
 	sudo apt-get clean && sudo apt-get autoremove
  	sudo apt --fix-broken install
   	sudo dpkg --configure -a
  

## 3_2 Chrome Alternatif yükleme yöntemi
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/661ed8e6-8d5b-48b5-91c2-b36511b643e7)
Bu hatayı alıyorsanız, Chrome'u yüklemek için kendi pc nizden ssh germinalinizle karşı sunucuya bağlanın ve aşağıdaki komutlarla yüklemeye çalışın.
Komutu kullanarak indirin: 
	
 	wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

indirilen yükleyiciyi çalıştırın:
		
  	sudo apt install ./google-chrome-stable_current_amd64.deb

tarayıcıyı başlatın:
		
  	google-chrome

Şimdi sol üstteki uygulamalarda internet menüsünde chrome görmeniz lazım. Bulamazsanız üstten arama yapın
Varsayılan browser Chrome olsun istiyorsanız

![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/6e93e662-e2a5-4f03-a46b-aae61d29df14)
veya terminalden	
 	xfce4-settings-manager
gidin "Preferred Applications"
 "Web Browser", altında tıklayın "ayarlar"
type in /usr/bin/google-chrome

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
