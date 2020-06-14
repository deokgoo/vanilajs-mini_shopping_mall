import HeaderComponent from './components/HeaderComponent.js';
import ListComponent from './components/ListComponent.js';
import cloth from './models/cloth.js';
import {Filter, ClothColor, ClothType} from './enum.js';

const filter = Filter;
const data = {};

const App = {
  async setUp() {
    HeaderComponent.init(document.querySelector('header'))
      .on('@colorChange', e => this.changeColor(e.detail))
      .on('@typeChange', e => this.changeType(e.detail));
    ListComponent.init(document.querySelector('.main'));

    await this.fetchData();
    this.render();
  },
  async fetchData() {
    data.cloth = await cloth.getData();
  },
  render() {
    const filteredData = this.filterData(data.cloth);
    HeaderComponent.setData(filter.color, data.cloth);
    ListComponent.renderElement(filteredData);
  },
  filterData(data) {
    let fData = data;
    if(filter.color !== ClothColor.all) {
      fData = fData.filter(x => x.color === filter.color);
    }
    if(filter.type !== ClothColor.all) {
      fData = fData.filter(x => x.type === filter.type);
    }
    return fData;
  },
  changeColor(selectColor) {
    filter.color = ClothColor[selectColor];
    this.render();
  },
  changeType(selectType) {
    filter.type = ClothType[selectType];
    this.render();
  }
}

App.setUp();
