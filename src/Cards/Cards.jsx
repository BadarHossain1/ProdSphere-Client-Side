import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {

    const [queries, setQueries] = useState([]);

    const reverseData = () => {
        setQueries(prevData => [...prevData].reverse());
    };

    useEffect(() => {
        fetch('http://localhost:5000/AddQuery')
            .then(res => res.json())
            .then(data => setQueries(data))
    }, [])




    return (
        <div>

            <span className="flex items-center mt-6 mb-6">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">            <p className="text-4xl font-extrabold">Recent <span className="text-[#24A8DB] mt-4 text-center">Queries</span></p>
                </span>
                <span className="h-px flex-1 bg-black"></span>
            </span>

            {/* here is card */}
            <button onClick={reverseData}>reverse the shit</button>
            <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1170px] mx-auto">
                {
                    queries.slice(0, 6).map(query => <Card key={query._id} query={query}></Card>)
                }
            </div>


        </div>
    );
};

export default Cards;