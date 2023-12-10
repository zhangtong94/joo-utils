import { isEmail } from "../../src/validate/email";

describe("isEmail", () => {
    it("isEmail", () => {
        expect(isEmail("zhangtong.chn")).toBe(false);
        expect(isEmail("zhangtong.chn@foxmail.com")).toBe(true);
    });
});
