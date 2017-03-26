var grid = document.getElementById('pixelPainter');


function pixelPainter() {
  var size = 100;
  var rows = 0;
  var currentPixel = null;
  currentColor = null;
  var drag = false;

  // creates buttons for div row
  function createTableRow( ){
    var rowNumber = 0;
    for(var i=0; i<size; i++){
      var newButton = document.createElement( 'button' );
      newButton.className = 'button';
      newButton.id = "button"+rows+i;
      newButton.style.backgroundColor = 'white';
      newButton.addEventListener('mousedown', function(){
        drag = true;
        this.style.backgroundColor = currentColor;
        console.log(drag);
      });
      newButton.addEventListener('mouseover', function(){
        if(drag === true){
        this.style.backgroundColor = currentColor;
        }
      });
      newButton.addEventListener('mouseup', function(){
        drag = false;
      });
      grid.appendChild(newButton);
      }
  }

  function createDiv( ){
    for(var i=0; i<size; i++){
    rows ++;
    grid.appendChild(document.createElement( 'div' ) );
    createTableRow(size);
    }
  }
    // creates color div/button
  function colorDiv() {
    var newDiv = grid.appendChild(document.createElement ( 'div' ) );

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
    var newButton2 = document.createElement( 'button' );
    newButton2.id = 'red';
    newButton2.className = 'color';
    newButton2.style.backgroundColor ='red';
    newButton2.innerHTML = 'RED';
    newDiv.appendChild(newButton2);
    var newButton3 = document.createElement( 'button' );
    newButton3.id = 'green';
    newButton3.className = 'color';
    newButton3.style.backgroundColor ='green';
    newButton3.innerHTML = 'GREEN';
    newDiv.appendChild(newButton3);
    var newButton4 = document.createElement( 'button' );
    newButton4.id = 'orange';
    newButton4.className = 'color';
    newButton4.style.backgroundColor ='orange';
    newButton4.innerHTML = 'ORANGE';
    newDiv.appendChild(newButton4);
    var newButton5 = document.createElement( 'button' );
    newButton5.id = 'white';
    newButton5.className = 'color';
    newButton5.innerHTML = 'CLEAR';
    newButton5.style.backgroundColor ='white';
    newDiv.appendChild(newButton5);
    var newButton6 = document.createElement( 'button' );
    newButton6.id = 'clear';
    newButton6.className = 'color';
    newButton6.innerHTML = 'CLEAR ALL';
    newButton6.style.backgroundColor ='white';
    newDiv.appendChild(newButton6);
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




  /*function drag () {
    var pix = [];
    var flag = 0;
    var choose = document.addEventListener( 'mousedown', function(e) {
      pix.push(e.target);
    });
     var more = document.addEventListener( 'mouseover', function(e){
      if( mousedown === true){
      console.log(e.target);
      pix.push(e.target);
    }
  });
     var done = document.addEventListener( 'mouseup', function(e){
      pix.push(e.target);
    });

    console.log(pix);
  }*/

    // applies currentColor to pixel on click
  /*function changeColor (  ){
    var choose = document.addEventListener( 'click', function(e) {
      if( e.target.className !== 'color' && e.target.id !== 'clear'){
      currentPixel = e.target;
      console.log('this pix' + currentPixel);
      console.log(currentColor);
      if(currentPixel.className === 'button'){
      currentPixel.style.backgroundColor = currentColor;
      }
    }
      // sets all elements with class button to white
      if( e.target.id === 'clear' ){
        (function() {
          var elements;
          elements = document.getElementsByClassName( 'button' );
          for ( var i=0; i < elements.length; i++ ){
            elements[i].style.backgroundColor = 'white';
          }
        })();


      }

  });

  }*/
  return{
    createTableRow,
    colorDiv,
    createDiv,
  //  changeColor,
    selectColor,
  //  drag
  };
}

var render = pixelPainter();
render.createTableRow();
render.createDiv();
//render.changeColor();
render.selectColor();
render.colorDiv();
//render.drag();