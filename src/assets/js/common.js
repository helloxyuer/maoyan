/**
 * Created by bychen on 2017/3/24.
 */
export default{
    getMyData () {
        let userList = localStorage.getItem('userList');
        userList = userList||"{}";
        return JSON.parse(userList);
    },

    saveMyDta(data){
        data = JSON.stringify(data);
        localStorage.setItem('userList');
    },

    trim(data){
      let thisdata = data||'';
      return thisdata.replace(/(^\s*)|(\s*$)/g, "");
    }
}
