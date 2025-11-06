export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <header className="content-center">
        <h1>Buscador de Gifs</h1>
        <p>Descubre y comparte el gif perfecto</p>
      </header>

      {/* Search */}
      <search className="search-container">
        <input type="text" placeholder="Buscar gifs" />
        <button>Buscar</button>
      </search>

      {/* Búsquedas previas */}
      <section className="previous-searches">
        <h2>Búsquedas Previas</h2>
        <div className="search-tags">
          <ul>
            <li>Pokemon</li>
            <li>Mazinger Z</li>
            <li>Voltron</li>
            <li>Robotech</li>
          </ul>
        </div>
      </section>

      {/* Gifs */}
      <section className="gifs-container">
        <h2>Gifs</h2>
        <div className="gifs-grid">{/* Aquí se mostrarán los gifs */}</div>
      </section>
    </>
  );
};
