import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {db} from '../firebase'
import Order from './Order'

function Orders({dispatch,authedUser}) {
const [orders,setOrders]=useState([])

useEffect(() => {
    if(authedUser){
   db.collection('users').doc(authedUser?.uid)
   .collection('orders')
   .orderBy('created','desc')
   .onSnapshot(snapshot => (
       setOrders(snapshot.docs.map(doc => ({
           id:doc.id,
           data:doc.data()
       })))
   ))
    }
    else {
        setOrders([])
    }
}, [authedUser])


return (
        <div className="orders">
            <h1>Your Orders</h1>
            {orders?.map(order => <Order key={order.id} order={order}/>)}
        </div>
    )
}
function mapStateToProps({  authedUser }) {
   
    return {authedUser };
  }
export default connect(mapStateToProps)(Orders)
