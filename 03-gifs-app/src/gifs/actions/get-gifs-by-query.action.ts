import axios from "axios";
import type { GiphyResponse } from "../interfaces/giphy.response";

export const getGifsByQueryAction = async (query: string) => {
  const response = await axios.get<GiphyResponse>(
    "https://api.giphy.com/v1/gifs/search",
    {
      params: {
        api_key: "6ZV7mssqKALuc7PBBaHokHRmq878rviL",
        q: query,
        limit: 10,
        lang: "es",
      },
    },
  );

  console.log(response.data);
};
