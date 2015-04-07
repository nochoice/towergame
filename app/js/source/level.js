var Tile = require('./tile');
var Enemy = require('./enemy');


function Level(levelObj, game){
	var instance = this;

	this.level = levelObj;
	this.game = game;
	this.tiles = [];
    this.enemies = [];

	this.render();
    this.tick();

}

Level.prototype = {
	render: function(){

		var instance = this,
            h = instance.level.map.length,
            w = instance.level.map[0].length,
            ctx = instance.game.ctx,
            i, j, tile;

        for(i=0; i<h; i++){
            for(j=0; j<w; j++){
                tile = new Tile({
                    x: j,
                    y: i,
                    type: instance.level.map[i][j]
                }, ctx);

                instance.tiles.push(tile)
            }
        }

        for (i = 1000; i >= 0; i--) {
            var e = new Enemy({x: Math.round(Math.random()*800), y: Math.round(Math.random()*600)}, ctx);
            instance.enemies.push(e);
        };

        
	},

    redraw: function(){
        var instance = this,
            i;

        for(i=0; i<instance.tiles.length; i++){
            instance.tiles[i].render();
        }

        for(i=0; i<instance.enemies.length; i++){
            instance.enemies[i].move();
        }

    },

    mouseMoveHandler: function(x, y){
        // console.log(x, y);
        var instance = this,
            i;

        for(i=0; i<instance.tiles.length; i++){
            instance.tiles[i].hover(x, y);
        }
    },

	tick: function(){
        var instance = this;

        // instance.redraw();
        // window.requestAnimationFrame(instance.tick);
		setTimeout(function(){

            instance.redraw();
            instance.tick();

        }, 20);
	}
}

module.exports = Level;