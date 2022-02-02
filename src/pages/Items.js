import Table from 'components/Elements/Table';
import React from 'react';

const data = [
  { id: 232, Name: Taka, Age: 88 },
  { id: 232, Name: Yanto, Age: 68 },
  { id: 232, Name: Subaru, Age: 78 },
  { id: 232, Name: Robert, Age: 58 },
];

export default function Items() {
  return (
    <>
      <Header />
      <Table data={data} />
    </>
  );
}
