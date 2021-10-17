import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import auth from "../api/Firebase";
import "../styles/Signup.css";
const Signup = () => {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        try {
            const Result = await createUserWithEmailAndPassword(auth, data.email, data.password);
            alert("đăng ký tài khoản thành công");
            history.push("/Signin")
            const { user } = Result;
            console.log(user);
        } catch (error) {

        }

    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="name@example.com" {...register("email", { required: TextTrackCueList })} />
                <br />
                {errors.email && <span>email is register</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="password" {...register("password", { required: true })} />
            </div>
            <div className="mb"><button className="w-50 btn btn-primary btn-lg" type="submit"> Đăng ký</button></div>
        </form>
    )
};
export default Signup;