export const DailyNeedCard = ({ image, background, value, name }) => {
  return (
    <div className="prout" style={{ padding: 32, paddingRight: 50, backgroundColor: "#FBFBFB", display: 'flex', alignItems: 'center', borderRadius: 5, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)" }}>
      <div style={{ width: 60, height: 60, borderRadius: 6, backgroundColor: background, marginRight: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={image} alt="" />
      </div>
      <div>
        <p style={{ fontSize: 20, fontWeight: 700, color: "#282D30", margin: 0 }}>{value}</p>
        <p style={{ color: "#74798C", fontSize: 14, margin: 0 }}>{name}</p>
      </div>
    </div>
  )
}