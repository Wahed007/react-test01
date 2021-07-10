import React, {Component} from "react";
import './App.css'
import Person from "./Person/Person";



class App extends Component {
    state = ({
                    persons:[

                            {name:'Max' , age:28},
                            {name:'Manu' , age:29},
                            {name:'Stella' , age:25}
                    ]
        })
       
 switchNameHandler=(newName)=>{

             this.setState({

                  persons:[

                            {name:newName, age:28},
                            {name:'Manu' , age:29},
                            {name:'Stella' , age:45}
                 ]
     
            })
        }           
       changeTextHandler=(event)=>{
                this.setState({

                    persons:[

                        {name:'Max', age:28},
                        {name:'Manu' , age:29},
                        {name:event.target.value , age:45}
             ]

                })        

       } 

    render(){


        return(

                <div className='App'>
                           <button onClick={()=>this.switchNameHandler('Owen')}>Switch Name</button>

                            <Person name={this.state.persons[0].name} 
                            age={this.state.persons[0].age}/>
                            
                            <Person name={this.state.persons[1].name} 
                            age={this.state.persons[1].age}>
                            Hobby:Sports</Person>
                            
                            <Person name={this.state.persons[2].name} 
                            age={this.state.persons[2].age}
                            //clicked={this.switchNameHandler.bind(this,'Maximillian')}
                            changed={this.changeTextHandler}
                            />    
                </div>
       );
    }
}
 

export default App;
