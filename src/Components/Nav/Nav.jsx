import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";
import Modal from '../Modal/Modal.jsx'
import {state} from '../Auth.js'
import {useEffect, useState} from 'react'
import Users from "../User.jsx";

export default function App() {

  const [value, setValue] = useState()

const Verify = () => {
  if(state == true) {
    setValue(1)
  }else if(state == false){
    setValue(2)
  }
}

  return (
    <>
 <Layout>
      <Navbar isCompact isBordered variant="sticky">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
         
          <Navbar.Item>
         {
          value == 1 ? <Users/> : <Modal/>
         }
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
    
    </>
   
  )
}
