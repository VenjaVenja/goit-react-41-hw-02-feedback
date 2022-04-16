import propTypes from 'prop-types';
import { StatisticSection } from "./Section.styled";

export const Section = ({ title, children }) => (
    <StatisticSection>
      <h2>{title}</h2>
        {children}
   </StatisticSection>
);


StatisticSection.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};