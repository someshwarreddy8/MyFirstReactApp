import { useState } from "react";
import { useForm } from "react-hook-form"

const ReactHookFormComp = () => {

    const [name, setName] = useState("test");
    const [password, setPassword] = useState("123")

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {

        await new Promise((resolve) => setTimeout(resolve, 1000))

        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username", { required: "username is required" })}
                    type="text" placeholder="username" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                {errors.username && (<span>{errors.username.message}</span>)}

                <input {...register("password", { required: "password is required", minLength: 4 })}
                    type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                {errors.password && (<span>{errors.password.message}</span>)}

                <button disabled={isSubmitting} type="submit">{isSubmitting ? "Loading..." : "Submit"}</button>
            </form>
        </div>
    )
}

export default ReactHookFormComp