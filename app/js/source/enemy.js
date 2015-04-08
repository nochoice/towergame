function Enemy(options, ctx){
	this.ctx = ctx;
	this.opt = options;
	this.x = options.x;
	this.y = options.y;
	this.path = options.path;
	this.pathPosition = Math.round(Math.random()*200);

	this.render();
}

Enemy.prototype = {
	render: function(){
		var instance = this,
	        opt = instance.opt,
	        ctx = instance.ctx;

	    ctx.fillStyle = "#666";
	        
	    ctx.fillRect(instance.x, instance.y, 10, 10);

	},

	move: function(){
		var instance = this;

		if(instance.path.length < instance.pathPosition +20) return;

		instance.x = instance.path[instance.pathPosition].x;
		instance.y = instance.path[instance.pathPosition].y;

		instance.pathPosition += 5;
		// console.log(instance.x);
		instance.render();
	}
}


module.exports = Enemy;

