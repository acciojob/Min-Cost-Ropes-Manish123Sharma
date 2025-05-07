function mincost(arr) {
  // Min-Heap using a simple array and sorting (sufficient for N <= 1000)
  let heap = [...arr];
  let cost = 0;

  // Helper to maintain min-heap property
  const heapify = () => heap.sort((a, b) => a - b);

  heapify();

  while (heap.length > 1) {
    let first = heap.shift(); // smallest
    let second = heap.shift(); // next smallest

    let newRope = first + second;
    cost += newRope;

    heap.push(newRope);
    heapify();
  }

  return cost;
}

module.exports = mincost;
