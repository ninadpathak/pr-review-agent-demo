# pr-review-demo

A deliberately tiny library used to demonstrate the **proof-or-silence** PR reviewer.
It has a real (small) test suite. PRs against it show the reviewer posting one
evidence-backed comment on a real bug, staying quiet on a clean change, and
answering a directed `@reviewbot` request — always with a runnable failing test.
