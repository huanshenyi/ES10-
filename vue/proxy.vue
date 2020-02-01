<template>
    <button type="button" @click="reset">reset</button>
    <button type="button" @click="up">up</button>
    <button type="button" @click="down">down</button>
</template>
<script>
    // 元のデータを変更せずの操作例
    export default {
      // ...省略
       data(){
         return{
           price:'',
           proxy:''
         }
       },
       methods:{
         up(){this.price = this.proxy.up},
         down(){this.price = this.proxy.down},
         reset(){this.price = this.proxy.default},
       },
       async mounted(){
           const {data:{price}} = await axios.get("/foobar")
           Object.freeze(price)
           this.proxy = new Proxy({},{
             get(target, key){
               if(key === 'up'){
                 return [].concat(price).sort((a,b)=>a-b)
               }else if (key === 'down'){
                 return [].concat(price).sort((a,b)=>b-a)
               }else {
                 return price
               }
             },
             set () {
               return false
             }
           })
         this.price = this.proxy.default //defaultにするのは最初elseのブロックにはいるため
        }
    }
</script>
