import styles from './RoadList.module.css'

function avgScore(scores) {
  const vals = Object.values(scores)
  return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1)
}

export default function RoadList({ roads, selectedRoad, onRoadSelect }) {
  return (
    <div className={styles.list}>
      <p className={styles.sectionTitle}>Roads</p>
      {roads.map(road => (
        <button
          key={road.id}
          className={`${styles.item} ${selectedRoad?.id === road.id ? styles.itemActive : ''}`}
          onClick={() => onRoadSelect(selectedRoad?.id === road.id ? null : road)}
        >
          <span className={styles.dot} style={{ background: road.color }} />
          <span className={styles.name}>{road.name}</span>
          <span className={styles.score}>{avgScore(road.scores)}</span>
        </button>
      ))}
    </div>
  )
}
