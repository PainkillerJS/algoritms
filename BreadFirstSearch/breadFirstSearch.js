const graph = {};

graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];
graph.g = [];

const breathSearch = (graph, start, end) => {
  let queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();

    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }

  return false;
};

console.log(breathSearch(graph, 'c', 'a'));
