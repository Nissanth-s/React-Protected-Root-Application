import React from "react"
import "./dashboard.css"
import UserList from '../UserList'
import Header from '../Header'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className="container mt-3">
                <UserList />
            </div>
        </div>
    )
}

export default Dashboard;