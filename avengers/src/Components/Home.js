import React from "react";
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Avengers Database</h1>
      <h4>Danger! This is classified information!</h4>
      <p className="enter"><Link to="/avengers">Enter</Link></p>
    </div>
  );
}
export default Home;