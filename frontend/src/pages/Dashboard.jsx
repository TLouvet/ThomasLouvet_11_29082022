import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';
import { VerticalBar } from '../components/VerticalBar';
import { useGetData } from '../hooks/useGetData';
import { UserPerformanceChart } from '../components/UserPerformanceChart/UserPerformanceChart';
import { DailyActivityChart } from '../components/DailyActivityChart';
import { UserGoalsPieChart } from '../components/UserGoalsPieChart';
import { UserSessionsMeanChart } from '../components/UserSessionsMeanChart';
import { DailyNeedCard } from '../components/DailyNeedCard/DailyNeedCard';
import calories from '../assets/calories.png';
import carbs from '../assets/carbs.png';
import proteins from '../assets/proteins.png';
import fat from '../assets/cheeseburger.png';
import './style.css';

export const Dashboard = () => {
  const { id } = useParams();
  const { data: user, isLoading } = useGetData(id);
  const goodScore = user?.score || user?.todayScore;   // Data has different format between different users 

  if (!id || isLoading) {
    return <div></div>;
  }

  return (
    <>
      <Header id={id} />
      <main style={{ display: 'flex' }}>
        <VerticalBar />
        <div id="eheheh" style={{ paddingLeft: '7.5%' }}>
          <div style={{ marginBottom: "50px" }}>
            <h1 style={{ fontSize: '48px', marginBottom: '40px' }}>Bonjour {<span style={{ color: '#E60000' }}>{user?.userInfos?.firstName}</span>}</h1>
            <p style={{ fontSize: '18px', marginTop: 0 }}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <section id='graphs' style={{ marginRight: 30 }}>
              <DailyActivityChart id={id} />
              <div className='caca' style={{ display: 'grid', columnGap: 30, gridTemplateColumns: 'repeat(3, 260px)', marginTop: 30 }}>
                <UserSessionsMeanChart id={id} />
                <UserPerformanceChart id={id} />
                <UserGoalsPieChart score={goodScore} />
              </div>
            </section>

            <section id='keyneeds'>
              <DailyNeedCard image={calories} background="rgba(255, 0, 0, 0.07)" value={user?.keyData?.calorieCount} name="Calories" />
              <DailyNeedCard image={proteins} background="rgba(74, 184, 255, 0.1)" value={user?.keyData?.carbohydrateCount} name="Protéines" />
              <DailyNeedCard image={carbs} background="rgba(249, 206, 35, 0.1)" value={user?.keyData?.lipidCount} name="Glucides" />
              <DailyNeedCard image={fat} background="rgba(253, 81, 129, 0.1)" value={user?.keyData?.proteinCount} name="Lipides" />
            </section>
          </div>
        </div>
      </main>
    </>
  )
}