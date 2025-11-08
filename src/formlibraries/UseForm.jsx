import { useForm } from "react-hook-form";

const UseFormCompDemo = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmitHandle = (data) => {
        console.log(data);
    }

    return (
        <>

            <form onSubmit={handleSubmit(onSubmitHandle)}>

                <input {...register('username', { required: 'username is required' })} placeholder="username" />
                {errors.username && <span>{errors.username.message}</span>}
                <button type="submit">Submit</button>
            </form>

        </>
    );
}

export default UseFormCompDemo;