import React, { Component, ReactChild, ReactElement } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import './error-boundry.scss';


type Props = {
    children: ReactChild
}

type State = {
    hasError: boolean
}

class ErrorBoundry extends Component<Props, State> {
    readonly state = {
        hasError: false
    }

    componentDidCatch () {
        this.setState({hasError: true})
    } 

    render () {
        return (
            (this.state.hasError)? <ErrorIndicator/> : this.props.children
        )
    }
}

export default ErrorBoundry;