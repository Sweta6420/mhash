import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../features/posts/postSlice'

function PostItem({ post }) {
  const dispatch = useDispatch()
  const [isExpanded, setIsExpanded] = useState(true);

  const handlePostClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div className='goal'>
        {/* <div className='post-image'>
            <img src={post.image} alt='Post' />
        </div> */}
      <div>{new Date(post.createdAt).toLocaleString('en-US')}</div>
      <h2>{post.caption}</h2>
      {/* <h2>{post.text}</h2> */}
      <button onClick={() => dispatch(deletePost(post._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default PostItem
