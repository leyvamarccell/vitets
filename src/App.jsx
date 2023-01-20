import './App.css'
import Nav from './Components/Nav/Nav.jsx'
import {SignInWithGoogle} from './Components/Auth.js'
import {SignOut} from './Components/Auth.js'
import Cards from './Components/Card'
import { Card } from '@nextui-org/react'
import GiftCard from './GiftCard'
import Services from './Components/Services'
import Datos from './Components/Datos'
import Visa from './Components/Visa'

function App() {

  return (
    <>
    <Nav/>
    <div className='portada'>
    <Cards/>
    <Datos/>
    </div>

    <div className="App">
      <button onClick={SignInWithGoogle}>Login</button>
      <button onClick={SignOut}>Desconect</button>
     </div>
     <div className='services-container-app'>
      <Services text='Casino'image='https://bc.game/assets/casino.74471929.png'/>
      <Services text='Deportes'image='https://bc.game/assets/sports.2f749e0a.png'/>
      <Services text='Lotería'image='https://bc.game/assets/buyticket.763d7657.png'/>
     </div>
     <div  className='gift-card-container-app'>
     <Card>
  <Card.Body>
  <div className='gift-card-container'>
  <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1657028046/amazon.jpg'/>
    <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1614007464/minecraft-java.jpg'/>
    <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3A074695%2Cc_pad%2Ch_181%2Cw_300/v1557503536/psn.jpg'/>
    <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_242%2Cw_400/v1645192970/google-play-updated.jpg'/>
    <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_530%2Cw_875/v1608050339/roblox.jpg'/>
    <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_181%2Cw_300/v1604948939/fortnite.jpg'/>
    <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1557934832/skype.jpg'/>
    <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3Ad32e2e%2Cc_pad%2Ch_151%2Cw_250/v1555429587/hotels_com.jpg'/>
    <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_530%2Cw_875/v1556907895/cubacel.jpg'/>
    <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_530%2Cw_875/v1604961065/freefire.jpg'/>
    <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3Afa8812%2Cc_pad%2Ch_530%2Cw_875/v1673345944/babbel.jpg'/>
    <GiftCard card='https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1586173291/perfect_money.jpg'/>
  </div>
  </Card.Body>
</Card>
<div>
  <Visa/>
</div>
     </div>
  
     </>
    
  )
}

export default App
