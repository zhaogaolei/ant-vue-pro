<template>
  <div class="baseInfo">
    <van-cell-group>
      <van-field
        label="名称"
        placeholder="规格名称，某些“一日游”，“周卡”"
        size="large"
      />
      <van-field
        label="标题"
        placeholder="请输入卖点，例如“工作日不限入园次数”"
        size="large"
      />
    </van-cell-group>
    <van-cell-group class="type">
      <van-cell size="large" title="类型" :value="selectedType.value||'请选择'" is-link @click="onSelectType"/>
    </van-cell-group>

    <van-cell-group>
      <van-switch-cell :border="false" cell-size="large" v-model="checked" title="是否上传特定的图片" active-color="#ff4444"/>
    </van-cell-group>
    <div class="picture" v-if="checked">
      <van-cell :border="false" size="large" title="图片" is-link to="productpic">
        <span slot="default">共0张图片</span>
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

    <van-popup
      v-model="isShowType"
      closeable
      safe-area-inset-bottom
      position="bottom"
      :style="{ height: '66%' }"
    >
      <div class="popupTitle">选择类型</div>
      <van-cell-group>
        <van-cell size="large" v-for="(item,index) in typeList" :key="index" @click="afterSelectType(item)">
          <van-icon slot="icon" class="listSelectIcon" name="success" v-if="item.value===selectedType.value"/>
          <div slot="title">{{ item.label }}</div>
        </van-cell>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { ImagePreview } from 'vant'
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
export default {
  data () {
    return {
      isShowType: false,
      checked: true,
      images: [],
      selectedType: {},
      typeList: [
        { label: '乐园', value: '乐园' },
        { label: '亲子美食', value: '亲子美食' },
        { label: '景区', value: '景区' },
        { label: '亲子生活', value: '亲子生活' },
        { label: '寓教于乐', value: '寓教于乐' },
        { label: '亲子剧', value: '亲子剧' },
        { label: '玩具', value: '玩具' },
        { label: '绘本', value: '绘本' },
        { label: '大宝剑', value: '大宝剑' },
        { label: '游泳', value: '游泳' }
      ]
    }
  },
  methods: {
    onSelectType () {
      this.isShowType = true
    },
    afterSelectType (item) {
      console.log(item)
      this.selectedType = item
      this.isShowType = false
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
    }
  }
}
</script>
<style lang="less" scoped>
.baseInfo{
  margin-top: 25px;
  margin-bottom: 66px;
  .type{
    margin: 12px 0 ;
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
  .popupTitle{
    height: 54px;
    font-size: 16px;
    font-weight: 800;
    color: #323233;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .listSelectIcon{
    color: #FF4444;
    font-size: 16px;
    margin-right: 8px;
    padding-top: 5px;
  }
}
</style>
