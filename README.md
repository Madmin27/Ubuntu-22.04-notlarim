# NetdataLatestOnUbuntu22
Running netdata latest version on ubuntu 22.04

Netdata sunucu izleme yazılımıdır. Netdata ekibi ubuntu 18 üzerine destek vermiyor. Ubuntu 22.04 üzerine yüklemek için Netdata 1.3.1 kullanabiliyorsunuz.

Bu projede, Ubuntu 22.04 veya daha yüksek versiyonlarına, Netdata enson versiyonu (şimdi 1.44.1) yükleme imkanı bulacaksınız.

**Terminale aşağıdaki komutu giriniz**

	docker pull netdata/netdata:latest

**sonra da**


	docker run -d --name=netdata \
	  --pid=host \
	  --network=host \
	  -v netdataconfig:/etc/netdata \
	  -v netdatalib:/var/lib/netdata \
	  -v netdatacache:/var/cache/netdata \
	  -v /etc/passwd:/host/etc/passwd:ro \
	  -v /etc/group:/host/etc/group:ro \
	  -v /etc/localtime:/etc/localtime:ro \
	  -v /proc:/host/proc:ro \
	  -v /sys:/host/sys:ro \
	  -v /etc/os-release:/host/etc/os-release:ro \
	  -v /var/log:/host/var/log:ro \
	  -v /var/run/docker.sock:/var/run/docker.sock:ro \
	  --restart unless-stopped \
	  --cap-add SYS_PTRACE \
	  --cap-add SYS_ADMIN \
	  --security-opt apparmor=unconfined \
	  netdata/netdata


http://192.168.0.20:19999/    gibi kendi local ip nizden izleyebilirsiniz
