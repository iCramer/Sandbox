/*
Given the following input:
[
  ["price", "display price of item"],
  ["owner", "show owner of item"],
  ["update", "sync cache with database"],
  ["delete", "delete item"],
  ["disassociate", "remove item from owner"]
]
  
Output:
###########################################
#        price - display price of item    #
#        owner - show owner of item       #
#       update - sync cache with database #
#       delete - delete item              #
# disassociate - remove item from owner   #
###########################################
*/

const input = [
    ["price", "display price of item"],
    ["owner", "show owner of item"],
    ["update", "sync cache with database"],
    ["delete", "delete item"],
    ["disassociate", "remove item from owner"]
  ];

  const getLength = input => {
    let lengthLeft = 0;
    let lengthRight = 0;
    input.forEach(row => {
      if (row[0].length > lengthLeft) {
        lengthLeft = row[0].length;
      }
      if (row[1].length > lengthRight) {
        lengthRight = row[1].length;
      }
    });

    return [lengthLeft, lengthRight];
  }

  const getHashBar = length => {
    let hashBar = '';
    for(let i = 0; i < length; i++) {
      hashBar += '#';
    }

    return hashBar;
  }

  const getDataString = (row, lengthLeft, lengthRight) => {
    let fullString = "# ";
    let spaceCountLeft = lengthLeft - row[0].length;
    let spaceCountRight = lengthRight - row[1].length;
    for(let i = 0; i < spaceCountLeft; i++) {
      fullString += ' ';
    }
    fullString += row[0] + ' - ';
    fullString += row[1];
    for(let i = 0; i < spaceCountRight; i++) {
      fullString += ' ';
    }
    fullString += ' #';

    return fullString;
  };
  
  function printData(data) {
    const [lengthLeft, lengthRight] = getLength(data);
    const hashBar = getHashBar(lengthLeft + lengthRight + 7);

    console.log(hashBar);

    data.forEach(item => {
      console.log(getDataString(item, lengthLeft, lengthRight));
    });

    console.log(hashBar);
  }
  
  printData(input);
  
  
  
