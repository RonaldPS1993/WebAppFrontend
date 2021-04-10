import React, { Component } from 'react';
import axios from 'axios';
import { ResponsiveEmbed } from 'react-bootstrap';


import { CommentRounded, ContactSupportOutlined, FilterTiltShiftSharp, PersonSharp, TimerSharp } from '@material-ui/icons';

class GetReviews extends Component {
    state = { 
        comments : [ ],
        Test : "",
        arrayDeSalida : [ ]
    }

componentDidMount() {
        
    let myUrl = 'http://localhost:3001/api/reviews/'+ this.props.isbn ;
       
    axios.get(myUrl)
    
    .then((response) => {
       
        const comment = response.data;   //la respuesta se mete en comment
        

        this.setState({ comments : comment.data }); //comment (con la respuesta) se pasa a this.state.comments
      
        for (let i = 0; i < this.state.comments.length; i++) { 
            const newElement = {  };
            if (this.state.comments[i].show_nickname) {
                newElement.customer_id = this.state.comments[i].customer_id;
            }
            else {
                newElement.customer_id = 'Anonymous';
            };

            newElement.comments = this.state.comments[i].comments;
            newElement.rating = this.state.comments[i].rating;

          
            this.state.arrayDeSalida.push(newElement);
            
            
            
     
        };  //for....
     
              
          


        
    this.state.lineaParaSacar= (this.state.arrayDeSalida.map(arma));

    
    function arma(item) {
        var linea = ["<p>",item.comments,"</p>"].join(" ");
        return linea;
    }


            


            
    });
}
    render()  {  
    
        return(
        
        <div>
            { this.state.lineaParaSacar }
        </div>
        
        )
    }
}
 

export default GetReviews;
