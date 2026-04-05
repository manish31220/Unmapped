import { MapContainer, TileLayer } from 'react-leaflet'

const NORTH_GEORGIA = [34.7, -83.9]

export default function Map() {
  return (
    <MapContainer
      center={NORTH_GEORGIA}
      zoom={10}
      style={{ width: '100%', height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
    </MapContainer>
  )
}
