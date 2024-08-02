import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";

describe("Header component test cases", () => {
    it("should render the Header component with login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", {name: "Login"});
        expect(loginButton).toBeInTheDocument();
    });

    it("should render the Header component with Grocery nav item", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const navItem = screen.getByText("Grocery")
        expect(navItem).toBeInTheDocument();
    });

    it("should change Login button to Logout on click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", {name: "Login"});

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", {name: "Logout"});

        expect(logoutButton).toBeInTheDocument();
    });
})
