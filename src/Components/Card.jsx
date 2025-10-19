import React from 'react';

const card = ({ data, info, setInfo }) => {
  const handleClick = () => {
    const currentData = info.find(
      (element) => element.ticketId == data.ticketId
    );

    if (currentData.status == 'Pending') {
      currentData.status = 'Submitted';
    } else if (currentData.status == 'Submitted') {
      currentData.status = 'Reviewed';
    }

    const restData = info.filter(
      (element) => element.ticketId != data.ticketId
    );
    setInfo([currentData, ...restData]);
  };

  return (
    <div
      className="shadow-md rounded-md cursor-pointer bg-slate-200 p-4 "
      onClick={handleClick}
    >
      <div>
        <img
          src={data.userImg}
          title={data.requestedBy}
          alt={data.requestedBy}
          className="w-[80px] h-[80px] rounded-full "
        />
        <h1 className="font-semibold ">{data.requestedBy}</h1>
      </div>
      <div className="flex justify-between my-3">
        <h2 className="font-bold text-lg">{data.subject}</h2>
        <div className="font-semibold ">
          <span
            className={`py-1 px-3  rounded mr-1 ${
              data.priority == 'High'
                ? 'bg-red-100 text-red-600'
                : data.priority == 'Medium'
                ? 'bg-yellow-100 text-yellow-600'
                : 'bg-green-100 text-green-600'
            }`}
          >
            {data.priority}
          </span>
          <span
            className={`py-1 px-3 rounded mr-1 ${
              data.status == 'Pending'
                ? 'bg-red-100 text-red-600'
                : data.status == 'Submitted'
                ? 'bg-yellow-100 text-yellow-600'
                : 'bg-green-100 text-green-600'
            }`}
          >
            {data.status}
          </span>
        </div>
      </div>
      <p className="text-slate-700">{data.description}</p>
    </div>
  );
};

export default card;
