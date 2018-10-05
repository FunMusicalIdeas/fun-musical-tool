import rotateCycle from '../../../src/utilities/rotateCycle'
import * as to from '../../../src/utilities/to'

describe('rotate cycle', () => {
    it('rotates a cycle', () => {
        expect(rotateCycle([0, 1, 1, 0, 1], to.Offset(1))).toEqual([1, 1, 0, 1, 0])
        expect(rotateCycle([0, 1, 1, 0, 1], to.Offset(0))).toEqual([0, 1, 1, 0, 1])
        expect(rotateCycle([0, 1, 1, 0, 1], to.Offset(-1))).toEqual([1, 0, 1, 1, 0])
    })
})
