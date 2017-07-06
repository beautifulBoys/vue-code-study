
function map (data) {
  var obj = {};
  for (let i in data) {
    if (getType(data[i]) === 'Object') {
      obj[i] = map(data[i]);
    } else if (getType(data[i]) === 'String' || getType(data[i]) === 'Number' || getType(data[i]) === 'Boolean' || getType(data[i]) === 'Array') {
      obj[i] = data[i];
      obj[i + '_get'] = () => {};
      obj[i + '_set'] = () => {};
    } else {
      obj[i] = data[i];
    }
  }
  return obj;
}

function getType (object) {
  return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
};

//export default map;










function Observer(data) {
  this.data = data;
  this.walk(data);
}

Observer.prototype.walk = function(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') new Observer(obj[key]);
      this.convert(key, obj[key]);
    }
  }
};

Observer.prototype.convert = function(key, val) {
  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      console.log('你访问了' + key);
      return val;
    },
    set: function(newVal) {
      console.log('你设置了' + key);
      if (newVal !== val) val = newVal;
    }
  })
};

export default Observer;
