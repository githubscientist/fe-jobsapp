import { useState } from "react";

const Register = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log('Registering...');
        console.log(form);
    }

    return (
        <div className='max-w-xs mx-auto mt-20 p-4 border rounded'>
            <h2 className='text-xl mb-4'>Candidate Registration</h2>
            <form className='flex flex-col space-y-3' onSubmit={handleRegister}>
                <input name='name' type='text' placeholder='Name' className='border p-2 rounded'
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input name='email' type='email' placeholder='Email' className='border p-2 rounded'
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input name='password' type='password' placeholder='Password' className='border p-2 rounded'
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button className='bg-blue-500 text-white py-2 rounded' type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;