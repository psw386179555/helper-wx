import { Base } from '/utils/base.js';

class AppModel extends Base {
  constructor() {
    super();
  }

  saveInfo(userInfo, callback) {
    let params = {
      url: 'user/add',
      data: {
        headimg: userInfo.avatarUrl,
        nickname: userInfo.nickName,
      },
      type: 'post',
      sCallback: callback
    }

    this.request(params);
  }

}

export { AppModel };