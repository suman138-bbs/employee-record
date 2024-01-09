import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

import { UserContext } from "../../context/user.context";
import "./Dashboard.style.css";

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const data01 = [
    {
      name: "MALE",
      value: 768,
    },
    {
      name: "FEMALE",
      value: 256,
    },
  ];

  const totalMF = data01[0].value + data01[1].value;
  const data02 = [
    {
      name: "FULL TIME",
      value: 205,
    },
    {
      name: "PART TIME",
      value: 317,
    },
    {
      name: "DAILY WAGE",
      value: 502,
    },
  ];

  const totalEm = data02[0].value + data02[1].value + data02[2].value;

  return (
    <div>
      <header>
        <p>Some Logo</p>
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      </header>
      <main>
        <div className="navigation">
          <NavLink>Dashboard</NavLink>
          <hr />
        </div>
        <div className="pi-chart-container">
          <div>
            <h3>KEY PERFORMANCE INDICATOR</h3>
            <div>
              <div>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={data01}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={data02}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="data-container">
              <div>
                <h1>TOTAL USER ={totalMF}</h1>
                <h3>MALE = {data01[0].value}</h3>
                <h3>FEMALE = {data01[1].value}</h3>
              </div>
              <div>
                <h1>TOTAL USER={totalEm}</h1>
                <h3>FULL TIME = {data02[0].value}</h3>
                <h3> PART TIME= {data02[1].value}</h3>
                <h3>DAILY WAGE = {data02[2].value}</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
