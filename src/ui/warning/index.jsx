import React from "react";
import {connect} from "react-redux";
require("./index.scss")
import PopupManager from "nhb-popup-manager";

class warning extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        setTimeout(() => {
            PopupManager.close(this.props.popupIDWarning);
        }, 3000)
    }
    render() {
        var {warningText} = this.props;
        return (
            <div>
                {warningText}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({warningText: ownProps.warning, popupIDWarning: state.utils.popupIDWarning});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(warning)
