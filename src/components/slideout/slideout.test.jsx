// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import Slideout from "../slideout";

describe("Slideout", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<Slideout {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("slideout");
    expect(component).toBeDefined();
  });
});

