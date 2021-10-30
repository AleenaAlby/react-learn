import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component{


    renderDish(dish) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
    

    renderComments(comments){
        if(comments !=null)
        {

            const commentListItem = comments.map((comment) =>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>{comment.author}</p>
                    </li>
                    )
            })
           return(
               <div className="col-12 col-md-5 m-1">
                   <h3>Comments</h3>
                   <ul>
                       {commentListItem}
                   </ul>
               </div>
           )
        }
        else {
            return(
                <div></div>
            )
        }
        
    }
    render(){
        if(this.props.dish != null){
            return(
           
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
               </div>
           
       )   
        }
        else {
            return(
                <div></div>
            )
        }
       
    }

}

export default DishDetail