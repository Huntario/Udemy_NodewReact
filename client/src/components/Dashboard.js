import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
	return(
	  <div>
	    Hello
	    <div className="fixed-action-btn">
	        <Link to="/surveys/new" className="fixed btn-large red">
	          <i className="material-icons">add</i>
	        </Link>
	    </div>
	  </div>
	);
};
export default Dashboard;

