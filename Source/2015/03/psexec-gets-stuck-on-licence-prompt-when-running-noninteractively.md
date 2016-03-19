PsExec gets stuck on licence prompt when running non-interactively
---

Use the **/accepteula** command-line switch to accept the licence agreement.

Or set

>		HKCU\Software\Sysinternals\PsExec\EulaAccepted 

to 1

**Caution:** if the reg key above is set to 0 (EULA was declined once) then the /accepteula will not work, you have to set the key to 1 manually (or delete it altogether).