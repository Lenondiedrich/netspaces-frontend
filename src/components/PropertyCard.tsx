import { Plus } from "phosphor-react";
import starburst from "../assets/starburst.svg";
import whiteStarburst from "../assets/white-starburst.svg";
import { Property } from "../interfaces/Property";
import { CardHero } from "./CardHero";
import { Description } from "./Description";
import { LineSeparator } from "./LineSeparator";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="relative min-w-[315px] max-w-[354px] w-full h-[420px] mt-6 border border-light-gray rounded-lg p-[10px] shadow-lg hover:shadow-2xl hover:cursor-pointer">
      <div className="absolute -top-4 -right-4 z-50">
        {property.id === 1 ? (
          <>
            <img src={starburst} className="w-[100px] h-[100px] relative" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="text-white font-Manrope font-bold text-xl">
                23,62%
              </p>
              <p className="text-white font-Roboto font-black text-xs">
                COMPRADO
              </p>
            </div>
          </>
        ) : null}
        {property.id === 2 ? (
          <>
            <img
              src={whiteStarburst}
              className="w-[100px] h-[100px] relative text-white fill-white"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="text-dark-blue font-Manrope font-bold text-xl">
                Próximo
              </p>
            </div>
          </>
        ) : null}
      </div>
      <CardHero
        thumbnail={property.thumbnail}
        name={property.name}
        percentage={property.percentage}
      />
      <LineSeparator />
      <div className="p-3 text-sm">
        <Description {...property} />
      </div>
      <Plus
        color="#558EFF"
        weight="bold"
        className="absolute right-2 bottom-2"
      />
    </div>
  );
};
