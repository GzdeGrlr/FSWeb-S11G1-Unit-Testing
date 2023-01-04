import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Show from "./../Show";

describe("Show none prop değeriyle çalışıyor mu?", () => {
  beforeEach(() => {
    render(<Show show="none" selectedSeason="none" />);
  });

  test("sayfada render ediliyor", () => {
    const uyariKutusu = screen.getByTestId("bozuk-data-uyarisi");
    expect(uyariKutusu).toBeInTheDocument();
  });

  test("Loading bileşeni show propu null ken render ediliyor", () => {
    render(<Show />);
    const loading = screen.getByTestId("loading-container");
    expect(loading).toHaveTextContent("Fetching data...");
  });
});

test("sezon seçiliyken handleSelect çağırılıyor", () => {});

test("sezon seçili değilken bileşen render ediliyor ve sezon seçildiğinde yeniden render ediliyor", () => {});
