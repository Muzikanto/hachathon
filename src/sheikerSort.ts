// Сортировка массива шейкер
import {generateArr} from "../helpers";

export function sheikerSort(arr:number[]) {
    let resultMin = [];
    let resultMax = [];
    while (arr.length > 1) {
        let min = 0, max = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[min] > arr[i]) min = i;
            if (arr[max] < arr[i]) max = i;
        }
        resultMin.push(arr[min]);
        resultMax.push(arr[max]);
        arr.splice(Math.max(min, max), 1);
        arr.splice(Math.min(min, max), 1);
    }
    if (arr.length === 1) resultMin.push(arr[0]);
    return [
        ...resultMin,
        ...resultMax.reverse()
    ];
}

export function testSheikerSort() {
    const testArr = generateArr({count: 20, otr: true});
    console.log(sheikerSort([...testArr]));
}