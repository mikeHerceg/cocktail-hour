// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import Navigation from "../navigation";

describe("Navigation", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<Navigation {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("navigation");
    expect(component).toBeDefined();
  });
});

