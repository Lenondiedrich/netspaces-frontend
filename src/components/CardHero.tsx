interface CardHeroProps {
  thumbnail: string;
  name: string;
  percentage?: number;
}

export const CardHero = ({ thumbnail, name, percentage }: CardHeroProps) => {
  return (
    <div>
      <img
        src={thumbnail}
        alt="Property image"
        className="rounded-t-md h-40 w-full"
      />
      <div className="name p-3 flex items-center gap-4">
        <p className="text-dark-blue font-bold text-xl w-3/4 font-Manrope line-clamp-3">
          {name}
        </p>
        {percentage ? (
          <div className="flex flex-col justify-center font-Manrope font-light text-xl text-dark-blue h-[74px]">
            <span>
              {percentage?.toLocaleString("pt-BR", {
                maximumFractionDigits: 3,
                minimumFractionDigits: 1,
                minimumSignificantDigits: 3,
              })}
            </span>
            <span className="text-right">%</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};
