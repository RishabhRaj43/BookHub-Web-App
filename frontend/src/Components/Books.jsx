import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Books = ({ setClicked }) => {
  const [book, setBook] = useState([]);  

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        // console.log(res.status);
        
        // console.log('Fetched data:', res.data);
        setBook(res.data);
      } catch (err) {
        console.error('Error fetching books:',res);
      }
    };
    getBook();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="z-50 max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-36 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are delighted to have
            <span className="text-accent"> you here!!</span>
          </h1>
          <p className="mt-9">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ab
            quae, temporibus natus doloribus rem aut! Est laudantium expedita
            excepturi eos odit ipsam sunt deserunt ea, nam nostrum ipsa
            obcaecati iusto voluptatum!
          </p>
          <Link to={"/"} onClick={() => setClicked("home")}>
            <button className="btn btn-accent mt-4 text-base">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((data, ind) => {
            return (
              <div key={ind} className="my-2">
                <Cards data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Books;
