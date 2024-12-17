// code your solution here
function superbowlWin(record) {
    // Use the find method to locate the first object with result === "W"
    const win = record.find((game) => game.result === "W");
    
    // If a win is found, return the year; otherwise, return undefined
    return win ? win.year : undefined;
  }
  function superbowlWin(record) {
    const win = record.find((game) => game.result === "W");
    return win ? win.year : undefined;
  }
  