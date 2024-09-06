import { cleanup, fireEvent, render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import Signup from '../../../pages/signup';
// import store from '../../../store/store';

test('should show error if email is invalid', () => {
    render(<Signup />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.blur(emailInput);
    
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });
  

// const mockEmailTest = 'test@mail.com';
// const mockPasswordTest = 'test';
// const mockRender = () => {
//   const utils = render(<Provider store={store}><Signup /></Provider>, {wrapper: BrowserRouter});
//   const input = screen.getByLabelText('name')
//   return {
//     input,
//     ...utils,
//   }
// }

// afterEach(cleanup);

// describe('Signup', () => {
//   test('Should be rendered', () => {
//     expect(mockRender).toBeTruthy();
//   });
// });