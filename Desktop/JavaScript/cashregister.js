function checkCashRegister(price, cash, cid) {
  // Crea un objeto para almacenar los valores de las monedas y billetes
  const valores = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  // Calcula el cambio a devolver
  let cambio = cash - price;
  
  // Calcula el total del cajón de efectivo (cid)
  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  
  // Si el cambio es mayor al total del cajón de efectivo, devuelve "INSUFFICIENT_FUNDS"
  if (cambio > totalCid) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  // Si el cambio es igual al total del cajón de efectivo, devuelve "CLOSED"
  if (cambio === totalCid) {
    return {status: "CLOSED", change: cid};
  }
  
  // Inicializa una variable para almacenar el cambio a devolver
  let cambioDevuelto = [];
  
  // Recorre el cid desde el final hasta el principio
  for (let i = cid.length - 1; i >= 0; i--) {
    let valorMoneda = valores[cid[i][0]];
    let cantidadMoneda = cid[i][1];
    let cantidadMonedaDevuelta = 0;
    while (cambio >= valorMoneda && cantidadMoneda > 0) {
      cambio -= valorMoneda;
      cambio = Math.round(cambio * 100) / 100;
      cantidadMoneda -= valorMoneda;
      cantidadMonedaDevuelta += valorMoneda;
    }
    if (cantidadMonedaDevuelta > 0) {
      cambioDevuelto.push([cid[i][0], cantidadMonedaDevuelta]);
    }
  }

  // Si no se puede devolver el cambio exacto, devuelve "INSUFFICIENT_FUNDS"
  if (cambio > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  
  // Devuelve el cambio a devolver
  return {status: "OPEN", change: cambioDevuelto};
}

