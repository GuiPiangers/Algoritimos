"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function knapsack(values, weights, capacity) {
    const n = values.length;
    // Criação da tabela (matriz) para armazenar os valores intermediários.
    const dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));
    // Construção da tabela dp em formato bottom-up.
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            // Se o peso do item i-1 é maior que a capacidade atual, ele não pode ser incluído
            if (weights[i - 1] > w) {
                dp[i][w] = dp[i - 1][w]; // Valor do item anterior
            }
            else {
                // Valor máximo entre incluir ou não o item
                dp[i][w] = Math.max(dp[i - 1][w], // Não incluir o item i-1
                dp[i - 1][w - weights[i - 1]] + values[i - 1] // Incluir o item i-1
                );
            }
        }
    }
    // O valor máximo estará em dp[n][capacity].
    console.log(dp);
    return dp[n][capacity];
}
// Exemplo de uso:
const values = [10, 3, 9, 5, 6]; // Valores dos itens
const weights = [3, 1, 2, 2, 1]; // Pesos dos itens
const capacity = 6; // Capacidade máxima da mochila
const maxVal = knapsack(values, weights, capacity);
console.log(`O valor máximo que pode ser obtido é: ${maxVal}`);
//# sourceMappingURL=problemaMochila.js.map