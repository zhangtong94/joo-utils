import { filterKeyFromList, listToTree } from "../src/dataConvert";

describe("filterKeyFromList", () => {
    it("filterKeyFromList", () => {
        expect(filterKeyFromList([], "id", 1, "name")).toBe(undefined);
        expect(filterKeyFromList([{ id: 1, name: "test1" }], "id", 2, "name")).toBe(undefined);
        expect(filterKeyFromList([{ id: 1, name: "test1" }], "id", 2, "address")).toBe(undefined);
        expect(filterKeyFromList([{ id: 1, name: "test1" }, { id: 2, name: 'test2' }], "id", 1, "name")).toBe("test1");
    });
});

describe("listToTree", () => {
    const list = [
        { 'id': 1, 'name': 'Node 1', 'parent_id': null },
        { 'id': 2, 'name': 'Node 2', 'parent_id': null },
        { 'id': 3, 'name': 'Node 1.1', 'parent_id': 1 },
        { 'id': 4, 'name': 'Node 1.2', 'parent_id': 1 },
        { 'id': 5, 'name': 'Node 2.1', 'parent_id': 2 },
        { 'id': 6, 'name': 'Node 1.1.1', 'parent_id': 3 },
    ];
    const result = [
        {
            "id": 1,
            "name": "Node 1",
            "parent_id": null,
            "children": [
                {
                    "id": 3,
                    "name": "Node 1.1",
                    "parent_id": 1,
                    "children": [
                        {
                            "id": 6,
                            "name": "Node 1.1.1",
                            "parent_id": 3,
                            "children": []
                        },
                    ]
                },
                {
                    "id": 4,
                    "name": "Node 1.2",
                    "parent_id": 1,
                    "children": []
                }
            ]
        },
        {
            "id": 2,
            "name": "Node 2",
            "parent_id": null,
            "children": [
                {
                    "id": 5,
                    "name": "Node 2.1",
                    "parent_id": 2,
                    "children": []
                }
            ]
        }
    ];
    it("listToTree", () => {
        expect(listToTree(list, null, "id", "parent_id", "children")).toEqual(result);
    });
});
