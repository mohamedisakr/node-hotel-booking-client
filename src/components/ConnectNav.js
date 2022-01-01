import {useSelector} from 'react-redux'
import {Card, Avatar} from 'antd'
import moment from 'moment'

const {Meta} = Card

const ConnectNav = () => {
  const {auth} = useSelector((state) => ({...state}))
  const {
    user: {name, createdAt},
  } = auth

  return (
    <div className="d-flex justify-content-around">
      <Card>
        <Meta
          avatar={<Avatar>{name[0]}</Avatar>}
          title={name}
          description={`Joined ${moment(createdAt).fromNow()}`}
        />
      </Card>
    </div>
  )
}

export default ConnectNav
