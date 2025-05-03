import { getFilterEpisodes, getListEpisodes } from '../controllers/podscasts-controller';
import { Routes } from '../routes/routes';
import { httpMethods } from '../utils/http-methods';
import http, { request } from 'http';

export const app = (async (req:http.IncomingMessage, res:http.ServerResponse) => {

    //Query String
    const [baseUrl, queryString] = req.url?.split('?') ?? ["", ""];
    
    //Listar Episodios
    if(req.method === httpMethods.GET && baseUrl === Routes.LIST) {
       await getListEpisodes(req, res);
    }

    // Filtrar Episodios
    if(req.method === httpMethods.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(req, res);
    }
})