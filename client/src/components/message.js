import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actions } from "../redux/actions";

const Message = () => {
  const { showMessage } = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (showMessage)
      setTimeout(() => {

        dispatch(actions.setMessage(null));
      }, 3000)
  }, [showMessage]);
  return (
    <Alert show={showMessage} variant="success">
      <Alert.Heading>{showMessage && showMessage.status}</Alert.Heading>
      <p>{showMessage && showMessage.title}</p>
    </Alert>)

}
export default Message;

