import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions/index'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render(){
        if (!this.props.stream){
            return <div>Loading</div>
        }

        return (
            <div>
                <h3> Edit a Stream </h3>
                <StreamForm 
                    onSubmit={this.onSubmit} 
                    initialValues={ _.pick(this.props.stream, 'title', 'description') }/>       {/* _.pick creates a new object with the argument names provided */}
            </div>
        )  
    }
    
}

// ownProps is a reference to the props object that shows up in the component
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }      // state is an object (not an array!)
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)