import { Link } from 'react-router-dom';
import { StyledSection } from '../styles';

const SectionWrapper = ({ children, title, seeAllLink, breadcrumb }) => (
  <StyledSection>
    <div className="section__inner">
      <div className="section__top">
        <h2 className="section__heading">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </StyledSection>
);

export default SectionWrapper;