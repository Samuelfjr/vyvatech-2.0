interface CardProps {
  title: string;
  subtitle: string;
  url: string;
}

const Card = ({ title, subtitle, url }: CardProps) => (
  <div className="w-1/4 ml-5">
    <div className="gap-10 ">
      <div className="bg-slate-100 p-8 rounded-3xl hover:bg-slate-200 transition-colors duration-300 transform hover:scale-105">
        <img
          src={url}
          alt={title}
          className="rounded-2xl w-150 h-80 object-cover"
        />
      </div>

      <div className="flex flex-col p-4 justify-center items-center">
        <p className="font-semibold text-xs">{subtitle}</p>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
    </div>
  </div>
);

export function BadgesHome() {
  const cards: CardProps[] = [
    {
      title: "Badget 1",
      subtitle: "DESENVOLVIMENTO DE SITES",
      url: "/card.gif",
    },
    {
      title: "Badget 2",
      subtitle: "DESENVOLVIMENTO DE SITES",
      url: "/card3.png",
    },
    {
      title: "Badget 3",
      subtitle: "DESENVOLVIMENTO DE SITES",
      url: "/card2.gif",
    },
    {
      title: "Badget 4",
      subtitle: "DESENVOLVIMENTO DE SITES",
      url: "/card4.png",
    },
  ];

  const renderCards = () =>
    cards.map((card, index) => <Card key={index} {...card} />);

  return <div className="flex mt-20 mb-20">{renderCards()}</div>;
}
