import React, { useState, useEffect } from "react";
import Table from "components/Elements/Table";
import axios from "axios";
import itemdata from "api/itemdata.json";

function ItemSale() {
  /* const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("EMBUH");
      setData(result.data);
    })();
  }, []); */

  const columns = React.useMemo(
    () => [
      {
        Header: "SKU",
        accessor: "sku",
      },
      {
        Header: "Item",
        accessor: "item",
      },
      {
        Header: "Qty Sold",
        accessor: "qtysold",
      },
      {
        Header: "Stock",
        accessor: "qtystock",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Sales",
        accessor: "sales",
      },
    ],
    []
  );

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
  //            Header: "Webs        Filter: DefaultColumnFilter,ite",
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
    <div className="flex justify-center relative">
      <Table columns={columns} data={itemdata} />
    </div>
  );
}

export default ItemSale;
