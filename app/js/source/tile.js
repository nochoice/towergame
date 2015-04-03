function Tile(options, ctx){
    this.opt = options;
    this.ctx = ctx;

    this.width = 40;
    this.height = 40;

    this.posX = this.opt.x*this.width;
    this.posY = this.opt.y*this.height;

    this.render();
}

Tile.prototype = {
    render: function(){
        var instance = this,
            opt = instance.opt,
            ctx = instance.ctx;

        if(opt.type === 1 || opt.type ===8  || opt.type === 9){
            ctx.fillStyle = "#ddd";
        }
        else{
            ctx.fillStyle = "#fff";
        }

        var rect = ctx.fillRect(instance.posX, instance.posY, instance.width, instance.height);

    },

    hover: function(canvasX, canvasY){
        var instance = this,
            ctx = instance.ctx;

        if(
               (canvasX >= instance.posX) 
            && (canvasX < (instance.posX + instance.width)) 
            && (canvasY >= instance.posY) 
            && (canvasY < (instance.posY + instance.height)))
            {
                // console.log(instance.posX, instance.posY);
                // ctx.fillStyle = "#555";
                // ctx.fillRect(instance.posX, instance.posY, instance.width, instance.height);
            }
        // else{
        //     instance.render();
        // }
        // console.log(canvasX, canvasY);
    }
}

module.exports = Tile;
