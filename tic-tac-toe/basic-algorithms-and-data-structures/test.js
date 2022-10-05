import assert from 'assert'
import { describe, it } from 'node:test'
import {
  X, O,
  whoseTurnIsIt,
  isValidMove,
  generateWinningSets,
  setsAreEquivalent
} from './algorithms.js'

describe('whoseTurnIsIt', () => {

  it('Returns X when moves list is empty', () => {
    const who = whoseTurnIsIt(new Set())
    assert.equal(who, X)
  })

  it('Returns X when moves list length is even', () => {
    const who = whoseTurnIsIt(new Set([2,3,5,7]))
    assert.equal(who, X)
  })

  it('Returns O when moves list length is odd', () => {
    const who = whoseTurnIsIt(new Set([2,3,5]))
    assert.equal(who, O)
  })

})

describe('isValidMove', () => {

  it('Returns false if move is not an integer', () => {
    const valid = isValidMove(0.5, 3, new Set())
    assert.equal(valid, false)
  })

  it('Returns false if move is < 1', () => {
    const valid = isValidMove(0, 3, new Set())
    assert.equal(valid, false)
  })

  it('Returns false if move is greater than board size', () => {
    const valid = isValidMove(10, 3, new Set())
    assert.equal(valid, false)
  })

  it('Returns false if move is already taken', () => {
    const valid = isValidMove(7, 3, new Set([1,7,3,9]))
    assert.equal(valid, false)
  })

  it('Returns true if move is within board boundaries and not already taken', () => {
    const valid = isValidMove(5, 3, new Set([1,7,3,9]))
    assert.equal(valid, true)
  })

})

describe('setsAreEquivalent', () => {

  it('returns false if sets are different', () => {
    assert.equal(
      setsAreEquivalent(new Set([1,2,3]), new Set([])),
      false
    )
    assert.equal(
      setsAreEquivalent(new Set([1,2,3]), new Set([1,2,4])),
      false
    )
  })

  it('returns true if sets are equivalent', () => {
    assert.equal(
      setsAreEquivalent(new Set([1,2,3]), new Set([1,2,3])),
      true
    )
    assert.equal(
      setsAreEquivalent(new Set([1,2,3]), new Set([3,1,2])),
      true
    )
  })
})

describe('generateWinningSets', () => {

  it('generates the correct number of sets', () => {
    assert.equal(generateWinningSets(3).length, 8)
    assert.equal(generateWinningSets(4).length, 10)
    assert.equal(generateWinningSets(7).length, 16)
  })

  it('generates a set for each row', () => {
    const expectedRows = [
      new Set([1,2,3]),
      new Set([4,5,6]),
      new Set([7,8,9])
    ]
    const winningSets = generateWinningSets(3)
    expectedRows.forEach((row) => {
      assert.ok(
        winningSets.find(set => setsAreEquivalent(set, row)),
        `Expected to find row ${Array.from(row)}`
      )
    })
  })

  it('generates a set for each column', () => {
    const expectedColumns = [
      new Set([1,4,7]),
      new Set([2,5,8]),
      new Set([3,6,9])
    ]
    const winningSets = generateWinningSets(3)
    expectedColumns.forEach((column) => {
      assert.ok(
        winningSets.find(set => setsAreEquivalent(set, column)),
        `Expected to find column ${Array.from(column)}`
      )
    })
  })

  it('generates a set for each diagonal', () => {
    const expectedDiagonals = [
      new Set([1,5,9]),
      new Set([3,5,7])
    ]
    const winningSets = generateWinningSets(3)
    expectedDiagonals.forEach((diagonal) => {
      assert.ok(
        winningSets.find(set => setsAreEquivalent(set, diagonal)),
        `Expected to find diagonal ${Array.from(diagonal)}`
      )
    })
  })

})