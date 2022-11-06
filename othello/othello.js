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
const DOWN_RIGHT = 11;
const DOWN_LEFT = 9;
const UP_LEFT = -11;

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

let player = BLACK;
let board = initial_board();
let score_white = 2;
let score_black = 2;

const black_turn = document.getElementById('black_turn');
const white_turn = document.getElementById('white_turn');
const text_score_black = document.getElementById('score_black');
const text_score_white = document.getElementById('score_white');

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
    board[45] = board[54] = WHITE;
    board[44] = board[55] = BLACK;

    return board;
}

function print_board(board) {
    for (let sq of squares()) {
        const house = document.getElementById(sq.toString());
        if (house.hasChildNodes()) house.removeChild(house.lastChild);
        if (board[sq] == BLACK) {
            const black_piece = document.createElement('span');
            black_piece.setAttribute('class', 'piece black-piece');
            house.appendChild(black_piece);
        } else if (board[sq] == WHITE) {
            const white_piece = document.createElement('span');
            white_piece.setAttribute('class', 'piece white-piece');
            house.appendChild(white_piece);
        }
    }
}

function is_valid(move) {
    const inSquares = squares().some((sq) => sq == move);
    return Number.isInteger(move) && inSquares;
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

function score(board) {
    let player = BLACK;
    let mine = (theirs = 0);
    const opp = opponent(player);

    for (sq of squares()) {
        if (board[sq] == opp) theirs++;
        else if (board[sq] == player) {
            mine++;
        }
    }
    return [mine, theirs];
}

function suggest_moves(player, board) {
    const moves = legal_moves(player, board);
    for (let move of moves) {
        const house = document.getElementById(move.toString());
        const suggested_house = document.createElement('span');
        suggested_house.setAttribute('class', 'piece');
        house.appendChild(suggested_house);
    }
}

function handleClickSquare(event) {
    const move = parseInt(event.currentTarget.id);
    if (is_legal(move, player, board) && is_valid(move)) {
        make_move(move, player, board);
        player = next_player(board, player);
        print_board(board);
        suggest_moves(player, board);

        [score_black, score_white] = score(board);

        text_score_black.textContent = `Score Black: ${score_black}`;
        text_score_white.textContent = `Score White: ${score_white}`;

        if (player == null) {
            white_turn.style.visibility = 'hidden';
            black_turn.style.visibility = 'hidden';
            if (score_white == score_black) alert(" IT'S A TIE");
            else if (score_black < score_white) alert('White WINS!');
            else alert('Black WINS!');
        }

        if (player == BLACK) {
            white_turn.style.visibility = 'hidden';
            black_turn.style.visibility = 'visible';
        } else {
            black_turn.style.visibility = 'hidden';
            white_turn.style.visibility = 'visible';
        }
    }
}

function play() {
    print_board(board);
    suggest_moves(player, board);
    for (let sq of squares()) {
        const house = document.getElementById(sq.toString());

        house.addEventListener('click', handleClickSquare);

        const i = Math.floor(sq / 10);
        const j = sq % 10;

        if (i % 2 == 0)
            house.style.backgroundColor = j % 2 != 0 ? 'green' : 'lightgreen';
        else house.style.backgroundColor = j % 2 != 0 ? 'lightgreen' : 'green';
    }
    white_turn.style.visibility = 'hidden';
    text_score_black.textContent = `Score Black: ${score_black}`;
    text_score_white.textContent = `Score White: ${score_white}`;
}
play();
