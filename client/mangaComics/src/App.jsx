import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from "./Pages/Main"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
