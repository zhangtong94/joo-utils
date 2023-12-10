import { isCommonPhoneNumber, isHonkongPhoneNumber, isMacaoPhoneNumber, isTaiwanPhoneNumber, getOperator } from '../../src/validate/phone';

describe("isCommonPhoneNumber", () => {
    it("isCommonPhoneNumber", () => {
        expect(isCommonPhoneNumber("1234567890")).toBe(false);
        expect(isCommonPhoneNumber("10234567890")).toBe(false);
        expect(isCommonPhoneNumber("13912345678")).toBe(true);
    });
});

describe("isHonkongPhoneNumber", () => {
    it("isHonkongPhoneNumber", () => {
        expect(isHonkongPhoneNumber("5123456")).toBe(false);
        expect(isHonkongPhoneNumber("11234567")).toBe(false);
        expect(isHonkongPhoneNumber("51234567")).toBe(true);
    });
});

describe("isMacaoPhoneNumber", () => {
    it("isMacaoPhoneNumber", () => {
        expect(isMacaoPhoneNumber("6612345")).toBe(false);
        expect(isMacaoPhoneNumber("60123456")).toBe(false);
        expect(isMacaoPhoneNumber("66123456")).toBe(true);
    });
});

describe("isTaiwanPhoneNumber", () => {
    it("isTaiwanPhoneNumber", () => {
        expect(isTaiwanPhoneNumber("091234567")).toBe(false);
        expect(isTaiwanPhoneNumber("0112345678")).toBe(false);
        expect(isTaiwanPhoneNumber("0912345678")).toBe(true);
    });
});

describe("getOperator", () => {
    it("getOperator", () => {
        expect(getOperator("1234567890")).toBe("");
        expect(getOperator("12345678900")).toBe("");
        expect(getOperator("13912345678")).toBe("ChinaMobile");
        expect(getOperator("13112345678")).toBe("ChinaUnicom");
        expect(getOperator("13312345678")).toBe("ChinaTelecom");
        expect(getOperator("19212345678")).toBe("ChinaBroadcast");
    });
});
