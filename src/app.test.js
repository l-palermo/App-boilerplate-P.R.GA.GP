import React from "react";

import App from "./app";

describe("App", () => {
  it("should render the boilerplate title", () => {
    const { getByRole } = render(<App />);
    const header = getByRole("heading");
    expect(header).toBeVisible();
    expect(header).toHaveTextContent('Boilerplate')
  });
  it("should render the tool logos images", () => {
    const { getByTestId } = render(<App />);
    const image = getByTestId("tool-logos");
    expect(image).toBeVisible();
    expect(image).toHaveAttribute("alt", "image");
  });
});
