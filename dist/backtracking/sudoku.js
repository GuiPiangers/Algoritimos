"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sudoku(board) {
    const emptyPosition = findEmpty(board);
    if (!emptyPosition) {
        return true;
    }
    const [row, col] = emptyPosition;
    for (let num = 1; num <= 9; num++) {
        if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (sudoku(board))
                return true;
            board[row][col] = 0;
        }
    }
    return false;
}
function findEmpty(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0)
                return [i, j];
        }
    }
    return null;
}
function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num)
            return false;
        if (board[i][col] === num)
            return false;
        const rowSegment = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const colSegment = 3 * Math.floor(col / 3) + i % 3;
        if (board[rowSegment][colSegment] === num)
            return false;
    }
    return true;
}
const board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
sudoku(board);
console.log(board);
//# sourceMappingURL=sudoku.js.map