# General infornation

This generator is used for automatic creation build for Showcase-version. 

It based on **Yeoman** technology. This tool gives possibility to create new project from modules, which are located in the separate GitHub repositories. More information about Yeoman you can found here: http://yeoman.io/

If you want to install HelmPHR-version automatically, you should read **"Installing"** below.

# Content

Current version of **Helm-PHR generator** includes following sub-generators:
1) **Core** sub-generator (_yo showcase:core_);
2) Theme **Showcase** sub-generator (_yo showcase:theme-showcase_);
3) Plugin **TopThreeThings** sub-generator (_yo showcase:plugin-top-three-things_);
4) Plugin **Vaccinations** sub-generator (_yo showcase:plugin-vaccinations_);
5) Plugin **Feeds** sub-generator (_yo showcase:plugin-feeds_);
6) All bronze plugins sub-generator (_yo showcase:plugins-all-bronze_);
7) All carbon plugins sub-generator (_yo showcase:plugins-all-carbon_);
8) All silver plugins sub-generator (_yo showcase:plugins-all-silver_);
10) Feature **UserTour** sub-generator (_yo helm-phr:feature-user-tour_);
11) Feature **TermsAndConsition** sub-generator (_yo helm-phr:feature-terms-and-conditions_);
12) Sub-generator for configuration files updating (_yo showcase:update_);


# Core

This sub-generator does the following automatically:
1) Clone PulseTile-Core version from GitHub;
2) Install all required Node-modules;
3) Create the directory for non-core plugins.
 
If any errors occur during generator work you should remove project directory and repeat generator command.


# Showcase-theme

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


# Feature UserTour

This sub-generator clones UserTour feature from GitHub to **components/features/** directory in the project. If any errors occur during generator work you should remove feature directory and repeat generator command.


# Feature TermsAndConditions

This sub-generator clones TermsAndConditions feature from GitHub to **components/features/** directory in the project. If any errors occur during generator work you should remove feature directory and repeat generator command.



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
    $ yo showcase:theme-showcase
    $ yo showcase:plugin-top-three-things 
    $ yo showcase:plugin-vaccinations 
    $ yo showcase:plugin-feeds 
    $ yo showcase:plugins-all-silver
    $ yo showcase:plugins-all-bronze
    $ yo showcase:plugins-all-carbon
    $ yo helm-phr:feature-user-tour
    $ yo helm-phr:feature-terms-and-conditions
    $ yo showcase:update --theme=showcase --force
```

Attribute **--force** is used for overwriting config files by default.

Attribute **--theme=showcase** is used to choose Showcase-theme.

When you build will be created, go to project directory and create the build:
```
    $ cd PulseTile-React-Core
    $ npm run build
```

Your build will be located in two places:
- as zip-archive in **projectDirectory/build/**
- as set of files in **projectDirectory/dist/**