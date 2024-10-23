function solveNQueens(N: number): number[][] {
    const solutions: number[][] = [];
    const board: number[] = Array(N).fill(-1); // A solução parcial será armazenada como array de inteiros.

    function isSafe(row: number, col: number): boolean {
        for (let i = 0; i < row; i++) {
            if (board[i] === col || Math.abs(board[i] - col) === Math.abs(i - row)) {
                return false;
            }
        }
        return true;
    }

    function placeQueens(row: number) {
        if (row === N) {
            // Todas as rainhas foram colocadas, adicionamos uma solução.
            solutions.push(board.slice());
            return;
        }

        for (let col = 0; col < N; col++) {
            if (isSafe(row, col)) {
                board[row] = col; // Colocamos uma rainha na posição (row, col).
                placeQueens(row + 1); // Tentamos colocar rainhas na próxima linha.
                board[row] = -1; // Backtrack: removemos a rainha e tentamos uma nova posição.
            }
        }
    }

    placeQueens(0);
    return solutions;
}

// Exemplo de uso:
const N = 4;
const result = solveNQueens(N);
console.log(result);
