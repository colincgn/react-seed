// This Component will handle the template used on every page.
// props.children is handed down from React Router
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
