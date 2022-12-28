import {Coordinate, game} from "./models";

const sortByXY = (coordinates: Coordinate []) => {
    return coordinates
        .sort((c1, c2) => c1.x - c2.x)
        .sort((c1, c2) => c1.y - c2.y)
}

describe('Conway game of life test', () => {
    test(', when not initialized', () => {
        const gameState = game.runGame()

        expect(gameState).toEqual([])
    })
    test('test empty initial state', () => {
        game.init([])

        const gameState = game.runGame()

        expect(gameState).toEqual([])
    })
    test('one iteration transition to death, when initialy one alive', () => {
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
    describe('next state', () => {
        test('make center cell alive when 3 dead neighbours', () => {
            game.init([
                ['dead', 'dead', 'dead'],
                ['alive', 'dead', 'alive'],
                ['alive', 'alive', 'alive'],
            ])

            const gameState = game.getNextState()

            expect(gameState).toEqual([
                ['alive', 'alive', 'alive'],
                ['dead', 'alive', 'dead'],
                ['dead', 'dead', 'dead']
            ])
        })
        test('leave center cell dead, when no 3 dead neighbours', () => {
            game.init([
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead'],
                ['alive', 'alive', 'alive'],
            ])

            const gameState = game.getNextState()

            expect(gameState).toEqual([
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead'],
                ['alive', 'alive', 'alive']
            ])
        })
        test('make dead, when 2 dead neighbours (overpopulation)', () => {
            game.init([
                ['alive', 'alive', 'dead'],
                ['alive', 'dead', 'dead'],
                ['alive', 'alive', 'alive'],
            ])

            const gameState = game.getNextState()

            expect(gameState).toEqual([
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead'],
            ])
        })
        test('make dead, when 3 dead neighbours (overpopulation)', () => {
            game.init([
                ['alive', 'alive', 'dead'],
                ['dead', 'alive', 'dead'],
                ['alive', 'alive', 'alive'],
            ])

            const gameState = game.getNextState()

            expect(gameState).toEqual([
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead'],
            ])
        })
        test('leave alive, when not overpopulated', () => {
            game.init([
                ['dead', 'dead', 'dead'],
                ['alive', 'dead', 'dead'],
                ['alive', 'alive', 'alive'],
            ])

            const gameState = game.getNextState()

            expect(gameState).toEqual([
                ['dead', 'dead', 'dead'],
                ['alive', 'dead', 'dead'],
                ['alive', 'alive', 'alive'],
            ])
        })
    })
    describe('neighbours', () => {
        test('getting left corner cell neighbours', () => {
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
        test('getting left middle cell neighbours', () => {
            game.init([
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead']
            ])

            const actual = sortByXY(game.getNeighbours({x: 0, y: 1}))
            const expected = sortByXY([
                {x: 1, y: 0},
                {x: 0, y: 0},
                {x: 1, y: 1},
                {x: 0, y: 2},
                {x: 1, y: 2},
                {x: 2, y: 0},
                {x: 2, y: 1},
                {x: 2, y: 2}
            ])

            expect(actual).toEqual(expected)
        })
        test('getting right corner neighbours', () => {
            game.init([
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead'],
                ['dead', 'dead', 'dead']
            ])

            const actual = sortByXY(game.getNeighbours({x: 0, y: 2}))
            const expected = sortByXY([
                {x: 0, y: 1},
                {x: 1, y: 1},
                {x: 2, y: 1},
                {x: 1, y: 2},
                {x: 0, y: 0},
                {x: 1, y: 0},
                {x: 2, y: 0},
                {x: 2, y: 2}
            ])

            expect(actual).toEqual(expected)
        })
    })
})
