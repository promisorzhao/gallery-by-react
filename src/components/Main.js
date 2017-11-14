require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


let imageDatas = require('../data/imageDatas.json');

function getImageURL(imageArr) {
  for(let i = 0; i < imageArr.length; i++) {
    var singleData = imageArr[i];
    singleData.imageURL = require("../images" + imageArr[i].fileName);
    imageArr[i] = singleData;
  }
  return imageArr;
}
imageDatas = getImageURL(imageDatas);
class AppComponent extends React.Component {
  render() {
    return (
      /*<div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>*/
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav class="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
