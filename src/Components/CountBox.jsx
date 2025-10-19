import React from 'react';
import Container from './Container';

const CountBox = ({ info }) => {
  const pendingData = info.filter((element) => element.status == 'Pending');
  const submittedData = info.filter((element) => element.status == 'Submitted');
  const reviewedData = info.filter((element) => element.status == 'Reviewed');
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-12">
          <div className="rounded-sm p-7 h-[250px] text-white  bg-gray-600 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl ">Pending</h1>
            <span className="font-semibold text-3xl">{pendingData.length}</span>
          </div>
          <div className="rounded-sm p-7 h-[250px] text-white bg-purple-500 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl ">Submitted</h1>
            <span className="font-semibold text-3xl">
              {submittedData.length}
            </span>
          </div>
          <div className="rounded-sm p-7 h-[250px] text-white  bg-teal-500 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl ">Reviewed</h1>
            <span className="font-semibold text-3xl">
              {reviewedData.length}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountBox;
