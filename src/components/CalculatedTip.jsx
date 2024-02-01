import React from "react";

export default function CalculatedTip({ tipPerson, totalPerson, isFilled, onReset }) {
  return (
    <div className="display-tip-container">
      <div>
        <div className="tip-amount">
          <div>
            <h4>Tip Amount</h4>
            <p>/ preson</p>
          </div>
          <h1>${!isNaN(tipPerson) && isFinite(tipPerson) ? tipPerson : '0.00'}</h1>
        </div>
        <div className="total">
          <div>
            <h4>Total</h4>
            <p>/ preson</p>
          </div>
          <h1>${!isNaN(totalPerson) && isFinite(totalPerson) ? totalPerson : '0.00'}</h1>
        </div>
      </div>
      <button
        type="reset"
        className="reset-button"
        disabled={isFilled ? false : true}
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}
