import {Coordinate, game} from "./models";

const sortByXY = (coordinates: Coordinate []) => {
    return coordinates
        .sort((c1, c2) => c1.x - c2.x)
        .sort((c1, c2) => c1.y - c2.y)
}

describe('Conway game of life test', () => {
    test(', when not initialized', () => {

    })
    test('test empty initial state', () => {
        game.init([])

        const gameState = game.runGame()

        expect(gameState).toEqual([])
    })
    test.skip('one iteration transition to death, when initialy one alive', () => {
        game.init([
            ['dead', 'dead', 'dead'],
            ['dead', 'alive', 'dead'],
            ['dead', 'dead', 'dead']
        ])

        const gameState = game.runGame()

        expect(gameState).toEqual([
            ['dead', 'dead', 'dead'],
            ['dead', 'dead', 'dead'],
            ['dead', 'dead', 'dead']
        ])
    })
    test('process cells and change state, when next state to death', () => {
        game.init([
            ['dead', 'dead', 'dead'],
            ['dead', 'alive', 'dead'],
            ['dead', 'dead', 'dead']
        ])

        const gameState = game.runGame()

        expect(gameState).toEqual([
            ['dead', 'dead', 'dead'],
            ['dead', 'dead', 'dead'],
            ['dead', 'dead', 'dead']
        ])
    })
    describe('neighbours', () => {
        test('getting most left cell neighbours', () => {
            game.init([
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead']
            ])

            const actual = game.getNeighbours({x: 0, y: 0})

            expect(sortByXY(actual)).toEqual(sortByXY([
                {x: 1, y: 0},
                {x: 0, y: 1},
                {x: 1, y: 1},
                {x: 0, y: 2},
                {x: 1, y: 2},
                {x: 2, y: 0},
                {x: 2, y: 1},
                {x: 2, y: 2}
            ]))
        })
    })
})