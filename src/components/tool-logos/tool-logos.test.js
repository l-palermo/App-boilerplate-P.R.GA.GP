import React from "react";

import ToolLogos from ".";

const setupTest = () => render(<ToolLogos />);

describe("Tool logos", () => {
  it("should render the logos", () => {
    const { getByRole } = setupTest();
    const logo = getByRole("img");
    expect(logo).toBeVisible();
  });
});
