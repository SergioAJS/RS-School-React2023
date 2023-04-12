import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound/NotFound';
import { Home } from './pages/Home/Home';
import { FormPage } from './pages/FormPage/FormPage';
import { AboutUs } from './pages/AboutUs/AboutUs';

export const App: () => JSX.Element = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Form" element={<FormPage />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const WrappedApp: () => JSX.Element = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
