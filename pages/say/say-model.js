import { Base } from '../../utils/base.js';

class Say extends Base {
  constructor() {
    super();
  }

  add(data,callback){
    let params ={
      url:'say/add',
      data:data,
      type:'post',
      sCallback:callback
    }

    this.request(params);
  }

  list(callback){
    let params = {
      url:'say/list',
      sCallback:callback
    }

    this.request(params);
  }
}

export { Say };