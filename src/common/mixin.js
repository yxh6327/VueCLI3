//混入
import {debounce} from './utils.js'
export const itemListenerMixin = {
	data() {
		return {
			itemImgListener: null
		}
	},
	mounted() {
	    const refresh = debounce(this.$refs.scroll.refresh, 500);
        this.itemImgListener = () => {
          refresh();
        };
        this.$bus.$on('itemImageLoad', this.itemImgListener);
	}
}