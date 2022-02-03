import React, { useMemo, useState, useEffect } from "react";
import Table from "components/Elements/Table";
import axios from "axios";

function ItemSales() {

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setData(result.data);
    })();
  }, []);

  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Username",
      accessor: "username",
    },
    {
      Header: "Website",
      accessor: "website",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
  ];

  // COLUMNS WITH HEADER CUK!!

  // const columns = useMemo(
  //  () => [
  //    {
  //      Header: "Profile",
  //
  //       columns: [
  //         {
  //           Header: "Name",
  //           accessor: "name",
  //         },
  //        {
  //            Header: "Username",
  //            accessor: "username",
  //          },
  //        ],
  //      },
  //      {
  //        Header: "Details",
  //
  //        columns: [
  //          {
  //            Header: "Website",
  //            accessor: "website",
  //         },
  //          {
  //           Header: "Phone",
  //            accessor: "phone",
  //         },
  //        ],
  //     },
  //   ],
  // [];
  //  );

  return (
    <div className="flex justify-center">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default ItemSales;
