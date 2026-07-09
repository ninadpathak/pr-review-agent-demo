// Date helpers. Clean baseline — used by the "clean PR" demo.
function daysBetween(a, b) {
  const ms = new Date(b).getTime() - new Date(a).getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}
module.exports = { daysBetween };
