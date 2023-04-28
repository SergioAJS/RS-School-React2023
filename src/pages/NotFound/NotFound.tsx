import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h1 className="App" data-cy="not-found">
        Not Found
      </h1>
      <Link to="/">Go Home</Link>
    </>
  );
};
