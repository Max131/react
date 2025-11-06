import { CustomHeader } from "./shared/components/CustomHeader";
import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <search className="search-container">
        <input type="text" placeholder="Buscar gifs" />
        <button>Buscar</button>
      </search>

      {/* Búsquedas previas */}
      <section className="previous-searches">
        <h2>Búsquedas Previas</h2>
        <ul className="previous-searches-list">
          <li>Pokemon</li>
          <li>Mazinger Z</li>
          <li>Voltron</li>
          <li>Robotech</li>
        </ul>
      </section>

      {/* Gifs */}
      <section className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height} (1.5mb)
            </p>
          </div>
        ))}
      </section>
    </>
  );
};
