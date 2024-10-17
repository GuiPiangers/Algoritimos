// Classe para criar grafos (grafos não direcionados)
type GraphType = {[key: string]: string[]}

export class Graph{
    adjacentList: GraphType
    numberNodes: number
    constructor(){
        this.adjacentList = {}
        this.numberNodes = 0
    }

    add(node: string){
        this.adjacentList[node] = []
    }

    addEdge(node1: string, node2: string){
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
    }
}

// Criando grafos manualmente (grafo direcionado)

const grafo = {} as GraphType
grafo["voce"] = ["alice", "bob", "claire"]
grafo["bob"] = ["anuj", "peggy"]
grafo["alice"] = ["peggy"]
grafo["claire"] = ["tom", "john"]
grafo["anuj"] = []
grafo["peggy"] = []
grafo["tom"] = []
grafo["john"] = []

// Criando uma fila para analisar a pessoa mais próxima que termina com a letra "m" 

const finishWithM = (person: string) => person[person.length - 1] === "m"

function searchClesestPeopleInGraph() {
    let peopleQueue = grafo["voce"]
    const alredySearch = [] as string[]

    while(peopleQueue.length > 0){
        const person = peopleQueue.shift()

        if(!person) return "A fila está vazia"

        if(!alredySearch.includes(person)){            
            if(finishWithM(person)){
                return `${person} termina com "m"`
            }

            peopleQueue = peopleQueue.concat(...grafo[person])
            console.log(person, grafo[person])
            alredySearch.push(person)
        }
    }
    return 'Não tem ninguem que termine com "m" na fila'
}

console.log(searchClesestPeopleInGraph())