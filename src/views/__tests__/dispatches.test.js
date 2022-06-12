import { render, screen, cleanup, getByTestId } from '@testing-library/react';
import DispatchesView from "../DispatchesView";
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { mount } from 'enzyme';



test('should render dispatches view component', () => {
    render(<Provider store={store}>
                <DispatchesView/>
            </Provider>)
    const todoElement = screen.getByTestId('dispatches-view-test')
    expect(todoElement).toBeInTheDocument();
})