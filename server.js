const cmd = require('node-cmd');
const fs = require('fs'); 
const path = require('path');

/**
 * Project Generator
 * @description generate node project for rest-api with jwt
 * 
 */


fs.mkdir(path.join(__dirname, '../myappbuild'), (err) => { 
    if (err) { 
        return console.error(err); 
    }else{
        console.log('Directory created successfully!');
        cmd.get(
            `chmod -R 777 ${__dirname}/../myappbuild
            chown -R rangga:rangga ${__dirname}/../myappbuild
            cd ${__dirname}/../myappbuild
            npm init -y 
            npm install eslint --save
            npm install body-parser --save
            npm install cors --save
            npm install dotenv --save
            npm install express --save
            npm install express-brute --save
            npm install express-session --save
            npm install express-swagger-generator --save
            npm install moment --save
            npm install mysql2 --save
            npm install nodemailer --save
            npm install nodemailer-smtp-transport  --save
            npm install passport  --save
            npm install passport-jwt  --save
            npm install request  --save
            npm install request-promise  --save
            npm install multer --save
            npm install bcrypt --save
            npm install sequelize --save
            npm install sequelize-cli --save
            npm install swagger-jsdoc --save
            npm install swagger-ui-express --save
            npm install winston --save
            npm install node-sp-auth --save
            npm install http-errors --save
            npm install http-status-codes --save
            npm install jsonwebtoken --save
            npm install lodash --save
            npm install module-alias --save
            npm install morgan --save
            npm install async --save
            `,
            function(er, data, stderr){
                console.log(er)
                console.log(data)
                console.log(stderr)    
                cmd.run(`touch ${__dirname}/../myappbuild/server.js`);
            }
        );
    }
});

