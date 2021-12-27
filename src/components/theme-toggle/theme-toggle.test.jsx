// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import ThemeToggle from "../theme-toggle";

describe("ThemeToggle", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<ThemeToggle {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("theme-toggle");
    expect(component).toBeDefined();
  });
});

