import React from 'react'
import { Route, Routes} from 'react-router-dom';
import InstitutionPage from '../pages/InstitutionPage';
import InstitutionsPage from '../pages/InstitutionsPage';
import DonationsPage from '../pages/DonationsPage';
import ChildrenGallery from '../pages/ChildrenGallery';
import MakeDonationPage from '../pages/MakeDonationPage';

const Router = () => {
  return(
    <Routes>
      <Route path='*' element={<InstitutionsPage/>} />
      <Route path='/institutions/:id' element={<InstitutionPage/>} />
      <Route path='/institutions/:id/galery' element={<ChildrenGallery/>} />
      <Route path='/donations' element={<DonationsPage/>} />
      <Route path='/donate/:inst/:child' element={<MakeDonationPage/>} />
    </Routes>
  )
}

export default Router