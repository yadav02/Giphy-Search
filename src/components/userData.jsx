import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import Loader from './Loader'

function UsersData ({ userData, fetchUsers }) {
  console.log(fetchUsers)  
  useEffect(() => {
    fetchUsers()
  }, []);


  return userData.loading ? (
    <h2><Loader/></h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <div>
        {
        userData &&
          userData.users &&
          userData.users.map(el => {
            console.log(`Element data ${el}`)
            return (
              <div key={el.id} className="gif">
                <img src={el.images.fixed_height.url} alt="img" />
              </div>
            );
          })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  // console.log(...state)
  return {
    // ...state,
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersData)
