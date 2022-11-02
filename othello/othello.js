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

const OPTIONS_GAME = {
    random: random_strategy,
    human: human_strategy,
};

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

function next_player(board, prev_player) {
    const opp = opponent(prev_player);

    if (some_legal_move(opp, board)) return opp;
    else if (some_legal_move(prev_player, board)) return prev_player;

    return null;
}

function score(player, board) {
    let mine = (theirs = 0);
    const opp = opponent(player);

    for (sq in squares()) {
        if (board[sq] == opp) theirs++;
        else if (board[sq] == mine) mine++;
    }

    return mine - theirs;
}

function play(black_strategy, white_strategy) {
    const board = initial_board();
    let player = BLACK;
    const strategy = (player) =>
        player == BLACK ? black_strategy : white_strategy;
    while (player != null) {
        const move = get_move(strategy(player), player, board);
        make_move(move, player, board);
        player = next_player(board, player);
    }

    return [board, score(player, board)];
}

function get_move(strategy, player, board) {
    const copy_board = JSON.parse(JSON.stringify(board));
    const move = strategy(player, copy_board);
    if (!is_legal(move, player, board) || !is_valid(move)) {
        console.log('MOVIMENTO ILEGAL');
        return null;
    }
    return move;
}

function random_strategy(player, board) {
    const moves = legal_moves(player, board);
    return moves[Math.floor(Math.random() * moves.length)];
}

function human_strategy(player, board) {
    return;
}

function get_strategy(player) {
    let strategy;

    console.log(`${player}, choose your game strategy: `);
    console.log(`Options: random and human`);

    // strategy = process.stdin.on('data', (data) => {
    //     strategy = OPTIONS_GAME[data];
    //     return strategy;
    //     process.exit();
    // });

    return strategy;
}

function main() {
    const board = initial_board();
    const strategy = get_strategy(PLAYERS.BLACK);
    console.log(strategy(BLACK, board));
}

main();
