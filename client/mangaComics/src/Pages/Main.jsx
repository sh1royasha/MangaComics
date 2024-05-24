import Home from "./Home"
import NotFound from "./NotFound"
import Header from "../components/Header"
import {Routes,Route} from 'react-router-dom'
const Main = ()=>{
    return(
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default Main