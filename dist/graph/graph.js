"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
class Graph {
    adjacentList;
    numberNodes;
    constructor() {
        this.adjacentList = {};
        this.numberNodes = 0;
    }
    add(node) {
        this.adjacentList[node] = [];
    }
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}
exports.Graph = Graph;
// Criando grafos manualmente (grafo direcionado)
const grafo = {};
grafo["voce"] = ["alice", "bob", "claire"];
grafo["bob"] = ["anuj", "peggy"];
grafo["alice"] = ["peggy"];
grafo["claire"] = ["tom", "john"];
grafo["anuj"] = [];
grafo["peggy"] = [];
grafo["tom"] = [];
grafo["john"] = [];
// Criando uma fila para analisar a pessoa mais próxima que termina com a letra "m" 
// Pesquisa em largura
const finishWithM = (person) => person[person.length - 1] === "m";
function searchClesestPeopleInGraph() {
    let peopleQueue = grafo["voce"];
    const alredySearch = [];
    while (peopleQueue.length > 0) {
        const person = peopleQueue.shift();
        if (!person)
            return "A fila está vazia";
        if (!alredySearch.includes(person)) {
            if (finishWithM(person)) {
                return `${person} termina com "m"`;
            }
            peopleQueue = peopleQueue.concat(...grafo[person]);
            console.log(person, grafo[person]);
            alredySearch.push(person);
        }
    }
    return 'Não tem ninguem que termine com "m" na fila';
}
console.log(searchClesestPeopleInGraph());
//# sourceMappingURL=graph.js.map