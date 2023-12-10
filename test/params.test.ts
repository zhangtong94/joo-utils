import { objectToQueryString, queryStringToObject, removeEmptyKey } from "../src/params";

describe("objectToQueryString", () => {
    it("objectToQueryString", () => {
        expect(objectToQueryString({})).toBe("");
        expect(objectToQueryString({ id: 1, value: null })).toBe("?id=1");
        expect(objectToQueryString({ id: 1, value: "test" })).toBe("?id=1&value=test");
    });
});

describe("queryStringToObject", () => {
    it("queryStringToObject", () => {
        expect(queryStringToObject("")).toEqual({});
        expect(queryStringToObject("?id=1")).toEqual({ id: "1" });
        expect(queryStringToObject("?id=1&value=test")).toEqual({ id: "1", value: "test" });
        expect(queryStringToObject("?id=1&value=")).toEqual({ id: "1", value: "" });
    });
});

describe("removeEmptyKey", () => {
    it("removeEmptyKey", () => {
        expect(removeEmptyKey({})).toEqual({});
        expect(removeEmptyKey({ id: 1, value: null })).toEqual({ id: 1 });
        expect(removeEmptyKey({ id: 1, value: undefined })).toEqual({ id: 1 });
        expect(removeEmptyKey({ id: 1, value: "" })).toEqual({ id: 1, value: "" });
        expect(removeEmptyKey({ id: 1, value: "test" })).toEqual({ id: 1, value: "test" });
    });
});
