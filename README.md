# CRUD-APIS
Project backend using Node.js + Mysql DB with sequelize ORM
Start Node.js server commands
step 1: npm init 
step 2: npm install
step 3: npm install -g sequelize-cli 
step 4: sequelize db:migrate
step 5: node app.js or nodemon app.js

General Table structure
Maintaining created_by ,updated_by fields in all tables ,so that one can understand from whom the data is created and updated
While deleting data we are doing soft delete (actual data will be there in DB but that data is disbaled)
Maintaining deleted_at field so that we can say whether it is temporarily deleted or permanently deleted 

For sequelize ORM I am referring to following link
https://sequelize.org/master/index.html

To host swagger Ui I referred to following link
https://www.datasciencelearner.com/how-to-install-swagger-editor-and-ui-locally/
 
