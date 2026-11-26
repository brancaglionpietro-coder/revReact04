
import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import s from './App.module.css'
import { Menu } from './components/menu'
import beligol from '/beligol.jpg'

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function App() {

  const position = [-25.4249118, -49.2749299]

  const [mapType, setMapType] = useState("normal")

  return (
    <>
      <Menu />

      <div className={s.wrapHome}>

        <div className={s.section1}>
          <div className={s.wrapImage}>
            <img className={s.imgSection1} src={beligol} alt="beligol" />
          </div>

          <div className={s.wrapTexts}>
            <h1 className={s.tituloSection1}>Título da Página</h1>
            <p className={s.textSection1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nam eligendi vero, repellat modi possimus quam voluptas.
            </p>
            <button className={s.btnSection1}>CLIQUE</button>
          </div>
        </div>

        <div className={s.section2}>
          <iframe
            className={s.vid}
            src="https://www.youtube.com/embed/WYdCRVKC6VM"
            title="YouTube video player"
            allowFullScreen
          />
        </div>

        {/* MAPA */}
        <div className={s.mapa}>

          {/* BOTÕES */}
          <div className={s.mapButtons}>
            <button
              className={mapType === "normal" ? s.active : ""}
              onClick={() => setMapType("normal")}
            >
              Normal
            </button>

            <button
              className={mapType === "satelite" ? s.active : ""}
              onClick={() => setMapType("satelite")}
            >
              Satélite
            </button>
          </div>

          <MapContainer
            attributionControl={false}
            className={s.mapCont}
            center={position}
            zoom={17}
            scrollWheelZoom={false}
          >

            {/* MAPA NORMAL */}
            {mapType === "normal" && (
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            )}

            {/* MAPA SATÉLITE */}
            {mapType === "satelite" && (
              <TileLayer
                attribution='Tiles &copy; Esri'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            )}

            <Marker position={position}>
              <Popup>
                Localização do marcador.
              </Popup>
            </Marker>

          </MapContainer>

        </div>

      </div>
    </>
  )
}

export default App
