import React from "react";
import PropTypes from "prop-types";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const colorizeText = (text: string, subtitle: string) => {
  if (text.length < 3) {
    return { title: text, subtitle }; // No modifications for short texts
  }

  // Color the third last letter of the title
  const titleArray = text.split("");
  titleArray[titleArray.length - 3] = `<span class="text-lime-400">${titleArray[titleArray.length - 3]}</span>`;

  // Color the second and third word of the subtitle
  const subtitleArray = subtitle.split(" ");
  if (subtitleArray.length >= 3) {
    subtitleArray[1] = `<span class="text-lime-400">${subtitleArray[1]}</span>`;
    subtitleArray[2] = `<span class="text-lime-400">${subtitleArray[2]}</span>`;
  }

  return {
    title: titleArray.join(""),
    subtitle: subtitleArray.join(" "),
  };
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  const { title: coloredTitle, subtitle: coloredSubtitle } = colorizeText(title, subtitle);

  return (
    <section className="z-10 sm:py-16">
      <h1
        className="z-10 uppercase text-center font-black text-5xl sm:text-7xl md:text-9xl text-zinc-700 dark:text-zinc-300 theme-transition"
        dangerouslySetInnerHTML={{ __html: coloredTitle }}
      />
      <p
        className="z-10 mt-4 text-center text-lg sm:text-2xl md:text-4xl font-bold text-zinc-600 dark:text-zinc-200"
        dangerouslySetInnerHTML={{ __html: coloredSubtitle }}
      />
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default HeroSection;
