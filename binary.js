const convertToBase10 = str => {
    //!!START
    if (str.startsWith('0b')) {
      str = str.substr(2, str.length - 1);
      console.log('str', str)
      return parseInt(str, 2);
    }

    if (str.startsWith('0x')) {
      return parseInt(str, 16);
    }
    //!!END
  };

  /******************************************************************************/

  console.log(convertToBase10('0b1100')); // 12
  console.log(convertToBase10('0b0101')); // 5
  console.log(convertToBase10('0b1000')); // 8
  console.log(convertToBase10('0b0111')); // 7
