import React, { Component } from 'react';
import CreateType from './type'

const subCategoryContainerStyle = {
    boxSizing: 'content-box',
    width: '40%',
    border: 'solid black 4px',
    padding: '5px',
}

class CreateSubCategory extends React.Component {
  state = {
    numChildren: 1,
    attribute: ''
  }



  render () {
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<ChildComponent  key={i+1} number={i+1} />);
    };

    return (
      <ParentComponent addChild={this.onAddChild} >
        {children}
      </ParentComponent>
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }
}

  

const ParentComponent = props => (
  <div className="card calculator">
      <div id="subCategoryChildrenPane" >
      {props.children}
    </div>
    <button onClick={props.addChild}>Add Another Sub Category</button>
  </div>
);


const ChildComponent = props =>

  <div >
    {/*<p style={{marginBottom:'2px'}}>{"SubCategory " + props.number}</p>*/}
    <span>
    <input style={{marginBottom:'2px', marginTop:'15px', width: '30%'}} type="text" id="subCategoryName" name="subCategoryName" placeholder="SubCategoryName"></input>
    <button style={{fontSize:'xSmall'}} >Clear</button>
    </span>
    <CreateType/>  
  </div>;

export default CreateSubCategory;