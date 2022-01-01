import {Link} from 'react-router-dom'
import DashboardNav from '../components/DashboardNav'
import ConnectNav from '../components/ConnectNav'

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Booking</h2>
          </div>
          <div className="col-md-2">
            <Link to="/" className="btn btn-primary">
              Browse Hotels
            </Link>
          </div>
        </div>
        <p>Show all bookings and a button to browse hotels</p>
      </div>
    </>
  )
}

export default Dashboard
