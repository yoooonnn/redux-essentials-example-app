import React from 'react'
// React components read data from Redux store
import { useSelector } from 'react-redux'

export const PostsList = () => {
    // Read `state.posts` value from Redux store
    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}