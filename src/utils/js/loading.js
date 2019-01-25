import Vue from 'vue';
import loading from './../../components/txt-loading.vue';
const LoadingConstructor = Vue.extend(loading);

let removeDom = event => {
  event.target.parentNode.removeChild(event.target);
};

LoadingConstructor.prototype.hide = function () {
  this.visible = false;
};

LoadingConstructor.prototype.show = function () {
  this.visible = true;
};

LoadingConstructor.prototype.clear = function () {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
};
const Loading = (options = {}) => {

  var instance = new LoadingConstructor().$mount(document.createElement('div'))
  instance.position = options.position || 'middle'
  document.body.appendChild(instance.$el);
  return instance
};

export default Loading
