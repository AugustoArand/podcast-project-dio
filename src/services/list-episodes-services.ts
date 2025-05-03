import { repositoryPodcast } from "../repositories/podcast-repository";

export interface Podcast {
    podcastId: string;
    podcastName: string;
    videoId: string;
    category: string[];
}



export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();

    return data;
 }

