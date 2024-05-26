### 1_ Ubuntu içerisine XFCE4/XUbuntu Desktop Kurulumu

Putty benzeri terminalinizi açıp aşağıdaki komutları girin.
		
		sudo apt update

 XFCE4 masaüstünü ve temel uygulamaları yükleyin.

		sudo apt install xfce4

xubuntu-desktop yükleyin.
	Burada hangi oturum açma ekranının (Görüntü Yöneticisi) kullanılacağını seçmenizi isteyecek. 
	Orijinal giriş ekranını korumak için gdm3'ü seçin veya XUbuntu'da varsayılan olana geçmek için lightdm'yi kullanın. 
	ve enterleyin
		
		sudo apt install xubuntu-desktop

![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/52866f14-798e-44eb-81ce-f3ee0203714c)

Sorunsuz yüklemeyi bitirdinizse, sunucunuzu yeniden başlatın.

### 2_ Ubuntu Uzak Masa Üstü bağlantısı Nasıl Yapılır

	sudo apt-get install xrdp
 	sudo service xrdp restart

Terminalle işimiz bitmiş görünüyor.
Şimdi kendi windows bilgisayarınıza giderek, sol alttaki uygulama arama kısmına "uzak" yazın ve aşağıdakini bulup çalıştırın.
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/9a0d446a-11da-47e6-b897-5ade3b80cf3e)

Karşı sunucunun ip adresini girin
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/545cf801-84d1-4b9f-971d-baff79a5815a)

Terminalle bağlanırken kullandığınız kullanıcı adınızı, genelde "root" ve şifrenizi girerek, karşı sunucuya bağlanmanız lazım.

Bağlandıktan sonra aşağıdaki gibi bir ekrana ulaşmanız lazım. Buraya tekrar şifrenizi giriyor ve masa üstünüze ulaşıyorsunuz

![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/c4a0bab3-6469-4325-8e64-a7499255048d)


### 3_ Ubuntu Chrome yükleme

sol üstten Uygulamalar/internet Tarayıcısı var tıklayın arama kısmına chrome yazıp aratın ve download kısmında (64 bit .deb (Debian/Ubuntu için)) olanı indirin.
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/c0a97288-93b6-4451-85cd-8921290c9a75)

Yine Uygulamalr/Dosya yönetici tıklayıp "indirilenler/download" klasörüne gidip Chrome bulun. 
Sunucunuza inen (google-chrome-stable_current_amd64) dosyasının üzerine sağ tıklayıp "Gdebi paket kurucu ile aç" tıklayın.
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/8bb8b837-264f-4606-86f0-28a6129c5d24)


### 4_ Rivalzi indirme ve kurma
 Chrome uzantı mağazasına gidip, metamask uzantısını ekleyin. Eski veya yeni adres alıp kelimeleri saklayın.
 Sonra rivalzi.io sitesine yine sunucu üzerinden giderek For Linux olanı indirip kurun.
![image](https://github.com/Madmin27/Ubuntu-22.04-notlarim/assets/94014225/2a29f802-03fd-451c-8abe-c0b406fba7df)

Sonrasını [rivalzi](https://rivalz.ai?r=Serhatim77) görevlerinden yapıyorsunuz işte


Yıldız verirseniz memnun olurum. İyi çalışmalar
