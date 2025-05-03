import http, { request } from 'http';
import { app } from '../app/app';


// Arquivo do servidor deve somente rodar o servidor e não deve ter lógica de negocio
const server = http.createServer(app)

const port = process.env.PORT

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${port}`);
})
