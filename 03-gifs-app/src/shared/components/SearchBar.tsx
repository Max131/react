import { useState } from "react";

interface Props {
  placeholder?: string;
  onQuery?: (query: string) => void;
}
export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onQuery?.(query);
    // setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <search className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onInput={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => {
          handleKeyDown(event);
        }}
      />
      <button onClick={handleSearch}>Buscar</button>
    </search>
  );
};
