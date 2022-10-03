import {config} from "dotenv"; // importo el archivo .env

config();

export default {
    host: process.env.HOST || "",
    database:  process.env.DATABASE || "",
    user:  process.env.USER || "" ,
    password:  process.env.PASSWORD  || "",
};

//  a aca estoy exportando mis credenciales del archivo .env para que no las pueda ver nadue se usa el .proves.env.VARIABLE   .
//  y por si no llega a encontrar la variable que le estoy pasando en ese momento le digo que no ponga nada con || "" .