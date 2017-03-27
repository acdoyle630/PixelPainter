var grid = document.getElementById('pixelPainter');
document.body.style.backgroundImage =  'http://hd-wall-papers.com/images/wallpapers/art-background/art-background-2.jpg';

function pixelPainter() {
  var size = 13;
  var rows = 0;
  var currentPixel = null;
  currentColor = null;
  var drag = false;
  var stampOn = false;

  // creates buttons for div row
  function createTableRow( ){
    var canvas = document.createElement('div');
    canvas.id = "canvas";
    grid.appendChild(canvas);
    var rowNumber = 0;
    for(var i=0; i<size; i++){
      var newButton = document.createElement( 'button' );
      newButton.className = 'button';
      newButton.id = rows+i;
      console.log(newButton.id);
      newButton.style.backgroundColor = 'white';
      newButton.addEventListener('mousedown', function(){
        drag = true;
        this.style.backgroundColor = currentColor;
        console.log('drag' + drag);
      });
      newButton.addEventListener('mouseover', function(){
        if(drag ===true){
        this.style.backgroundColor = currentColor;
        }
      });
      newButton.addEventListener('mouseup', function(){
        drag = false;
      });
      canvas.appendChild(newButton);
      }

  }

  function createDiv( ){
    for(var i=0; i<size; i++){
    rows += size;
    var palat = grid.appendChild(document.createElement( 'div' ) );
    palat.id = 'canvas';
    createTableRow(size);
    }
  }
    // creates color div/button
  function colorDiv() {
    var newDiv = grid.appendChild(document.createElement ( 'div' ) );
    newDiv.id = 'colorGrid';
    var newDiv2 = grid.appendChild(document.createElement ( 'div' ) );
    newDiv.id = 'colorGrid2';
    var newDiv3 = grid.appendChild(document.createElement ( 'div' ) );
    newDiv.id = 'colorGrid3';


    var selected = document.createElement( 'button' );
    selected.id = 'selected';
    selected.className = 'color';
    selected.innerHTML = 'CURRENT COLOR';
    selected.style.backgroundColor = currentColor;
    newDiv.appendChild(selected);

    var blueButton = document.createElement( 'button' );
    blueButton.id = 'blue';
    blueButton.className = 'color';
    blueButton.style.backgroundColor = 'blue';
    blueButton.innerHTML = 'BLUE';
    newDiv.appendChild(blueButton);

    var blackButton = document.createElement( 'button' );
    blackButton.id = 'black';
    blackButton.className = 'color';
    blackButton.style.backgroundColor = 'black';
    blackButton.innerHTML = 'BLACK';
    newDiv.appendChild(blackButton);

    var redButton = document.createElement( 'button' );
    redButton.id = 'red';
    redButton.className = 'color';
    redButton.style.backgroundColor ='red';
    redButton.innerHTML = 'RED';
    newDiv2.appendChild(redButton);
    var greenButton = document.createElement( 'button' );
    greenButton.id = 'green';
    greenButton.className = 'color';
    greenButton.style.backgroundColor ='green';
    greenButton.innerHTML = 'GREEN';
    newDiv2.appendChild(greenButton);
    var mysteryButton = document.createElement( 'button' );
    mysteryButton.id = 'transparent';
    mysteryButton.className = 'color';
    mysteryButton.style.backgroundColor ='ORange';
    mysteryButton.innerHTML = 'MYSTERY';
    newDiv2.appendChild(mysteryButton);
    var whiteButton = document.createElement( 'button' );
    whiteButton.id = 'white';
    whiteButton.className = 'color';
    whiteButton.innerHTML = 'CLEAR';
    whiteButton.style.backgroundColor ='white';
    newDiv3.appendChild(whiteButton);
    var clearButton = document.createElement( 'button' );
    clearButton.id = 'clear';
    clearButton.className = 'color';
    clearButton.innerHTML = 'CLEAR ALL';
    clearButton.style.backgroundColor ='white';
    newDiv3.appendChild(clearButton);

    var stampButton = document.createElement( 'button' );
    stampButton.id = 'stamp';
    stampButton.className = 'color';
    stampButton.innerHTML = 'STAMP';
    stampButton.style.backgroundColor ='white';
    newDiv3.appendChild(stampButton);
    stampButton.addEventListener('click', function(){
      console.log('stamp' +stampOn);
      stampOn = !stampOn;
      console.log('stamo' + stampOn);
      if(stampOn === true){
        stamp();
      } else {
        unStamp();
      }
    });
  }


  // saves pixel Color to currentColor on click
  function selectColor(){
    var choose = document.addEventListener('click', function(e) {
    if( e.target.className === 'color'){
      currentColor = e.target.id;
      console.log( currentColor + 'selected!');
      document.getElementById( 'selected' );
      selected.style.backgroundColor = currentColor;
    }
    // Runs clear all function
    if( e.target.id === 'clear'){
      (function() {
        var elements;
          elements = document.getElementsByClassName( 'button' );
          for ( var i=0; i < elements.length; i++ ){
            elements[i].style.backgroundColor = 'white';
          }
      })();
    }
   });
  }

  function stamp (  ){
    var brush = document.addEventListener('click', function(e) {
      var next =((e.target.id));
      test = Number(next) + size;
      test2 = Number(next) - size;
      test3 = Number(next) - 1;
      test4 = Number(next) + 1;
      var down1 = document.getElementById(test);
      var up1 = document.getElementById(test2);
      var right1 = document.getElementById(test3);
      var left1 = document.getElementById(test4); // one below clicked button
      (function() {
        down1.style.backgroundColor = currentColor;
        up1.style.backgroundColor = currentColor;
        right1.style.backgroundColor = currentColor;
        left1.style.backgroundColor = currentColor;
        e.target.style.backgroundColor = currentcolor;
      })();
      //console.log(test );

    });
  }


function unStamp(){
  var point = document.addEventListener('click', function(e) {
    var current = (e.target.id);
    var point = document.getElementById(current);
    (function(){
    point.style.backgroundColor = currentColor;
  })();
  });
}

function line(a,b){
  a = {
    x: a % size + 1,
    y: Math.floor(1 + a / size)
  };
  b = {
    x: b % size + 1,
    y: Math.floor(1 + b / size)
  };
  var slope = (-(a.y - b.y) / (a.x - b.x));
  console.log(a.x);
  console.log(b.x);
  console.log(a.y);
  console.log(b.y);
  console.log(slope);
  var firstButton = document.getElementById(151);
  var secondButton = document.getElementById(30);
  firstButton.style.backgroundColor = 'red';
  secondButton.style.backgroundColor = 'red';
    for(var i=1; i <= a.y - b.y; i++){
      var up = document.getElementById(firstButton.id - size);
      up.style.backgroundColor = 'red';
      firstButton = up;
    }
    for(var j = 1; j < a.x - b.x; j++) {
      console.log(a.x - b.x);
      var left = document.getElementById(firstButton.id -1);
      left.style.backgroundColor = 'red';
      firstButton = left;
    }
    for(var t=1; t <= a.y - b.y; t++){
      var down = document.getElementById(secondButton.id  - (-(size)));
      down.style.backgroundColor = 'red';
      secondButton = down;
        console.log(size);
        console.log(down);
        console.log(secondButton);
    }
    for (var f =1 ; f< a.x - b.x; f++){
      var right = document.getElementById(secondButton.id -(-1));
      console.log(right);
      right.style.backgroundColor = 'red';
      secondButton = right;
    }
  console.log(firstButton);
}


  return {
    createTableRow,
    colorDiv,
    createDiv,
    selectColor,
    stamp,
    unStamp,
    line
   };


}

var render = pixelPainter();
render.createTableRow();
render.createDiv();
render.selectColor();
render.colorDiv();
render.line(151,30);