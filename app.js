"use strict";

let clicks = 1;

const TIMEOUT = 5000,
    btn = document.getElementById('clicker'),
    title = document.getElementById('title');
    timer = document.getElementById('timer'),
    score = document.getElementById('score');

btn.onclick = start;

function start() {
    const startTime = Date.now();

    timer.textContent = formatTime(TIMEOUT);
    btn.onclick = () => score.textContent = clicks++;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        timer.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    const timeout = setTimeout(() => {
        btn.onclick = null;
        timer.textContent = 'Game Over';

        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT);
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}

