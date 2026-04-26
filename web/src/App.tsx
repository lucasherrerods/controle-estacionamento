import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        theme='dark'
      />
      <Home />
    </div>
  )
}

export default App
