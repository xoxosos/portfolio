import Logo from '../assets/logo-iFolio.svg'

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/*logo*/}
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          {/*btn*/}
          <button className="btn btn-sm">一起工作吧</button>
        </div>
      </div>
    </header>
  )
}

export default Header
