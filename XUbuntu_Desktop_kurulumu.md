### 1_ Ubuntu içerisine XFCE4/XUbuntu Desktop Kurulumu

Putty benzeri terminalinizi açıp karşı sunucunuza bağlanın ve aşağıdaki komutları girin.
		
		sudo apt update

 XFCE4 masaüstünü ve temel uygulamaları yükleyin.

		sudo apt install xfce4

xubuntu-desktop yükleyin.
	Burada hangi oturum açma ekranının (Görüntü Yöneticisi) kullanılacağını seçmenizi isteyebilir. 
	Orijinal giriş ekranını korumak için gdm3'ü seçin veya XUbuntu'da varsayılan olana geçmek için lightdm'yi kullanın. 
	ve enterleyin
		
		sudo apt install xubuntu-desktop

Edited Hazen:
Biz normalde root kullanıcısı olarak bağlanıyoruz ama nedense root olarak bağlandığımız zaman bize çok fazla kısıtlama getiriyor hiçbir şey yapamıyoruz. Chrome çalışmıyor uygulamalar açılmıyor vs.
Bunun için önce farklı bir kullanıcı oluşturuyoruz. Konsolu açtıktan sonra, yenikulanici adında yeni bir kullanıcı oluşturacağız. 

	sudo adduser yenikulanici

yazıyoruz sonrasında şifre oluşturmamızı istiyor basit bir şeyler yazabiliriz 0000 veya root ile aynı şfreyi verebilrsiniz. daha sonrasında adres tam isim vs istiyor o kısımları da tam olarak dolduralım. Full name istediği yere ad soyad gibi 2 kısımdan oluşan bir isim yazın yoksa kabul etmiyor

sonra bu kullanıcıya root yetkisi veriyoruz.

	sudo usermod -aG sudo yenikulanici

 yetkiyi verdikten sonra şağıda fotosunu attığım kısımdan bağlanırkenki kullanıcı adını ne koyduysak onu yazıyoruz root yerine. yeniden bağlanırken de kullanıcının şifresini giriyoruz. 0000 gibi. yeniden bağlanınca artık o hataları vermiyor.


Sorunsuz yüklemeyi bitirdinizse, sunucunuzu yeniden başlatın. 
		Not: bazı arkadaşlar yeniden başlatmaya gerek görmediler


### 2_ Ubuntu Uzak Masa Üstü bağlantısı Nasıl Yapılır

	sudo apt-get install xrdp
 	sudo service xrdp restart

Terminalle işimiz bitmiş görünüyor.



Şimdi kendi windows bilgisayarınıza giderek, sol alttaki uygulama arama kısmına "uzak" yazın ve aşağıdakini bulup çalıştırın.
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/9a0d446a-11da-47e6-b897-5ade3b80cf3e)

Karşı sunucunun ip adresini girin
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/545cf801-84d1-4b9f-971d-baff79a5815a)

Yukarıda yeni açtıınız kullanıcı adınızı, "yenikulanici" ve şifrenizi girerek, karşı sunucuya bağlanmanız lazım.

Bağlandıktan sonra aşağıdaki gibi bir ekrana ulaşmanız lazım. Buraya tekrar (yenikulanici) içi olan şifrenizi giriyor ve masa üstünüze ulaşıyorsunuz

![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/c4a0bab3-6469-4325-8e64-a7499255048d)


### 3_ Ubuntu Chrome yükleme

sol üstten Uygulamalar/internet Tarayıcısı var tıklayın arama kısmına chrome yazıp aratın ve download kısmında (64 bit .deb (Debian/Ubuntu için)) olanı indirin.
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/c0a97288-93b6-4451-85cd-8921290c9a75)

Yine Uygulamalar/Dosya yönetici tıklayıp "indirilenler/download" klasörüne gidip Chrome bulun. 

	Not: Aşağıdaki işlemi yaparken sorun yaşarsanız. Kendi pc nizdeki terminalden sunucunuza bağlanıp
		sudo apt install gdebi

Sunucunuza inen (google-chrome-stable_current_amd64) dosyasının üzerine sağ tıklayıp "Gdebi paket kurucu ile aç" tıklayın.
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/8bb8b837-264f-4606-86f0-28a6129c5d24)


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
