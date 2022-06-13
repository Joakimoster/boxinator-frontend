import { render, screen, cleanup, getByTestId } from '@testing-library/react';
import DispatchesView from "../DispatchesView";
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { mount, shallow } from 'enzyme';



describe("Dispatches view component", () => {
    it("should render the DispatchesView", () => {
        const { getByTestId } = render(<Provider store={store}><DispatchesView/></Provider>);
        const dispatchesViewDiv = getByTestId("dispatchesView");
        expect(dispatchesViewDiv).toBeTruthy();
    })

    it("should render table", () => {
        const { getByTestId } = render(<Provider store={store}><DispatchesView/></Provider>);
        const table = getByTestId("dispatchesTable");  
        expect(table).toBeTruthy();
    })
})