
// import mapData from './mapData';
import Vue from './vue';
import Observer from './observer';

function router (routers) {
  var arr = [];
  for (let i = 0; i < routers.length; i++) {
    if (routers[i].active) {
      arr.push({path: routers[i].path, commponent: module_parse(routers[i].commponent), active: routers[i].active});
    } else {
      arr.push({path: routers[i].path, commponent: module_parse(routers[i].commponent), active: false});
    }
  }
  return arr;
};


function module_parse (obj) {
  var newObj = {};
  for (var i in obj) {
    if (i === 'data') {
      newObj.data = new Observer(obj[i]());
    } else if (i === 'methods') {
      let a = obj[i];
      for (let k in a) newObj[k] = a[k];
    } else {
      newObj[i] = obj[i];
    }
  }
  return newObj;
};

function activeRouter (router) {
  var a = {};
  for (let i = 0; i < router.length; i++) {
    if (router[i].active) {
      a = router[i];
      break;
    } else if (router[i].path) {
      a = router[i].active;
      break;
    }
  }
  return a;
}

export {router, activeRouter};
