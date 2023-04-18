import { Routes, Route } from 'react-router-dom'
import { AdsDetail } from '../pages/adsDetail/adsDetail'
import HomePage from '../pages/home/home'
import { Header } from '../components/commons/Header/Header'
import { CarsSalesDetail } from '../pages/detailsCarsSale/salesDatails'
import RegisterPage from '../pages/register/register'
import LoginPage from '../pages/loginPage/login'
import { ModalDashboardAddAd } from '../pages/modalDashboard/modalDashboard'


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<HomePage />} />
                <Route path='/detail' element={<AdsDetail />} />
                <Route path='/salesdetail' element={<CarsSalesDetail />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/testeModal' element={<ModalDashboardAddAd />} />
            </Route>
        </Routes>
    )
}