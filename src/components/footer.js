

export default {
 data () {
   return {list: '我是footer'};
 },
 mounted () {
   console.log('我是footer的this');
   console.log(this);
 },
 methods: {
   saylist () {
     console.log(this.list);
   }
 }
};
