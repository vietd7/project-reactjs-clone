import React from "react";
import {connect} from "react-redux"




class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                abc
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Application);
