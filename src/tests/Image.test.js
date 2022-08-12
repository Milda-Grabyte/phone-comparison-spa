// import { render } from 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Image from '../infrastructure/components/Image';

describe('test Img component', () => {
  test('render Image', () => {
    const { getByAltText } = render(
        <Image src='https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg' alt='mock image' />
    );
    getByAltText('mock image');
  });
  it('check if image path exists', () => {
    render(
        <Image src='https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg' alt='mock image' />);
    const image = screen.getByRole('img');
    waitFor(() => expect(image.src !== '').toBeTruthy());
    waitFor(() => expect(image.src).toBe('https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg'));
  });
});
