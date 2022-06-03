import "../styles/LoadingSpinner.css";
import spinner from "../images/loading.svg";

const LoadingSpinner = () => (
  <div className="LoadingSpinner">
    <img
      className="LoadingSpinner__spinner"
      src={spinner}
      alt="loading spinner"
    />
  </div>
);

export default LoadingSpinner;
