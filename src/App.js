import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getComments = async () => {
  axios.get('https://jsonplaceholder.typicode.com/comments')
  .then(function (response) {
    setItems(response.data);
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    };
    getComments();
  },[]);

  return (
     <>
       {items.map((item, index) => {
          return (
            <div key={item.index}>
             <h3>{item.email}</h3>
            </div>
          );
        })}
     </>
  );
}

export default App;
