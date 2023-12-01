import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import Header from './index';

const mockState = {};

test('Check Datacard Componant', async () => {
    const mockStore = configureStore([])

    const store = mockStore(mockState)
    store.dispatch = jest.fn()

    const { asFragment } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );
    expect(asFragment(<Header />)).toMatchSnapshot()
});
