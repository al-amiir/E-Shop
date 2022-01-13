import React from "react";

import ImageGallery from "react-image-gallery";
export default class MyGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.data.thumbnail.map((img) => {
        return {
          original: `${img}`,
          thumbnail: `${img}`,
        };
      }),
    };
  }
  render() {
    return <ImageGallery items={this.state.images} thumbnailPosition={"bottom"} showPlayButton={false} showNav={false} showFullscreenButton={false} />;
  }
}
