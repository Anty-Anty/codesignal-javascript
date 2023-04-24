//https://app.codesignal.com/arcade/code-arcade/intro-gates/bszFiQAog96G9CXKg

function solution(nCols, nRows, col, row) {
    let resultRow = nRows - row;
    let resultCols = nCols - col +1;
    return resultRow * resultCols
}
