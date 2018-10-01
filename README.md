# General infornation

This generator is used for automatic creation build for Showcase-version. 

It based on **Yeoman** technology. This tool gives possibility to create new project from modules, which are located in the separate GitHub repositories. More information about Yeoman you can found here: http://yeoman.io/

If you want to install HelmPHR-version automatically, you should read **"Installing"** below.

# Content

Current version of **Helm-PHR generator** includes following sub-generators:
1) **Core** sub-generator (_yo showcase:core_);
2) Plugin **HelmPHR-theme** sub-generator (_yo showcase:plugin-showcase-theme_);


# Core

This sub-generator does the following automatically:
1) Clone PulseTile-Core version from GitHub;
2) Install all required Node-modules;
3) Create the directory for non-core plugins.
 
If any errors occur during generator work you should remove project directory and repeat generator command.


# Plugin for Showcase-theme

This sub-generator does the following automatically:
1) Clone silver Showcase-theme plugin from GitHub to **plugins/** directory in the project;
2) Relocate **styles/** directory to **src/**;
3) Import new styles in **src/config/style.js**.
 
If any errors occur during generator work you should remove project directory and repeat generator command.


# Silver plugin TopThreeThings

This sub-generator clones silver TopThreeThings plugin from GitHub to **plugins/** directory in the project;
 
If any errors occur during generator work you should remove **plugins/TopThreeThings/** directory and repeat generator command.

If you want to remove TopThreeThings plugin you should remove **plugins/TopThreeThings/** directory and run command  **_yo helm-phr:update_**


# Silver plugin Vaccinations

This sub-generator clones silver Vaccinations plugin from GitHub to **plugins/** directory in the project;
 
If any errors occur during generator work you should remove **plugins/Vaccinations/** directory and repeat generator command.

If you want to remove Vaccinations plugin you should remove **plugins/Vaccinations/** directory and run command  **_yo helm-phr:update_**



# Silver plugin Feeds

This sub-generator clones silver Vaccinations plugin from GitHub to **plugins/** directory in the project;
 
If any errors occur during generator work you should remove **plugins/Feeds/** directory and repeat generator command.


# All silver plugins

This sub-generator clone all silver plugins from GitHub-repository.


# All bronze plugins

This sub-generator clone all bronze plugins from GitHub-repository.


# All carbon plugins

This sub-generator clone all carbon plugins from GitHub-repository.


# Bronze plugin PROMs

This sub-generator clones bronze PROMs plugin from GitHub to **plugins/** directory in the project.
 
The directory **plugins/PROMs/RecordsOfTable/** moves to **src/components/form-fields/**.

If you want to remove PROMs plugin you should:
 - remove **src/components/form-fields/RecordsOfTable/** directory;
 - remove **plugins/PROMs/** directory; 
 - run command  **_yo helm-phr:update_**


# Environment

Before installing the Generator, you will need the following:
- Node.js 6 or higher
- npm 3 or higher (which comes bundled with Node)
- Git

You can check current version by:
```
    $ node --version
    $ npm --version
    $ git --version
```

# Installing

Install Yeoman tool at you local machine if it is absent there:
```
    $ npm install -g yo
    $ npm install -g generator-showcase
```

Go to the directory, where you will create your build, for example:
```
    $ cd /var/www/html/myDirectoryName/
```

Use Yeoman-generator to create your build automatically:
```
    $ yo showcase:core
    $ yo showcase:plugin-showcase-theme
    $ yo helm-phr:plugin-top-three-things 
    $ yo helm-phr:plugin-vaccinations 
    $ yo helm-phr:plugin-feeds 
    $ yo helm-phr:plugins-all-silver
    $ yo helm-phr:plugins-all-bronze
    $ yo helm-phr:plugins-all-carbon
    $ yo helm-phr:plugin-proms 
    $ yo helm-phr:update --force
    $ yo helm-phr:update-theme-showcase
```

Attribute **--force** is used for overwriting config files by default.

When you build will be created, go to project directory and create the build:
```
    $ cd PulseTile-React-Core
    $ npm run build
```

Your build will be located in two places:
- as zip-archive in **projectDirectory/build/**
- as set of files in **projectDirectory/dist/**