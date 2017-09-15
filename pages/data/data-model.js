import { Base } from '../../utils/base.js';

class Data extends Base{
  constructor(){
    super()
  }

  getData(data,callback){
    let params = {
      url:'health/wechat/room',
      type:'post',
      data:data,
      sCallback:callback
    }
    this.request(params);
  }


}

export { Data };