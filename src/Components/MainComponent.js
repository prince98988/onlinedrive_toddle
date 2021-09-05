import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {  Jumbotron } from 'reactstrap';
import Folder from './FolderComponent';
import { connect } from 'react-redux';
import {addFolder} from '../redux/folderAction';

const mapStateToProps = state => {
    return {
       folders:state.folders
    }
  }

const mapDispatchToProps = (dispatch) => ({
    addFolder: (path,name,isFolder) => dispatch(addFolder(path,name,isFolder))
});

class Main extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
       
    };
  }

  

  render() {
    const folderWithPath = ({match}) => {

        return(
          <Folder  folders={this.props.folders} path={match.params.folderPath}
          />
        );
      }
    const home = () => {
        
        return(
          <Folder  
             folders={this.props.folders}   path=""
          />
        );
    }
    return (
      <div>
        <Jumbotron>
                <div className="container">
                    <div className="row row-header">

                        <div className="col-12 col-sm-6">
                            <h1>Online Drive</h1>
                            <p>My Information: 18BCE183-PRINCE PRAJAPATI</p>
                        </div>
                    </div>
                </div>
        </Jumbotron>
        <Switch>
          <Route exact path="/home" component={home} />
          <Route path="/home/:folderPath" component={folderWithPath} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));