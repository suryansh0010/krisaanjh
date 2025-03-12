import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import market1 from "../../assets/market_862856 1.png";
import market2 from "../../assets/Group 1000000891.png";
import market3 from "../../assets/environmental-law_9587611 1.png";

import market4 from "../../assets/paper_1673996 1.png";

const MidPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Market",
      src: market1,
      description:
        "Meet the farmers behind your food and enjoy produce grown with care and passion.",
      link: "/MarketFirstPage",
    },
    {
      title: "Chat",
      src: market2,
      description:
        "Meet the growers behind your food and get firsthand answers to all your questions.",
      link: "/MarketFirstPage",
    },
    {
      title: "Legal",
      src: market3,
      description:
        "Trust in agreements that are legally binding and endorsed by government regulations for your peace of mind.",
      link: "/MarketFirstPage",
    },
    {
      title: "Contracts",
      src: market4,
      description:
        "Eliminate uncertainty with contracts that detail every aspect of your transaction, fostering trust and transparency.",
      link: "/App2",
    },
    {
      title: "Market",
      src: "https://img.freepik.com/premium-photo/man-holding-mobile-phone-while-standing-farm_1048944-18724812.jpg?w=1060",
      description:
        "Trust in agreements that are legally binding and endorsed by government regulations for your peace of mind.",
      link: "/MarketFirstPage",
    },
  ];

  return (
    <div className="relative z-20 h-[200px] bg-[#E5FFEF]">
      <div className="absolute w-full overflow-hidden mt-[-280px]  px-4 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center">
          <div className="flex w-full transform transition-transform duration-700 ease-in-out">
            {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
              <div key={index} className="w-1/4 px-2 sm:px-4">
                <Link to={item.link} target="_blank">
                  <div className="bg-[#243F32] rounded-[15px] h-[400px] border-[1px] border-[#bbbfbd] shadow-lg p-4">
                    <p className="text-[18px] sm:text-[21px] text-center text-white font-semibold mt-6">
                      {item.title}
                    </p>
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-[100px] h-[100px] mx-auto mt-12 object-contain rounded-lg"
                    />
                    <p className="text-[13px] sm:text-[15px] text-center text-white mt-16">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to="/chatbot">
        <div className="fixed bottom-8  right-8 bg-[#215A37] p-3 rounded-full shadow-lg cursor-pointer">
          <ChatIcon className="text-white text-4xl" />
        </div>
      </Link>
    </div>
  );
};

export default MidPage;
