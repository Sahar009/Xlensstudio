import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Home from './component/Home/Home';
import Contact from './contact/Contact';
import Project from './component/project/Project';
import About from './About/About';
import Project1 from './component/projects route/Project1';
import Project3 from './component/projects route/Project3';
import Project4 from './component/projects route/Project4';
import ServiceSlider from './component/Home/serviceSlider/ServiceSlider';
import Service from './component/Home/services/Service';
import Layout from './dashboard/layout/Layout';
import Sidebar from './dashboard/sidebar/Sidebar';
import Dashboard from './dashboard/pages/dasboardPage/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mhqproject from './dashboard/pages/imageUploader/Mhqproject';
import Visualization from './dashboard/pages/imageUploader/Visualization';
import Exterior from './dashboard/pages/imageUploader/Exterior';
import Interior from './dashboard/pages/imageUploader/Interior';
import Login from './dashboard/login/Login';
import Signup from './dashboard/signup/Signup';

const AppContent = () => {
  const location = useLocation();

  // Hide Header only on these routes
  const hideHeaderRoutes = ['/dashboard',  '/interiorDB', '/exteriorDB', '/visualizationDB', '/mhqProjectDB', '/login', '/signup'];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      {!shouldHideHeader && <Header />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />

        <Route path='/glatt' element={<Project1 />} />
        <Route path='/itunu' element={<Project3 />} />
        <Route path='/burums' element={<Project4 />} />

        <Route path='/serviceSlider' element={<ServiceSlider />} />
        <Route path='/services' element={<Service />} />

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/dashboard' element={
          <Sidebar>
            <Layout>
              <Dashboard />
            </Layout>
          </Sidebar>
        } />

        <Route path='/interiorDB' element={
          <Sidebar>
            <Layout>
              <Interior/>
            </Layout>
          </Sidebar>
        } />
        <Route path='/exteriorDB' element={
          <Sidebar>
            <Layout>
             <Exterior/>
            </Layout>
          </Sidebar>
        } />
        <Route path='/visualizationDB' element={
          <Sidebar>
            <Layout>
            <Visualization/>
            </Layout>
          </Sidebar>
        } />
        <Route path='/mhqProjectDB' element={
          <Sidebar>
            <Layout>
             <Mhqproject/>
            </Layout>
          </Sidebar>
        } />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
