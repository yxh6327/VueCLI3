import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carList: [],
    favoritesList: []
  },
  getters: {
  	carListLength(state) {
      return state.carList.length;
  	},
  	carList(state) {
  		return state.carList;
  	},
    favoritesList(state) {
      return state.favoritesList;
    },
    favoritesListLength(state) {
      return state.favoritesList.length;
    }
  },
  mutations: {
  	addCount(state, payload) {
  	  payload.count++; 		 		
  	},
    subCount(state, payload) {
      payload.count--;
    },
  	addGood(state, payload) {
  		// payload.checked = false;
  		state.carList.push(payload);
  	},
    deleteGood(state, payload) {
      state.carList.splice(payload, 1);
    },
    addFavorites(state, payload) {
      state.favoritesList.push(payload);
    },
    deleteFavorites(state, payload) {
      state.favoritesList.splice(payload, 1);
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
	  },
    favorites(context, payload) {
      return new Promise((resolve, reject) => {
        let oldFavorites = context.state.favoritesList.find((item) => {
          return item.iid === payload.iid;
        });
        if(oldFavorites){

        } else{
          //表示该商品已经被收藏
          payload.hasCollected = true;
          context.commit('addFavorites', payload);
          resolve(['已经加入收藏夹',payload.hasCollected])
        }
      })
    },
    judgeCount(context, payload) {
      return new Promise((resolve, reject) => {
        if(payload.count === 1) {
          resolve('该商品不能减少了');
        } else{
          context.commit('subCount', payload);
        }
      })
    },
    findGood(context, payload) {
      for(var i = 0; i < context.state.carList.length; i++) {
        if(context.state.carList[i].iid === payload.iid) {
          context.commit('deleteGood', i);
          break;
        }
      }
    },
    findFavoritesGood(context, payload) {
      for(var i = 0; i < context.state.favoritesList.length; i++) {
        if(context.state.favoritesList[i].iid === payload.iid) {
          context.commit('deleteFavorites', i);
          break;
        }
      }
    },
  },
  modules: {
  }
})
