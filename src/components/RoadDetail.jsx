import styles from './RoadDetail.module.css'

const SCORE_LABELS = [
  { key: 'scenery',    label: 'Scenery' },
  { key: 'twistiness', label: 'Twistiness' },
  { key: 'emptiness',  label: 'Emptiness' },
]

function getBadge(scores) {
  const { scenery, twistiness, emptiness } = scores
  if (twistiness >= scenery && twistiness >= emptiness) return 'Twisty'
  if (scenery >= emptiness) return 'Scenic'
  return 'Hidden Gem'
}

export default function RoadDetail({ road }) {
  const badge = getBadge(road.scores)
  const midpoint = road.coordinates[Math.floor(road.coordinates.length / 2)]
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${midpoint[0]},${midpoint[1]}`

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.name}>{road.name}</span>
        <span
          className={styles.badge}
          style={{ color: road.color, borderColor: road.color }}
        >
          {badge}
        </span>
      </div>

      <div className={styles.scores}>
        {SCORE_LABELS.map(({ key, label }) => (
          <div key={key} className={styles.scoreRow}>
            <span className={styles.scoreLabel}>{label}</span>
            <div className={styles.barTrack}>
              <div
                className={styles.barFill}
                style={{ width: `${road.scores[key] * 10}%`, background: road.color }}
              />
            </div>
            <span className={styles.scoreNum}>{road.scores[key]}</span>
          </div>
        ))}
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Distance</span>
          <span className={styles.statValue}>{road.distance}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Drive time</span>
          <span className={styles.statValue}>{road.driveTime}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Elev. gain</span>
          <span className={styles.statValue}>{road.elevationGain}</span>
        </div>
      </div>

      <p className={styles.description}>{road.description}</p>

      <a
        href={directionsUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.directionsBtn}
      >
        Get Directions
      </a>
    </div>
  )
}
