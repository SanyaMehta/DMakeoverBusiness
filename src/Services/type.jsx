import React, { Component } from 'react';

const typeContainer = {
    boxSizing: 'content-box',
    width: '40%',
    border: 'solid black 1px',
    padding: '5px',
}

class CreateType extends React.Component {
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
  <div className="card calculator" style={typeContainer}>
      <div id="typeChildrenPane" >
      {props.children}
    </div>
    <button style = {{marginTop:'5px'}} onClick={props.addChild}>Add Another Type</button>
    
  </div>
);

const ChildComponent = props => <div> <p style = {{fontSize:'10px'}}>{"Type " + props.number}</p>
        <input type="text" id = "typeName" name="typeName" placeholder="Type Name"></input>
          <br/>
         <input type="number" name="Rupees" placeholder="0000"></input>
</div>;

export default CreateType;