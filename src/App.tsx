import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { FormPage } from './pages/FormPage/FormPage';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Form" element={<FormPage />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
