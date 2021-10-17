import { Link, useHistory } from "react-router-dom";
import { remove } from "../api/call-api";
import "../styles/users.css";
export default function Users(props) {
  const history = useHistory();
  const onDelete = async id => {
    try {
      await remove(id).then(response => props.onDelete(response.data.id))
      history.push("/users");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="users">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h6 className="h5">Danh sách các idol</h6>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link role="button" className="btn btn-outline-success" to="/add">
              Thêm mới
            </Link>
          </div>
        </div>
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row  row-cols-sm-2 row-cols-md-3 g-2">
            {props.users &&
              props.users.map((user, index) => {
                return (
                  <div className="col" key={index}>
                    <div className="card shadow-sm">
                      <div
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%">
                        <img src={user.avatar} style={{"objectFit":"cover","width":"100%","height":"300px"}} />
                      </div>
                      <div className="card-body">
                        <p className="card-text">{user.fullname}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <Link
                              role="button"
                              className="btn btn-outline-primary"
                              to={"/edit/" + user.id}>
                              Edit
                            </Link>
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              onClick={() => onDelete(user.id)}>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
