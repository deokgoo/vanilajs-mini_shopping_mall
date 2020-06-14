const ListComponent = {
  init(el) {
    this.el = el;
  },
  renderElement(data) {
    const parts = data.reduce((html, item) => {
      html += this.createElement(item);
      return html
    }, '<div class="lists">') + "</div>"
    this.el.innerHTML = parts;
  },
  createElement(item) {
    const {name, tag, image} = item
    const tagParse = tag.join(',');
    return `
      <div class="item">
        <div class="item__img">
          <img src="${image}" alt="${name}">
        </div>
        <div class="item__discript">
          <div class="item__discript__title">${name}</div>
          <div class="item__discript__subTitle">${tagParse}</div>
        </div>
      </div>`;
  }
}

export default ListComponent;
