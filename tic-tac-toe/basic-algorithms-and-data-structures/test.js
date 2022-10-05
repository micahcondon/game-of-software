import assert from 'assert'
import { describe, it } from 'node:test'
import { X, O, whoseTurnIsIt, isValidMove } from './algorithms.js'

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