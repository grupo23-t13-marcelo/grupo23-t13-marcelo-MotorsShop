import { Routes, Route } from 'react-router-dom'
import { AdsDetail } from '../pages/adsDetail/adsDetail'
import HomePage from '../pages/home/home'
import { Header } from '../components/commons/Header/Header'
import { CarsSalesDetail } from '../pages/detailsCarsSale/salesDatails'



export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<HomePage />} />
                <Route path='/detail' element={<AdsDetail />} />
                <Route path='/salesdatail' element={<CarsSalesDetail/>}/>
            </Route>
        </Routes>
    )
}