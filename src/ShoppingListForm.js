import React, { Component } from 'react';
import { UncontrolledCollapse, Card, Col, Row, Label, Input } from 'reactstrap';
import Form from './Forms';
import './Form.css';

const ProfileImage =
	'https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381251-stock-illustration-silhouette-of-anonymous-man-with.jpg';
class ShoppingList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profile: [
				{
					ImageProfile: ProfileImage,
					FirstName: 'David',
					LastName: 'Joseph',
					Phone: '3214003649',
					Email: 'Davidjoseph850@gmail.com',
					JobTitle: 'Software Developer',
				},
			],
		};
	}

	addItems = (items) => {
		this.setState((state) => ({
			profile: [state.profile, items],
		}));
	};

	renderItems = () => {
		return (
			<div>
				{this.state.profile.map((people) => (
					<div>
						<div className="Name">
							<header>{people.FirstName} </header>
							<header>{people.LastName}</header>
                            <header className='JobTitle'>{people.JobTitle}</header>
						</div>
						<div className="Contact">
							<h6>
								{people.Email} <span className='Phone'>{people.Phone}</span>
							</h6>
						</div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				))}
			</div>
		);
	};

	render() {
		return (
			<div className="page">
				<Form addItems={this.addItems} />
				<Card style={{ width: 850, height: 900 }}>{this.renderItems()}</Card>
			</div>
		);
	}
}

export default ShoppingList;
