import { performance } from "perf_hooks";
import { generateList } from "./generateList.mjs";

export function quickSort(array, start, end) {
    // let s = performance.now();

    if (start < end) {
        let pivot = partitionHoare(array, start, end);
        quickSort(array, start, pivot);
        quickSort(array, pivot + 1, end);
    }
    // let e = performance.now();
    // console.log(`it took: ${e-s} milliseconds`);
}
function partitionHoare(array, start, end) {
    let pivot = array[Math.floor((start + end) / 2)],
        i = start - 1,
        j = end + 1;

    while (true) {
        do {
            i++;
            console.log(`i: ${i}`);
        }
        while (array[i] < pivot)

        do {
            j--;
            console.log(`j: ${j}`);
        }
        while (array[j] > pivot)

        if (i >= j) return j;
        else {
            swap(array, i, j);
            console.log(array);
        }
    }
}

function swap(array, a, b) {
    let tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

// let a = generateList(3)
let a = [0,2,1];
let n = a.length;
console.log(`before: ${a}`);
quickSort(a, 0, n - 1);
console.log(`after: ${a}`);