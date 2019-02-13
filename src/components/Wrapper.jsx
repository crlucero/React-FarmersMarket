import React from "react";
import ScheduleList from "./ScheduleList";
import ProductList from "./ProductList";

function Wrapper() {
  return (
    <div>
      <style jsx>
        {`
          .wrapper {
            display: grid;
            grid-template-columns: 5fr 5fr 5fr;
          }

        `}
      </style>
      <div className="wrapper">
        <div className="scheduleList">
          <ScheduleList />
        </div>
        <div />
        <div className="productList">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
export default Wrapper;
