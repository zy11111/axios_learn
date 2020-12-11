# axios_learn

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 接口代码地址
https://github.com/web-gm/axios_node_api

### 接口
后端接口地址 	http://localhost:9000/api		

url	| method |	参数 |	备注
---|---|---|---
/contactList |	get |	无	|
/contact/new/form	| post |	name,tel	| content-type:form-data
/contact/new/json	| post	| name,tel	| content-type:application/json
/contact/edit	| put	| name,tel,id	| content-type:application/json
/contact	| delete	| id	| 参数拼接在url上
