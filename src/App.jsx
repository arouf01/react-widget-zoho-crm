import { Link, Outlet } from "react-router-dom";

const App = ({ data }) => {
  console.log("Zoho Data:", data);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <h3>Record Data</h3>
      <pre>{data ? JSON.stringify(data, null, 2) : "No Data"}</pre>

      <hr />
      <Outlet />
    </div>
  );
};

export default App;
