import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
// import Header from '../Components/Header';
import Loading from './Loading';

const Home = lazy(() => import('../Pages/Home/Home'));
const Item = lazy(() => import('../Pages/Item/Item'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));
const ForgetPassword = lazy(() => import('../Pages/ForgetPassword/ForgetPassword'));
const Login = lazy(() => import('../Pages/Login/login'));
const Register = lazy(() => import('../Pages/Register/Register'));


export default function index() {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Layout />} >
            <Route path='/item' element={<Item />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgotpassword' element={<ForgetPassword />} />
            <Route path='/register' element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
      </div>
    </Suspense>
  );
}
