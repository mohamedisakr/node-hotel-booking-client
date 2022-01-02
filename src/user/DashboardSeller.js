import {useState} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {HomeOutlined} from '@ant-design/icons/lib/icons'
import {toast} from 'react-toastify'
import DashboardNav from '../components/DashboardNav'
import ConnectNav from '../components/ConnectNav'
import {createConnectAccount} from '../actions/stripe'

const DashboardSeller = () => {
  const {auth} = useSelector((state) => ({...state}))
  const [loading, setLoading] = useState(false)

  const handleClick = async (event) => {
    setLoading(true)

    try {
      const res = await createConnectAccount(auth.token)
      console.log(res)
    } catch (err) {
      console.log(err)
      toast.error(`Stripe connect failed. Try again`)
      setLoading(false)
    }
  }

  const connected = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Hotels</h2>
          </div>
          <div className="col-md-2">
            <Link to="/hotels/new" className="btn btn-primary">
              + Add New
            </Link>
          </div>
        </div>
        <p>Show all bookings and a button to browse hotels</p>
      </div>
    )
  }

  const notConnected = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="p-5 pointer">
              <HomeOutlined className="h1" />
              <h4>Setup payouts to post hotel rooms</h4>
              <p className="lead">
                MERN partners with stripe to transfer earnings to your bank
                account
              </p>
              <button
                disabled={loading}
                onClick={handleClick}
                className="btn btn-primary mb-3"
              >
                {loading ? 'Processing...' : 'Setup Payouts'}
              </button>
              <p className="text-muted">
                <small>
                  You'll be redirected to Stripe to complete the onboarding
                  process
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>
      {connected()}
      {/* {auth &&
      auth.user &&
      auth.user.stripe_seller &&
      auth.user.stripe_seller.charges_enabled
        ? connected()
        : notConnected()} */}
    </>
  )
}

export default DashboardSeller
