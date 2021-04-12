//首先要引入Tosat组件
import Toast from './Toast.vue'

const obj = {};

obj.install = function(Vue) {
    //1.创建组件构造器
    const toastConstructor = Vue.extend(Toast);

    //2.根据组件构造器，new一个新的组件对象
    const toast = new toastConstructor();

    //3.将组件对象手动挂载到某一个元素上
    toast.$mount(document.createElement('div'));

    //4.给body追加一个新元素，toast.$el对应的就是div
    document.body.appendChild(toast.$el);

    //5.将创建的插件添加到vue的原型中
    Vue.prototype.$toast = Toast;
};


export default obj;

