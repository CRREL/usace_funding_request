import app from 'ampersand-app';
import Reflux from 'reflux';

class TestStore extends Reflux.Store {
  constructor(){
    super();
    this._items = [];
    this.listenTo(app.actions.loadSomeTestItems, this._loadItems);
  }

  _loadItems = (cnt) => {
    const _this = this;
    window.setTimeout(function(){
      for(var i = 0; i < cnt; i++){
        _this._items.push({
          id: i,
          title: 'thing ' + i
        })
      }
      _this.trigger();
    }, 500);
  }

  getItems = () => {
    if(this._items.length < 1){
      this._loadItems(5);
      return [];
    }else{
      return this._items;
    }
  }

}

export default TestStore;