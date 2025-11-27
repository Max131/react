import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";
import { mockGifs } from "./mock-data/gifs.mock";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["gravity falls"]);

  const handleTermClicked = (term: string) => {
    console.log(`Term clicked: ${term}`);
  };

  const handleSearch = async (query: string = "") => {
    const trimedQuery = query.toLowerCase().trim();

    if (trimedQuery.length === 0) return;
    if (previousTerms.includes(trimedQuery)) return;

    setPreviousTerms((prevTerms) => [trimedQuery, ...prevTerms.slice(0, 7)]);

    const gifs = await getGifsByQuery(trimedQuery);
    console.log(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClicked}
      />

      {/* Gifs */}
      <GifsList gifs={mockGifs} />
    </>
  );
};
