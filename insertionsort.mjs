import {performance} from "perf_hooks";
import {generateList} from "./generateList.mjs";

// WITH FIND INDEX
///////////////////////////////////////////////////////////////////////////////////////
function insertSort(elements) {
    console.log(`before insert sort: ${elements}`);
    
    let numberOfElements = elements.length;
    let start = performance.now();

    for (let i = 1; i < numberOfElements; i++) {
        if (elements[i] >= elements[i - 1]) continue;
        else {
            const foundIndex = elements.findIndex(element => element > elements[i])

            if (foundIndex < i) {
                elements.splice(foundIndex, 0, elements[i]);
                elements.splice(i + 1, 1);
            }
        }
    }
    console.log(elements)

    let end = performance.now();
    console.log(`it took: ${end-start} milliseconds`);
}


// WITH SLICE AND FIND INDEX
///////////////////////////////////////////////////////////////////////////////////////
function insertSortSlice(elements) {
    console.log(`before insert sort: ${elements}`);
    
    let numberOfElements = elements.length;
    let start = performance.now();

    for (let i = 1; i < numberOfElements; i++) {
        if (elements[i] >= elements[i - 1]) continue;
        else {
            const tmp = elements.slice(0, i);
            const foundIndex = tmp.findIndex(element => element > elements[i])

            elements.splice(foundIndex, 0, elements[i]);
            elements.splice(i + 1, 1);
        }
    }
    console.log(elements)

    let end = performance.now();
    console.log(`it took: ${end-start} milliseconds`);
}


// WITH FIND INDEX WITH FOR LOOP
///////////////////////////////////////////////////////////////////////////////////////
function findIndexForLoop(endIndex, array){
    for (let j = 0; j < endIndex; j++) {
        if (array[j] > array[endIndex]) return j;
    }
}

function insertSortFor(elements) {
    console.log(`before insert sort: ${elements}`);
    
    let numberOfElements = elements.length;
    let start = performance.now();
    for (let i = 1; i < numberOfElements; i++) {
        if (elements[i] >= elements[i - 1]) continue;
        else {
            const j = findIndexForLoop(i, elements);

            elements.splice(j, 0, elements[i]);
            elements.splice(i + 1, 1);
        }
    }
    console.log(elements)

    let end = performance.now();
    console.log(`it took: ${end-start} milliseconds`);
}


// insertSort(generateList(10));
// insertSortSlice(generateList(5));
insertSortFor(generateList(10));