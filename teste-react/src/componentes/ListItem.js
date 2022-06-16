import React from "react";
import Card from "./Card";

function DoneImg(props){

    if(props.done){
       return( <img src="./assets/done.png"></img>)
    }else{
       return( <img src="./assets/info.png"></img>)
    }

}



function ListItem(props){

    return(
             <li>
               
                    <Card className={props.item.done?"done item":"item"}>
                {props.item.text}

                <div>
                <button  onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                <button onClick={()=>{props.onItemDeleted(props.item)}}><img src="./assets/delete.png"></img></button>
                </div>
                    </Card>

             </li>

        )}

export default ListItem;