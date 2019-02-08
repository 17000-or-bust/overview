import React from 'react';
import $ from 'jquery';
import RestaurantInfo from "./RestaurantInfo.jsx";


const boldText = {
	fontSize: "14px",
	fontWeight: "700",
	lineHeight: "20px",
	paddingLeft: "5px"
};

const subText = {
	display: "flex",
	justifyContent: "left",
	fontSize: "14px",
	fontWeight: "400",
	lineHeight: "20px",
	paddingLeft: "29px"
};

const doodles = [
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" style={{background: "rgb(255, 255, 255)"}}><title>icon/ic_location</title><desc>Created with Sketch.</desc><defs></defs><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="icon/ic_location"><g id="ic_location"><rect id="boundary" x="0" y="0" width="24" height="24"></rect><path d="M12,9 C12.5522847,9 13,9.44771525 13,10 C13,10.5522847 12.5522847,11 12,11 C11.4477153,11 11,10.5522847 11,10 C11,9.44771525 11.4477153,9 12,9 L12,9 Z M12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 Z" id="Shape" fill="#333333" fillRule="nonzero"></path><path d="M12,4 C15.3137085,4 18,6.6862915 18,10 C18,11.21 17.2,14 12,19.21 C6.8,14 6,11.21 6,10 C6,6.6862915 8.6862915,4 12,4 L12,4 Z M12,2 C7.581722,2 4,5.581722 4,10 C4,12.8133333 6.43333333,16.59 11.3,21.33 L11.3,21.33 C11.6888435,21.7111429 12.3111565,21.7111429 12.7,21.33 C17.5666667,16.59 20,12.8133333 20,10 C20,5.581722 16.418278,2 12,2 Z" id="Shape" fill="#333333" fillRule="nonzero"></path></g></g></g></svg>,
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" style={{background: "rgb(255, 255, 255)"}}><title>icon/ic_cross_street</title><desc>Created with Sketch.</desc><defs></defs><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="icon/ic_cross_street"><g id="ic_cross_street"><rect id="boundry" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle-42" fill="#333333" x="9" y="3" width="2" height="5" rx="0.5"></rect><rect id="Rectangle-42" fill="#333333" x="9" y="16" width="2" height="5" rx="0.5"></rect><rect id="Rectangle-42" fill="#333333" x="14" y="3" width="2" height="3" rx="0.5"></rect><rect id="Rectangle-42" fill="#333333" x="14" y="8" width="2" height="3" rx="0.5"></rect><rect id="Rectangle-42" fill="#333333" x="14" y="13" width="2" height="3" rx="0.5"></rect><rect id="Rectangle-42" fill="#333333" x="14" y="18" width="2" height="3" rx="0.5"></rect><rect id="Rectangle-42" fill="#333333" x="19" y="3" width="2" height="18" rx="0.5"></rect><rect id="Rectangle-57" fill="#333333" x="3" y="6" width="7" height="2" rx="0.5"></rect><rect id="Rectangle-57" fill="#333333" x="8" y="11" width="3" height="2" rx="0.5"></rect><rect id="Rectangle-57" fill="#333333" x="3" y="11" width="3" height="2" rx="0.5"></rect><rect id="Rectangle-57" fill="#333333" x="3" y="16" width="7" height="2" rx="0.5"></rect></g></g></g></svg>,
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" style={{background: "rgb(255, 255, 255)"}}><title>icon/ic_neighborhood</title><desc>Created with Sketch.</desc><defs></defs><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="icon/ic_neighborhood"><g id="Group-81"><rect id="outside" stroke="#333333" strokeWidth="2" x="4" y="8" width="8" height="11" rx="2"></rect><path d="M12,18.9976974 L19,18.9976974 C19.5522847,18.9976974 20,18.5499821 20,17.9976974 L20,7.13007812 C20,6.77881527 19.8157012,6.45330845 19.5144958,6.2725852 L16.5144958,4.4725852 C16.1978134,4.28257577 15.8021866,4.28257577 15.4855042,4.4725852 L12.4855042,6.2725852 C12.1842988,6.45330845 12,6.77881527 12,7.13007812 L12,18.9976974 Z" id="outside" stroke="#333333" strokeWidth="2"></path><rect id="Rectangle-75" x="0" y="0" width="24" height="24"></rect><rect id="line" fill="#333333" x="7" y="11" width="2" height="2" rx="0.5"></rect><rect id="line" fill="#333333" x="7" y="14" width="2" height="2" rx="0.5"></rect><rect id="line" fill="#333333" x="15" y="11" width="2" height="2" rx="0.5"></rect><rect id="line" fill="#333333" x="15" y="14" width="2" height="2" rx="0.5"></rect><rect id="line" fill="#333333" x="15" y="8" width="2" height="2" rx="0.5"></rect></g></g></g></svg>

];



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurant: [],
			hover: false,
			hoverNeighbor: false
		}
		this.getRestaurantByObjectId = this.getRestaurantByObjectId.bind(this);
		this.toggleHover = this.toggleHover.bind(this);
		this.toggleNeighborHover = this.toggleNeighborHover.bind(this);
	}

	componentDidMount() {
		this.getRestaurantByObjectId();
	}

	getRestaurantByObjectId(objectId) {
		//Doesn't actually get restaurant by obj right now.
		//just returns first doc in collection
		$.ajax({
			url: "/overview",
			method: "POST",
			contentType: "application/json",
			success:(data) => {this.setState({
				restaurant: JSON.parse(data)
			})}
		})
	}

	toggleHover() {
		this.setState({
			hover: !this.state.hover
		})
	}

	toggleNeighborHover() {
		this.setState({
			hoverNeighbor: !this.state.hoverNeighbor
		})
	}


	render() {
		var rest = this.state.restaurant;
		return (
			<div>
				{/* THIS JSX CONTAINS MAP, CROSS STREET AND NEIGHBORHOOD */}
				<div style={{display: "flex", flexDirection: "column", border: ".5px solid grey", padding: "5px"}}>
					<img src={`https://maps.googleapis.com/maps/api/staticmap?center=${rest.latitude},${rest.longitude}&zoom=15&size=288x144&maptype=roadmap&markers=color:0x2495BF|%7C${rest.latitude},${rest.longitude}&key=AIzaSyAaY0lxea4lC6Iby8aEibDOlXl8hyAM5lw`}></img>
					<div style={{display:'flex', paddingTop:"15px"}}>
						{doodles[0]}
						<a href='' style={{fontSize: "14px", fontWeight: "500", lineHeight: "20px", paddingLeft: "5px", color: "#da3743", fontFamily: "BlinkMacSystemFont", textDecoration: this.state.hover ? "underline" : "none" } } onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{rest.street_address}</a>
					</div>
				</div>

				<div style={{display:'flex', paddingTop:"15px"}}>
					{doodles[1]}
					<div style={boldText}>Cross street</div>
				</div>
				<div style={subText}>{rest.cross_street}</div>

				<div style={{display:'flex', paddingTop:"15px"}}>
					{doodles[2]}
					<div style={boldText}>Neighborhood</div>
				</div>
				<div style={{display: "flex", justifyContent: "left", fontSize: "14px", fontWeight: "400", lineHeight: "20px", paddingLeft: "29px", textDecoration: this.state.hoverNeighbor ? "underline" : "none"}} onMouseEnter={this.toggleNeighborHover} onMouseLeave={this.toggleNeighborHover}>{rest.neighborhood}</div>

				<RestaurantInfo boldText={boldText} subText={subText} rest={rest}/>
			</div>
		)
	}
}

export default App;



