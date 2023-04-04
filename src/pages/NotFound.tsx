import React from 'react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends React.Component {
  render(): ReactNode {
    return (
      <>
        <h1 className="App">Not Found</h1>
        <Link to="/">Go Home</Link>
      </>
    );
  }
}
