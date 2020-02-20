import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm, {errors} from "./ContactForm";

test("renders Form without crashing", () => {
    render(<ContactForm />);
});

test("labels display text", () => {
    const { getByText } = render(<ContactForm />);

    getByText(/First Name/i);
    getByText(/Last Name/i);
    getByText(/Email/i);
    getByText(/Message/i);
});

test("renders errors in Form", () => {
    const {getByErrors} = render(<ContactForm/>)

    if(errors){
        console.log(true)
    }
});

test("test input data", () => {
    const { getByText, getByTestId } = render(<ContactForm />);
    const firstNameInput = getByTestId("firstName");
    expect(firstNameInput).toBeTruthy();
    fireEvent.change(firstNameInput, {target: {value: "Rob"}});
    expect(firstNameInput.value).toBe("Rob");
    fireEvent.click(getByText("submit"));
});