import { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getPosts, reset } from '../features/posts/postSlice'; 
import LineChart from '../components/LineChart';
import { CO2Global } from "../features/data/CO2GlobData";
import { MethaneGlobal } from "../features/data/MethaneGlobData";
import '../index.css'
import Announcements from '../components/Announcements';
function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [co2Global, setco2Global] = useState({
    labels: CO2Global.map((data) => data.year),
    datasets: [
      {
        label: "Monthly Average (ppm)",
        data: CO2Global.map((data) => data.monthlyAverage),
        borderColor: "white",
        borderWidth: 0.2,
      },
    ],
  });
  const option1 = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Years", // Label for X axis
        },
      },
      y: {
        title: {
          display: true,
          text: "CO2 Level (ppm)", // Label for Y axis
        },
      },
    },
  };
  const [methGlobal, setmethGlobal] = useState({
    labels: MethaneGlobal.map((data) => data.year),
    datasets: [
      {
        label: "Mean(ppb)",
        customLabel: true, // Add a custom flag
        data: MethaneGlobal.map((data) => data.mean),
        borderColor: "white",
        borderWidth: 0.5,
      },
    ],
  });

  
  const option2 = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Years", // Label for X axis
        },
      },
      y: {
        title: {
          display: true,
          text: "Methane Level (ppb)", // Label for Y axis
        },
      },
    },
  };
  const { user } = useSelector((state) => state.auth)
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  const [showCO2Chart, setShowCO2Chart] = useState(true);
  const showCO2 = () => {
    setShowCO2Chart(true);
  };

  const showMethane = () => {
    setShowCO2Chart(false);
  };

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getPosts())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  

  return (
    <>  
      <div className="card-01">
        <div className="weather">
          <div className="title">
            <div className="title1">
              <div className="india">India</div>
              <div className="mumbai">Mumbai</div>
              <div className="mumbai">Hyderabad</div>
            </div>
            <img className="add-circle-line-icon" alt="" src="./images/add-circle-line.svg" />
          </div>
          <img className="line-icon" alt="" src="./public/line.svg" />

          <div className="list">
            <div className="today-weather">
              <div className="todaymon">Today(Sun)</div>
              <div className="mar-6">Oct 6</div>
              <img className="sunny-color-icon" alt="" src="../images/sun.png" />

              <div className="sunny">Sunny</div>
              <div className="div">15-20℃</div>
              <div className="aqi-67">AQI 67</div>
            </div>
            <div className="today-weather">
              <div className="todaymon">Mon</div>
              <div className="mar-6">Oct 7</div>
              <img className="sunny-color-icon" alt="" src="../images/cloud.png" />

              <div className="sunny">Cloudy</div>
              <div className="div">16-22℃</div>
              <div className="aqi-67">AQI 71</div>
            </div>
            <div className="today-weather">
              <div className="todaymon">Tue</div>
              <div className="mar-6">Oct 8</div>
              <img className="sunny-color-icon" alt="" src="../images/lightning.png" />

              <div className="sunny">Lightning</div>
              <div className="div">17-20℃</div>
              <div className="aqi-67">AQI 65</div>
            </div>
            <div className="today-weather">
              <div className="todaymon">Wed</div>
              <div className="mar-6">Oct 9</div>
              <img className="sunny-color-icon" alt="" src="../images/heavy.png" />

              <div className="sunny">Heavy rain</div>
              <div className="div">16-21℃</div>
              <div className="aqi-67">AQI 70</div>
            </div>
          </div>
          <img className="left-small-fill-icon" alt="" src="./images/left-small-fill.svg" />

          <img className="right-small-fill-icon" alt="" src="../images/rightarrow.png" />
        </div>
        <img className="sunny-color-icon4" alt="" src="../images/sun.png" />

        <div className="sun-cloudy-color">
          <img className="image-icon" alt="" src="../images/cloud.png" />
        </div>
        <div className="lightning-color">
          <div className="base"></div>
          <img className="image-icon1" alt="" src="../images/lightning.png" />
        </div>
        <div className="heavy-rain-color">
          <img className="image-icon" alt="" src="../images/heavy.png" />
        </div>
      </div>
      <div className="rectangle-parent">
      <div className="group-child"></div>
      <div className="quote-of-the-container">
        <p className="quote-of-the">Quote of the Day!</p>
        <p className="earth-provides-enough">
          Earth provides enough to satisfy every man's need, but not every
          man's greed.
        </p>
      </div>
    </div>
    <div className="rectangle-group">
      <div className="group-child"></div>
      <div className="i-dont-feel-container">
        <p className="i-dont-feel-good-about-the-wo">
          <span className="i-dont-feel">I don't feel good about the world </span>
          <span>&nbsp;</span>
        </p>
        <p className="i-dont-feel-good-about-the-wo">
          <span>
            <span className="click-here-to"><Link to='/help'>Click here to get help</Link></span>
          </span>
        </p>
      </div>
    </div>
    <img className="planet-13-icon" alt="" src="../images/Rotating_earth.gif" />
    <div className="climate-change-card-ui-wrapper">
      <div className="climate-change-card-ui">
        <div className="climate-change-card-ui-child">
          <div className="what-you-can"><Link to='/profile' className='what-can-you-do'>What can you do?</Link></div>
        </div>
        <div></div>
        <div className="simple-text">
          <div className="there-is-no-container">
            <span>
              <p className='welcome-user'>Welcome {user && user.name}!</p>
              <span className="there-is-no">There is no </span>
              <i className="plan">
                <span className="p">Plan</span>  
              </i>
            </span>
            <i className="plan">
              <span className="lan">
                <span>et </span>
              </span>
              <span className="ba"> B</span>
            </i>
          </div>
        </div>
        <img className="earth-thermometer-1" alt="" src="../images/thermometer.png" />

        <i className="climate-change-is">Climate Change is real</i>
        <div className="call-to-action">
          <div className="call-to-action-child"></div>
          {/* <div className="what-you-can"><a href="#">What you Can Do ?</a></div> */}
        </div>
      </div>
    </div>
      <br /><br /><br /><br /><br /><br /><br />

      {/* <LineChart chartData={co2Global} options={option1}/>
      <LineChart chartData={methGlobal} options={option2}/> */}
      {/* <LineChart chartData={methGlobal} options={option2} /> */}

      <div className="chart-card">
      <div className="options">
        <button onClick={showCO2} className={`btn-chart ${showCO2Chart && 'active'}`}>
          CO2
        </button>
        <button onClick={showMethane} className={`btn-chart ${!showCO2Chart && 'active'}`}>
          Methane
        </button>
      </div>
      <div className="chart-container">
        {showCO2Chart ? (
          <LineChart chartData={co2Global} options={option1} />
        ) : (
          <LineChart chartData={methGlobal} options={option2} />
        )}
      </div>
      <Announcements />
    </div>
    </>
  )
}

export default Dashboard
