import { Component, ReactNode } from 'react';

export class FormCard extends Component<{
  name: string;
  music: boolean;
  movie: boolean;
  sex: string;
}> {
  render(): ReactNode {
    return (
      <div>
        {this.props.name}
        {this.props.music && `music`}
        {this.props.movie && `movie`}
        {this.props.sex}
      </div>
    );
  }
}
