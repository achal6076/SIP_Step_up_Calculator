import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Calculation(MonthlyInvestment,InvestmentPeriod, RateOfReturn, YearlyIncrement, flag){
  console.log("HEllo")
    // console.log(MonthlyInvestment);
    // console.log(InvestmentPeriod);
    // var MonthlyInvestment = MonthlyInvestment;
    var PeriodInMonth = (InvestmentPeriod)*12;
    RateOfReturn = (RateOfReturn)/1200;
    let TotalSIPWithStepUp = 0;
    for(var i=1; i<=PeriodInMonth; i++)
    {        
    if(i!==1)
    {
    if(i%12===1)
    {
    var incrementedAmount=Math.floor(MonthlyInvestment*(YearlyIncrement/100));
    MonthlyInvestment= MonthlyInvestment + incrementedAmount;
    }
    }
    var CummulationAmount =MonthlyInvestment*(Math.pow((1+RateOfReturn),(PeriodInMonth-i+1)));        
    TotalSIPWithStepUp = TotalSIPWithStepUp + CummulationAmount; 
    }
    if(flag === "true")
    return TotalSIPWithStepUp;
    else
    return CummulationAmount;            
  }    
function Graph(MonthlyInvestment, InvestmentPeriod, RateOfReturn, YearlyIncrement){
  // console.log(MonthlyInvestment);
// console.log(InvestmentPeriod);
  let estimatedReturns = Calculation(MonthlyInvestment, InvestmentPeriod, RateOfReturn, YearlyIncrement,"true");
  // console.log(estimatedReturns);
  let investedAmount = Calculation(MonthlyInvestment, InvestmentPeriod, RateOfReturn, YearlyIncrement,"false");
  // console.log(result);
const data = [
  {
    name: '0',
    value: 0,
  },
  {
    name: '1',
    value: 95000,
  },
  {
    name: '2',
    value: 190000,
  },
  {
    name: '3',
    value: 285000,
  },
  {
    name: '4',
    value: 380000,
  },
  {
    name: '5',
    value: 475000,
  },
];
 return (
  <>
  
  <div className="graph">
  <div className="textforgraph">
    <span >
      After{" "}
      <span className="AfterYearsOf"> 5 year's</span>{" "}
      you will have
    </span>
    <h2 >
      <CurrencyRupeeIcon />
      8,56,981
    </h2>
    <p >
      That's
      <span className="currencyRupeeInPara">
        <CurrencyRupeeIcon />
        1,24,369
      </span>{" "}
      as potential capital gains on your investment of
      <span className="currencyRupeeInPara2" >
        <CurrencyRupeeIcon />
        7,32,612
      </span>
    </p>
    </div>
    <ResponsiveContainer className="graph-div" width="100%" height="65%">
      
        <LineChart
          width={450}
          height={450}
          min={0}
          max={5000000}
          data={data}
          margin={{
            top: 70,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={investedAmount} stroke="#2B3467" />
          <Line type="monotone" dataKey={estimatedReturns} stroke="#362FD9" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
    );
}

export default Graph;
