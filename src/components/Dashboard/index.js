import React from "react"
import "./dashboard.css"
import UserList from '../UserList'

const Dashboard = () => {
    return (
        <div>
            <div className="container mt-3">
                <UserList />
            </div>
        </div>
    )
}

export default Dashboard;