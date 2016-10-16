<template>
  <div class="modal fade" id="logout" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          <h4 class="modal-title"><i class="fa fa-sign-out"></i> 提出提示</h4>
        </div>
        <div class="modal-body">
          <h3 class="text-center deleteConfirmText">确定退出后台管理?</h3>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" data-dismiss="modal" @click="confirmLogout()" class="btn btn-danger">退出</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
  //    import 'bootstrap/js/modal.js'
  import {setLoginState} from '../vuex/actions'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      confirmLogout: function () {
//                alert('confirmLogout')
        const scope = this;

        setTimeout(function () {
          scope.$localStorage.$delete('authorization');
          scope.setLoginState(false);
          scope.$router.go({
            name: 'index'
          });
          //开启tooltip
          window.tooltip()
        }, 200);
      },
    },
    components: {},
    created: function () {

      this.$root.doLogout = this.confirmLogout;


    },
    vuex: {
      actions: {
        // 注意在这里你需要 `getMyInfo` 函数本身而不是它的执行结果 'getMyInfo()'
        setLoginState,//设置登录否
      }
    },
  }
</script>
