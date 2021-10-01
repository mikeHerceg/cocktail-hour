// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import DrinkCard from "../drink-card";

describe("DrinkCard", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<DrinkCard {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("drink-card");
    expect(component).toBeDefined();
  });
});

