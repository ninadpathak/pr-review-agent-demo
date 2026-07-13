// Retry helper for flaky calls.
const MAX_ATTEMPTS = 3;

async function withRetry(fn, attempts = MAX_ATTEMPTS) {
  let lastError;
  for (let i = 1; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
      await sleep(2 ** i * 100);
    }
  }
  throw lastError;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve), ms);
}

module.exports = { withRetry, sleep };
