import { times } from "ramda";
import { SnakeGame, SnakeGameCoords } from "./Snake.lib";

export const E = Symbol("E");
export const S = Symbol("S");
export const A = Symbol("A");

export const getBoard = (snake: Array<SnakeGameCoords>, apple: SnakeGameCoords | undefined): Array<Array<symbol>> => {
    const board = times(() => times(() => E, SnakeGame.WIDTH), SnakeGame.HEIGHT);
    snake.forEach((tract) => {
        board[tract.y][tract.x] = S;
    });
    if(apple != null) {
        board[apple.y][apple.x] = A;
    }
    return board; 
}