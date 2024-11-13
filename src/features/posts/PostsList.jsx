import React from 'react'
// React components read data from Redux store
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { TimeAgo } from './TimeAgo'

export const PostsList = () => {
    // Read `state.posts` value from Redux store
    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <p><TimeAgo timestamp={post.date} /></p>
            <Link to={`/posts/${post.id}`} className="button muted-button">View Post</Link>
        </article>
    ))

    console.log(posts)
    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}