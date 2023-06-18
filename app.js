console.log("RUNA");

const button = document.querySelector('#submit-button');

const numeInput = document.querySelector('#nume');
const prenumeInput = document.querySelector('#prenume');
const prenume2Input = document.querySelector('#prenume2');
const birthdateInput = document.querySelector('#birthdate');

const resultEl = document.querySelector("#result");

const alphabet = 'aăâbcdefghiîjklmnopqrsștțuvwxyz';

const runa = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛋᛏᛒᛖᛗᛚᛝᛞᛟ';
{/* <circle class="cls-2" cx="340.56" cy="53.25" r="6.5" />
<circle class="cls-3" cx="340.6" cy="626.42" r="6.5" />
<circle class="cls-4" cx="167.86" cy="111.05" r="6.5" />
<circle class="cls-5" cx="65.46" cy="258.97" r="6.5" />
<circle class="cls-6" cx="70.55" cy="436.11" r="6.5" />
<circle class="cls-7" cx="176.27" cy="574.55" r="6.5" />
<circle class="cls-8" cx="504.92" cy="574.53" r="6.5" />
<circle class="cls-9" cx="610.37" cy="436.02" r="6.5" />
<circle class="cls-10" cx="615.68" cy="258.99" r="6.5" />
<circle class="cls-11" cx="513.02" cy="111.05" r="6.5" /> */}

const sigiliu = {
    1: {
        x: '340.56',
        y: ' 53.25',
        color: '#FF0000'
    },
    2: {
        x: '513.02',
        y: ' 111.5',
        color: '#FFA500'
    },
    3: {
        x: '615.68',
        y: ' 258.99',
        color: '#ff0'
    },
    4: {
        x: '610.37',
        y: ' 436.02',
        color: '#bfff00'
    },
    5: {
        x: '504.92',
        y: ' 574.53',
        color: '#00cbff'
    },
    6: {
        x: '176.26',
        y: ' 574.55',
        color: '#0b00b8'
    },
    7: {
        x: '70.55',
        y: ' 436.11',
        color: '#ff3fe6'
    },
    8: {
        x: '65.46',
        y: ' 258.97',
        color: '#ccc'
    },
    9: {
        x: '176.87',
        y: ' 111.05',
        color: '#ff9ae8'
    },
}

const musicNotes = {
    1: 'Do',
    2: 'Re',
    3: 'Mi',
    4: 'Fa',
    5: 'Sol',
    6: 'La',
    7: 'Si',
    8: 'Do↑',
    9: 'Re↑',
}

const runeNames = {
    'ᚠ': 'Fehu',
    'ᚢ': 'Uruz',
    'ᚦ': 'Thurisaz',
    'ᚨ': 'Ansuz',
    'ᚱ': 'Raido',
    'ᚲ': 'Kenaz',
    'ᚷ': 'Gebo',
    'ᚹ': 'Wunjo',
    'ᚺ': 'Hagalaz',
    'ᚾ': 'Nauthiz',
    'ᛁ': 'Isa',
    'ᛃ': 'Jera',
    'ᛇ': 'Eihwaz',
    'ᛈ': 'Perthrc',
    'ᛉ': 'Algiz',
    'ᛋ': 'Sowilo',
    'ᛏ': 'Tiewaz',
    'ᛒ': 'Berkana',
    'ᛖ': 'Ehwaz',
    'ᛗ': 'Mannaz',
    'ᛚ': 'Laguz',
    'ᛝ': 'Inguz',
    'ᛞ': 'Dagaz',
    'ᛟ': 'Othala'
};


// sums all digits of a number and returns the result
const sumNumberDigits = (num) => {

    if (num < 10) {
        return num;
    }
    let res = 0;
    (num + '').split('').forEach((digit) => {
        res = res + Number(digit);
    });
    return res;
}


// letter index goes from 1 to 31
const nameToNumbersAll = (name) => {

    let res = [];

    name.toLowerCase().split('').forEach((letter) => {

        const letterIndex = alphabet.indexOf(letter) + 1;
        res.push(letterIndex);
    });

    return res;
}

// if letter index is bigger than 9 then sum the digits
const nameToNumbersSmall = (name) => {

    let res = [];

    name.toLowerCase().split('').forEach((letter) => {

        const letterIndex = alphabet.indexOf(letter) + 1;

        let newNum = sumNumberDigits(letterIndex);
        if (newNum > 9) {
            newNum = sumNumberDigits(newNum);
        }
        res.push(newNum);
    });

    return Number(res.join(''));
}

// example input: 4201542
// will sum 4+2, 2+0, 0+1, and so on
const sumEachTwoDigits = (num) => {

    let res = [];

    const digits = (num + "").split('');

    digits.forEach((digit, idx) => {

        if (idx > 0) {

            const newDigit = Number(digit) + Number(digits[idx - 1]);
            res.push(sumNumberDigits(newDigit));
        }

    });

    return Number(res.join(''));

}

const generateSumOfTwoNumbers = (num) => {

    let res = [num];

    while (num > 9) {

        const newNumber = sumEachTwoDigits(num);
        res.push(newNumber);
        num = newNumber;
    }
    return res.map((element, idx) => {
        return sumNumberDigits(element);
    });
}

const sumAllElements = (numbers) => {
    return numbers.reduce((total, element) => {
        return total + element;
    }, 0);
}

const numberToRune = (num) => {

    let runaIndex = num % 24;

    if (runaIndex === 0) {
        runaIndex = 24
    }
    return runa[runaIndex - 1];

}

const numbersToRune = (numbers) => {


    return numbers.map((num, idx) => {
        let runaIndex = num % 24;

        if (runaIndex === 0) {
            runaIndex = 24
        }
        return runa[runaIndex - 1];
    }).join('');
}

//  date inputr will be in this format 2023-05-31
const convertDateToNumbers = (date) => {

    let res = 0;

    date.split('-').forEach((el) => {

        const num = parseInt(el);
        res = res + num;
    });

    return res;
}

const runesToLetters = (runes) => {
    let res = '';
    runes.split('').forEach((runaSymbol) => {

        const runaName = runeNames[runaSymbol];

        res = res + runaName[0];
    });
    return res;
}

const getRunaGasUnique = (num) => {
    let res = [];
    (num + '').split('').forEach((digit) => {

        if (!res.includes(digit)) {
            res.push(digit);
        }
    });
    return res.join('');
}

const getNotesFromNumber = (num) => {
    let res = [];
    (num + '').split('').forEach((digit) => {
        const note = musicNotes[digit];
        res.push(note);
    });
    return res;
}

const getSvgLines = (num) => {

    let arr = (num + '').split('');
    let lines = '';

    for (let i = 1; i < arr.length; i++) {

        let prevPoint = sigiliu[arr[i - 1]];
        let currentPoint = sigiliu[arr[i]];

        let line = `
        <line
            x1="${prevPoint.x}"
            y1="${prevPoint.y}"
            x2="${currentPoint.x}" 
            y2="${currentPoint.y}"
            stroke-width="10"
            stroke="${prevPoint.color}"
            />
        `;
        lines = lines + line;
    }
    return lines;
}

const printSvg = (lines) => {

    return `
    <svg id="Layer_2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 688.2 688.2">
    <defs>
        <style>


            .cls-1,
            .cls-12,
            .cls-3 {
                stroke: #000;
            }

            .cls-1,
            .cls-10,
            .cls-11,
            .cls-12,
            .cls-2,
            .cls-3,
            .cls-4,
            .cls-5,
            .cls-6,
            .cls-7,
            .cls-8,
            .cls-9 {
                stroke-miterlimit: 10;
            }

            .cls-2 {
                fill: red;
                stroke: red;
            }

            .cls-4 {
                fill: #ff9ae8;
                stroke: #ff9ae8;
            }

            .cls-5 {
                fill: #ccc;
                stroke: #ccc;
            }

            .cls-6 {
                fill: #ff3fe6;
                stroke: #ff3fe6;
            }

            .cls-7 {
                fill: #0b00b8;
                stroke: #0b00b8;
            }

            .cls-8 {
                fill: #00cbff;
                stroke: #00cbff;
            }

            .cls-9 {
                fill: lime;
                stroke: lime;
            }

            .cls-10 {
                fill: #ff0;
                stroke: #ff0;
            }

            .cls-11 {
                fill: #f80;
                stroke: #f80;
            }

            .cls-12 {
                fill: none;
            }

            .cls-13 {
                font-size: 36px;
                font-family: BernardMT-Condensed, Bernard MT Condensed;
            }
        </style>
    </defs>
    <title>RunaSeal</title>
    <circle  cx="340.6" cy="339.83" r="286.59" 
    fill="#cce7ff" fill-opacity="0.2" stroke="#858585" stroke-width="5" />

    ${lines}

    <circle class="cls-2" cx="340.56" cy="53.25" r="6.5" />
    <circle class="cls-3" cx="340.6" cy="626.42" r="6.5" />
    <circle class="cls-4" cx="167.86" cy="111.05" r="6.5" />
    <circle class="cls-5" cx="65.46" cy="258.97" r="6.5" />
    <circle class="cls-6" cx="70.55" cy="436.11" r="6.5" />
    <circle class="cls-7" cx="176.27" cy="574.55" r="6.5" />
    <circle class="cls-8" cx="504.92" cy="574.53" r="6.5" />
    <circle class="cls-9" cx="610.37" cy="436.02" r="6.5" />
    <circle class="cls-10" cx="615.68" cy="258.99" r="6.5" />
    <circle class="cls-11" cx="513.02" cy="111.05" r="6.5" />
   <text class="cls-13"
        transform="translate(333.76 40.47)">1</text><text class="cls-13"
        transform="translate(513.02 96.91)">2</text><text class="cls-13"
        transform="translate(632.16 269.47)">3</text><text class="cls-13"
        transform="translate(627.19 452.89)">4</text><text class="cls-13"
        transform="translate(506.22 618.78)">5</text><text class="cls-13"
        transform="translate(331.7 666.17)">0</text><text class="cls-13"
        transform="translate(148.61 599.07)">6</text><text class="cls-13"
        transform="translate(43.95 448.62)">7</text><text class="cls-13"
        transform="translate(37.66 270.32)">8</text><text class="cls-13"
        transform="translate(147.76 104.27)">9</text>
</svg>
    `;
}

button.addEventListener('click', (event) => {

    const nume = numeInput.value;
    const prenume = prenumeInput.value;
    const prenume2 = prenume2Input.value;
    const birthdate = birthdateInput.value;

    // 1. aaaa
    // 2. saa

    const numeAsNumbers = nameToNumbersSmall(nume);
    const prenumeAsNumbers = nameToNumbersSmall(prenume);
    const prenume2AsNumbers = nameToNumbersSmall(prenume2);
    const birthdateAsNumber = convertDateToNumbers(birthdate)

    console.log('numeAsNumbers: ', numeAsNumbers);
    console.log('prenumeAsNumbers: ', prenumeAsNumbers);
    console.log('prenume2AsNumbers: ', prenume2AsNumbers);
    console.log('birthdate: ', birthdate);
    console.log('birthdateAsNumber: ', birthdateAsNumber);


    const sumOfNames = numeAsNumbers + prenumeAsNumbers + prenume2AsNumbers + birthdateAsNumber;

    console.log('sumOfNames: ', sumOfNames);

    const sumTwo = generateSumOfTwoNumbers(sumOfNames);
    console.log('sumTwo : ', sumTwo);

    const runes = numbersToRune(sumTwo);

    console.log('!!! runes ', runes);

    const sum = sumAllElements(sumTwo);

    const runaVehicle = numberToRune(sum);

    const runaGas = runesToLetters(runes + runaVehicle);

    const runaGasAsNumbers = nameToNumbersSmall(runaGas);

    const runaNumbersArr = (runaGasAsNumbers + '').split('').map((el) => parseInt(el));

    const runaGasSum = sumAllElements(runaNumbersArr);

    const runaGasSymbol = numberToRune(runaGasSum);

    console.log('!!! runaGas ', runaGas);
    console.log('!!! runaGasAsNumbers ', runaGasAsNumbers);
    console.log('!!! runaGasSum ', runaGasSum);
    console.log('!!! runaGasSymbol ', runaGasSymbol);


    //For each extracted rune, call the Runes nameslibrary
    //extract the first character from the names of each provided Rune
    //Transform Letters to Numbers
    //Sum of extracted number will result in runaGas, the last in the Personal Runes
    //From converted numbers array , remove all reapeating numbers
    //Resulting the Personal Seal Numbers & Musical Notes
    //SVG


    console.log('sum vehicle: ', sum);
    console.log('runaVehicle: ', runaVehicle);

    const runaResult = runes + runaVehicle + runaGasSymbol;
    console.log('runaResult: ', runaResult);

    const runaGasUnique = getRunaGasUnique(runaGasAsNumbers);
    console.log('!!! runaGasUnique ', runaGasUnique);

    const runaNotes = getNotesFromNumber(runaGasUnique);
    console.log('!!! runaNotes ', runaNotes);

    const lines = getSvgLines(runaGasUnique);

    const svg = printSvg(lines);

    svgToPng(svg, (imgData) => {
        const pngImage = document.createElement('img');
        document.body.appendChild(pngImage);
        pngImage.src = imgData;
    });

    resultEl.innerHTML = `
    <p>Cod Runic, Note Muzicale</p>
    <p>rune code: ${runaResult}</p>
    <p>${runaNotes.join(' - ')}</p>
    <div>${printSvg(lines)}</div>
    `;
});


function svgToPng(svg, callback) {
    const url = getSvgUrl(svg);
    svgUrlToPng(url, (imgData) => {
        callback(imgData);
        URL.revokeObjectURL(url);
    });
}
function getSvgUrl(svg) {
    return URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
}
function svgUrlToPng(svgUrl, callback) {
    const svgImage = document.createElement('img');
    // imgPreview.style.position = 'absolute';
    // imgPreview.style.top = '-9999px';
    document.body.appendChild(svgImage);
    svgImage.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = svgImage.clientWidth;
        canvas.height = svgImage.clientHeight;
        const canvasCtx = canvas.getContext('2d');
        canvasCtx.drawImage(svgImage, 0, 0);
        const imgData = canvas.toDataURL('image/png');
        callback(imgData);
        // document.body.removeChild(imgPreview);
    };
    svgImage.src = svgUrl;
}