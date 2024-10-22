function maiorSbstringCommum(palavra1: string, palavra2: string) {
    const lines = Array<number>(palavra2.length + 1).fill(0)
    const columns = Array<number>(palavra1.length + 1).fill(0)
    let table = [...lines].map(()=> [...columns])

    for(let line = 1; line < lines.length;  line++){
        for(let column = 1; column < columns.length; column++){
            if(palavra1[line - 1] === palavra2[column - 1]){
                table[line][column] = table[line - 1][column - 1] + 1
            } else{
                table[line][column] = Math.max(table[line - 1][column], table[line][column - 1])
            }
        }
    }
    console.log(table)
}

maiorSbstringCommum('fish', 'fosh')

