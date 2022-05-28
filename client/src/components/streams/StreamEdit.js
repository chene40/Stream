import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions/index'

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    render(){
        if (!this.props.stream){
            return <div>Loading</div>
        }

        return (
            <div>{this.props.stream.title}</div>
        )  
    }
    
}

// ownProps is a reference to the props object that shows up in the component
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }      // state is an object (not an array!)
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit)