import request from '../utils/request'

const Api = {
  // 获取联系人列表
  getContactList(callback){
    // var http = request({
    //   method: 'get',
    //   url: '/contactList'
    // })
    // http.then(callback)
    return request({
      method: 'get',
      url: '/contactList'
    })
  },
  // 添加联系人 form-data
  addContactForm(data) {
    return request({
      method: 'post',
      url: '/contact/new/form',
      data
    })
  },
  // application/json
  addContactJson(data) {
    return request({
      method: 'post',
      url: '/contact/new/json',
      data
    })
  },
  // 编辑联系人
  editContact(id, data) {
    return request({
      method:'put',
      url: '/contact/edit',
      params: {id},
      data
    })
  },
  // 删除联系人
  delContact(id) {
    return request({
      method: 'delete',
      url: '/contact',
      params: {id}
    })
  }
}

export default Api