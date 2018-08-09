import React, { Component } from 'react';
import CreateSubCategory from './subCategory'

const CategoryContainerStyle = {
    boxSizing: 'content-box',
    width: '40%',
    border: 'solid black 4px',
    padding: '5px',
}

class CreateCategory extends React.Component {
  state = {
    numChildren: 1
  }

  render () {
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<ChildComponent key={i+1} number={i+1} />);
    };

    return (
      <ParentComponent addChild={this.onAddChild}>
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
      <div id="CategoryChildrenPane" >
      {props.children}
    </div>
  </div>
);

const ChildComponent = props => <div>
    <span>
   <label for="CategoryName">Category: </label>
   <input type="text" id="CategoryName" name="CategoryName" placeholder="Category Name"></input>
   </span>
   <CreateSubCategory/>  
</div>;

export default CreateCategory;