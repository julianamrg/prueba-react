import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListUsers } from '../components/users/ListUsers'

const AppRouter = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <ListUsers/>
            } />
  
        </Routes>
    </BrowserRouter>
    )
}


export default AppRouter