function reduce (source) {
  let result = ''
  let currentSymbol = ''
  let symbolsCount = 0
  Array.prototype.forEach.call(source, symbol => {
    if (currentSymbol !== symbol) {
      if (symbolsCount) {
        result += `${symbolsCount > 1 ? symbolsCount : ''}${currentSymbol}`
      }
      symbolsCount = 1
      currentSymbol = symbol
    } else {
      symbolsCount++
    }
  })
  if (symbolsCount) {
    result += `${symbolsCount > 1 ? symbolsCount : ''}${currentSymbol}`
  }
  return result
}

module.exports = reduce