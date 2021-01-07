function* createIdGenerator (value) {
    let valueIdGenerator = value;
    while (true) yield valueIdGenerator++;
}

const idGenerator = createIdGenerator(1);
setInterval(() => console.log(idGenerator.next().value), 1000);

function* newFontGenerator(initValue) {
    let fontValue = initValue;
    const textForExperement = document.querySelector('.textForWatching');
    
    while(true) {
        const char = yield fontValue;
        if(char === 'up') {
           fontValue += 2
        } else if (char === 'down') {
           fontValue -= 2
        } else {
           fontValue = fontValue;
        }
        textForExperement.style.fontSize = fontValue + `px`;
    }
}

const fontGenerator = newFontGenerator(14); // 14 – стартове значення
fontGenerator.next("up").value// -> 14
fontGenerator.next("up").value// -> 16
fontGenerator.next("up").value// -> 18
fontGenerator.next().value// -> 18
fontGenerator.next("down").value// -> 16
fontGenerator.next("down").value// -> 14
fontGenerator.next("down").value// -> 12
fontGenerator.next().value// -> 12