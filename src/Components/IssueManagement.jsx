import React, { use, useState } from 'react';
import Container from './Container';
import CountBox from './CountBox';
import ToggleBtn from './ToggleBtn';
import Card from './card';

const IssueManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState('All');
  const initialData = use(fetchPromise);
  const [info, setInfo] = useState(initialData);

  const filterData =
    toggleStatus == 'All'
      ? info
      : info.filter((element) => element.status == toggleStatus);
  return (
    <div>
      {/* count box */}
      <CountBox info={info}></CountBox>

      {/* buttons */}
      <ToggleBtn
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleBtn>

      {/* cards */}
      <Container>
        {filterData.length === 0 ? (
          <h1 className="font-extrabold text-4xl text-center text-purple-600">
            No Data
          </h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filterData.map((data, i) => (
              <Card
                key={i}
                filterData={filterData}
                info={info}
                setInfo={setInfo}
                data={data}
              ></Card>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default IssueManagement;
