import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import GoalForm from '../components/GoalForm'
// import GoalItem from '../components/GoalItem'
import PostForm from '../components/PostForm'; 
import PostItem from '../components/PostItem'; 
import Spinner from '../components/Spinner'
// import { getGoals, reset } from '../features/goals/goalSlice'
import { getPosts, reset } from '../features/posts/postSlice'; 

function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
                <label className="checkbox-container">
                    Saved Electricity
                    <input type="checkbox" className="checkbox" id="saved-electricity" />
                    <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                    Saved Water
                    <input type="checkbox" className="checkbox" id="saved-water" />
                    <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                    Used Public Transport
                    <input type="checkbox" className="checkbox" id="public-transport" />
                    <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                    Used Eco-Friendly Bag
                    <input type="checkbox" className="checkbox" id="eco-bag" />
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="badges"><h1>Badges</h1></div>
            <div className="streaks"><h1>Streaks</h1></div>
        </div>
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
