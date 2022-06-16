import React, { useEffect, useState } from "react";
import './Todo.css' 
import List from "./componentes/List";
import TodoForm from "./componentes/TodoForm";
import Item from "./componentes/Item";
import Modal from "./componentes/Modal";

const SAVED_ITEMS = "savedItems"

function Todo() {


    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([]);


    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if(savedItems){
            setItems(savedItems);
        }

    },[])

    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(text){

        let it = new Item(text)

        setItems([...items, it])
        onHideModal();

    }

    function onItemDeleted(item){

        let filteredItem = items.filter(it=>it.id != item.id)

        setItems(filteredItem)
    }

    function  onDone(item){

        let updatedItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItems);

    }


    function onHideModal(){
        setShowModal(false)
        
    }


    return (<div className="container"> 
        <header className="heater">
            <h1>Lista de Compras</h1>

            <button onClick={()=> {setShowModal(true)}} className="addButton">+</button>

        </header>
        
    <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

    <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>


</div>)

}

export default Todo