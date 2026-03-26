# ES6 Pong

A classic Pong game built with vanilla JavaScript (ES6 classes) and the HTML5 Canvas API.

## Gameplay

Two paddles, one ball. Score points by getting the ball past your opponent's paddle. The ball reverses direction on wall and paddle collisions

## Controls

| Player | Control | Action |
|--------|---------|--------|
| Player 1 (left) | `W` | Move up |
| Player 1 (left) | `S` | Move down |
| Player 2 (right) | Mouse | Move paddle to cursor position |

## How to Play

Just open `index.html` in a browser — no build step, no dependencies.

```
open index.html
```

## Project Structure

```
ES6-Pong/
├── index.html   # Canvas setup and script entry point
└── pong.js      # Game logic (ES6 classes)
```

## Implementation

Written with ES6 classes:

- **`Vector`** — 2D position/velocity
- **`Rectangle`** — Base shape with collision boundary getters
- **`Player`** (extends Rectangle) — Paddle with score tracking
- **`Ball`** (extends Rectangle) — Ball with velocity
- **`Pong`** — Game loop, rendering, collision detection, and scoring

