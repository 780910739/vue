import { Tools } from './tool';

const strategies = Object.assign({},Tools.data.check);
/*Validator类*/
export default class Validator {
  constructor() {
    this.cache = []; //保存校验规则
  }
  add(val, rules) {
    for (let rule of rules) {
      let strategyAry = rule.strategy.split(':'); //例如['minLength',6]
      let errorMsg = rule.errorMsg; //'用户名不能为空'
      this.cache.push(() => {
        let strategy = strategyAry.shift(); //用户挑选的strategy
        strategyAry.unshift(val); //把input的value添加进参数列表
        strategyAry.push(errorMsg); //把errorMsg添加进参数列表，[dom.value,6,errorMsg]
        return strategies[strategy].apply(null, strategyAry)?false:errorMsg;
      })
    }
  }
  start() {
    for (let validatorFunc of this.cache) {
      let errorMsg = validatorFunc();//开始校验，并取得校验后的返回信息
      if (errorMsg) {//r如果有确切返回值，说明校验没有通过
        return errorMsg;
      }
    }
  }
}
