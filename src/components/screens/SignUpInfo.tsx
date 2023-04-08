import { FormProps } from '@/models/userModel'
import { ChangeEvent, FC } from 'react'


const SignUpInfo: FC<FormProps> = ({ userData, setUserData }) => {
    return (
        <>
            <div className="form__email w-full">
                <label htmlFor="" className='display: block mb-1 text-xl'>Email</label>
                <input type="email"
                    className='input w-full'
                    required
                    value={userData.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, email: e.target.value })}
                />
            </div>

            <div className="form__password w-full">
                <label htmlFor="" className='display: block mb-1 text-xl'>Password</label>
                <input
                    type="password"
                    className='input  w-full'
                    required
                    value={userData.password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, password: +e.target.value })}
                />
            </div>

            <div className="form__confirmPass w-full">
                <label htmlFor="" className='display: block mb-1 text-xl'>Confirm Password</label>
                <input type="password" className='input  w-full' required />
            </div>
        </>
    )
}

export default SignUpInfo