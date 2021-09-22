import '../styles/App.scss';

function App() {
  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">
          <li className="contact__item">
            <p className="contact__name">
              <label className="contact__label">Nombre:</label>Lola Martinez
            </p>
            <p className="contact__phone">
              <label className="contact__label">Teléfono:</label>
              <a href="tel:603256289" title="Pulsa aquí para llamar a Lola">
                603256289
              </a>
            </p>
            <p className="contact__mail">
              <label className="contact__label">Email:</label>
              <a href="mailto:lmartinez@adalab.es" title="Pulsa aquí para escribir a Lola">
                lmartinez@adalab.es
              </a>
            </p>
          </li>
          <li className="contact__item">
            <p className="contact__name">
              <label className="contact__label">Nombre:</label>Martha Houston
            </p>
            <p className="contact__phone">
              <label className="contact__label">Teléfono:</label>
              <a href="tel:612435678" title="Pulsa aquí para llamar a Martha">
                612435678
              </a>
            </p>
            <p className="contact__mail">
              <label className="contact__label">Email:</label>
              <a href="mailto:mhouston@adalab.es" title="Pulsa aquí para escribir a Martha">
                mhouston@adalab.es
              </a>
            </p>
          </li>
          <li className="contact__item">
            <p className="contact__name">
              <label className="contact__label">Nombre:</label>Lillie Moore
            </p>
            <p className="contact__phone">
              <label className="contact__label">Teléfono:</label>
              <a href="tel:632456789" title="Pulsa aquí para llamar a Lillie">
                632456789
              </a>
            </p>
            <p className="contact__mail">
              <label className="contact__label">Email:</label>
              <a href="mailto:lillie@adalab.es" title="Pulsa aquí para escribir a Lillie">
                lillie@adalab.es
              </a>
            </p>
          </li>
          <li className="contact__item">
            <p className="contact__name">
              <label className="contact__label">Nombre:</label>Jane Norton
            </p>
            <p className="contact__phone">
              <label className="contact__label">Teléfono:</label>
              <a href="tel:603256679" title="Pulsa aquí para llamar a Jane">
                603256679
              </a>
            </p>
            <p className="contact__mail">
              <label className="contact__label">Email:</label>
              <a href="mailto:janenorton@adalab.es" title="Pulsa aquí para escribir a Jane">
                janenorton@adalab.es
              </a>
            </p>
          </li>
        </ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input className="new-contact__btn" type="submit" value="Añadir" />
        </form>
      </main>
    </div>
  );
}

export default App;
