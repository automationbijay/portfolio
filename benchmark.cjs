const { performance } = require('perf_hooks');

const data = [];
for (let i = 0; i < 10000; i++) {
    data.push({ Script: `Script_${i}`, Price: 100 });
}
// Put "NEPSE Index" at the end to maximize traversal time
data.push({ Script: "NEPSE Index", Price: 200 });

function testForOf(data) {
    for (const item of data) {
        if (item.Script === "NEPSE Index") {
            return item;
        }
    }
    return null;
}

function testFind(data) {
    return data.find(item => item.Script === "NEPSE Index") || null;
}

// Warmup
for (let i = 0; i < 1000; i++) {
    testForOf(data);
    testFind(data);
}

const ITERATIONS = 100000;

let start = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
    testForOf(data);
}
let end = performance.now();
const forOfTime = end - start;
console.log(`For...of: ${forOfTime.toFixed(2)} ms`);

start = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
    testFind(data);
}
end = performance.now();
const findTime = end - start;
console.log(`Array.find: ${findTime.toFixed(2)} ms`);
