// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import DropDown from "../drop-down";

describe("DropDown", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<DropDown {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("drop-down");
    expect(component).toBeDefined();
  });
});

