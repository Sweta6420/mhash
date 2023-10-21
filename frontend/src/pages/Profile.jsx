import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
// import GoalForm from '../components/GoalForm'
// import GoalItem from '../components/GoalItem'
import PostForm from '../components/PostForm'; 
import PostItem from '../components/PostItem'; 
import Spinner from '../components/Spinner'
// import { getGoals, reset } from '../features/goals/goalSlice'
import { getPosts, reset } from '../features/posts/postSlice'; 
import { postCLScore } from '../features/scores/scoreSlice'; 
import { userDataScore } from '../features/data/userDataScore';

function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [suggestionOrFact, setSuggestionOrFact] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [streak, setStreak] = useState(0);

  // Add an effect to update the streak count when the component is mounted
  useEffect(() => {
    // Simulate a delay (e.g., fetching data) before updating the streak count
    setTimeout(() => {
      // Update the streak count to 1 after the delay
      setStreak(1);
    }, 500); // Adjust the delay time as needed
  }, []);
  const commonSuggestionsAndFacts = [
    'LEDs are 75% more energy-efficient than regular light bulbs.',
    'Unplug chargers and appliances when not in use to save energy.',
    'Using energy-efficient appliances like CFLs and LEDs can lower your electricity consumption.',
    'Reduce, reuse, and recycle to minimize waste and conserve resources.',
    'Consider installing a programmable thermostat to optimize heating and cooling.',
    'Fixing a dripping faucet can save hundreds of gallons of water each year.',
    'Installing solar panels on your home can generate clean, renewable energy.',
    'Use public transport or carpool to reduce emissions and traffic.',
    'Carry reusable shopping bags to reduce plastic waste.'
  ];
  const checklistItems = [
    {
      item:'Saved Electricity',
      index: 0
    },
    {
      item:'Saved Water',
      index: 1
    },
    {
      item:'Used Public Transport',
      index: 2
    },
    {
      item:'Used Eco-Friendly Bag',
      index: 3
    },
    {
      item:'Drive Less, Walk More',
      index: 4
    },
    {
      item:'Buy Energy Efficient Products',
      index: 5
    },
    {
      item:'Reduce Single-Use Plastics',
      index: 6
    },{
      item:'Reduce Paper Usage',
      index: 7
    },{
      item:'Use Renewable Energy',
      index: 8
    }
  ]
  const url = '/api/endpoint'; 
  
  const [randomChecklist, setRandomChecklist] = useState([]);
  function getRandomItems(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, count); // Get the first 5 items
  }
  useEffect(() => {
    const initialRandomChecklist = getRandomItems(checklistItems, 5);
    setRandomChecklist(initialRandomChecklist);
  }, []);
  const [checkedState, setCheckedState] = useState(
    Array(checklistItems.length).fill(false)
  );
  const { user } = useSelector((state) => state.auth)
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  
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

  const handleCheckboxChange = (index) => {
    const newCheckedState = [...checkedState];
    newCheckedState[index] = !newCheckedState[index];
    setCheckedState(newCheckedState);
  };
  
  const checked = checkedState.filter((isChecked) => isChecked).length;

  const generateSuggestionOrFact = () => {
    const randomIndex = Math.floor(Math.random() * commonSuggestionsAndFacts.length);
    setSuggestionOrFact(commonSuggestionsAndFacts[randomIndex]);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (!userDataScore.user) {
      userDataScore.user = {...userDataScore}; // Initialize it as an empty object
    }
    userDataScore.user.checked=checked
    console.log(userDataScore)
    axios.post(url, userDataScore)
    .then((response) => {
      console.log('Data posted successfully:', response.data);
      // Handle the response data
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle errors
    });
    generateSuggestionOrFact();
    // dispatch(postCLScore({checked}));
}
  
  console.log(checked)
  console.log(checkedState); 
  return (
    <>
      <section className='heading'>
        <br></br>
        <h1 className='user-name-white'>{user && user.name}</h1>
      </section>
      <div className="macbook-air-11-child"></div>
      <img className="silver-medal-icon" alt="" src="./images/silver.png" />
        <img className="gold-medal-icon" alt="" src="./images/gold.png" />
        <img className="bronze-medal-icon" alt="" src="./images/blue.png" />
        <div className="eco-check-list">
            <div className="eco-checklist-for-container">
                <p className="eco-checklist-for"><h1 className='eco-check-white'>Eco Checklist for the day</h1></p>
                {randomChecklist.map(({item,index}) => (
                  <label className="checkbox-container">{item}
                    <input type="checkbox" className="checkbox" id={`checkbox-${index}`}  onChange={() => handleCheckboxChange(index)} />
                    <span className="checkmark"></span>
                  </label>
                ))}
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <br></br>
                        <button className='btn suggestion-fact' type='submit' style={{backgroundColor:'white',color:'black'}}>
                            Submit
                        </button> 
                    </div>
                  </form>
            </div>

            <div className="badges"><h1>Badges</h1></div>
            <div className="streaks"><h1>Streak</h1>
                  <br></br><br></br>
                  <h1>{streak}</h1>
            </div>
            <div className="streaks streaks-more"><h1>Completed </h1>
                  <br></br><br></br>
                  <h1>{checked} tasks</h1>
            </div>
            
        </div>
        {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <p>{suggestionOrFact}</p>
          </div>
        </div>
      )}
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      {/* <GoalForm /> */}
      <PostForm />
      <section className='content'>
        {posts.length > 0 ? (
          <div className='posts'>
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <h3>You have not created any posts</h3>
        )}
      </section>
    </>
  )
}

export default Profile
