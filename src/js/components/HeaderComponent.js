import {ClothColor, ClothType} from '../enum.js';
const HeaderComponent = {
  init(el) {
    this.el = el;
    this.colorBtns = this.el.querySelectorAll('.cloth_color>.col');
    this.typeBtns = this.el.querySelectorAll('.cloth_type>.col');
    this.typeImgs = this.el.querySelectorAll('.cloth_type img');
    this.bindEvent();
    return this;
  },
  bindEvent() {
    this.colorBtns.forEach(x => {
      let {color} = x.dataset;
      x.addEventListener('click', e => {
        this.el.dispatchEvent(new CustomEvent('@colorChange', {
          detail: ClothColor[color] 
        }));
      })
    })
    this.typeBtns.forEach(x => {
      let {type} = x.dataset;
      x.addEventListener('click', e => {
        this.el.dispatchEvent(new CustomEvent('@typeChange', { 
          detail: ClothType[type] 
        }));
      })
    })
  },
  setData(color, data) {
    if(color === ClothColor.all || color === ClothColor.blue) {
      this.setImage(data.filter(x => x.color === ClothColor.blue));
      return;
    }
    if(color === ClothColor.yellow) {
      this.setImage(data.filter(x => x.color === ClothColor.yellow));
      return;
    }
    if(color === ClothColor.pink) {
      this.setImage(data.filter(x => x.color === ClothColor.pink));
      return;
    }
  },
  setImage(cloths) {
    const tshirt = cloths.find(x => x.type === ClothType.tshirt);
    const pants = cloths.find(x => x.type === ClothType.pants);
    const skirt = cloths.find(x => x.type === ClothType.skirt);
    
    this.typeImgs[0].setAttribute('src', tshirt.image);
    this.typeImgs[1].setAttribute('src', pants.image);
    this.typeImgs[2].setAttribute('src', skirt.image);
  },
  on(evt, handler) {
    this.el.addEventListener(evt, handler);
    return this;
  }
}

export default HeaderComponent;
