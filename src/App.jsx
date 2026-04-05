import { useState } from 'react'
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import roads from './data/roads.json'

function App() {
  const [selectedRoad, setSelectedRoad] = useState(null)

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Sidebar
        roads={roads}
        selectedRoad={selectedRoad}
        onRoadSelect={setSelectedRoad}
      />
      <div style={{ flex: 1, height: '100vh' }}>
        <Map selectedRoad={selectedRoad} onRoadSelect={setSelectedRoad} />
      </div>
    </div>
  )
}

export default App
