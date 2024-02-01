import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TipCalculator from "./components/TipCalculator";
import CalculatedTip from "./components/CalculatedTip";

function App() {
  const [tip, setTip] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [person, setPerson] = useState("");
  const [tipPerson, setTipPerson] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);
  const [isFilled, setIsFilled] = useState(false);

  function calculateTip() {
    let tipTotal = +billAmount * (+tip / 100);
    setTipPerson(+tipTotal / +person);
    setTotalPerson((+billAmount + tipTotal) / +person);
  }

  useEffect(() => {
    if (tip < 100) {
      calculateTip();
    }
    if (tip !== "" || billAmount !== "" || person !== "") {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [tip, billAmount, person]);

  function handleTipChange(value) {
    setTip(value);
  }

  function handleBillChange(value) {
    setBillAmount(value);
  }

  function handlePersonNumChange(value) {
    setPerson(value);
  }

  function handleReset() {
    setTip("");
    setBillAmount("");
    setPerson("");
  }

  return (
    <>
      <Header />
      <main>
        <TipCalculator
          tip={tip}
          billAmount={billAmount}
          person={person}
          onTipChange={handleTipChange}
          onBillChange={handleBillChange}
          onPersonNumChange={handlePersonNumChange}
        />
        <CalculatedTip
          tipPerson={tipPerson.toFixed(2)}
          totalPerson={totalPerson.toFixed(2)}
          isFilled={isFilled}
          onReset={handleReset}
        />
      </main>
    </>
  );
}

export default App;
