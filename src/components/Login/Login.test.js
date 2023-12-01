import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import Login from './index';

const mockState = {
    userLoginDataSlice: {
        data: {
            "token": "QpwL5tke4Pnpja7X4"
        },
        error: "",
        loading: false,
    },
};

test('Check User List Componant', async () => {
    const mockStore = configureStore([])

    const store = mockStore(mockState)
    store.dispatch = jest.fn()

    const { asFragment } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </Provider>
    );
    expect(asFragment(<Login />)).toMatchSnapshot()
});
