import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { AboutUs } from './pages/AboutUs';
import { FormPage } from './pages/FormPage';

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
