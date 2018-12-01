# iste-432-databoys
## Final Project for ISTE 432: vBay
The technical stack that we are running requires node.js, express.js, and postgres using sequelize. To install this stack, first you must start with a node install. Follow the instructions at https://nodejs.org/en/download/ to get started, and once you have a working node installation we can begin installing packages.
Start by installing express, body-parser, and morgan using 
'npm install express body-parser morgan'
After this has finished the majority of the node dependencies will be satisfied.
Install nodemon as well, so that the server can restart after code changes, using 
'npm install -D nodemon'
You now need to install postgres for the database. Go to https://www.postgresql.org/download/ and follow the instructions for your current OS. 
Once this has finished, you can install sequelize.
'npm install -g sequelize-cli' will install it globally for you.
And then run 'npm install --save sequelize pg pg-hstore'. This will complete your package.json dependencies.
Create a folder where the git directory will live, and clone down the repo into this directory from https://github.com/clprice/iste-432-databoys.
From here you need to create the vbay database in pg, this should be relatively easy to find information on. IMPORTANT: You need a user with a password to this database, or else the sequelize config will not allow you to access it. Create the user and password, then modify 'iste-432-databoys/vbay/server/config/config.json' to match your new username, password, database, and port 5432 (default). 
Once that has finished, all you need to do is navigate to the root vbay directory in 'iste-432-databoys/vbay' using a node.js command prompt, and run the command 'sequelize db:migrate' This will create the tables in the new database. 
After this is done, you are ready to go with your local install of the app!
To run the application, open a node cmd and go to 'iste-432-databoys/vbay' and type 'npm run start:dev'. This will start the application.
