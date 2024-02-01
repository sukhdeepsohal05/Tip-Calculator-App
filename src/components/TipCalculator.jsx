import React, { useState } from "react";
import iconDollar from "../assets/images/icon-dollar.svg";
import iconPerson from "../assets/images/icon-person.svg";
import Input from "./UI/Input";

export default function TipCalculator({
  tip,
  billAmount,
  person,
  onTipChange,
  onBillChange,
  onPersonNumChange,
}) {
  const TIPS = [5, 10, 15, 25, 50];
  const [activeBtn, setActiveBtn] = useState(null);
  const [isBillAmountValid, setIsBillAmountValid] = useState(true);
  const [isCustomTipValid, setIsCustomTipValid] = useState(true);
  const [isNumPeopleValid, setIsNumPeopleValid] = useState(true);
  const [custom, setCustom] = useState(false);

  function handleTipBtn(tip, index) {
    setActiveBtn(index);
    onTipChange(tip);
    if ((tip <= 0 || tip > 100) && tip !== "") {
      setIsCustomTipValid(false);
    } else {
      setIsCustomTipValid(true);
    }
  }

  return (
    <form action="" className="input-container">
      <div>
        <Input
          id="bill-input"
          label="Bill"
          image={iconDollar}
          isValid={isBillAmountValid}
          value={billAmount}
          onChange={(e) => {
            onBillChange(e.target.value);
            e.target.value <= 0 && e.target.value !== ""
              ? setIsBillAmountValid(false)
              : setIsBillAmountValid(true);
          }}
        />
      </div>
      <div>
        <label htmlFor="tip">Select Tip %</label>
        <div className="select-tip">
          {TIPS.map((item, index) => {
            return (
              <button
                key={index}
                type="button"
                className={
                  (activeBtn === index) & (item === tip) ? "active" : ""
                }
                onClick={() => {
                  setCustom(false);
                  handleTipBtn(item, index);
                }}
              >
                {item}%
              </button>
            );
          })}
          <input
            key={5}
            type="number"
            placeholder="Custom"
            id="tip"
            className={!isCustomTipValid ? "custom invalid" : "custom"}
            value={custom ? tip : ""}
            onChange={(e) => {
              setCustom(true);
              handleTipBtn(e.target.value, 5);
            }}
          />
        </div>
      </div>
      <div>
        <Input
          id="people-input"
          label="Number of People"
          image={iconPerson}
          isValid={isNumPeopleValid}
          value={person}
          onChange={(e) => {
            onPersonNumChange(e.target.value);
            e.target.value <= 0 && e.target.value !== ""
              ? setIsNumPeopleValid(false)
              : setIsNumPeopleValid(true);
          }}
        />
      </div>
    </form>
  );
}
