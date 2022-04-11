import React from 'react'
import { Route, Routes} from 'react-router-dom';
import InstitutionsPage from '../pages/InstitutionsPage';

const Router = () => {
  return(
    <Routes>
      <Route path='*' element={<InstitutionsPage/>} />
      <Route path='/instituitions' element={<InstitutionsPage/>} />
      <Route path='/instituitions/:id' element={<InstitutionsPage/>} />
      <Route path='/instituitions/:id/galery' element={<InstitutionsPage/>} />
      <Route path='/donations' element={<InstitutionsPage/>} />
      <Route path='/donate' element={<InstitutionsPage/>} />
    </Routes>
  )
}

export default Router