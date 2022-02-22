for (let i = 1; i < 6; i++) {
    let row = '';
    for (let j = 1; j < 6; j++) {
        row += j;
    }
    console.log(row);
}

for (let i = 1; i < 6; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}

for (let i = 5; i > 0; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}