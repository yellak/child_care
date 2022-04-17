import React from 'react'
import { Route, Routes} from 'react-router-dom';
import InstitutionPage from '../pages/InstitutionPage';
import InstitutionsPage from '../pages/InstitutionsPage';
import MakeDonationPage from '../pages/MakeDonationPage';
import DonationsPage from '../pages/DonationsPage';
import ChildrenGallery from '../pages/ChildrenGallery';

const Router = () => {
  return(
    <Routes>
      <Route path='*' element={<InstitutionsPage/>} />
      <Route path='/institutions/:id' element={<InstitutionPage/>} />
      <Route path='/institutions/:id/galery' element={<ChildrenGallery/>} />
      <Route path='/donations' element={<DonationsPage/>} />
      <Route path='/donate' element={<MakeDonationPage/>} />
    </Routes>
  )
}

export default Router