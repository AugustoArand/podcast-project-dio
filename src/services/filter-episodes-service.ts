import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { FilterPodCastModel } from "../models/filter-podcast-models";
import { statusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodCastModel> => {

        //Definicação da interface de resposta
    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: [],
    };

    const queryString = podcastName?.split('?p=')[1] || "";

    const data = await repositoryPodcast(queryString);

    if(data.length !== 0) {
        responseFormat.statusCode = statusCode.OK;
        responseFormat.body = data;
    } else {
        responseFormat.statusCode = statusCode.NO_CONTENT;
    }

    responseFormat.body = data;

    return responseFormat;
}