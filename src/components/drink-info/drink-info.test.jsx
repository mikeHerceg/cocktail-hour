// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import DrinkInfo from "../drink-info";

describe("DrinkInfo", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<DrinkInfo {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("drink-info");
    expect(component).toBeDefined();
  });
});

