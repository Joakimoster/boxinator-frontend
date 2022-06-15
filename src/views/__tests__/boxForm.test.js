import { render, screen, cleanup, getByTestId, fireEvent, getAllByRole } from '@testing-library/react';
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

    it("should return correct input on name", () => {
        const { getByTestId } = render(<Provider store={store}><BoxFormView /></Provider>);
        const input = getByTestId("inputName");
        fireEvent.change(input, {target: {value: "Joakim"}})
        expect(input.value).toBe("Joakim");
    })

    it("should return correct input on weight", () => {
        const { getByTestId } = render(<Provider store={store}><BoxFormView /></Provider>);
        const input = getByTestId("inputWeight");
        fireEvent.change(input, {target: {value: "50.0"}})
        expect(input.value).toBe("50.0");
    })

    it("should display the currect number of options in dropdown", () => {
        render(<Provider store={store}><BoxFormView /></Provider>);
        expect(screen.getAllByRole('option').length).toBe(5)
    })

    it("should return correct input from dropdown on country", () => {
        render(<Provider store={store}><BoxFormView /></Provider>);
        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByRole('option', {name: 'Sweden'}),
        )
        expect(screen.getByRole('option', {name: 'Sweden'}).selected).toBe(true)
    })
})