import { useState } from 'react'
import RoadList from './RoadList'
import RoadDetail from './RoadDetail'
import styles from './Sidebar.module.css'

const TIME_CHIPS = ['1 hr', '2 hrs', 'Half day']

export default function Sidebar({ roads, selectedRoad, onRoadSelect }) {
  const [lostLevel, setLostLevel] = useState(5)
  const [selectedTime, setSelectedTime] = useState(null)

  function handleSurpriseMe() {
    const random = roads[Math.floor(Math.random() * roads.length)]
    onRoadSelect(random)
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <h1 className={styles.appName}>Unmapped</h1>
        <p className={styles.tagline}>Get lost on purpose.</p>
      </div>

      <div className={styles.actions}>
        <button className={styles.surpriseBtn} onClick={handleSurpriseMe}>
          Surprise Me
        </button>
      </div>

      <div className={styles.filters}>
        <p className={styles.filtersTitle}>Filters</p>

        <div className={styles.sliderGroup}>
          <label className={styles.sliderLabel}>
            How lost do you want to get?
            <span className={styles.sliderValue}>{lostLevel}</span>
          </label>
          <input
            type="range"
            min={1}
            max={10}
            value={lostLevel}
            onChange={e => setLostLevel(Number(e.target.value))}
            className={styles.slider}
          />
          <div className={styles.sliderTicks}>
            <span>1</span>
            <span>10</span>
          </div>
        </div>

        <div className={styles.chipGroup}>
          {TIME_CHIPS.map(chip => (
            <button
              key={chip}
              className={`${styles.chip} ${selectedTime === chip ? styles.chipActive : ''}`}
              onClick={() => setSelectedTime(selectedTime === chip ? null : chip)}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      <RoadList roads={roads} selectedRoad={selectedRoad} onRoadSelect={onRoadSelect} />

      {selectedRoad && <RoadDetail road={selectedRoad} />}

      <div className={styles.footer}>
        {roads.length} roads loaded
      </div>
    </aside>
  )
}
