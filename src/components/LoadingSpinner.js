import "../styles/LoadingSpinner.css";
import spinner from "../images/loading.svg";

const LoadingSpinner = () => (
  // TODO after 10 sec return error
  <div className="LoadingSpinner">
    <img className="LoadingSpinner__spinner" src={spinner} />
  </div>
);

export default LoadingSpinner;
