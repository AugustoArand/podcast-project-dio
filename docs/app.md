# Nome do Aplicativo
Podcast Manager

#  Dominio
Podcasts feitos em video

# Descrição
Um app ao estilo netflix onde eu possa centralizar diferente episódios, podcasts por categoria

# Como
### Features
- Listar os podcasts em seçõees de categorias
    - Vou retornar em uma api rest (json) o nome do podcast, o nome do episodio, a imagem de capa e o link.
    ```js
    {
        podcastName:"flow"
        episode: "OpenAI VS DeepSeek [com ALVARO MACHADO E RONALDO LEMOS]"
        videoId:"6tnSUdsxI1M"
        cover: "https://i.ytimg.com/vi/6tnSUdsxI1M/maxresdefault.jpg"
        link: "https://www.youtube.com/watch?v=6tnSUdsxI1M&pp=0gcJCYQJAYcqIYzv"
        category: ["tech", "IA"]
    },

    {
        podcastName:"flow"
        episode: "BARBIXAS - Flow #432"
        videoId: "mMXM-yn1OFs"
        cover: "https://i.ytimg.com/vi/mMXM-yn1OFs/maxresdefault.jpg"
        link: "https://www.youtube.com/watch?v=mMXM-yn1OFs"
        category: ["humor"]
    }

    ```




    - [saúde, fitness, mentalidade, humor, tech, IA]
- Filtrar episódios por nome de podcast


