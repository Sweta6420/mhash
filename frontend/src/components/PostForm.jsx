// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { createGoal } from '../features/goals/goalSlice'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../features/posts/postSlice'; 

function PostForm() {
    const [caption, setCaption] = useState('');
    
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost({caption}));
        setCaption('');
    }
    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='caption'>Message</label>
                    <input
                        type='text'
                        name='caption'
                        id='caption'
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>
                        Add Post
                    </button>
                </div>
            </form>
        </section>
    )
}

export default PostForm
