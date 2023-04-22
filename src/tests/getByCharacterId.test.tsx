import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { renderHook } from '@testing-library/react';

import { setupStore, useGetCharacterByIdQuery } from '../redux';

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={setupStore()}>{props.children}</Provider>;
}

it('renders getCharacterById hook', async () => {
  const { result } = renderHook(() => useGetCharacterByIdQuery(1), { wrapper: Wrapper });
  expect(result.current).toMatchObject({
    status: 'pending',
    endpointName: 'getCharacterById',
    isLoading: true,
    isSuccess: false,
    isError: false,
    isFetching: true,
  });
});
