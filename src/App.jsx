import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './navbar'
import Selector from './components/selector'
import Tenure from './components/tenure'
import Graph from './components/Graph'

function App() {
  const [homeValue, setHomeValue] = useState(1000);
  const [downPayment, setDownPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(5); 
  const [totalLoanMonths,setTotalLoanMonths] = useState(60);
  const [interestPerMonth,setInterestPerMonth] = useState(0.5);
  const [monthlyPayment,setMonthlyPayment] = useState(2000);
  const [totalInterestGenerated,setTotalInterestGenerated] = useState(10000);
  
  useEffect(()=>{
     setLoanAmount(homeValue - downPayment)
     setTotalLoanMonths(loanTerm * 12);
     setInterestPerMonth(interestRate / 100 / 12);
     setMonthlyPayment((loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1));
     setTotalInterestGenerated(monthlyPayment * totalLoanMonths - loanAmount);
  },[homeValue,interestRate,downPayment,loanAmount,loanTerm]);
  
  const chartData = {
    labels: ['Principal Amount', 'Total Interest'],
    datasets: [
      {
        label: 'Loan Breakdown',
        data: [loanAmount, totalInterestGenerated],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };
  return (
    <>
      <Navbar/>
      <div className="wrapper flex flex-col md:flex-row md:items-center">
        <div className="selector-cont px-5 py-6 flex w-full flex-col gap-5">
          <Selector name="Home Value" symbol="$" amount={homeValue} minrange={1000} maxrange={10000} onChange={(e)=>setHomeValue(e.target.value)} />
          <Selector name="Down Payment" symbol="$" amount={downPayment} minrange={0} maxrange={3000} onChange={(e)=>setDownPayment(e.target.value)}/>
          <Selector name="Loan Amount" symbol="$" amount={loanAmount} minrange={1000} maxrange={3000} onChange={(e)=>setLoanAmount(e.target.value)}/>
          <Selector name="Interest Rate" symbol="%" amount={interestRate} minrange={5} maxrange={18} onChange={(e)=>{setInterestRate(e.target.value)}}/>
          <Tenure loanTerm={loanTerm} setLoanTerm={setLoanTerm} />
        </div>
        <Graph chartData={chartData} payment={monthlyPayment}/>
      </div>
    </>
  )
}

export default App
