   addOne = () => {
        const x = 1;
        x = x + 1
    }
    // x = 1

    return2 = () => {
        const x = 1;
        const y = x + 1;
        return y;
    }
    // x = 1
    // y = 2

    add = (x: number, y: number) => {
        return x + y;
    }

    mappable = (arr: number[]) => {
        arr.map((numberValue) => {
            return numberValue + 2;
        });
    }

    recusrsion = () => {
        recusrsion()
    }

    const arr = [1, 2, 3];
    add(arr);
    mappable(arr);
    recusrsion(arr);

    add((arr) => mappable(arr));

// arr [1, 2, 3]
// mappable(arr) [3, 4, 5]

// x = 1
// y = 1
// z = 2
