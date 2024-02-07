import ClipLoader from "react-spinners/ClipLoader";

import "./App.css";
import TableData from "./components/TableData";
import Navbar from "./components/Navbar";
import { useData } from "./main";
import Pagination from "./components/Pagination";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

function App() {
  const { loading } = useData();
  const color = "#0000FF";
  return (
    <>
      {loading === false ? (
        <div className="flex flex-col gap-2">
          <Navbar />
          <TableData />
          <Pagination />
        </div>
      ) : (
        ""
      )}

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}

export default App;
