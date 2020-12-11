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
        is-edit
        :contact-info="editingContact"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
// import Vue from 'vue';
import { ContactList, Toast, ContactEdit, Popup } from 'vant';

// Vue.use(ContactList, Toast );
export default {
  components: {
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup
  },
  data() {
    return {
      chosenContactId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
        },
      ],
      show: false,
      editingContact: {},
    }
  },
  methods: {
    onAdd() {
      this.show = true;
    },
    onEdit(contact) {
      this.editingContact = contact;
      this.show = true;
    },
    onSave(contactInfo) {
      this.show = false;
    },
    onDelete(contactInfo) {
      this.show = false;
    },
  }
}
</script>