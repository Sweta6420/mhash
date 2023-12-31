import React from 'react';
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import "../index.css";
function Leaderboard(){
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    
  
    useEffect(() => {
      
  
      if (!user) {
        navigate('/login')
      }
  
      
    }, [user, navigate])

    return(
       <>
        <div class="macbook-air-8">

      <div className="rectangle-parentt">
        <h1 className='leaderboard-heading'>LeaderBoard</h1>
        <div className="frame-childd">
        <div className='buttongroup'>
        <button
        className={`button ${activeButton === 'button1' ? 'active' : ''}`}
        onClick={() => handleButtonClick('button1')}
      >
        Region
      </button>
      <button
        className={`button ${activeButton === 'button2' ? 'active' : ''}`}
        onClick={() => handleButtonClick('button2')}
      >
        Global
      </button>
      <button
        className={`button ${activeButton === 'button3' ? 'active' : ''}`}
        onClick={() => handleButtonClick('button3')}
      >
        National
      </button>
      </div>
        </div>
        {/* <img className="frame-item" alt="" src="./public/rectangle-5.svg" /> */}

        <img className="frame-inner" alt="" src="./images/line.png" />

        <img className="rectangle-icon" alt="" src="./images/line.png" />
        {/* <button className="region">Region</button>

        <button className="global1">Global</button>
        <button className="national">National</button> */}

        <div className="rectangle-divv"></div>
        {/* <b className="b">1034</b> */}
        <div className="frame-childd1"></div>
        <div className="ruben">urza</div>
        {/* <b className="b1">1034</b> */}
        <div className="jacob">urza</div>
        <img className="rectangle-icon1" alt="" src="./images/Rectangle.png" />

        <div className="matthew">urza</div>
        {/* <b className="b2">1034</b> */}
        <img className="ellipse-icon" alt="" src="./images/Ellipse9.png" />

        <div className="username">urza@g.com</div>
        <div className="username1">urza@g.com</div>
        <div className="username2">urza@g.com
        </div>
        <img className="frame-childd2" alt="" src="./images/Ellipse10.png" />
      </div>
      {/* <img className="vector-icon" alt="" src="./public/vector.svg" /> */}

      <div className="macbook-air-8-child"></div>
      <div className='hi'>
      <img className="macbook-air-8-item" alt="" src="./images/Ellipse4.png" />

      <img className="macbook-air-8-inner" alt="" src="./images/Ellipse5.png" />

      <img
        className="macbook-air-8-child1"
        alt=""
        src="./images/Ellipse8.png"
      />

      <img
        className="macbook-air-8-child2"
        alt=""
        src="./images/Ellipse7.png"
      />

      <img
        className="macbook-air-8-child3"
        alt=""
        src="./images/Ellipse8.png"
      />
      <div className="clifford">urza</div>
      <div className="tara">urza</div>
      <div className="pascal">urza</div>
      <div className="quincy">urza</div>
      <div className="oilver">urza</div>
      {/* <b className="b3">1134</b>
      <b className="b4">845</b>
      <b className="b5">760</b>
      <b className="b6">734</b>
      <b className="b7">544</b> */}
      <div className="username3">urza@g.com</div>
      <div className="username4">urza@g.com</div>
      <div className="username5">urza@g.com</div>
      <div className="username6">urza@g.com</div>
      <div className="username7">urza@g.com</div>
      {/* <img className="polygon-icon" alt="" src="./images/Polygon1.png" />

      <img className="macbook-air-8-child4" alt="" src="./images/Polygon2.png" />

      <img className="macbook-air-8-child5" alt="" src="./images/Polygon1.png" />

      <img className="macbook-air-8-child6" alt="" src="./images/Polygon1.png" />

      <img className="macbook-air-8-child7" alt="" src="./images/Polygon2.png" /> */}

      <div className="line-div"></div>
      <div className="macbook-air-8-child8"></div>
      <div className="macbook-air-8-child9"></div>
      <div className="macbook-air-8-child10"></div>
    </div>
    </div>


</>
    )
}
export default Leaderboard