import { Outlet } from "react-router-dom";

export function HomePage() {
    return(
    <div className="App">
      <header className="App-header">
        <p>
           <code>components/HomePage/HomePage.js</code> my first components.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Benjamin
        </a>
      </header>
      <Outlet />
    </div>
    );
}

