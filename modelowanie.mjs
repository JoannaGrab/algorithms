import { bubbleSort } from "./bubblesort.mjs";
import { heapSort } from "./heapsort.mjs";
import { performance } from "perf_hooks";
import { generateList } from "./generateList.mjs";

class Report {
    constructor(duration) {
        this.duration = duration
    }

}
class InputData {
    constructor(getData, name){
        this.getData = getData
        this.name = name
    }
}

class Experiment {
    constructor(inputData, algorithm) {
        this.algorithm = algorithm
        this.inputData = inputData
    }
    run(n = 1) {
        let durations = []

        this.inputData.forEach(input => {
            let current = n, duration = 0
            while (current > 0) {
                let start = performance.now();
                this.algorithm(input.getData())
                let end = performance.now();
                duration += end - start
                current--
            }
            durations.push({time: duration / n, name: input.name})
        });

        return new Report(durations);
    }
}

let n = 100
let inputData = [
    new InputData(() => generateList(10), "HeapSort 10"),
    new InputData(() => generateList(100), "HeapSort 100"),
    new InputData(() => generateList(1000), "HeapSort 1000"),
]

let algorithm = (input) => heapSort(input)
const exp2 = new Experiment(inputData, algorithm)
console.log(exp2.run(n))
