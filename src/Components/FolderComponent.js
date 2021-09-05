import React, { Component } from 'react';
import {Breadcrumb,BreadcrumbItem,Button,Card,CardImg,CardImgOverlay ,Badge,Modal,
    ModalHeader,ModalBody,Label,Form,FormGroup,Input } from 'reactstrap';
import { Link} from 'react-router-dom';

function RenderFolderItem({ item ,detail}){
    return(
        <div>
            {detail.isFolder  ?
            <Link to={`/home/${detail.path}${item}`} >
                <Card style={{ border: "none", boxShadow: "none",width:80}}>
                    <CardImg height="70px" src={window.location.origin+"/folder.png"} alt={item} />
                    <p className="wwrap">{item}</p>
                </Card>
            </Link>
            :
            <Card style={{ border: "none", boxShadow: "none",width:80}}>
                <CardImg height="70px" src={window.location.origin+"/files.png"} alt={item} />
                <CardImgOverlay>
                    
                </CardImgOverlay>
                
                <p className="wwrap">{item}</p>
            </Card>

            }
        </div>
    );
    
}
class FandF extends Component{
    
    constructor(props) {
        super(props);
       
        this.state = {
          isCreateModalOpen:false,
          isNew:false
        };
      
        this.toggleCreateModal = this.toggleCreateModal.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
      }
      handleInputChange(){
        if(!(this.name.value in this.props.subpath)){
            this.setState({
                isNew:true
            })
        }
      }
      toggleCreateModal() {
        this.setState({
          isCreateModalOpen: !this.state.isCreateModalOpen,
        });
      }
      handleCreate(event) {
        this.toggleCreateModal();
        this.props.addFolder(this.name.value,
            {  
                path: this.props.path+"/"+this.name.value, isFolder: this.isFolder.value,
                folders:{}, files:0,folders:0
           });
         event.preventDefault();
      }
    render(){
    return(
        <React.Fragment>
            <div className="col-12 m-1">
                
                {(Object.keys(this.props.subpath).length==0)?
                <div>hiiii</div> 
                :
                <Button  className="mt-2 mb-2 justify-content-end">Delete all</Button>
                }
                    <div className="d-flex flex-wrap ">
                        {
                            Object.keys(this.props.subpath).map((item) => {
                            return (
                                    <div p-2>
                                        <RenderFolderItem item={item} detail={this.props.subpath[item]} />
                                    </div>
                            )
                            })
                        }
                        <div>
                            <Card style={{ border: "none", boxShadow: "none",width:100}} onClick={this.toggleCreateModal}>
                                <CardImg height="100px" src={window.location.origin+"/plus.png"} alt="create file/folder" />
                            </Card>
                        </div>
                    </div>
            </div>
            <Modal isOpen={this.state.isCreateModalOpen} toggle={this.toggleCreateModal}>
            <ModalHeader toggle={this.toggleSignModal}>Create New</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSignUp}>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="isFolder" value="true"  innerRef={(input) => this.isFolder = input} />{' '} Folder
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="isFolder" value="false"  innerRef={(input) => this.isFolder= input}/>{' '}
                                File
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name"></Label>
                            <Input type="text" id="name" name="name"
                                innerRef={(input) => this.name= input} 
                                onChange={this.handleInputChange}
                                required/>
                        </FormGroup>
                      
                        {this.state.isNew?
                                <Button type="submit" value="submit" color="primary" >Create</Button>
                                :
                                <Button type="submit" value="submit" color="primary" disabled>Create</Button>
                        }
                        
                        
                    </Form>
                    
            </ModalBody>
        </Modal>
    </React.Fragment>

    )
    }
   

}

class Folder extends Component {
  componentDidMount(){
      if(this.props.path.length!=0){
            this.props.path.trim().split("/").map((item)=>{
                //alert("split")
                let tmp=this.state.subpath.folders
                this.setState({
                    subpath:tmp[item]
                })
            });
        }
  }
  constructor(props) {
    super(props);
    this.state = {
        subpath:this.props.folders,
        temp:""
    };
  }

  
  render() {
   
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to={`/home`}>Home</Link></BreadcrumbItem>
                {  
                  this.props.path.trim().split("/").map((item)=>{
                   <BreadcrumbItem><Link to={`/home/${this.state.temp}`}>Home</Link></BreadcrumbItem>
                   
                 })
                }
                </Breadcrumb>
            </div>
            <hr/>
            <p>{this.props.path}</p>
            <div className="row ">
                <FandF subpath={this.state.subpath.folders} path={this.props.path}/>
            </div>
        </div>
    );
  }
}

export default Folder;