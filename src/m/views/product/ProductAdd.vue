<template>
  <div class="productBody">
    <div class="headerTitle">基础信息</div>
    <!-- 商品名称 -->
    <van-cell
      class="marginBottom"
      :border="false"
      size="large"
      title="名称"
      is-link
      to="productbasic">
      <span slot="default" class="rightName">请选择名称</span>
    </van-cell>
    <!-- 图片 -->
    <div class="picture marginBottom">
      <van-cell :border="false" size="large" title="图片" is-link to="productpic">
        <span slot="default" class="rightName">共0张图片</span>
      </van-cell>
      <div class="pictureContent">
        <div class="noImage" v-if="images.length===0" @click="()=>this.$router.push('/productpic')">
          <van-icon name="plus" />
        </div>
        <van-image
          v-for="(item,index) in images"
          :key="index"
          :src="item"
          class="zmImage"
          @click="previewImg(index)"/>
      </div>
    </div>
    <!-- 商家维护 -->
    <div class="marginBottom">
      <van-switch-cell v-model="checked" :border="false" cell-size="large" title="是否开启商家地址维护" active-color="#ff4444"/>
      <van-cell-group v-if="!checked">
        <van-cell title="杭州分店" size="large" label="浙江省杭州市江干区九堡镇人民西路100号" is-link to="productaddress">
          <van-icon slot="right-icon" name="edit" class="editIcon"/>
        </van-cell>
        <van-cell title="杭州分店" size="large" label="浙江省杭州市江干区九堡镇人民西路100号" is-link to="productaddress"/>
        <van-cell title="杭州分店" size="large" label="浙江省杭州市江干区九堡镇人民西路100号" is-link to="productaddress"/>
        <van-cell title="杭州分店" size="large" label="浙江省杭州市江干区九堡镇人民西路100号" is-link to="productaddress"/>
      </van-cell-group>
      <van-cell-group v-if="!checked" :border="checked" @click="()=>{this.$router.push('productaddress')}">
        <div class="addBtn">添加地址<van-icon name="add-o"/></div>
      </van-cell-group>
    </div>
    <!-- 供应商 售卖区域 -->
    <van-cell-group>
      <van-cell title="供应商" size="large" is-link to="supply">
        <span slot="default" class="rightName">请选择</span>
      </van-cell>
      <van-cell title="售卖区域" size="large" is-link @click="isShowSellArea=true">
        <span slot="default" class="rightName">请选择</span>
      </van-cell>
    </van-cell-group>

    <!-- 规格 -->
    <div class="">
      <div class="headerTitle">规格</div>
      <van-cell-group>
        <van-cell title="规格1" size="large" label="ID：21341247" is-link to="productsku"/>
        <van-cell title="规格1" size="large" label="ID：21341247" is-link />
        <van-cell title="规格1" size="large" label="ID：21341247" is-link />
        <van-cell title="规格1" size="large" label="ID：21341247" is-link />
      </van-cell-group>
      <van-cell-group :border="false" @click="()=>{this.$router.push('productsku')}">
        <div class="addBtn">添加规格<van-icon name="add-o"/></div>
      </van-cell-group>
    </div>
    <!-- 底部保存 -->
    <foot>

      <van-button class="saveBtn" color="#FF4444" @click="onSave">保存</van-button>
    </foot>

    <!-- 售卖区域 popup -->
    <popup-list
      title="选择售卖区域"
      :isShowSearch="true"
      :height="88"
      :dataList="sellAreaList"
      :isShowPopup="isShowSellArea"
      :selectedItem="selectedSellArea"
      @callBackCancel="onShowSellArea"
      @callBackSelect="onSelectSellArea"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { ImagePreview } from 'vant'
import Foot from '../../components/Foot'
import PopupList from '../../components/PopupList'
import toast from '../../utils/toast'
Vue.use(ImagePreview)
const images = [
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://img.yzcdn.cn/vant/cat.jpeg'
]
let tmp = []
export default {
  name: 'ProductAdd',
  components: { PopupList, Foot },
  data () {
    return {
      isShowSellArea: false,
      sellAreaList: [],
      selectedSellArea: {},
      checked: false,
      images: []
    }
  },
  mounted () {
    this.sellAreaList = [
      { label: '江浙沪', value: '江浙沪' },
      { label: '上海', value: '上海' },
      { label: '广州', value: '广州' },
      { label: '深圳', value: '深圳' },
      { label: '杭州', value: '杭州' },
      { label: '苏州', value: '苏州' },
      { label: '无锡', value: '无锡' },
      { label: '常州', value: '常州' },
      { label: '合肥', value: '合肥' },
      { label: '郑州', value: '郑州' },
      { label: '南京', value: '南京' },
      { label: '成都', value: '成都' },
      { label: '长白山', value: '长白山' },
      { label: '武夷山', value: '武夷山' }
    ]
    tmp = [...this.sellAreaList]
    console.log(tmp)
  },
  methods: {
    onShowSellArea () {
      this.isShowSellArea = !this.isShowSellArea
    },
    onSearchSellArea (area) {
      // search
      console.log('=========', area, tmp.filter((f, i) => f.value === area))
      if (area === '') {
        this.sellAreaList = tmp
      } else {
        this.sellAreaList = tmp.filter((f, i) => f.value === area)
      }
    },
    onSelectSellArea (item) {
      this.selectedSellArea = item
      this.isShowSellArea = false
    },
    previewImg (index) {
      ImagePreview({
        images: this.images,
        startPosition: index,
        closeOnPopstate: true,
        onClose (obj) {
          // do something
          console.log('关闭预览', obj)
        }
      })
    },
    // 测试用
    onToastClose () {
      toast.hide()
    },
    onSave () {
      console.log(toast)
      toast.loading('保存中...')
      // toast.success('保存成功')
      // toast.fail('保存失败')
      // toast.info('长长长长长长长长长长长长长长长长长长长信息提示会换行')
    }
  }
}
</script>

<style lang="less" scoped>
.productBody{
  padding-bottom:66px;
}
.headerTitle{
  height: 50px;
  padding: 16px;
  font-size: 14px;
  font-family: PingFangSC;
  color: #999999;
}
.marginBottom{
  margin-bottom: 12px;
}
.rightName{
  font-size: 14px;
  color: #969799;
  line-height: 18px;
  letter-spacing: 0px;
}
.rightNameActive{
  color: #323233;
}
.picture{
  .pictureContent{
    height: 116px;
    padding: 16px 12px 16px 16px;
    background: #ffffff;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;
    .zmImage{
      width: 84px;
      height: 84px;
      border-radius: 4px;
      margin-right: 4px;
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
  }
}
.editIcon{
  font-size: 24px;
}
.addBtn{
    height: 40px;
    font-size: 14px;
    background: #ffffff;
    color: #1989FA;
    line-height: 18px;
    letter-spacing: 0px;
    display: flex;
    align-items: center;
    justify-content:center;
    i{
      margin-left: 4px;
    }
}
.saveBtn{
  height: 42px;
  width: 100%;
}

</style>
