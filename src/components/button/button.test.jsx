// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import Button from "../button";

describe("Button", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("button");
    expect(component).toBeDefined();
  });
});

