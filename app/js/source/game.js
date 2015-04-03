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



    },

    createLevel: function(level){
        var instance = this;

        instance.level = new Level(level, instance);

        // instance.ctx.canvas.addEventListener('mousemove', function(e){
        //     // console.log(e.layerX, e.layerY);
        //     var tiles = instance.level.tiles,
        //         tile;

        //     for(var k in tiles){
        //         tile = tiles[k];
        //         tile.hover(e.layerX, e.layerY);
        //     }
        // });
    }
};


module.exports = Game;