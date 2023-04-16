import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../utils/testUtils';
// import { Home } from '../pages/Home/Home';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';
import server from '../mock/testServer';
// import { ReactNode } from 'react';
// import { Provider } from 'react-redux';
// import { setupStore } from '../redux';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
// export const handlers = [
//   rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
//     return res(ctx.json([testCharacter]), ctx.delay(10000));
//   }),
// ];

// const server = setupServer(...handlers);

// Enable API mocking before tests.
// beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
// afterAll(() => server.close());

// function Wrapper(props: { children: ReactNode }) {
//   return <Provider store={setupStore()}>{props.children}</Provider>;
// }

describe('Home page', () => {
  // it('renders hook', () => {
  //   renderHook(() => useGetCharactersQuery('rick'), { wrapper: Wrapper });
  // });

  it('fetches & receives a error message after clicking the fetch user button if wrong name was inputted ', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // should show no user initially, and not be fetching a user
    expect(screen.getByRole('button')).toHaveValue('Search');
    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      'You can search by the character name'
    );

    // expect(screen.getByText(/no user/i)).toBeInTheDocument();
    // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();

    // after clicking the 'Fetch user' button, it should now show that it is fetching the user
    fireEvent.input(searchInput, { target: { value: 'unknown name' } });
    expect(searchInput).toHaveValue('unknown name');

    fireEvent.click(screen.getByRole('button'));
    // expect(screen.getByText(/no user/i)).toBeInTheDocument();

    // after some time, the user should be received
    expect(await screen.findByText(/Name does not exist/i)).toBeInTheDocument();
    // expect(screen.queryByText(/no user/i)).not.toBeInTheDocument();
    // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
  });

  it('handles error response', async () => {
    // force msw to return error response
    server.use(
      rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    await screen.findByText(/Name does not exist/i);
  });
});
