import { Card, Button, Link } from "@nextui-org/react"

export default function Visa() {
  return (
    <>
    <div className='visa-container'>
    <Card >
            <Card.Body>
                <div className="image-services">
                    <img src="https://www.svgrepo.com/show/362035/visa-3.svg"  alt="" height={80}/>
                </div>
               <div className='link-container'>
                <Link color={"primary"} block>Targetas Visa de débito</Link>
               </div>
            </Card.Body>
        </Card>
    </div>
    </>
  )
}
