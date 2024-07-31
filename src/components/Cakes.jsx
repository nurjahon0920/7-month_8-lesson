import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { Button } from "antd";

const Cakes = ({ numOfCakes, buyCake }) => {
  return (
    <div style={{ display: "flex" }} className="container">
      <Dashboard />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          top: "100px",
          left: "400px",
          position: "absolute",
          fontSize: "22px",
          gap: "15px",
        }}>
        <h2>Number of cakes: {numOfCakes}</h2>
        <Button onClick={buyCake}>Buy cake</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
