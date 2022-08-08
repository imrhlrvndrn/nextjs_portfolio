## Prerequisites

You must have macOS desktop access with administrator privileges.

Login to the macOS desktop system and install Homebrew on your system (if not already installed)

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

For more instruction visit [Homebrew installation tutorial](https://brew.sh/).

## Step 1 – Remove existing Node Versions

If your system already has a node installed, uninstall it first. My system already has installed node via Homebrew. So uninstalling it first. Skip if not already installed.

```
brew uninstall --ignore-dependencies node
brew uninstall --force node
```

## Step 2 – Install NVM on macOS

Now, your system is ready for the installation. Update the Homebrew package list and install NVM.

```
brew update
brew install nvm
```

Next, create a directory for NVM at home.

```
mkdir ~/.nvm
```

Now, configure the required environment variables. Edit the following configuration file in your home directory

```
vim ~/.bash_profile
```

and, add the below lines to ~/.bash_profile ( or ~/.zshrc for macOS Catalina or newer versions)

```
# Setting up nvm
export NVM_DIR="$HOME/.nvm"

[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
## Press ESC + :wq to save and close your file.
```

Next, load the variable to the current shell environment. From the next login, it will automatically loaded.

```
source ~/.bash_profile
```

That’s it. The NVM has been installed on your macOS system. Go to next step to install Node.js versions with the help of nvm.

## Step 3 – Install Node.js with NVM

First of all, see what Node versions are available to install. To see available versions, type:

```
nvm ls-remote
```

Now, you can install any version listed in above output. You can also use aliases names like node for latest version, lts for latest LTS version, etc.

```
nvm install node ## Installing Latest version
nvm install 14 ## Installing Node.js 14.X version
```

After installing you can verify what is installed with:

```
nvm ls
nvm list node.js macos
```

If you have installed multiple versions on your system, you can set any version as the default version any time. To set the node 14.X as default version, simply use:

```
nvm use 14
```

Similarly, you can install other versions like Node 12, 15, and 18 versions and switch between them.
