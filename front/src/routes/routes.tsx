import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages/landing/landing'


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
        </Routes>
    )
}