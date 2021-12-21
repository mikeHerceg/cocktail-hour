// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import ToggleButton from "../toggle-button";

describe("ToggleButton", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<ToggleButton {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("toggle-button");
    expect(component).toBeDefined();
  });
});

