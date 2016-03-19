VMware Bridged Network stops working after sleep/hibernate on Windows Host.
---

Running VMware Workstation 6.5 (or above 6.5). My Bridged networking stops working after Windows sleeps or hibernates. A restart is required to restore its operation. NAT networking works fine.
Anyone have any ideas how to restore it without a reboot?

Please run the following two commands in a cmd as administrator:

	net stop vmnetbridge
	net start vmnetbridge