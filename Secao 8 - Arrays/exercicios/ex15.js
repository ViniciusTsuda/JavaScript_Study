const checarAnoBissexto = (ano) => {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(true)
  } else {
    console.log(false)
  }
}

checarAnoBissexto(2026) // false
checarAnoBissexto(2020) // true
checarAnoBissexto(2100)