import React from 'react'
import { Route, Routes} from 'react-router-dom';
import InstitutionPage from '../pages/InstitutionPage';
import InstitutionsPage from '../pages/InstitutionsPage';
import DonationsPage from '../pages/DonationsPage';

const Router = () => {
  return(
    <Routes>
      <Route path='*' element={<InstitutionsPage/>} />
      <Route path='/institutions/:id' element={<InstitutionPage/>} />
      <Route path='/institutions/:id/galery' element={<InstitutionsPage/>} />
      <Route path='/donations' element={<DonationsPage/>} />
      <Route path='/donate' element={<InstitutionsPage/>} />
    </Routes>
  )
}

export default Router