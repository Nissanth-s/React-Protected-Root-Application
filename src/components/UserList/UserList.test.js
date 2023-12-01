import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import UserList from './index';

const mockState = {
    getgetUserListDataSlice: {
        data: [
            {
                "id": 1,
                "email": "george.bluth@reqres.in",
                "first_name": "George",
                "last_name": "Bluth",
                "avatar": "https://reqres.in/img/faces/1-image.jpg"
            }
        ],
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
            <UserList />
        </Provider>
    );
    expect(asFragment(<UserList />)).toMatchSnapshot()
});
