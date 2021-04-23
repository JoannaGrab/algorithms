import {performance} from "perf_hooks";
import {generateList} from "./generateList.mjs";

// 
///////////////////////////////////////////////////////////////////////////////////////
let gaps = [5, 3, 1];
// [701, 301, 132, 57, 23, 10, 4, 1]; Marcin Ciura gaps

function shellSort(elements, gaps) {
    console.log(`before: ${elements}`);
    
    let numberOfElements = elements.length;

    gaps.forEach(gap => {
        for (let i = gap; i < numberOfElements; i += 1) {
            const current = elements[i];
            for (var j = i; j >= gap && elements[j - gap] > current; j -= gap) {
                elements[j] = elements[j - gap];
                // console.log(`for j: ${j}, i: ${i}, mid: ${elements}`)
            }
            elements[j] = current;
            console.log(`for j: ${j}, i: ${i}`)
            console.log(`elements: ${elements}`);
        }
    });
    console.log(`after: ${elements}`);
}
shellSort([62,83,18,53,7,17,95,86,47,69,25,28], gaps);

/*
                    a1 	a2 	a3 	a4 	a5 	a6 	a7 	a8 	a9 	a10 a11 a12

Input data 	        62 	83 	18 	53 	07 	17 	95 	86 	47 	69 	25 	28
After 5-sorting 	17 	28 	18 	47 	07 	25 	83 	86 	53 	69 	62 	95  (1,6,11) (2,7,12) (3,8) (4,9) (5,10)
After 3-sorting 	17 	07 	18 	47 	28 	25 	69 	62 	53 	83 	86 	95  (1,4,7,10) (2,5,8,11) (3,6,9,12)
After 1-sorting 	07 	17 	18 	25 	28 	47 	53 	62 	69 	83 	86 	95 
*/