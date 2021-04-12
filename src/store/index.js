import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carList: []
  },
  getters: {
  	carListLength(state) {
      return state.carList.length;
  	},
  	carList(state) {
  		return state.carList;
  	}
  },
  mutations: {
  	addCount(state, payload) {
  	  payload.count++; 		 		
  	},
  	addGood(state, payload) {
  		// payload.checked = false;
  		state.carList.push(payload);
  	}
  },
  actions: {
  	//判断加入购物车的商品是新的还是已经存在的
  	shopCar(context, payload) {
  		return new Promise((resolve, reject) => {
  			let oldProduct = context.state.carList.find((item) => {
	  			return item.iid === payload.iid;
		  		});
		  		if(oldProduct) {//已经存在的商品数量直接加一
		  			context.commit('addCount', oldProduct);
		  			resolve('商品数量+1');
		  		} else {//新商品要追加到carList中
		  			payload.count++;
		  			context.commit('addGood', payload);
		  			resolve('已经添加到购物车');
		  		}
  		})
      
	  	}
  },
  modules: {
  }
})
