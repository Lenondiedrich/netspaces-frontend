import houseIcon from "../assets/house.svg";
import dollarIcon from "../assets/dollar.svg";
import barcodeIcon from "../assets/barcode.svg";
import percentIcon from "../assets/percent.svg";
import pinIcon from "../assets/map.svg";
import flagIcon from "../assets/flag.svg";

interface DescriptionProps {
  area: string;
  totalValue: number;
  rentValue: number;
  returnValue: string;
  neighbourhood: string;
  location: string;
}

export const Description = ({
  area,
  location,
  neighbourhood,
  rentValue,
  returnValue,
  totalValue,
}: DescriptionProps) => {
  return (
    <>
      <div className="flex items-center">
        <p className="text-dark-description font-medium font-Roboto flex items-center gap-2 w-1/2">
          <img src={houseIcon} className="h-3 w-3" />
          Tipo/Área
        </p>

        <p className="text-dark-description font-Roboto font-light">{area}</p>
      </div>

      <div className="flex items-center">
        <p className="text-dark-description font-medium font-Roboto flex items-center gap-2 w-1/2">
          <img src={dollarIcon} className="h-3 w-3" />
          Valor total
        </p>

        <p className="text-dark-description font-Roboto font-light">
          {totalValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <div className="flex items-center">
        <p className="text-dark-description font-medium font-Roboto flex items-center gap-2 w-1/2">
          <img src={barcodeIcon} className="h-3 w-3" />
          Aluguel
        </p>

        <p className="text-dark-description font-Roboto font-light">
          {rentValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <div className="flex items-center">
        <p className="text-dark-description font-medium font-Roboto flex items-center gap-2 w-1/2">
          <img src={percentIcon} className="h-3 w-3" />
          Retorno
        </p>

        <p className="text-dark-description font-Roboto font-light">
          {returnValue}
        </p>
      </div>

      <div className="flex items-center">
        <p className="text-dark-description font-medium font-Roboto flex items-center gap-2 w-1/2">
          <img src={pinIcon} className="h-3 w-3" />
          Bairro
        </p>

        <p className="text-dark-description font-Roboto font-light">
          {neighbourhood}
        </p>
      </div>

      <div className="flex items-center">
        <p className="text-dark-description font-medium font-Roboto flex items-center gap-2 w-1/2">
          <img src={flagIcon} className="h-3 w-3" />
          Cidade/UF
        </p>

        <p className="text-dark-description font-Roboto font-light">
          {location}
        </p>
      </div>
    </>
  );
};

{
}
