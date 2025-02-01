const countInInterval = (interval) => {
  let sum = 0;  

  for (let k = 0; k <= interval; k++) 
    sum += k;

  return sum;
};

export default countInInterval;
