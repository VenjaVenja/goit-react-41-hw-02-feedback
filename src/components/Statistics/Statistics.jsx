import propTypes from "prop-types";
import { StatisticsList, StatisticsItem, StatisticsText, StatisticValue } from "./Statistics.styled";
import { NotificationMessage } from "components/Notification/Notification";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            {total > 0 ? (
                <StatisticsList>
                    <StatisticsItem>
                        <StatisticsText>Good: <StatisticValue>{good}</StatisticValue></StatisticsText>
                    </StatisticsItem>
                    <StatisticsItem>
                        <StatisticsText>Neutral: <StatisticValue>{neutral}</StatisticValue></StatisticsText>
                    </StatisticsItem>
                    <StatisticsItem>
                        <StatisticsText>Bad: <StatisticValue>{bad}</StatisticValue></StatisticsText>
                    </StatisticsItem>
                    <StatisticsItem>
                        <StatisticsText>Total: <StatisticValue>{total}</StatisticValue></StatisticsText>
                    </StatisticsItem>
                    <StatisticsItem>
                        <StatisticsText>Positive Feedbacks: <StatisticValue>{positivePercentage}%</StatisticValue></StatisticsText>
                    </StatisticsItem>
                </StatisticsList>
            ) : (<NotificationMessage message="There is no feedback"/>)
            }
        </>
    )
};

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired
};