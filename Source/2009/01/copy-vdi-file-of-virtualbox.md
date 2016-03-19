Copy vdi file of Virtualbox
---

VirtualBox often used to test the system, but the most troublesome is that VirtualBox to use uuid to control vdi file, so there is no way to use copy commands to copy vdi file.

Therefore, if you want to copy a vdi file, you must use the following command to re-generate a new uuid.

	VBoxManage clonevdi Orig.vdi New.vdi

If you copy the exhausted only to find, there are still commands can be remedied.

	VBoxManage internalcommands setvdiuuid New.vdi