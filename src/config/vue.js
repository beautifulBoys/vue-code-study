
import {router, activeRouter} from './router';

var Vue = function (obj) {
  this.vuex = {};
  this.routers = router(obj.route);
  this.activeRouter = activeRouter(this.routers);
};
export default Vue;
