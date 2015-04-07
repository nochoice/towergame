var Tile = require('./tile');
var Level = require('./level');
var level1 = require('./levels/level-1');


function Game(options){
    this.options = options;
    this.level = {};

    this.initCanvas();

    this.createLevel(level1);
}

Game.prototype = {
    getCanvas: function () {
        return 'canvas';
    },
    initCanvas: function(){
        var instance = this; 

        instance.ctx = document.getElementById(instance.options.canvasId).getContext("2d");

        var ctx = instance.ctx;

        ctx.fillStyle = "#FF0000";


        ctx.canvas.addEventListener('click', function(e){
            console.log(e.layerX, e.layerY);
        });

        instance.ctx.canvas.addEventListener('mousemove', function(e){
      
            if(instance.level){
                instance.level.mouseMoveHandler(e.layerX, e.layerY);
            }
          
        });

    },

    createLevel: function(level){
        var instance = this;

        instance.level = new Level(level, instance);

        
    }
};


module.exports = Game;