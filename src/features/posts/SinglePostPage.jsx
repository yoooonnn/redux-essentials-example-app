import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

export const SinglePostPage = () => { 
    // URL 경로에서 추출한 매개변수를 객체로 제공
    const { postID } = useParams()
    // Redux 상태에서 데이터를 선택하기 위한 React Hook
    const post = useSelector(state => 
        // state.posts 배열에서 postID와 일치하는 id를 가진 게시물을 찾음
        state.posts.find(post => post.id === postID)
    )


    if (!post) {
        return (
            <section>
                <h2>Post Not Found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
            </article>
        </section>
    )
}