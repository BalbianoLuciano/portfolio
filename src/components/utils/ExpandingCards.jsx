import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import cardsData from "../utils/cardContent.json";

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="containerCard">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className={`panel ${card.id === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${card.imageUrl})` }}
          onClick={() => setActiveIndex(card.id)}
        >
          {card.id === activeIndex && (
            <div className="techBadges">
              {card.technologies.map((tech) => (
                <span key={tech} className="techBadge">
                  {tech}
                </span>
              ))}
            </div>
          )}
          <div className="infoContainer">
            <h3 className="text-xs xl:text-sm 2xl:text-base cards-border-half">{t(card.title)}</h3>
            {card.id === activeIndex && (
              <a
                className="button"
                rel="noopener noreferrer"
                href={card.link}
                target="_blank"
              >
                <span className="button__icon-wrapper">
                  <svg
                    width="10"
                    className="button__icon-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 15"
                  >
                    <path
                      fill="currentColor"
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    ></path>
                  </svg>

                  <svg
                    className="button__icon-svg  button__icon-svg--copy"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    fill="none"
                    viewBox="0 0 14 15"
                  >
                    <path
                      fill="currentColor"
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    ></path>
                  </svg>
                </span>
                {t("link to")}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;
