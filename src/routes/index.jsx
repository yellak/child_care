import React from 'react'
import { Route, Routes} from 'react-router-dom';
import InstitutionPage from '../pages/InstitutionPage';
import InstitutionsPage from '../pages/InstitutionsPage';
import MakeDonationPage from '../pages/MakeDonationPage';

const Router = () => {
  return(
    <Routes>
      <Route path='*' element={<InstitutionsPage/>} />
      <Route path='/institutions/:id' element={<InstitutionPage/>} />
      <Route path='/institutions/:id/galery' element={<InstitutionsPage/>} />
      <Route path='/donations' element={<InstitutionsPage/>} />
      <Route path='/donate' element={<MakeDonationPage/>} />
    </Routes>
  )
}

export default Router