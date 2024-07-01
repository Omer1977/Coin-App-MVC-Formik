import { Link, NavLink } from "react-router-dom"


const HeaderView = () => {
  return (
    <header className="d-flex justify-content-between p-3 align-items-center">
        <Link className="d-flex gap-3 align-items-center" to={'/home'}>
        <img height={40} src="/coin-logo.png" />
        <h3 className="text-light">CoinMania</h3>
        </Link>

        <nav className="d-flex gap-3">
          <NavLink to={'/'}>Giriş Yap</NavLink>
          <NavLink to={'/home'}>Anasayfa</NavLink>
        </nav>
    </header>
  )
}

export default HeaderView