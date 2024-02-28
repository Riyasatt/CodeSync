import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EditorPage from './pages/EditorPage'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <div>
      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            // backgroundColor: "rgba(255, 255, 255, 0.8)",
            fontWeight: "500"
          },
        }}
      >

      </Toaster>
    </div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/editor/:roomId' element={<EditorPage/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
