import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { PostsList } from './features/posts/PostsList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          {/* 기본 경로("/")에 대해 PostsList를 렌더링 */}
          <Route path="/" element={<PostsList />} />

          {/* 잘못된 경로로 접근할 경우 리디렉션 */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
