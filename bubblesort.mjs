import {generateList} from "./generateList.mjs";

// SORTING WITH NORMAL SUBSTITUTION
/////////////////////////////////////////////////////////////////////////////////
function bubbleSort(elements) {
    console.log(`before bubble sort: ${elements}`);

    let numberOfElements = elements.length;
    let start = new Date().getTime();

    for (let i = 0; i < numberOfElements; i++) {
        for (let j = 0; j < numberOfElements - 1; j++) {
            if (elements[j] > elements[j + 1]) {
                let tmp = elements[j];
                elements[j] = elements[j + 1];
                elements[j + 1] = tmp;
            }
        }
    }
    let end = new Date().getTime();
    console.log(`after bubble sort: ${elements}`);
    console.log(`it took: ${end-start} milliseconds`);
}


// SORTING WITH SPLICE SUBSTITUTION
/////////////////////////////////////////////////////////////////////////////////
function bubbleSortSplice(elements) {
    console.log(`before bubble sort with splice: ${elements}`);

    let numberOfElements = elements.length;
    let start = new Date().getTime();

    for (let i = 0; i < numberOfElements; i++) {
        for (let j = 0; j < numberOfElements - 1; j++) {
            if (elements[j] > elements[j + 1]) {
                let tmp = elements[j];
                elements.splice(j, 1, elements[j + 1]);
                elements.splice(j + 1, 1, tmp)
            }
        }
    }
    let end = new Date().getTime();
    console.log(`after bubble sort with splice: ${elements}`);
    console.log(`it took: ${end-start} milliseconds`);
}

// SORTING WITH NORMAL SUBSTITUTION AND WHILE LOOP
/////////////////////////////////////////////////////////////////////////////////
function bubbleSortWhile(elements) {
    console.log(`before while-bubble sort: ${elements}`);

    let numberOfElements = elements.length;
    let start = new Date().getTime();
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < numberOfElements; i++) {
            if (elements[i] > elements[i + 1]) {
                let tmp = elements[i];
                elements[i] = elements[i + 1];
                elements[i + 1] = tmp;
                swapped = true;
            }
        }
    }
    while (swapped)

    let end = new Date().getTime();
    console.log(`after while-bubble sort: ${elements}`);
    console.log(`it took: ${end-start} milliseconds`);
}




bubbleSortWhile(generateList(5))