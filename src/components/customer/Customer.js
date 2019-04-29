import React, { Component } from 'react';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addCustomer, action } from '../actions/Actions';

class Customer extends Component
{
    
    constructor(props){
        super(props);

        this.state = {
            posts:[],
            customerName:"Some Name",
            customerDesc:"Some Text"
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState(
            {
                [e.target.id]: e.target.value
                
            }
        )
    };

    onSubmit(e)
    {
        e.preventDefault();
        const obj = {
            title: this.state.customerName,
            body : this.state.customerDesc
        };

        fetch("https://my-json-server.typicode.com/brajesh-mehra/json-server/posts", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.props.updateCustomer = data;
        })
    }

    getPostsData(){
        fetch("https://my-json-server.typicode.com/brajesh-mehra/json-server/posts")
        .then(res => res.json())
        .then(data => this.setState(
                {
                    posts : data
                }
            )
        )
    }

    componentWillMount(){
       // this.props.addCustomer();
        this.getPostsData();
    };

    render(){
        const items = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{ post.title }</h3>
                <p>{ post.body }</p>
            </div>
        ))
        return (
            <>
            <Container>
                <h2>Add Customer</h2>
                <Form onSubmit={this.onSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="customerName" onChange={this.onChange}>
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="customerDesc" onChange={this.onChange}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Text" />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                { items }
                </Container>
            </>
            )
        
    }
}

const mapStateToProps = (state, props) => {
    console.log(props)
    return state;
    //customer = this.customer;
};

const mapDispatchToProps = {
    onSubmit:'Brajesh'
};
export default connect(mapStateToProps, mapDispatchToProps) (Customer);