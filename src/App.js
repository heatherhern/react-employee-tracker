import React from "react";
import Search from "./components/Search/Search";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import TableHeader from "./components/TableHeader/TableHeader";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Search />
      <Table />
      <TableHeader />
    </div>
  );
}

export default App;
