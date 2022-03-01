const graph = {};

graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

const findLessPathToNode = (costs, visited) => {
  let lowestCost = Number.MAX_SAFE_INTEGER;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    let cost = costs[node];

    if (cost < lowestCost && !visited.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
};

const lessPath = (graph, start) => {
  const costs = {};
  const visited = [];
  let neighbors = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      const value = graph[start][node];
      costs[node] = value || Number.MAX_SAFE_INTEGER;
    }
  });

  let node = findLessPathToNode(costs, visited);

  while (node) {
    const cost = costs[node];
    neighbors = graph[node];

    Object.keys(neighbors).forEach((neighbor) => {
      const newCost = cost + neighbors[neighbor];

      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });

    visited.push(node);
    node = findLessPathToNode(costs, visited);
  }

  return costs;
};

console.log(lessPath(graph, 'a'));
