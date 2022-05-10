import logo from './logo.svg';
import './style.css'
import Square from "./Components/Square/Square";
import Patterns from "./Components/Patterns/Patterns";
import {useState,useEffect} from "react";
import patterns from "./Components/Patterns/Patterns";
import Counter from "./Components/Counter/Counter";

function TicTacToe() {
  const [board,setBoard]=useState(["","","","","","","","","",])
  const [player,setPlayer]=useState('O')
  const [result,setResult]=useState({winner: 'none', state: 'none'})
  const[numberOfWins,setNumberOfWins]=useState({X:0,O:0})

  useEffect(()=>{
    winnerDetermination()
    ifIsTie()
    if (player=='O'){
      setPlayer('X')
    }else {
      setPlayer('O')
    }

  },[board])


  useEffect(()=>{
    if (result.state!='none'){
      alert(`${result.winner} is winner`)
    }
    umOfWin()

    restart()

  },[result])

  const insideSquareHandler = (square)=>{
    setBoard(board.map((val,idx)=>{
      if (square==idx && val==''){
        return player
      }else if(square==idx && val !=''){
        if (val=='X'){
          setPlayer('X')
        }else {
          setPlayer(val='O')
        }
      }
      return val
    }))


  }
  const winnerDetermination=()=>{
patterns.forEach((pattern)=>{
const firstItem=board[pattern[0]];
if (firstItem=='')return;
let isWinner=true
pattern.forEach((idx)=>{
  if (board[idx]!=firstItem){
    isWinner=false;
  }
})
  if (isWinner){
    setResult({winner: player,state: 'won'})


  }
})

  }
  const ifIsTie=()=>{
    let isFilled=true;
    board.forEach((item)=>{
      if (item==''){
        isFilled=false
      }
    })
    if (isFilled){
      setResult({winner: 'no one',state: 'tie'})
    }
  }
  const restart=()=>{
    if (result.winner!=="none"){
      setBoard(["","","","","","","","","",]);
      setPlayer(()=>{
        if (player=='X'){
          setPlayer('O')
        }else {
          setPlayer('X')
        }
      });
      setResult({winner:'none',state:'none'})
      setNumberOfWins({...numberOfWins})
    }
  }
  const umOfWin = () => {
    if (result.winner=="X"){
      setNumberOfWins((prev)=>{
        setNumberOfWins({X:(prev.X)+1,O:prev.O})
      })
    }else if (result.winner=="O"){
      setNumberOfWins((prev => {
        setNumberOfWins({X:prev.X,O:(prev.O)+1})
      }))
    }
  }


  return (
   <>
     <div className="ticTacToe">
       <div className="board">
         <div className="row">
           <Square value={board[0]} onClick={()=>insideSquareHandler(0)}/>
           <Square value={board[1]} onClick={()=>insideSquareHandler(1)}/>
           <Square value={board[2]} onClick={()=>insideSquareHandler(2)}/>
         </div>
         <div className="row">
           <Square value={board[3]} onClick={()=>insideSquareHandler(3)}/>
           <Square value={board[4]} onClick={()=>insideSquareHandler(4)}/>
           <Square value={board[5]} onClick={()=>insideSquareHandler(5)}/>
         </div>
         <div className="row">
           <Square value={board[6]} onClick={()=>insideSquareHandler(6)}/>
           <Square value={board[7]} onClick={()=>insideSquareHandler(7)}/>
           <Square value={board[8]} onClick={()=>insideSquareHandler(8)}/>
         </div>
       </div>

     </div>

     <Counter numberX={numberOfWins.X} numberO={numberOfWins.O}/>


   </>
  );
}

export default TicTacToe;
