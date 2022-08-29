import yoga from '../../assets/yoga.png';
import swim from '../../assets/swim.png';
import cycle from '../../assets/bycicle.png';
import halt from '../../assets/halt.png';

const styles = {
  aside: { backgroundColor: '#020203', padding: '0px 25px', position: "relative", left: 0, top: 0, width: "65px", paddingBottom: "25px" },
  imgcontainer: { width: 64, height: 64, backgroundColor: 'white', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, cursor: 'pointer' }
}

export const VerticalBar = () => {

  const imgs = [yoga, swim, cycle, halt];

  return (
    <aside style={styles.aside}>
      <div style={{ marginTop: '20vh', marginBottom: '150px' }}>
        {imgs.map((img, i) => (
          <div key={`nav-icon-${i}`} style={styles.imgcontainer}>
            <img src={img} alt='' />
          </div>
        ))}
      </div>

      <div style={{ transform: 'rotate(180deg)', display: 'flex', justifyContent: 'center' }}>
        <p style={{ writingMode: 'vertical-lr', color: 'white', fontSize: 12 }}>Copiryght, SportSee 2020</p>
      </div>
    </aside >
  )
}