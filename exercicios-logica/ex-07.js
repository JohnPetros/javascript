function calculateDistributives(...values) {
    values.forEach((value, _, array) => {
      for (const item of array) {
        if (value !== item) {
          console.log(`${value} multiplicado por ${item} é igual a ${value * item}`);
        }
      }
    });
  }
  
  calculateDistributives(2, 3, 4, 5);
  