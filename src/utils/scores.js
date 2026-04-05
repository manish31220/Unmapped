/**
 * Returns a scenic score (0–100) for a road entry.
 * Scoring factors: elevation gain, curviness, remoteness.
 */
export function getScenicScore(road) {
  const { elevationGain = 0, curviness = 0, remoteness = 0 } = road
  return Math.min(100, Math.round((elevationGain * 0.4 + curviness * 0.35 + remoteness * 0.25)))
}
