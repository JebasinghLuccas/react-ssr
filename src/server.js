import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/app';
import Html from  './client/html';

const port ='3000';
const server = express();
server.get('/',(req,res) =>{

    const body = renderToString(App());
    const title = 'Server side rendering with styled components';
    res.send(
        Html({
            body,
            title,
        }
        )
    );
});

server.listen(port);
console.log(`serving at http://localhost:${port}`);