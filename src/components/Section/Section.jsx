import { Component } from "react";
import propTypes from 'prop-types';
import { StatisticSection } from "./Section.styled";

export class Section extends Component {
    render() {
        
        const { title, children } = this.props;

        return (
            <StatisticSection>
                <h2>{title}</h2>
                {children}
            </StatisticSection>
        )
    }
}

StatisticSection.propTypes = {
    title: propTypes.string,
    children: propTypes.node,
}