import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import GoalForm from '../components/GoalForm'
// import GoalItem from '../components/GoalItem'
// import PostForm from '../components/PostForm'; 
import PostItem from '../components/PostItem'; 
import Spinner from '../components/Spinner'
// import { getGoals, reset } from '../features/goals/goalSlice'
import { getAllPosts, reset } from '../features/posts/postSlice'; 

function Share() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState('');
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
    dispatch(getAllPosts())
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  const [filteredPosts, setFilteredPosts] = useState(posts);
  useEffect(() => {
    // Filter posts based on the search input
    const filtered = posts.filter((post) =>
    post.caption && post.caption.includes(searchInput)
    );
    filtered.reverse()
    setFilteredPosts(filtered);
    }, [posts, searchInput]);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>{user && user.name}'s feed</h1>
        <p>All posts</p>
        <div className='form-group'>
            <label htmlFor='Search'>Search</label>
            <input
                type='text'
                name='Search by words'
                id='caption'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
      </section>

      <section className='goal'>
        {filteredPosts.length > 0 ? (
          <div className='posts'>
            {filteredPosts.map((post) => (
              <PostItem post={post} />
            ))}
          </div>
        ) : (
          <h3>No posts found.</h3>
        )}
      </section>
    </>
  )
}

export default Share
