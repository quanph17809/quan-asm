import "../styles/addUser.css";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { add, get, update } from "../api/call-api";
export default function AddUser(props) {
  const history = useHistory();
  const [userdata, setUserdata] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    if (id != undefined) {
      try {

        get(id).then(response => setUserdata(response.data));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  const onSubmit = async user => {
    if (id != undefined) {
      user.id = id;
      try {
        await update(user).then(response => props.onEdit(response.data));
        history.push("/users");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await add(user).then(response => props.onAdd(response.data));
        history.push("/users");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div className="container">
        <main>
          <div className="row g-5">
            <div className="col-md-7 col-lg-8">
              <h6 className="mb-3">Thông tin idol</h6>
              <form
                className="needs-validation"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                     Họ và tên
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="text"
                        className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                        placeholder="Nhập họ và tên"
                        defaultValue={userdata.fullname}
                        {...register("fullname", { required: true })}
                      />
                    </div>
                   
                  </div>

                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                      Ngày sinh
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="text"
                        className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                        placeholder="dd/mm/yyyy"
                        defaultValue={userdata.birthday}
                        {...register("birthday", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Quê quán
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="tel"
                        className="form-control"
                        id="address"
                        placeholder="Nguyên quán"
                        defaultValue={userdata.address}
                        {...register("address", { required: true })}
                      />
                    </div>

                  </div>
                    
                  <div className="col-12">
                    <label className="form-label">
                     Facebook
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="avartar"
                        className="form-control"
                        id="avatar"
                        placeholder="Link ảnh đại diện Facebook"
                        defaultValue={userdata.avatar}
                        {...register("avatar", { required: true })}
                      />
                      
                    </div>
    
                  </div>

                </div>
                <hr className="my-4" />
                <button className="w-50 btn btn-primary btn-lg" type="submit">
                  Lưu
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
