import React, { useMemo, useState, useEffect } from "react";
import Table from "components/Elements/Table";
import axios from "axios";

function ItemSales() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setData(result.data);
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Profile",

        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Username",
            accessor: "username",
          },
        ],
      },
      {
        Header: "Details",

        columns: [
          {
            Header: "Website",
            accessor: "website",
          },
          {
            Header: "Phone",
            accessor: "phone",
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="flex justify-center">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default ItemSales;
