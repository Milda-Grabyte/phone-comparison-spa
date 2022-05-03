import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Image from '../infrastructure/components/Image';

describe('test Img component', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test('render Image', () => {
    act(() => {
      render(<Image src='https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg' />, container);
    });
  });
});
