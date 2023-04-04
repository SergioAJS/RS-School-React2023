import { Component, ReactNode } from 'react';
import styles from '../SearchInput/SearchInput.module.scss';

export class SearchInput extends Component {
  state = {
    inputValue: '',
  };

  onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.currentTarget;
    const value = input.value;
    this.setState({ inputValue: value });
    localStorage.setItem('inputValue', value);
  };

  componentDidMount() {
    const inputValue = localStorage.getItem('inputValue');
    this.setState({ inputValue });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  render(): ReactNode {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor="search">
          <input
            className={styles.search}
            type="text"
            name="search"
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </label>
        <input className={styles.submit} type="submit" value="Search" />
      </form>
    );
  }
}
