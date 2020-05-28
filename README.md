## Setup

1st time:
create github repo
clone
create 'serverless create --template aws-nodejs' // ref https://serverless.com/framework/docs/providers/aws/cli-reference/create/

work on existing
1. clone
2. go to folder
3. npm install




Testing
# Local
sls invoke local --function hello // we can use serverless/sls


Test Cognito using CLI
aws cognito-idp sign-up \
  --region us-east-1 \
  --client-id <clientid> \
  --username mani@example.com \
  --password Passw0rd!

  aws cognito-idp admin-confirm-sign-up \
  --region us-east-1 \
  --user-pool-id  us-east-1_Us1T5AZvU \
  --username mani@example.com



## DB Operations
 
1. Create a Model with migration file
npx sequelize-cli model:generate --name Puja --attributes name:string


Ubuntu DB Setup
install BD
sudo apt update 
apt-get install mysql
apt-get install mysql-server
//enable db to public
cd /etc/mysql
vim mysql.conf.d/
mysql -uroot -pManikumar070

GRANT ALL PRIVILEGES ON *.* TO 'mani'@'%' IDENTIFIED BY 'Manikumar070' WITH GRANT OPTION;
FLUSH PRIVILEGES;

GRANT ALL PRIVILEGES ON *.* TO 'manju'@'%' IDENTIFIED BY 'Manikumar070' WITH GRANT OPTION;
FLUSH PRIVILEGES;
exit
service mysql restart


FYI:

AWS_REGION=us-east-1
AUTH0_CLIENT_ID=abc12345
AUTH0_CLIENT_SECRET=12345xyz

the above keys should not use in .env as these are predefined keys in lambda


npx sequelize [command]

Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file       [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration  [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file            [aliases: seed:create]


serverless invoke local --function payment --path mocks/billing-event.json

with particular profile

serverless deploy --aws-profile myProfile

serverless deploy function -f list



