/**
 * @returns
 */
export const renderLegend = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <p style={{ fontSize: 15, color: '#20253A', fontWeight: 500 }}>Activité quotidienne</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 8, height: 8, borderRadius: '100px', backgroundColor: "#282D30", marginRight: 10 }}></div>
        <p style={{ margin: 0, color: '#74798C', fontSize: 14 }}>Poids (kg)</p>
        <div style={{ marginLeft: 30, width: 8, height: 8, borderRadius: '100px', backgroundColor: "#E60000", marginRight: 10 }}></div>
        <p style={{ margin: 0, color: '#74798C', fontSize: 14 }}>Calories brûlées (kCal)</p>
      </div>
    </div>
  )
}

/**
 * @param {any} props 
 * @returns 
 */
export const renderTooltip = (props) => {
  if (props.active) {
    return (
      <div style={{ width: 40, backgroundColor: 'red', color: 'white', textAlign: 'center', padding: '3px 10px' }}>
        <p style={{ fontSize: 12, fontWeight: 500 }}>{props.payload[0].value}kg</p>
        <p style={{ fontSize: 12, fontWeight: 500 }}>{props.payload[1].value}Kcal</p>
      </div>
    )
  }
  return null;
}