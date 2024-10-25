function hanoi(n: number, fromRod: string, toRod: string, auxRod: string): void {
    if (n === 1) {
        console.log(`Mover disco 1 da haste ${fromRod} para a haste ${toRod}`);
        return;
    }

    // Mover os primeiros n-1 discos da haste de origem para a haste auxiliar
    hanoi(n - 1, fromRod, auxRod, toRod);

    // Mover o disco n da haste de origem para a haste de destino
    console.log(`Mover disco ${n} da haste ${fromRod} para a haste ${toRod}`);

    // Mover os n-1 discos da haste auxiliar para a haste de destino
    hanoi(n - 1, auxRod, toRod, fromRod);
}

// Exemplo de uso
const numDiscos = 3;
hanoi(numDiscos, 'A', 'C', 'B');
