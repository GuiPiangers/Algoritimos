"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maiorSbstringCommum(palavra1, palavra2) {
    const lines = Array(palavra2.length + 1).fill(0);
    const columns = Array(palavra1.length + 1).fill(0);
    let table = [...lines].map(() => [...columns]);
    for (let line = 1; line < lines.length; line++) {
        for (let column = 1; column < columns.length; column++) {
            if (palavra1[line - 1] === palavra2[column - 1]) {
                table[line][column] = table[line - 1][column - 1] + 1;
            }
            else {
                table[line][column] = 0;
            }
        }
    }
    console.log(table);
}
maiorSbstringCommum('fish', 'hish');
//# sourceMappingURL=problemaSubstringComum.js.map