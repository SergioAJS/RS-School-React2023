import { Link } from 'react-router-dom';

export const NotFound: () => JSX.Element = () => {
  return (
    <>
      <h1 className="App">Not Found</h1>
      <Link to="/">Go Home</Link>
    </>
  );
};
