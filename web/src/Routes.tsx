import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      {/* sem exact o react ve se contem, entao /study, contem a barra entao contem o compoennt Landing */}
      <Route path='/study' component={TeacherList} />
      <Route path='/give-classes' component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
