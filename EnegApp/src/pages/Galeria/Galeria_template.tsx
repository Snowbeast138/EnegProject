import Title from "../../components/Title";
import { Galleria } from "primereact/galleria";
import { PhotoService } from "./PhotoService";
import { useEffect, useState } from "react";

interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

function Galeria_template() {
  const [images, setImages] = useState<Image[]>([]);

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "960px",
      numVisible: 4,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const itemTemplate = (item: {
    itemImageSrc: string | undefined;
    alt: string | undefined;
  }) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "65%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item: {
    thumbnailImageSrc: string | undefined;
    alt: string | undefined;
  }) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <div>
      <style>
        {`
          .galleria-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 65vh;
            text-align: center;
            padding: 20px;
            box-sizing: border-box;
          }

          .galleria-container .p-galleria {
            max-width: 65%;
          }
        `}
      </style>
      <Title content="Galeria" />
      <div className="galleria-container">
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={7}
          circular
          style={{ maxWidth: "800px" }}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          showItemNavigators
          showItemNavigatorsOnHover
          showIndicators
          autoPlay
          transitionInterval={2000}
        />
      </div>
    </div>
  );
}

export default Galeria_template;
