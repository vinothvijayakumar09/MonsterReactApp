import React, {Component} from 'react';
import Cardlist from './component/Cardlist';
import Searchbox from './component/Searchbox'
import Scroll from './component/Scroll'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state={
            monsters:[],
            searchfield:''
            
        }
        
    }
    onchangeevent=(event)=>{
        this.setState({searchfield:event.target.value})
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}))

    }
        
    
    render(){  
        const filtermonster = this.state.monsters.filter(monster =>{
            return monster.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        }) 
        return (
            <div className='tc'>
                <h1 className='f1'>Monsters</h1>
                <Searchbox inputchange={this.onchangeevent}/>
                <Scroll>
                <Cardlist robots ={filtermonster} /> 
                </Scroll>
               
            </div>
        );
    }

    }
   

export default App;