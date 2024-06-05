// src/components/PortfolioSection.jsx
import React from 'react';
import PortfolioEntry from './PortfolioEntry';
import Introduction from './Introduction';
const PortfolioSection = () => {
  const portfolioItems = [
    {
      image: "/proto.jpg",
      title: "GasGo",
      description: "An app to check gas prices",
      date: "2024",
      link: "/gasgo"
    },
    {
      image: "/proto.jpg",
      title: "Echogenix",
      description: "An Ai companion app and summarization tool.",
      date: "2024",
      link: "/project-two"
    },
    {
      image: "/proto.jpg",
      title: "Dvr simulator",
      description: "An app that generates a DVR (Documento Valutazione Rischi).",
      date: "2024",
      link: "/project-three"
    },
    {
      image: "/proto.jpg",
      title: "Dragon's emporium",
      description: "A simple e-commerce and blog website.",
      date: "2024",
      link: "/project-four"
    }
  ];

  return (
    <section className="py-8 px-4 md:px-20">
        <Introduction />
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {portfolioItems.map((item, index) => (
          <PortfolioEntry
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            date={item.date}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;