import { useEffect } from 'react'
import { MapContainer, TileLayer, Polyline, Popup, useMap } from 'react-leaflet'
import roads from '../data/roads.json'

const NORTH_GEORGIA = [34.7, -83.9]

function FlyToRoad({ road }) {
  const map = useMap()
  useEffect(() => {
    if (road) {
      map.flyToBounds(road.coordinates, { padding: [60, 60], duration: 1.2 })
    }
  }, [road, map])
  return null
}

export default function Map({ selectedRoad, onRoadSelect }) {
  return (
    <MapContainer
      center={NORTH_GEORGIA}
      zoom={10}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      <FlyToRoad road={selectedRoad} />

      {roads.map(road => {
        const isSelected = selectedRoad?.id === road.id
        return (
          <Polyline
            key={road.id}
            positions={road.coordinates}
            pathOptions={{
              color: road.color,
              weight: isSelected ? 6 : 4,
              opacity: isSelected ? 1 : 0.75,
            }}
            eventHandlers={{
              click: () => onRoadSelect(isSelected ? null : road),
            }}
          >
            <Popup>{road.name}</Popup>
          </Polyline>
        )
      })}
    </MapContainer>
  )
}
