import { useMemo } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import LoginForm from "./componets/LoginForm"
import Drag from './componets/Drag/Drag';
import './bootstrap.css'

import "./App.css";
import data from "./data.json";
import Table from "./componets/Table";
import { useState } from "react";
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
function App() {
  const [username, setUsername] = useState("");
  const requiredData = useMemo(() => {
    if (username === "") {
      return data.map((d, idx) => {
        return {
          username: d.username,
          name: d.name,
          phone: d.phone,
          company: d.company.name,
        };
      });
    } else {
      let re = new RegExp(`^${username}`, "i");
      return data
        .filter((d) => d.username.match(re) != null)
        .map((d, idx) => {
          return {
            username: d.username,
            name: d.name,
            phone: d.phone,
            company: d.company.name,
          };
        });
    }
  }, [username]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "Full Name",
            accessor: "name",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "user name",
            accessor: "username",
          },
          {
            Header: "phone",
            accessor: "phone",
          },
          {
            Header: "company",
            accessor: "company",
          },
        ],
      },
    ],
    []
  );

  console.log(requiredData);
  return (
    <>
      {/* <LoginForm/> */}
      
      <input className="inputbox1" onChange={(e) => setUsername(e.target.value)} placeholder="SEARCH HERE"   />
      <Styles>
        
        <Table columns={columns} data={requiredData} />
     
      </Styles>
    
    </>
  );
}

export default App;
