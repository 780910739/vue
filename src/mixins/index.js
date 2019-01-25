import router from "./../router";
import toast from './../utils/js/toast';
export default {
  beforeCreate(){
    if(this.$route){
      this.module = this.$route.meta.module || this.$route.name;
      this.modulePath = this.module + "/";
    }
  },
  methods: {
    jump (to,params) {
      if (this.$router) {
        if(params){
          this.$router.push({name:to,params});
        }else{
          this.$router.push(to);
        }
      }
    },
    back () {
      this.$router.back();
    },
    toast (StringOrObject,callback=()=>{}){
      //param object message, duration, position, string message
      toast(StringOrObject,callback);
    }
  }
}
