// c 9 до 18

const input = [[9, 10], [15, 17], [14, 16]];

// [[10,14],[17, 18]]

const START = 9;
const END = 18;

const getWorkTime = times => {
  if (!times.length) return [];

  times.sort((a, b) => a[0] - b[0]);

  const outTimes = [times[0]];

  for (const time of times) {
    const lastTime = outTimes.at(-1);

    if (lastTime[1] >= time[0]) {
      lastTime[1] = Math.max(lastTime[1], time[1]);
    } else {
      outTimes.push(time);
    }
  }

  const result = [];

  for (let i = 0; i < outTimes.length - 1; i++) {
    result.push([outTimes[i][1], outTimes[i + 1][0]]);
  }

  const firstOut = outTimes[0][0];
  const lastOut = outTimes.at(-1)[1];

  if (firstOut > START) {
    result.unshift([START, firstOut]);
  }

  if (lastOut < END) {
    result.push([lastOut, END]);
  }

  return result;
};

console.log(getWorkTime(input));