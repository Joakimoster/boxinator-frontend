import { render, screen, cleanup, getByTestId, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import BoxFormView from '../BoxFormView';

describe("Boxform view component", () => {
    it("should return boxform view", () => {
        const { getByTestId } = render(<Provider store={store}><BoxFormView /></Provider>);
        const boxFormViewDiv = getByTestId("boxFormView");
        expect(boxFormViewDiv).toBeTruthy();
    })

    it("should change input on change on header", () => {
        const { getByTestId } = render(<Provider store={store}><BoxFormView /></Provider>);
        const input = getByTestId("inputName");
        userEvent.type(input, "Joakim");
        expect(input).toHaveValue("Joakim")
    })
})