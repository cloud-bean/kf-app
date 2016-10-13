<template>

  <div class="panel panel-default">
                <div class="panel-heading">RANK</div>
                <table class="table table-responsive">
                  <thead>
                    <tr>
                      <th>排名</th>
                      <th>头像</th>
                      <th>姓名</th>
                      <th>等级</th>
                      <th>经验</th>
                      <th>悦维币</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><img :src="user.profileImageURL" style="width:50px;" class="img-circle"></td>
                      <td>{{user.displayName}}</td>
                      <td>{{user.option.level}}</td>
                      <td>{{user.option.exp}}</td>
                      <td>{{user.option.goldtoken}}</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><img :src="user.profileImageURL" style="width:50px;" class="img-circle"></td>
                      <td>{{user.displayName}}</td>
                      <td>{{user.option.level}}</td>
                      <td>{{user.option.exp}}</td>
                      <td>{{user.option.goldtoken}}</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><img :src="user.profileImageURL" style="width:50px;" class="img-circle"></td>
                      <td>{{user.displayName}}</td>
                      <td>{{user.option.level}}</td>
                      <td>{{user.option.exp}}</td>
                      <td>{{user.option.goldtoken}}</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><img :src="user.profileImageURL" style="width:50px;" class="img-circle"></td>
                      <td>{{user.displayName}}</td>
                      <td>{{user.option.level}}</td>
                      <td>{{user.option.exp}}</td>
                      <td>{{user.option.goldtoken}}</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><img :src="user.profileImageURL" style="width:50px;" class="img-circle"></td>
                      <td>{{user.displayName}}</td>
                      <td>{{user.option.level}}</td>
                      <td>{{user.option.exp}}</td>
                      <td>{{user.option.goldtoken}}</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><img :src="user.profileImageURL" style="width:50px;" class="img-circle"></td>
                      <td>{{user.displayName}}</td>
                      <td>{{user.option.level}}</td>
                      <td>{{user.option.exp}}</td>
                      <td>{{user.option.goldtoken}}</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><img :src="user.profileImageURL" style="width:50px;" class="img-circle"></td>
                      <td>{{user.displayName}}</td>
                      <td>{{user.option.level}}</td>
                      <td>{{user.option.exp}}</td>
                      <td>{{user.option.goldtoken}}</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><img :src="user.profileImageURL" style="width:50px;" class="img-circle"></td>
                      <td>{{user.displayName}}</td>
                      <td>{{user.option.level}}</td>
                      <td>{{user.option.exp}}</td>
                      <td>{{user.option.goldtoken}}</td>
                    </tr>
                  </tbody>
                </table>
    </div>

</template>

<script>
import vs from '../components/Vs';
import mockdata from '../../test/mock';
export default {
  components:{vs},
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      user:mockdata.user,
    }

  }
};
</script>

<style scoped>
.table th{
  text-align: center;
}
  .table td{
    vertical-align:text-bottom;
    text-align: center;

  }
</style>
