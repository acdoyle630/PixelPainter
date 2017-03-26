var grid = document.getElementById('pixelPainter');
document.body.style.backgroundImage =  'http://hd-wall-papers.com/images/wallpapers/art-background/art-background-2.jpg';

function pixelPainter() {
  var size = 30;
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

    var newButton = document.createElement( 'button' );
    newButton.id = 'blue';
    newButton.className = 'color';
    newButton.style.backgroundColor = 'blue';
    newButton.innerHTML = 'BLUE';
    newDiv.appendChild(newButton);

    var newButton8 = document.createElement( 'button' );
    newButton8.id = 'black';
    newButton8.className = 'color';
    newButton8.style.backgroundColor = 'black';
    newButton8.innerHTML = 'BLACK';
    newDiv.appendChild(newButton8);

    var newButton2 = document.createElement( 'button' );
    newButton2.id = 'red';
    newButton2.className = 'color';
    newButton2.style.backgroundColor ='red';
    newButton2.innerHTML = 'RED';
    newDiv2.appendChild(newButton2);
    var newButton3 = document.createElement( 'button' );
    newButton3.id = 'green';
    newButton3.className = 'color';
    newButton3.style.backgroundColor ='green';
    newButton3.innerHTML = 'GREEN';
    newDiv2.appendChild(newButton3);
    var newButton4 = document.createElement( 'button' );
    newButton4.id = 'transparent';
    newButton4.className = 'color';
    newButton4.style.backgroundColor ='ORange';
    newButton4.innerHTML = 'MYSTERY';
    newDiv2.appendChild(newButton4);
    var newButton5 = document.createElement( 'button' );
    newButton5.id = 'white';
    newButton5.className = 'color';
    newButton5.innerHTML = 'CLEAR';
    newButton5.style.backgroundColor ='white';
    newDiv3.appendChild(newButton5);
    var newButton6 = document.createElement( 'button' );
    newButton6.id = 'clear';
    newButton6.className = 'color';
    newButton6.innerHTML = 'CLEAR ALL';
    newButton6.style.backgroundColor ='white';
    newDiv3.appendChild(newButton6);

    var newButton7 = document.createElement( 'button' );
    newButton7.id = 'stamp';
    newButton7.className = 'color';
    newButton7.innerHTML = 'STAMP';
    newButton7.style.backgroundColor ='white';
    newDiv3.appendChild(newButton7);
    newButton7.addEventListener('click', function(){
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


  return {
    createTableRow,
    colorDiv,
    createDiv,
    selectColor,
    stamp,
    unStamp
   };


}

var render = pixelPainter();
render.createTableRow();
render.createDiv();
render.selectColor();
render.colorDiv();
