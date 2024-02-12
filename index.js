function superbowlWin(array) {
    const winningYear = array.find(obj => obj.result === "W");
    if (winningYear) {
      return winningYear.year;
    } else {
      return undefined;
    }
  }
