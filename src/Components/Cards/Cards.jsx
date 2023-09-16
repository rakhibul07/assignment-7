import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleAddCourse}) => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="lg:w-3/4 ">
            <h1 className="text-3xl font-medium text-center mb-4">Course Registration</h1>
        <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          
            {
                cards.map(card =><Card card={card} key={card.id} handleAddCourse={handleAddCourse}></Card>)
            }
        </div>
        </div>
    );
};

export default Cards;