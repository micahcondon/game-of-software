import assert from 'assert'
import { describe, it } from 'node:test'
import { X, O, whoseTurnIsIt } from './algorithms.js'

describe('whoseTurnIsIt', () => {

  it('Returns X when moves list is empty', () => {
    const who = whoseTurnIsIt([])
    assert.equal(who, X)
  })

  it('Returns X when moves list length is even', () => {
    const who = whoseTurnIsIt([2,3,5,7])
    assert.equal(who, X)
  })

  it('Returns O when moves list length is odd', () => {
    const who = whoseTurnIsIt([2,3,5])
    assert.equal(who, O)
  })
})
