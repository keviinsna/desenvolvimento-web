const SIZE = 10;
const EMPTY = '.';
const OUTER = '?';
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

const DIRECTIONS = [
    UP,
    DOWN,
    LEFT,
    RIGHT,
    UP_RIGHT,
    UP_LEFT,
    DOWN_LEFT,
    DOWN_RIGHT,
];

function squares() {
    const square = [];
    for (let i = 11; i <= 88; i++) {
        if (1 <= i % 10 && i % 10 <= 8) square.push(i);
    }
    return square;
}

function initial_board() {
    const board = new Array(100);
    for (let i = 0; i < board.length; i++) {
        board[i] = OUTER;
    }

    for (let i of squares()) board[i] = EMPTY;

    //initial positions
    board[45] = board[54] = BLACK;
    board[44] = board[55] = WHITE;

    return board;
}

function print_board(board) {
    for (let i = 0; i < SIZE; i++) {
        let line = '';
        for (let j = 0; j < SIZE; j++) line = line.concat(board[i * SIZE + j]);
        console.log(line);
    }
}

function is_valid(move) {
    return move.isInteger() && move in squares();
}

function opponent(player) {
    return player == BLACK ? WHITE : BLACK;
}

function find_bracket(move, player, board, direction) {
    let bracket = move + direction;

    if (board[bracket] == player) return;

    const opp = opponent(player);
    while (board[bracket] == opp) bracket += direction;

    const is_out = [OUTER, EMPTY].some((element) => element === board[bracket]);
    return is_out ? null : bracket;
}

function is_legal(move, player, board) {
    const legal = DIRECTIONS.some((dir) =>
        find_bracket(move, player, board, dir)
    );
    return board[move] == EMPTY && legal;
}

function legal_moves(player, board) {
    return squares().filter((sq) => is_legal(sq, player, board));
}

function some_legal_move(player, board) {
    return legal_moves(player, board).length > 0;
}

function make_move(move, player, board) {
    board[move] = player;
    for (let dir of DIRECTIONS) make_flip(move, player, board, dir);

    return board;
}

function make_flip(move, player, board, direction) {
    const bracket = find_bracket(move, player, board, direction);
    if (!bracket) return;

    let square = move + direction;
    while (square != bracket) {
        board[square] = player;
        square += direction;
    }
}

print_board(initial_board());
process.stdin.on('data', (data) => {
    let board = initial_board();
    console.log(some_legal_move(BLACK, board));
    // const move = parseInt(data);

    // if (is_legal(move, BLACK, board)) board = make_move(move, BLACK, board);

    // print_board(board);
    process.exit();
});
