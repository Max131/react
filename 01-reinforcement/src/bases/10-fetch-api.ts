import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "6ZV7mssqKALuc7PBBaHokHRmq878rviL";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

myRequest
  .then((res) => res.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageURL = data.images.original.url;

    createImageInsideDOM(imageURL);
  })
  .catch((err) => {
    console.error(err);
  });
