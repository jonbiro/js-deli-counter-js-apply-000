var counter = 1

function takeANumber(currentLine) {
  //currentLine.push(counter++);
  
  if(currentLine.length === 0){
    currentline = [1]
  } else {
    currentline.push(currentline[currentline.length -1] + 1)
  }
  return 'You\'ve been added to the line'
}

var line = []

takeANumber(line) // line is [1]
takeANumber(line) // line is [1, 2]
takeANumber(line)

nowServing() // line is [2]
nowServing() // line is []

takeANumber(line) // line is [3]



function nowServing(currentLine){
  if (currentLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${currentLine.shift()}.`;
  }
}



function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  } else {
      let str = "The line is currently:"
      for (let i = 0; i< line.length; i++){
        str +=  ` ${i+1}. ${line[i]},`
      }
  return str.slice(0,str.length-1)
  }
}

/*

OR 

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0; i < line.length; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
}


*/