function Tower(options, ctx){
	this.x = options.x;
	this.y = options.y;
	this.type = options.type;
	this.radius = options.radius || 5;
	this.range = options.range || 60;

	this.shootSpeed = 20;
	this.ctx = ctx;
}

Tower.prototype = {
	render: function(){
		var instance = this,
			ctx = instance.ctx;

		ctx.beginPath();
		ctx.fillStyle = "rgba(255, 77, 200, 0.1)";
		ctx.arc(instance.x,instance.y, instance.range,0,2*Math.PI);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = "#555";

		ctx.arc(instance.x,instance.y,instance.radius,0,2*Math.PI);
		ctx.fill();
		if(instance.radius > 15) instance.radius = 5;
		// instance.radius += 0.5;
	},

	checkEnemies: function(enemies){
		// console.log(enemies.length);
		var instance = this,
			el = enemies.length,
			i, distance, hx, hy, enemy;

		for(i=0; i<el; i++){
			enemy = enemies[i];
			hx = Math.abs(enemy.x - instance.x);
			hy = Math.abs(enemy.y - instance.y);
			distance = Math.sqrt(hx*hx + hy*hy);
			
			if(distance < instance.range){
				// console.log(enemy);
			}
		}
	}
};

module.exports = Tower;