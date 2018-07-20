import React from "react";
import Enzyme from "enzyme";
import Summary from "./Summary";

const props = {
  todosCount: 0,
  completedTodosCount: 0
};

describe("Summary", () => {
  it("renders", () => {
    const enzymeWrapper = Enzyme.shallow(<Summary {...props} />);
    expect(enzymeWrapper.find("div").hasClass("summary__container")).toBe(true);
    expect(enzymeWrapper.find("p").hasClass("summary__text")).toBe(true);
  });
});
