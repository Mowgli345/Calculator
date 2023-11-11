function getRectArea(width, height) {

    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
  }
  
  console.log(getRectArea(3, 4));
  // Expected output: 12
  
  console.log(getRectArea(-3, 4));
  // Expected output: 0

  function random(number) {
    return number * number;
  }

  let myNumber = (random(6));

  function rand2 (){
    return myNumber*2;
  }


  console.log(rand2());
