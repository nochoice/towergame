var Tile = require('./tile');
var Enemy = require('./enemy');
var Tower = require('./tower');
var enemyMovePath = require('./enemyMovePath');


function Level(levelObj, game){
	var instance = this;

	this.level = levelObj;
	this.game = game;
	this.tiles = [];
    this.enemies = [];

    this.towers = [];

	this.render();
    this.tick();

}

Level.prototype = {
	render: function(){

		var instance = this,
            h = instance.level.map.length,
            w = instance.level.map[0].length,
            ctx = instance.game.ctx,
            i, j, tile,
            enemyPath = enemyMovePath();

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

        for (i = 20; i >= 0; i--) {
            var e = new Enemy({
                x: 0, 
                y: 0,
                path: enemyPath
            }, ctx);
            instance.enemies.push(e);
        };

        for (i = 5; i >= 0; i--) {
            var t = new Tower({
                x: Math.round(Math.random()*600), 
                y: Math.round(Math.random()*600),
                type: 'b'
            }, ctx);

            this.towers.push(t);
        };
        
	},

    redraw: function(){
        
        var instance = this,
            i,
            tl = instance.tiles.length,
            el = instance.enemies.length,
            towerl = instance.towers.length;



        for(i=0; i<tl; i = i + 1){
            instance.tiles[i].render();
        }

        for(i=0; i<el; i = i + 1){
            instance.enemies[i].move();
        }

        for(i=0; i<towerl; i = i + 1){
            instance.towers[i].render();
            instance.towers[i].checkEnemies(instance.enemies);
        }

    },

    mouseMoveHandler: function(x, y){
        // console.log(x, y);
        var instance = this,
            i,
            tl = instance.tiles.length;

        for(i=0; i<tl; i = i + 1){
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