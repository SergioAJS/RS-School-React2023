import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export class Button extends Component {
  render(): ReactNode {
    return (
      <button>
        <Link to="/">To Home Page</Link>
      </button>
    );
  }
}
