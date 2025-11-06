interface Props {
  placeholder?: string;
}
export const SearchBar = ({ placeholder = "" }: Props) => {
  return (
    <search className="search-container">
      <input type="text" placeholder={placeholder} />
      <button>Buscar</button>
    </search>
  );
};
