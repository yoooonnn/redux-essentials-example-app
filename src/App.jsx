import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AddPostForm } from './features/posts/AddPostForm'
import { PostsList } from './features/posts/PostsList'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          {/* 기본 경로("/")에 대해 PostsList를 렌더링 */}
          <Route path="/" element={
            <>
              <AddPostForm />
              <PostsList />
            </>
          } />
          <Route path="/posts/:postID" element={<SinglePostPage />} />
          <Route path="/editPost/:postID" element={<EditPostForm />} />

          {/* 잘못된 경로로 접근할 경우 리디렉션 */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
