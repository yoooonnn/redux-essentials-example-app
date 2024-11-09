import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { worker } from './api/server'

import { Provider } from 'react-redux'
import store from './app/store'  // store.js에서 export한 store를 가져옵니다.

import './primitiveui.css'
import './index.css'

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' })

  const root = createRoot(document.getElementById('root'))

  root.render(
    <React.StrictMode>
      <Provider store={store}> {/* Redux Provider로 App을 감쌉니다 */}
        <App />
      </Provider>
    </React.StrictMode>,
  )
}

start()
