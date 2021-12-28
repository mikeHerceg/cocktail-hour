// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import Toaster from "../toaster";

describe("Toaster", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<Toaster {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("toaster");
    expect(component).toBeDefined();
  });
});

