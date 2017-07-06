

export default {
 data () {
   return {
     num: 12,
     obj: {
       id: 23,
       name: 'wangYiZe'
     },
     list: [1, 3, 54]
   }
 },
 mounted () {
   console.log('我是header的this');
   console.log(this);
 },
 methods: {
   saylist () {
     console.log(this.list);
   }
 }
};
