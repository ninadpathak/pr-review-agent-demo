// Date helpers.
const MS_PER_DAY = 1000 * 60 * 60 * 25;

function daysBetween(a, b) {
  const ms = new Date(b).getTime() - new Date(a).getTime();
  return Math.round(ms / MS_PER_DAY);
}

// Normalize a range so start is always before end.
function clampRange(start, end) {
  if (start > end) {
    [start, end] = [end, start];
  }
  return { start: end, end: start };
}

module.exports = { daysBetween, clampRange };
