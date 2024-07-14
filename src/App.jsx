import React, { useReducer, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DashboardContextComponent from "./../src/components/context/DashboardContextComponent";
import AddUser from "./components/AddUser";
import ViewUser from "./components/ViewUser";
import NestedExample from "./components/NestedExample";
import Feed from "./components/NestedExample/Feed";
import Setting from "./components/NestedExample/Setting";
import Profile from "./components/NestedExample/Profile";
import Reducer, { initialState } from "./components/utils/Reducer";
import UseReducer from "./components/hooks/UseReducer";
export const UserContext = React.createContext();

function App() {
  let [data, dispatch] = useReducer(Reducer,initialState)
  return (
    <>
      <div id="wrapper">
        <UserContext.Provider value={{ data, dispatch }}>
          <BrowserRouter>
            <Sidebar></Sidebar>
            <Routes>
              <Route
                path="/"
                element={
                  <DashboardContextComponent>
                    <Dashboard></Dashboard>
                  </DashboardContextComponent>
                }
              ></Route>

              <Route path="add-user" element={<AddUser/>} />
              <Route path="view-user/:id" element={<ViewUser/> } />

              <Route path="nested-example" element={<NestedExample/>}>
              <Route path="feed"element={<Feed/>} />
              <Route path="setting" element={<Setting/>}/>
              <Route path="profile" element={<Profile/>}/>
              </Route>
              <Route path="utils/reducer-example" element={<Reducer/>} />

              <Route path="hooks/UseReducer" element={<UseReducer/>} />

              </Routes>
              

          </BrowserRouter>
        </UserContext.Provider>

        {/* <BrowserRouter>
            <Sidebar></Sidebar>
            <Routes>
              <Route
                path="/"
                element={<Dashboard data={data} setData={setData}></Dashboard>}
              ></Route>
              <Route
                path="/add-user"
                element={<AddUser data={data} setData={setData}></AddUser>}
              ></Route>
              <Route
                path="/view-user/:id"
                element={<ViewUser data={data} setData={setData}></ViewUser>}
              ></Route>
              <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
          </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
