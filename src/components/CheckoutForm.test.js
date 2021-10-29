import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    // const form = new CheckoutForm
    const firstName = screen.getByLabelText(/first name:/i);
        userEvent.type(firstName, 'Leo');
    const lastName = screen.getByLabelText(/last name:/i);
        userEvent.type(lastName, 'Ọládimú');
    const address = screen.getByLabelText(/address:/i);
        userEvent.type(address, '52 Area');
    const city = screen.getByLabelText(/city:/i);
        userEvent.type(city, 'Wonder Valley');
    const state = screen.getByLabelText(/state:/i);
        userEvent.type(state, 'CA');
    const zip = screen.getByLabelText(/zip:/i);
        userEvent.type(zip, '92277');

    const button = screen.getByRole('button');
        userEvent.click('button');

    const successMessage = screen.getByTestId(/successMessage/i);
        expect(successMessage).toBeInTheDocument();

});
