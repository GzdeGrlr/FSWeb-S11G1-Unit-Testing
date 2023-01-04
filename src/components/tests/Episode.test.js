import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";
import { exampleEpisodeData, anotherEpisodeData } from "./sampleData";

import { fallbackEpisodeImg } from "../data";

describe("Örnek veriyle sorunsuz çalışıyor mu?", () => {
  beforeEach(() => {
    render(<Episode episode={exampleEpisodeData} />);
  });

  test("Sorunsuz render oluyor mu?", () => {
    const epContainer = screen.getByTestId("ep-container");
    expect(epContainer).toBeInTheDocument();
  });

  test("İsim doğru mu?", () => {
    const epName = screen.getByTestId("ep-name");
    expect(epName.textContent).toBe(exampleEpisodeData.name);
  });
});

describe("Değiştirilmiş veriyle çalışıyor mu?", () => {
  beforeEach(() => {
    render(<Episode episode={anotherEpisodeData} />);
  });
  test("image tanımlanmadığında default image render ediliyor", () => {
    const epImg = screen.getByTestId("ep-img");
    expect(epImg.src).toBe(fallbackEpisodeImg);
  });

  test("İsim doğru mu?", () => {
    const epName = screen.getByTestId("ep-name");
    expect(epName.textContent).toBe(anotherEpisodeData.name);
  });
});
