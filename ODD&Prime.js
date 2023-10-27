
/**
 * To check weather the number is Prime or Not!
 * @param {*} number 
 * @returns 
 */
function Prime(number) {
    if (number <= 1) return false; // 1 and numbers less than 1 are not prime
    if (number <= 3) return true; // 2 and 3 are prime
  
    // If the number is divisible by 2 or 3, it's not prime
    if (number % 2 === 0 || number % 3 === 0) 
    return false
  
    // Check for prime candidates starting from 5
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) 
      return false
    }
  
    return true
  }
  
  /**
   * Function to check if a number has consecutive digits with a difference of 1
   * @param {*} number 
   * @returns 
   */
  function ODD(number) {
    let digits = String(number).split('').map(Number)
  
    for (let i = 1; i < digits.length; i++) 
    {
      if (Math.abs(digits[i] - digits[i - 1]) !== 1) {
        return false
      }
    }
  
    return true
  }
  
  /**
   * This Function checks weather the number is BOTH ODD and PRIME.
   * @param {*} start 
   * @param {*} end 
   * @returns 
   */
  function Prime_cum_ODD(start, end) {
    let results = []
  
    for (let i = start; i <= end; i++) {
      if (Prime(i) && ODD(i)) {
        results.push(i)
      }
    }
  
    return results
  }
  
  // Find prime numbers with consecutive difference of 1 from 12 to 10 million
  let start = 12
  let prompt=require("prompt-sync")({sigint:true})
  let end = prompt("Input the dead end to find the ODDnumbers from 0 - ")
  let FinalOP = Prime_cum_ODD(start, end)
  
  console.log(FinalOP)
  console.log("Total ODD Numbers:", FinalOP.length)
  