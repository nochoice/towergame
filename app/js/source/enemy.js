function Enemy(options, ctx){
	this.ctx = ctx;
	this.opt = options;
	this.x = options.x;
	this.y = options.y;

	this.render();
}

Enemy.prototype = {
	render: function(){
		var instance = this,
	        opt = instance.opt,
	        ctx = instance.ctx;

	    ctx.fillStyle = "#666";
	        
	    ctx.fillRect(instance.x, instance.y, 5, 5);

	},

	move: function(){
		var instance = this;

		instance.x += Math.round(Math.random()*6 - 3);
		instance.y += Math.round(Math.random()*6 - 3);

		// console.log(instance.x);
		instance.render();
	}
}


module.exports = Enemy;

