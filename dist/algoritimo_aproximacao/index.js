"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let estadosAbranger = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
const estacoes = {};
estacoes["kum"] = new Set(["id", "nv", "ut"]);
estacoes["kdois"] = new Set(["wa", "id", "mt"]);
estacoes["ktres"] = new Set(["or", "nv", "ca"]);
estacoes["kquatro"] = new Set(["nv", "ut"]);
estacoes["kcinco"] = new Set(["ca", "az"]);
const conjuntoFinal = new Set();
function getBetterStation() {
    while (estadosAbranger.size > 0) {
        let melhorEstacao = undefined;
        let estadosCobertos = new Set();
        for (let estacao in estacoes) {
            let estadoPorEstacao = estacoes[estacao];
            const cobertos = new Set([...estadosAbranger].filter(estado => estadoPorEstacao.has(estado)));
            if (cobertos.size > estadosCobertos.size) {
                melhorEstacao = estacao;
                estadosCobertos = cobertos;
            }
        }
        conjuntoFinal.add(melhorEstacao);
        estadosAbranger = new Set([...estadosAbranger].filter(estado => !estadosCobertos.has(estado)));
    }
}
getBetterStation();
console.log(conjuntoFinal);
//# sourceMappingURL=index.js.map