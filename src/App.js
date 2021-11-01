import React, { useState } from 'react';
import './style.css';

export default function App() {
  const nayoks = [
    { name: 'Jasim', age: 24 },
    { name: 'Alamgir', age: 10 },
    { name: 'Abdur Razzak', age: 13 },
    { name: 'Ferdous Ahmed', age: 155 },
    { name: 'Raisul Islam Asad', age: 14 },
  ];
  return (
    <div>
      <MoviesCounter />
      {/* <Nayoks title={nayoks[0]}></Nayoks>
      <Nayoks title={nayoks[1]}></Nayoks>
      <Nayoks title={nayoks[2]}></Nayoks>
      <Nayoks title={nayoks[3]}></Nayoks>
      <Nayoks title={nayoks[4]}></Nayoks> */}
      {nayoks.map((nayok) => (
        <Nayoks nayok={nayok} />
      ))}
    </div>
  );
}

function MoviesCounter() {
  // const count = 5;
  let [count, setCount] = useState(0);
  const handleClicked = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClicked}>Add Movies</button>
      <h2>You watched movies {count}</h2>
      <MovieDisplay count={count} />
    </div>
  );
}

function MovieDisplay(movies) {
  return <h2>Movies I have acted: {movies.count}</h2>;
}

function Nayoks(props) {
  const { name, age } = props.nayok;
  return (
    <div>
      <h2>Ami Nayok {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}
