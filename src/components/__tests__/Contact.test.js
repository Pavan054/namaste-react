import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact";

describe("Contact Us page tests", () => {
    test("should containes a heading", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("should contains a Submit button", () => {
        render(<Contact />);
        const submitButton = screen.getByText("Submit");
        expect(submitButton).toBeInTheDocument();
    });
    
    test("should contains 2 inputs", () => {
        render(<Contact />);
        const inputTextBoxes = screen.getAllByRole("textbox");
        expect(inputTextBoxes.length).toBe(2);
    });
});
