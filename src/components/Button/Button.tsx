import { Link } from 'react-router-dom';

export const Button: () => JSX.Element = () => {
  return (
    <button>
      <Link to="/">To Home Page</Link>
    </button>
  );
};
