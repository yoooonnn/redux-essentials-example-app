import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { postUpdated } from './postsSlice'

export const EditPostForm = () => {
    const { postID } = useParams()

    const post = useSelector(state => 
        state.posts.find(post => post.id === postID)
    )
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setContent(post.content)
        }
    }, [post])

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated({ id: postID, title, content }))
            navigate(`/posts/${postID}`)
        }
    }

    console.log(postID)


    return (
        <section>
          <h2>Edit Post</h2>
          <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              placeholder="What's on your mind?"
              value={title}
              onChange={onTitleChanged}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              value={content}
              onChange={onContentChanged}
            />
          </form>
          <button type="button" onClick={onSavePostClicked}>
            Edit Post
          </button>
        </section>
      )
}
