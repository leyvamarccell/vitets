import { Button, Card, Text } from "@nextui-org/react"
import { userName } from "./Auth"

export default function Cards({color, text}) {
  return (
    <>
    <div className="card-container">
    <Card className="welcome">
  <Card.Body>
  <div className="">
  <h2 className="text-card">$0</h2>
  </div>
 
  <div className="card-container">
  <Button size={"sm"} flat className='button1'>Depositar</Button>
  <Button size={"sm"} flat className='button'>Retirar</Button>
  </div>
 
  </Card.Body>
</Card>
    </div>

    </>
  )
}
