import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import LabelSection from "../components/LabelSection/LabelSection";

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

global.CSSObject = jest.fn();

describe("Product Page", () => {
  let labelSectionData;

  beforeEach(() => {
    labelSectionData = {
      productName: "Notepads",
      quantities: ["5", "10", "20", "40", "80", "150"],
      sizes: ["2.4x1.25", "2.4x2", "3.5x2"],
      prices: [40, 60, 80],
    };
  });

  it("Displayed rice changes according to quantity, size and price combination", () => {
    render(<LabelSection {...labelSectionData} />);

    const name = screen.getByText("Notepads");
    const dropDown = screen.getAllByAltText("down");

    const sizeSelect = dropDown[0];
    const qtySelect = dropDown[1];
    //test case 1: 3.5x2 and 20

    fireEvent.click(sizeSelect);

    fireEvent.click(screen.getByText(labelSectionData.sizes[2]));

    fireEvent.click(qtySelect);

    fireEvent.click(
      screen.getByText(labelSectionData.quantities[2] + " Pieces")
    );

    expect(name).toBeVisible();

    const correctPrice = screen.getByText(
      "₱" +
        (labelSectionData.prices[2] * labelSectionData.quantities[2]).toFixed(2)
    );

    expect(correctPrice).toBeVisible();

    //test case 2: 150 and 2.5x2

    fireEvent.click(sizeSelect);

    fireEvent.click(screen.getByText(labelSectionData.sizes[1]));

    fireEvent.click(qtySelect);

    fireEvent.click(
      screen.getByText(labelSectionData.quantities[4] + " Pieces")
    );

    const correctPrice2 = screen.getByText(
      "₱" +
        (labelSectionData.prices[1] * labelSectionData.quantities[4]).toFixed(2)
    );

    expect(correctPrice2).toBeVisible();

    //test case 3: 40 and 2.4x2

    fireEvent.click(sizeSelect);

    fireEvent.click(screen.getByText(labelSectionData.sizes[0]));

    fireEvent.click(qtySelect);

    fireEvent.click(
      screen.getByText(labelSectionData.quantities[3] + " Pieces")
    );

    const correctPrice3 = screen.getByText(
      "₱" +
        (labelSectionData.prices[0] * labelSectionData.quantities[3]).toFixed(2)
    );

    expect(correctPrice3).toBeVisible();
  });
});
