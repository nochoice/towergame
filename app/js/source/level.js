var Tile = require('./tile');

function Level(levelObj, game){
	var instance = this;

	this.level = levelObj;
	this.game = game;
	this.tiles = [];

	this.render();

	game.ctx.canvas.addEventListener('mousemove', function(e){
        // console.log(e.layerX, e.layerY);
        var tiles = instance.tiles,
            tile;

        for(var k in tiles){
            tile = tiles[k];
            tile.hover(e.layerX, e.layerY);
        }
    });
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
	},
	tick: function(){
		
	}
}

module.exports = Level;