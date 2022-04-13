import propTypes from "prop-types";
import { FeedbackOptionsList, FeedbackOptionsItem, FeedBackOptionsBtn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <FeedbackOptionsList> {options.map(option => (
            <FeedbackOptionsItem key={option}>
            <FeedBackOptionsBtn
                type="button"
                name={option}
                onClick={onLeaveFeedback}>{option}</FeedBackOptionsBtn>
            </FeedbackOptionsItem>
    ))}
    </FeedbackOptionsList>
);

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};