import { getRandomRgbColor, getRandomHexColor, colorHexToRgb, colorRgbToHex } from '../src/color';

describe("getRandomRgbColor", () => {
    it("getRandomRgbColor", () => {
        expect(getRandomRgbColor()).toMatch(/^rgb\(\s*((\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\s*,\s*){2}(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\s*\)$/);
    });
});

describe("getRandomHexColor", () => {
    it("getRandomHexColor", () => {
        expect(getRandomHexColor()).toMatch(/^#[0-9a-fA-F]{6}$/);
    });
});

describe("colorHexToRgb", () => {
    it("colorHexToRgb", () => {
        expect(colorHexToRgb("#000")).toBe("rgb(0, 0, 0)");
        expect(colorHexToRgb("#fff")).toBe("rgb(255, 255, 255)");
        expect(colorHexToRgb("#40b4f7")).toBe("rgb(64, 180, 247)");

    });
});

describe("colorRgbToHex", () => {
    it("colorRgbToHex", () => {
        expect(colorRgbToHex("rgb(0, 0, 0)")).toBe("#000000");
        expect(colorRgbToHex("rgb(255, 255, 255)")).toBe("#ffffff");
        expect(colorRgbToHex("rgb(64, 180, 247)")).toBe("#40b4f7");
    });
});
