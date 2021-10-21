const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");
// const { jest, expect } = require("@jest/globals");

jest.mock("fs");
test("creates zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Raksha", id: "ajsofefhb" },
        zookeepers
    );

    expect(zookeeper.name).toBe("Raksha");
    expect(zookeeper.id).toBe("ajsofefhb");
});

test("filters by query", () => {
    const startingZookeepers = [
        {
            id: "1",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin",
        },
        {
            id: "2",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
        },
    ];

    const updatedZookeepers = filterByQuery({ age: 31 }, startingZookeepers);

    expect(updatedZookeepers.length).toEqual(1);
});

test("finds by id", () => {
    const startingZookeepers = [
        {
            id: "1",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin",
        },
        {
            id: "2",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
        },
    ];

    const result = findById("2", startingZookeepers);

    expect(result.name).toBe("Isabella");
});

test("validates zookeepers age", () => {
    const zookeeper = {
        id: "1",
        name: "Raksha",
        age: 31,
        favoriteAnimal: "penguin",
    };

    const invalidZookeeper = {
        id: "1",
        name: "Raksha",
        age: 31,
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});