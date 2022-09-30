import React, { Component } from "react";
import Spinner from "react-spinner-material";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      const { getData } = this.props;

      getData().then((data) => {
        this.setState({
          data: data,
        });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return (
          <div className="spinner">
            <Spinner radius={120} color={"green"} stroke={5} visible={true} />
          </div>
        );
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
