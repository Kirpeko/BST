const server = require("./server");
const Node = server.Node;
const Tree = server.Tree

describe("Tests Tree functionality", () => {
    it("Works with 2>2 inserts", () => {
        const oak = new Tree();
        oak.insert(16);
        oak.insert(9);
        oak.insert(3);
        oak.insert(10);
        expect(oak.root).not.toBe(null);
        expect(oak.root.value).toBe(16);
        expect(oak.root.left).not.toBe(null);
        expect(oak.root.left.value).toBe(9);
        expect(oak.root.left.left).not.toBe(null);
        expect(oak.root.left.left.value).toBe(3);
        expect(oak.root.left.right).not.toBe(null);
        expect(oak.root.left.right.value).toBe(10);
    });
    it("Works with 5 inserts", () => {
        const oak = new Tree();
        oak.insert(8);
        oak.insert(5);
        oak.insert(12);
        oak.insert(6);
        oak.insert(11);
        expect(oak.root).not.toBe(null);
        expect(oak.root.value).toBe(8);
        expect(oak.root.right).not.toBe(null);
        expect(oak.root.right.value).toBe(12);
        expect(oak.root.right.left).not.toBe(null);
        expect(oak.root.right.left.value).toBe(11);
        expect(oak.root.left).not.toBe(null);
        expect(oak.root.left.value).toBe(5);
        expect(oak.root.left.right).not.toBe(null);
        expect(oak.root.left.right.value).toBe(6);
    });
    it("Works with large numbers", () => {
        const oak = new Tree();
        oak.insert(27);
        oak.insert(30);
        oak.insert(102);
        oak.insert(1005);
        expect(oak.root).not.toBe(null);
        expect(oak.root.value).toBe(30);
        expect(oak.root.right).not.toBe(null);
        expect(oak.root.right.value).toBe(102);
        expect(oak.root.right.right).not.toBe(null);
        expect(oak.root.right.right.value).toBe(1005);
        expect(oak.root.left).not.toBe(null);
        expect(oak.root.left.value).toBe(27);
    });
});