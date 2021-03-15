let asterisksColumns = prompt('How many asterisks do you want per line (One to Ten)')
let asterisksRows = prompt('How many lines do you want (One to Ten)?')

randomChar = ''
for (i = 0; i < asterisksRows; i++) {
  for (j = 0; j < asterisksColumns; j++) {
    randomChar += '*'
  }
  randomChar += "<br/>"
}
document.writeln(randomChar)