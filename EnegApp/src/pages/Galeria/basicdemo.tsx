import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { PhotoService } from "./PhotoService";

interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

export default function BasicDemo() {
  const [images, setImages] = useState<Image[]>([]);
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    PhotoService.getImages().then((data: Image[]) => setImages(data));
  }, []);

  const itemTemplate = (item: Image) => {
    return (
      <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%" }} />
    );
  };

  const thumbnailTemplate = (item: Image) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  return (
    <div className="card">
      <Galleria
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={5}
        style={{ maxWidth: "640px" }}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
      />
    </div>
  );
}
