import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages/landing/landing'
import { AdsDetail } from '../pages/adsDetail/adsDetail'


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/detail' element={<AdsDetail />} />
        </Routes>
    )
}