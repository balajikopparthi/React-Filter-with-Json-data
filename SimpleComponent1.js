import React from 'react';

class SimpleComponent1 extends React.Component{
	constructor(){
		super();
			this.state={items: []}
	}
	componentWillMount(){
		fetch('customers.json')
		.then(response => response.json())
		.then(({records:items}) => this.setState({items}))
	}
	filter(e){
		this.setState({filter:e.target.value})
	}
   render(){
	   let items = this.state.items
	   if(this.state.filter){
		   items=items.filter(item => 
		   item.Name.toLowerCase()
		   .includes(this.state.filter.toLowerCase()))
	   }
     return(
	   <div>
	   <input type="text" onChange={this.filter.bind(this)} />
	   {items.map(item => 
	   <Person key={item.Name} person={item} />)}
	   </div>
	 )
   }
}

const Person =(props) => <h4>{props.person.Name}</h4>

export default SimpleComponent1;