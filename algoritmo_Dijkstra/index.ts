export type hashTable<T> = {[key: string]: T}

const grafo = {} as hashTable<hashTable<number>>
grafo["inicio"] = {} 
grafo["inicio"]["a"] = 6
grafo["inicio"]["b"] = 2

grafo["a"] = {}
grafo["a"]["fim"] = 1

grafo["b"] = {}
grafo["b"]["fim"] = 5

grafo["fim"] = {}

const custos = {} as hashTable<number>

custos["a"] = 6
custos["b"] = 2
custos["fim"] = Infinity

const pais = {} as hashTable<string | undefined>

pais["a"] = "inicio"
pais["b"] = "inicio"
pais["fim"] = undefined

const processados = [] as string[]

function acharMaisBarato(custos: hashTable<number>): string | undefined{
    let maisBaratoPreco = Infinity
    let maisBarato = undefined
    for (let custoKey in custos){
        if(custos[custoKey] < maisBaratoPreco && !processados.includes(custoKey)){
            maisBaratoPreco = custos[custoKey]
            maisBarato = custoKey
        }
    }
    return maisBarato
}

function calculateSheapestTrade (){
    let node = acharMaisBarato(custos)
    while (node) {
        const custo = custos[node]
        const vizinhos = grafo[node]

        for (let visinho in vizinhos) {
            const novoCusto = custo + vizinhos[visinho]
            if(novoCusto < custos[visinho]){
                custos[visinho] = novoCusto
                pais[visinho] = node
            }
        }
        processados.push(node)
        node = acharMaisBarato(custos)
    }
    console.log(pais)
}
calculateSheapestTrade()