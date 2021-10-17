import '../styles/navbar.css';
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            {/* <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg> */}
          </a>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className="form-group">
          <NavLink className="btn btn-outline-primary" aria-current="page" to="/">Trang chủ</NavLink>
            </li>
          <li className="form-group">
            <NavLink className="btn btn-outline-success" aria-current="page" to="/users">Danh sách</NavLink>
          </li>
          <li className="form-group">
            <NavLink className="btn btn-outline-danger" aria-current="page" to="/Signin">Đăng nhập</NavLink>
          </li>
          <li className="form-group">
            <NavLink className="btn btn-outline-info" aria-current="page" to="/Signup">Đăng ký</NavLink>
          </li>
        
          </ul>
         
        </header>
      </div>
    
    )
}