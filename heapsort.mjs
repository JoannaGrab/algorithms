import { performance } from "perf_hooks";
import {generateList} from "./generateList.mjs";

export function heapSort(array) {
    // console.log(`before heap sort: ${array}`);
    // let start = performance.now();

    let count = array.length;
    buildMaxHeap(array, count);
    let end = count - 1;
    while (end > 0) {
        if (array[0] > array[end]) {
            swap(array, end);
        }
        end = end - 1;
        maxHeapify(array, 1, end);
    }

    // let finish = performance.now();
    // console.log(`after heap sort: ${array}`);
    // console.log(`it took: ${finish-start} milliseconds`);
}


/*
root of the tree: i = 1;
parent(i) = i/2;
left(i) = 2i;
right(i) = 2i+1;
*/
function maxHeapify(array, index, end) {
    let left = 2 * index,
        right = 2 * index + 1,
        largest;

    if (left <= end && array[left - 1] > array[index - 1]) {
        largest = left - 1;
    } else largest = index - 1;

    if (right <= end && array[right - 1] > array[largest]) {
        largest = right - 1;
    }

    if (largest !== index - 1) {
        [array[index - 1], array[largest]] = [array[largest], array[index - 1]];

        maxHeapify(array, largest + 1, end);
    }
}

function buildMaxHeap(array, count) {
    let node = Math.floor(count / 2);
    while (node) {
        maxHeapify(array, node, count);
        node--;
    }
}

function swap(array, end) {
    [array[end], array[0]] = [array[0], array[end]];
}


// let list = generateList(5)
// heapSort(list)