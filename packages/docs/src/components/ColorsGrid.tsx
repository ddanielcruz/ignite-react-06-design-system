import { colors } from '@dc-ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([name, color]) => {
    return (
      <div key={name} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#FFFFFF') < 3.5 ? 'black' : 'white',
          }}
        >
          <strong>${name}</strong>
          <code>{color}</code>
        </div>
      </div>
    )
  })
}
