import React from "react";
import { Carousel } from "react-responsive-carousel";

class ProjectCarousel extends React.Component {
    renderImages = () => {
        return this.props.images.map(img => {
            return (
                <div>
                    <img src={img.url} />
                    <p className="legend">{img.description}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                {this.renderImages()}
            </Carousel>
        );
    }
}

export default ProjectCarousel;