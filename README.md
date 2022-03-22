# Task Manager - A nodejs and mongodb based project

[Task Manager](https://nodejs-task-manager-dpauld.herokuapp.com/)
Further information about Task Manager project is available in the [doc] section.

## Clone this project

1. Clone the project in your local repository from Github
2. Install all the node modules using `npm install` command or install the required package individually.
3. Comment out the `require("dotenv").config()` line of `app.js` to run it locally. On the other hand, If you plan to deploy, comment this line of code to avoid port conflict.
<!--
4. [Optional] If `node_modules` is added in `.gitignore` file, then dont have it in `.gitigone` file. This way the node_modules will get deployed in the server. You may face error if you dont deploy the `node_modules` folder in the server.
   -->

## To Deploy This project in Heroku, follow this steps,

1. Download and install the `Heroku CLI`.
2. Open your terminal and write the following command lines, It will open the browser and take you to heroku website for Log in. Now, Log in to your Heroku account and it will automatically give your local machine the login access and perform any modification. Eralier, you need to Follow the prompts to create a new SSH public key.

```
$ heroku login
```

3. Deploy your changes. Make some changes to the code and deploy them to Heroku using Git.

```
$ git add .
$ git commit -am "make it better"
$ git push heroku main
```

## Error and Challenges I found, How I dealt with them?

1. `Heroku Error: Cannot find module './common'` : I solved this by not having node_modules in my .gitignore folder which was there originally. This way the node_modules got deployed as well.
