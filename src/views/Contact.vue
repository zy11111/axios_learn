<template>
  <div>
    <van-contact-list
      v-model="chosenContactId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
    <van-popup v-model:show="show" position="bottom" :style="{ height: '100%' }">
      <van-contact-edit
        :is-edit="isEdit"
        :contact-info="editingContact"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
import { ContactList, Toast, ContactEdit, Popup } from 'vant';

export default {
  components: {
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup
  },
  data() {
    return {
      chosenContactId: '1',
      list: [],
      show: false,
      editingContact: {},
      isEdit: false
    }
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let res = await this.$Http.getContactList()
      if(res.code == 200) {
        this.list = res.data;
      }
      // .then(res => {
      //   console.log(res)
      //   if(res.code  == 200) {
      //     this.list = res.data;
      //   }
      // })
      // this.$Http.getContactList(function(res) {
      //   console.log(res)
      //   if(res.code  == 200) {
      //     this.list = res.data;
      //   }
      // })
    },
    onAdd() {
      this.show = true;
      this.isEdit = false;
      this.editingContact = {};
    },
    onEdit(contact) {
      this.editingContact = contact;
      this.show = true;
      this.isEdit = true;
    },
    async onSave(contactInfo) {
      let res;
      if(this.isEdit) {
        res = await this.$Http.editContact(this.editingContact.id, contactInfo)
        if(res.code == 200) {
          Toast("编辑成功");
          this.show = false;
          this.getList();
        }
        // .then(res => {
        //   if(res.code == 200) {
        //     Toast("编辑成功");
        //     this.show = false;
        //     this.getList();
        //   }
        // })
        /* .catch(() => {
          Toast("请求失败，请稍后重试")
        }) */
      } else {
        res = await this.$Http.addContactJson(contactInfo)
        if(res.code == 200) {
          Toast("添加成功");
          this.show = false;
          this.getList();
        }
        // .then(res => {
        //   if(res.code == 200) {
        //     Toast("添加成功");
        //     this.show = false;
        //     this.getList();
        //   }
        // })
      }
    },
    async onDelete(contactInfo) {
      let res = await this.$Http.delContact(contactInfo.id)
      if(res.code == 200) {
        Toast('删除成功');
        this.show = false;
        this.getList();
      }
      // .then(res => {
      //   if(res.code == 200) {
      //     Toast('删除成功');
      //     this.show = false;
      //     this.getList();
      //   }
      // })
    },
  }
}
</script>