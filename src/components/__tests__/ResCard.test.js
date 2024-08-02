import { render, screen } from "@testing-library/react";
import ResCard, { withFastDeliveryLabel } from "../ResCard";
import MOCK_DATA from "../mocks/resCardMockData.json"
import "@testing-library/jest-dom"

describe("ResCard test cases", () => {
    it("should render ResCard component with props data", () => {
        render(<ResCard resData={MOCK_DATA}/>);

        const name = screen.getByText("Pizza Hut");
        expect(name).toBeInTheDocument();
    });

    it("should render ResCard with Fast Delivery label", () => {
        // const FastDeliveryResCard = withFastDeliveryLabel(<ResCard resData={MOCK_DATA}/>);
        // render(<FastDeliveryResCard />);
    });
});
