<template>
  <div class="picture">
    <van-uploader
      multiple
      v-model="fileList"
      :after-read="afterRead"
      :before-delete="beforeDelete">
      <div slot="default" class="noImage">
        <van-icon name="plus" />
      </div>
    </van-uploader>
  </div>
</template>

<script>
import { DialogConfirm, DialogAlert } from '../../utils/dialog'

export default {
  name: 'ProductPicture',
  data () {
    return {
      fileList: []
    }
  },
  mounted () {
    console.log(DialogConfirm, DialogAlert)
  },
  methods: {
    afterRead (file, detail) {
      // 此时可以自行将文件上传至服务器
      console.log(file, detail)
    },
    beforeDelete (file, detail) {
      console.log(this.fileList, file, detail)
      DialogConfirm(
        '删除图片',
        '图片删除后不可恢复，是否确认删除？',
        '确认删除',
        '取消删除',
        () => {
          console.log('确认删除')
          this.fileList.splice(detail.index, 1)
        }
      )
    },
    saveImg () {
      // 保存图片
      console.log(this.fileList, this.fileList.length)
    }
  }
}
</script>

<style lang="less" scoped>
.picture{
  padding: 16px 0 16px 16px;
   display: flex;
   flex-wrap: wrap;
   .uploader{
      width: 109px;
   }
}
 .noImage{
    width: 84px;
    height: 84px;
    border-radius: 4px;
    background: #E9EAEC;
    font-size: 37px;
    color: #969799;
    align-items: center;
    justify-content: center;
    display: flex;
  }
</style>
