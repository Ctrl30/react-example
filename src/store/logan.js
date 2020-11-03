import { observable, action } from "mobx";

class Store {
  @observable menus = [];
  @observable flatMenus = [];
  @observable userAuthority = []; // 当前用户权限表
  @observable hello = "world";
}

export default Store;
