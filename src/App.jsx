import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AddPostForm } from './features/posts/AddPostForm'
import { PostsList } from './features/posts/PostsList'
import { SinglePostPage } from './features/posts/SinglePostPage'

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
          <Route exact path="/posts/:postID" component={SinglePostPage} />

          {/* 잘못된 경로로 접근할 경우 리디렉션 */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
