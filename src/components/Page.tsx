import { useEffect, useState } from "react";
import { Property } from "../interfaces/Property";
import { api } from "../services/api";
import { PropertyCard } from "./PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const Page = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  const getProperties = async () => {
    const { data } = await api.get("properties");
    setProperties(data);

    return data;
  };

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <div className="w-[375px] flex flex-col gap-[15px] px-8 py-10">
      <h1 className="text-dark-blue font-Manrope font-extrabold text-2xl">
        Imóveis do plano
      </h1>
      <p className="text-subtitle-gray text-sm">
        Estes são os imóveis escolhidos por especialistas para compra coletiva
        de frações neste plano.
      </p>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.2}
        spaceBetween={50}
        className="h-[470px] w-[350px]"
        pagination={{ clickable: true }}
        slidesOffsetAfter={30}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <PropertyCard property={property} />
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="text-light-blue font-Roboto font-bold cursor-pointer">
        Ver os imóveis que você adquiriu &gt;
      </span>
    </div>
  );
};
