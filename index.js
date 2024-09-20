import express from 'express';
import path from 'path';

let server = express();
let pathToPublicFolder = path.resolve('Public');

server.use(express.ststic(pathToPublicFolder));

server.get('/',cxontroller.getLoginPage);
