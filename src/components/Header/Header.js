import './Header.scss'

function Header (){
return ( <div className="header">
<img
  className="header__logo"
  src={require("../../assets/Images/Logo.png")}
/>
<button className="header__record-button">
  Record New Note
</button>
</div>)}

export default Header; 