const CONTACT_API = {
  // 获取联系人列表
  getContactList: {
    method: 'get',
    url: '/contactList'
  },
  // 添加联系人 form-data
  addContactForm: {
    method: 'post',
    url: '/contact/new/form'
  },
  // application/json
  addContactJson: {
    method: 'post',
    url: '/contact/new/json'
  },
  // 编辑联系人
  editContact: {
    method:'put',
    url: '/contact/edit'
  },
  // 删除联系人
  delContact: {
    method: 'delete',
    url: '/contact'
  }
}

export default CONTACT_API