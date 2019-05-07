import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_USER_LOGOUT,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodcategorys,
  reqShops,
  reqUserInfo,
  reqLogOut,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqSearchShop
} from '../api'
export default {
  //  异步获取地址
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      // commit发送数据一定要用对象包裹起来
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  //  异步获取商品类别
  async getCategorys ({commit}) {
    const result = await reqFoodcategorys()
    if (result.code === 0) {
      const categorys = result.data
      // commit发送数据一定要用对象包裹起来
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  //  异步获取商家
  async getShops ({commit, state}) {
    const { latitude, longitude } = state
    const result = await reqShops(latitude, longitude)
    if (result.code === 0) {
      const shops = result.data
      // commit发送数据一定要用对象包裹起来
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //  同步记录用户信息
  recordUser ({commit}, userinfo) {
    commit(RECEIVE_USER_INFO, {userinfo})
  },
  //  异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userinfo = result.data
      commit(RECEIVE_USER_INFO, {userinfo})
    }
  },
  // 异步退出
  async logout ({commit}) {
    const result = await reqLogOut()
    if (result.code === 0) {
      commit(RECEIVE_USER_LOGOUT)
    }
  },
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  async getShopRatings ({commit}, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      // 数据更新了，通知一下组件
      callback && callback()
    }
  },
  async getShopGoods ({commit}, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 数据更新了，通知一下组件
      callback && callback()
    }
  },
  // 同步更新food中的count值
  updateFoodCount ({commit}, {food, isAdd}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },
  //  同步清空购物车
  clearCart ({commit}) {
    commit(CLEAR_CART)
  },
  // 异步获取搜索来的商家列表
  async searchShops ({commit, state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  }

}
