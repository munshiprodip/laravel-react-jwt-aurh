import React from "react";
import SideNav from "../components/dashboard/SideNav";

function Dashboard() {
    return (
        <div className="card mt-3">
            <div className="card-header">Dashboard</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <SideNav />
                    </div>
                    <div className="col-md-10">
                        <p>Dashboard</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
