const SIZE = 8;
const EMPTY = '.';
const BLACK = '1';
const WHITE = '0';

const PIECES = [EMPTY, BLACK, WHITE];
const PLAYERS = { BLACK: 'Black', WHITE: 'White' };

const UP = -10;
const DOWN = 10;
const LEFT = -1;
const RIGHT = 1;
const UP_RIGHT = -9;
const DOWN_RIGHT = 1;
const DOWN_LEFT = 9;
const UP_LEFT = 11;

DIRECTIONS = [UP, DOWN, LEFT, RIGHT, UP_RIGHT, UP_LEFT, DOWN_LEFT, DOWN_RIGHT];

function squares() {
    const square = [];
    let i = 11;
    while (i <= 88) {
        if (1 <= i % 10 && i % 10 <= 8) square.push(i++);
        else i++;
    }
    return square;
}

function initial_board() {
    const board = [];
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            board[i * SIZE + j] = EMPTY;
        }
    }
    //initial positions
    board[3 * SIZE + 3] = BLACK;
    board[3 * SIZE + 4] = WHITE;
    board[4 * SIZE + 3] = WHITE;
    board[4 * SIZE + 4] = BLACK;

    return board;
}

function print_board(board) {
    let line = '';
    for (let i = 0; i < SIZE; i++) {
        for (j = 0; j < SIZE; j++) line = line.concat(board[i * SIZE + j], ' ');
        line = line.concat('\n');
    }
    console.log(line);
}

function is_valid(move) {
    return move.isInteger() && move in squares();
}

function opponent(player) {
    return player == BLACK ? WHITE : BLACK;
}

function find_bracket(square, player, board, direction) {}

print_board(initial_board());
