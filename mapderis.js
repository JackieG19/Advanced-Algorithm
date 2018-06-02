// T = 2 pi(sqrt(a3/GM))
// a = (earthradius + avgAlt) * 3
// var sqroot = Math.sqrt(a/GM)
// var t = (2 * Math.PI) * sqroot

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  var size = Object.keys(arr).length;
 
  for (var i = 0; i < size; i++)
  {
    var t = Math.round((2*Math.PI)*Math.sqrt(((earthRadius + arr[i].avgAlt)**3)/GM));
  
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = t;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
