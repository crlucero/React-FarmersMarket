import React from 'react';
import PropTypes from 'prop-types';

function ProductByMonth(props){
    return (
      <div>
        <style jsx> {``}</style>
        <div className="product">
          <p>Month: {props.month} </p>
          <ul>
            {props.selection.map(selection => (
              <li style={{ listStyleType: "none" }}>{selection}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default ProductByMonth;

ProductByMonth.propTypes = {
    month: PropTypes.string,
    selection: PropTypes.array
};