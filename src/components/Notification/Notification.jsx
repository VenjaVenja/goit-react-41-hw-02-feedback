import { Message } from './Notification.styled';
import propTypes from 'prop-types';

export const NotificationMessage = ({ message }) => (
    <Message>{message}</Message>
);

NotificationMessage.propTypes = {
    message: propTypes.string.isRequired,
};