How do i use the Q-Dir internal file association rules eg 7-Zip? 
---

*Example 1:*
Eg: For 7-zip, with 7-zip in the default Program Files folder.
>*.zip;*.rar=C:\Program Files\7-Zip\7zFM.exe 

*Example 2:*
Q-Dir is on the USB Stik and Notepad++ also.
The file extension "txt", "cpp", "pl", "ini", "php", "cgi" to be with Notepad++ open. 

>*.txt;*.cpp;*.pl;*.ini;*.php;*.cgi=%drive%/npp/unicode/notepad++.exe 

Or even for portable 7-Zip : 

>*.zip;*.rar;*.7z;*.tar;*.iso;*.lzh=%drive%/7-Zip/7zFM.exe 

%drive% is a placeholder for the drive from which to Q-Dir is started.
In the case of: the Q-Dir path is "M:/Q-Dir/Q-Dir.exe" then would be %drive% a placeholder for "M:". 

This allows you to define yourself,
through the menu :
Extras >> ... more options, then tab bar Association. 

![img](https://dl.dropboxusercontent.com/u/13003046/images/Assoziation_in_Q_Dir.png)