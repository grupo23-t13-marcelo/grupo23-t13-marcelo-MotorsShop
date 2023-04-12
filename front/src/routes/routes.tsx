import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages/landing/landing'
import { AdsDetail } from '../pages/adsDetail/adsDetail'
import HomePage from '../pages/home/home'
import { Header } from '../components/commons/Header/Header'
import { Footer } from '../components/commons/Footer/Footer'
import { CardCars } from '../components/commons/Card'
import RegisterPage from '../pages/register/register'


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Header />}>

                <Route index element={<HomePage />} />
                <Route path='/detail' element={<AdsDetail />} />
                <Route path='/register' element={<RegisterPage />} />
            </Route>
        </Routes>
    )
}