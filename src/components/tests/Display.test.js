import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./../Display";
import { exampleEpisodeData, exampleShowData } from "./sampleData";

test("proplar olmadan hatasız çalışıyor", () => {
  render(<Display />);
});

test("butona tıklandığında show bileşeni render ediliyor ", async () => {
  render(<Display />);
  const fetchButton = screen.getByTestId("fetch-button");
  fireEvent.click(fetchButton);
  await waitFor(() => screen.getByTestId("show-container"));
});

test("butona tıklandığında sezon optionları datadakilerle aynı şekide render ediliyor", async () => {
  render(<Display />);
  const fetchButton = screen.getByTestId("fetch-button");
  fireEvent.click(fetchButton);
  const options = await waitFor(() => screen.getAllByTestId("season-option"));
  expect(options.length).toBe(exampleShowData.seasons.length);
});
