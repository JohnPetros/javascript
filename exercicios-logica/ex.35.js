function showLocal(code) {
  let local = "do";
  switch (code) {
    case 1:
      local += " Sul";
      break;
    case 2:
      local += " Norte";
      break;
    case 3:
      local += " Leste";
      break;
    case 4:
      local += " Oeste";
      break;
    case 5:
    case 6:
      local += " Nordeste";
      break;
    case 7:
      local += " Centro-oeste";
      break;
    default:
      local = "Importado";
  }

  console.log(`O preço do produto é R$2500 e é ${local}`);
}

showLocal(6);
