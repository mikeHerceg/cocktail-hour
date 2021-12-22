// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import Sidebar from "../sidebar";

describe("Sidebar", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<Sidebar {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("sidebar");
    expect(component).toBeDefined();
  });
});

