const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'L', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'G', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'H', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'M', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'I', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'N', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'G', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ALARMING')

    assert.isTrue(result);
  });

  it("should return false if the word matrix is an empty array", function() {
    const result = wordSearch([], '')
    
    assert.isFalse(result);
  });

  it("should return true if the word is present backwards", function() {
    const result = wordSearch([
      ['G', 'N', 'I', 'H', 'G', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'G', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'H', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'M', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'I', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'N', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'G', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'LAUGHING')

    assert.isTrue(result);
  });

  it("should return true if the word is backwards vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'L', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'G', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'E', 'H', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'L', 'C', 'S', 'Y', 'E', 'M', 'L'],
      ['B', 'P', 'R', 'E', 'N', 'E', 'I', 'B'],
      ['U', 'M', 'T', 'W', 'A', 'P', 'N', 'I'],
      ['O', 'I', 'C', 'A', 'K', 'U', 'G', 'S'],
      ['E', 'S', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SIMPLE')

    assert.isTrue(result);
  });
});
