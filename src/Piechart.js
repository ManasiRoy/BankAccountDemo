import React from "react"
import ReactSvgPieChart from "react-svg-piechart"
import BankAccount from './BankAccount'

// console.log(BankAccount)
function calculation(cal){
    const color = {
        color1: '#03acbf',
        color2: '#036570',
        color3: '#1d5a60',
   };
    var d = [];
    var total = 0.00;
    for(let arry in cal){
        var tempTotal = parseInt(cal[arry]['Deposit AMT'].replace(/,/g, '')) ?  parseInt(cal[arry]['Deposit AMT'].replace(/,/g, ''))  : 0;
        total = total + tempTotal;
      
    }
 console.log(total);
    for(let arry in cal){
        var value = parseInt(cal[arry]['Deposit AMT']) ? (parseInt(cal[arry]['Deposit AMT'].replace(/,/g, ''))/total)*100 : 0;
        var colour;
        if(value < 3)
          colour = color.color2;
          else if(value > 2 && value < 5)
          colour = color.color3;
          else colour = color.color1;
       
      d.push({'title':cal[arry]['Transaction Details']+'Amount '+value, value: value, color: colour})
    }
    return d;
}
//console.log(calculation(BankAccount))

calculation(BankAccount)


const MyCompo = () => (
    <ReactSvgPieChart 
    data={calculation(BankAccount)}
    // If you need expand on hover (or touch) effect
    expandOnHover
    // If you need custom behavior when sector is hovered (or touched)
    onSectorHover={(d, i, e) => {
      if (d) {
        console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
      } else {
        console.log("Mouse leave - Index:", i, "Event:", e)
      }
    }}
  />
)
export default MyCompo