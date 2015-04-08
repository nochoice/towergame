var pathArray = [];

pathArray.push({
  x: 660,
  y: 0
});

pathArray.push({
  x: 660,
  y: 100
});
pathArray.push({
  x: 220,
  y: 100
});

pathArray.push({
  x: 220,
  y: 220
});

pathArray.push({
  x: 60,
  y: 220
});

pathArray.push({
  x: 60,
  y: 340
});

pathArray.push({
  x: 220,
  y: 340
});

pathArray.push({
  x: 220,
  y: 420
});

pathArray.push({
  x: 340,
  y: 420
});

function makePolyPoints() {

    var points = [],
        startPt, endPt, i, j, dx, dy, loopEnd, vertical, x, y, diff;

    for (var i = 1; i < pathArray.length; i++) {

        startPt = pathArray[i - 1];
        endPt = pathArray[i];
        dx = endPt.x - startPt.x;
        dy = endPt.y - startPt.y;

        loopEnd = (dx == 0) ? dy : dx;
        vertical = (dx == 0) ? true : false;

        for(j=0; j<Math.abs(loopEnd); j++){
          
            diff = (loopEnd < 0) ? -j : j;

            if(vertical){
                x = startPt.x;
                y = startPt.y + diff
            }else{
                x = startPt.x + diff;
                y = startPt.y
            }

            points.push({
                x: x,
                y: y
            });
        }
        
        
    }
    console.log(points);
    return (points);
}

module.exports = makePolyPoints;
