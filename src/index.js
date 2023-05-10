import {StrictMode, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  Route, 
  RouterProvider,
  Routes,
  useLocation,
  BrowserRouter
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Trails from './Pages/Trails';
import TrailsOverview from './Pages/TrailsOverview';
import ErrorPage from './Pages/ErrorPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import TrailDetails from './Pages/TrailDetails';

const ScrollToTop = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <NavBar/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/trails' element={<Trails/>} />
          <Route path='/trails/overview' element={<TrailsOverview/>} />
          <Route path='/trails/overview/detail' element={<TrailDetails/>} />
        </Routes>
        <Footer/>
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
