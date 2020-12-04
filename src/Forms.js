import React, { Component } from 'react';
import { UncontrolledCollapse, Card, Col, Row, Label, Input } from 'reactstrap';


const ProfileImage =
	'https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381251-stock-illustration-silhouette-of-anonymous-man-with.jpg';
class Forms extends Component {
	constructor(props) {
		super(props);
		this.state = { ImageProfile: ProfileImage,FirstName: '', LastName: '', Phone: '', Email: '', JobTitle: '', AboutYou:'' };
	}
	handleSubmit = (evt) => {
		evt.preventDefault();
		this.props.addItems(this.state);
	};

	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				this.setState({ ImageProfile: reader.result });
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
				<form onSubmit={this.handleSubmit}>
					<h4 className="detail">
						Personal<span> Detail</span>
					</h4>
					<Card style={{ width: 800, height: 450, border: 'none' }}>
						<Row id="MainRow">
							<Col md={6} lg={6} sm={6} xs={6}>
								<Label for="exampleEmail" id="label">
									Wanted Job Title
								</Label>
								<Input
									type="text"
									name="JobTitle"
									placeholder="Job Title"
									id="Row1"
									value={this.state.JobTitle}
									onChange={this.handleChange}
								/>
							</Col>
							<Col md={2} className="page">
								<div className="img-holder">
									<img src={this.state.ImageProfile} />
								</div>
							</Col>
							<Col md={4} style={{ paddingTop: 28 }}>
								<input
									type="file"
									name="image-upload"
									id="input"
									accept="image/*"
									onChange={this.imageHandler}
								/>
								<div className="label">
									<label htmlFor="input" className="imageUpload">
										Choose Your image
									</label>
								</div>
							</Col>
						</Row>
						<Row id="MainRow">
							<Col md={6} lg={6} sm={6} xs={6}>
								<Label for="exampleEmail" id="label">
									First Name
								</Label>
								<Input
									type="Name"
									name="FirstName"
									id="FirstName"
									placeholder="First Name"
									
									value={this.state.FirstName}
									onChange={this.handleChange}
								/>
							</Col>
							<Col md={6} lg={6} sm={6} xs={6}>
								<Label for="examplePassword" className="label">
									Last Name
								</Label>
								<Input
									type="Name"
									name="LastName"
									placeholder="Last Name"
									
									value={this.state.LastName}
									onChange={this.handleChange}
								/>
							</Col>
						</Row>

						<Row id="MainRow">
							<Col md={6} lg={6} sm={6} xs={6}>
								<Label for="exampleEmail" id="label">
									Email
								</Label>
								<Input
									type="email"
									name="Email"
									placeholder="Email"
									value={this.state.Email}
									onChange={this.handleChange}
								/>
							</Col>
							<Col md={6} lg={6} sm={6} xs={6}>
								<Label for="examplePassword" className="label">
									Phone Number
								</Label>
								<Input
									type="tel"
									name="Phone"
									id="Phone"
									placeholder="Phone Number"
									value={this.state.Phone}
									onChange={this.handleChange}
								/>
							</Col>
						</Row>

						<Row id="textarea">
							<Label for="exampleEmail" id="label">
								Proffesional Summary
							</Label>

							<textarea
								name="ProffesionalSummary"
								id="description"
								rows="8"
								name="AboutYou"
								placeholder="About yourself"
								className="form-control"
								value={this.state.AboutYou}
								onChange={this.handleChange}
							/>
						</Row>
					</Card>
					<button style={{ marginTop: 150 }}>Submit</button>
				</form>
				{/* {JobTitle}   {FirstName} {LastName} {PhoneNumber} {Email} {AboutYou} */}
			</div>
		);
	}
}
export default Forms;
