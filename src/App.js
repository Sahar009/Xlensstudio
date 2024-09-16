import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Home from './component/Home/Home';
import Contact from './contact/Contact';
import Project from './component/project/Project';
import About from './About/About';
import Project1 from './component/projects route/Project1';
import Project2 from './component/projects route/Project2';
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

const AppContent = () => {
  const location = useLocation();

  // Hide Header only on these routes
  const hideHeaderRoutes = ['/dashboard',  '/interiorDB', '/exteriorDB', '/visualizationDB', '/mhqProjectDB'];
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

        <Route path='/itunu' element={<Project1 />} />
        <Route path='/interior' element={<Project2 />} />
        <Route path='/mhq' element={<Project3 />} />
        <Route path='/visualization3D' element={<Project4 />} />

        <Route path='/serviceSlider' element={<ServiceSlider />} />
        <Route path='/services' element={<Service />} />

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
