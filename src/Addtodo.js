import { Component } from "react";
import axios from 'axios';
class Addtodo extends Component
{
        constructor(props)
        {
            super(props);
            this.state = {  };
        }
        submitData()
        {
            var myformdata = new FormData()
            myformdata.append("todo_title",this.state.txt1)
            myformdata.append("todo_details",this.state.txt2)
            axios.post("https://akashsir.in/myapi/crud/todo-add-api.php",myformdata)
            .then(res => {
                console.log(res);
                if(res.data.flag=="1")
                {
                    alert("Data Added Successfully"+res.data.message);
                }
                else
                {
                    alert(res.data.message)
                }
            })
        
        }
        render()
        {
            
            return(
                <>
                <h1>Add Data</h1>
                Title :<input type ='text' name='txt1' onChange={(e)=>this.setState({txt1:e.target.value})}/>
                <br/>
                <br />
                Details:<input type ='text'  name='txt2' onChange={(e)=>this.setState({txt2:e.target.value})}/>
                <br />
                <br/>
                <button onClick = {this.submitData.bind(this)}>Send Data</button>
                </>
            )
        }
}
export default Addtodo;