import { render, cleanup } from '@testing-library/react';
import Header from './index';

test('Check Header Componant', async () => {
    const { asFragment } = render(<Header />)
    expect(asFragment(<Header />)).toMatchSnapshot()
});
