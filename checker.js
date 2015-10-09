//Checker : color, position

//Board: creating checkers, placing checkers, removing checkers, locating checkers

//Game: start, end, turn switching

function Checker(color, position) {
  this.color = color;
  this.position = position;
}

function Board() {
  this.grid = [];
  this.checkers = [];
  this.createGrid = function() {
    for (var i = 0; i<8; i++) {
      this.grid.push('','','','','','','','');
    }
  };
  this.viewBoard = function() {
    for (var i=0; i<this.grid.length; i++) {
      console.log();
    }
  };
  this.createCheckers = function() {
    var whitePositions=[[0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]];
    var redPositions=[[5, 0], [5, 2], [5, 4], [5, 6],
    [6, 1], [6, 3], [6, 5], [6, 7],
    [7, 0], [7, 2], [7, 4], [7, 6]];

    for(var i=0; i<12; i++) {
      this.checkers.push(new Checker('white', whitePositions[i]));
      this.checkers.push(new Checker('red', redPositions[i]));
    }
  };
  this.placeCheckers = function(){
    for(var i=0; i<this.checkers.length; i++){
      var checker=this.checkers[i];
      var checkerPos=checker.position[]
    }

  };


  
}
