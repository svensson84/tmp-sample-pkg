## caching your credentials in git for HTTPS


### git-credential-manager

command "git-credential-manager" helps storing and providing git credentials.  
no need to type user/pw for remote git repositories (i.e. GitHub) anymore.

> Git Credential Manager (GCM) is a secure Git credential helper  
built on .NET that runs on Windows, macOS, and Linux.  
<https://github.com/GitCredentialManager/git-credential-manager>  (04-02-22)

### configuration

~~~bash
git-credential-manager-core configure
~~~

the command above sets the git configuration entry "**credential.helper**":
~~~bash
git config -l --show-origin | sed -n '/credential.helper/p'
file:/home/svensson/.gitconfig  credential.helper=/usr/local/share/gcm-core/git-credential-manager
~~~

> by sven zaugg (04-02-22)