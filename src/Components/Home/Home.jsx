import { useLoaderData } from "react-router-dom";
import Cards from "./cards";


const Home = () => {

const cards = useLoaderData();


    return (
        <div>
            <h2>This is my home</h2>
            <div className="grid grid-cols-2 gap-8 px-16 pb-10 max-md:grid-cols-1">
                {cards.map((card) => <Cards key={card.id} card={card}></Cards>)}
            </div>
        </div>
    );
};

export default Home;