var recipes = new Object();

function updateObjectWithKeyAndValue(obj,key,value) {
  return obj.assign({},obj,{[key]:value})
}
