function moving(input) {
    const freeSpace = input[0] * input[1] * input[2];
    let boxes = 0, i = 3;

    while (input[i] != 'Done' && freeSpace > boxes) {
        boxes += Number(input[i]);
        i++;
    }

    console.log(
        freeSpace > boxes
            ? `${freeSpace - boxes} Cubic meters left.`
            : `No more free space! ` +
                `You need ${boxes - freeSpace} Cubic meters more.`
    );
}

moving([10, 1, 2, 4, 6, 'Done']);