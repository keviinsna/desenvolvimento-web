const body = document.body
const br = document.createElement("br")
const size = 8
var empty = '.'
var black = '1'
var white = '0'

var board = []



function initial_board(){
    for (let i =0;i<size;i++){
        for (let j=0;j<size;j++){
            board[i*size+j]=empty
        }
        
    }
    //initial positions 
    board[3*size+3]=black
    board[3*size+4]=white
    board[4*size+3]=white
    board[4*size+4]=black
}
var div_board = document.createElement("div")
function print_board(){
    for (let i =0;i<size;i++){
        let p = document.createElement("p")
        for (let j=0;j<size;j++){
            p.append(" " + board[i*size+j] + " ")
            
        }
        div_board.appendChild(p)
        div_board.appendChild(br)
        body.appendChild(div_board)
        body.appendChild(br)
      
    }
}
initial_board()
print_board()


