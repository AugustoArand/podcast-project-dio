import { Podcast } from "../services/list-episodes-services";

export interface FilterPodCastModel {
    statusCode: number;
    body: Podcast []
}