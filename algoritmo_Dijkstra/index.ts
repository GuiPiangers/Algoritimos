type hashTable<T> = {[key: string]: T}

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