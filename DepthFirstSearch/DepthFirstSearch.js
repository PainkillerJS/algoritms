const graph = {};

graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];
graph.g = [];

const deapthFirstSearch = (graph, start, end) => {
  if (start === end) return true;

  for (let neighbor of graph[start]) {
    let result = deapFirstSearch(graph, neighbor, end);

    if (result) return true;
  }

  return false;
};
