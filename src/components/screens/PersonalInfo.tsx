import { FormProps } from '@/models/userModel'
import { ChangeEvent, FC } from 'react'


const PersonalInfo: FC<FormProps> = ({ userData, setUserData }) => {
    return (
        <>
            <div className="form__name">
                <label htmlFor="" className='display: block mb-1 text-xl'>Name</label>
                <input type="text"
                    className='input w-full'
                    required
                    value={userData.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, name: e.target.value })}
                />
            </div>

            <div className="form__surname">
                <label htmlFor="" className='display: block mb-1 text-xl'>Last Name</label>
                <input type="text"
                    className='input  w-full'
                    required
                    value={userData.lastName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, lastName: e.target.value })}
                />
            </div>

            <div className="form__age">
                <label htmlFor="" className='display: block mb-1 text-xl'>Age</label>
                <input type="number"
                    min={5}
                    className='input  w-full'
                    required
                    value={userData.age}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, age: +e.target.value })}
                />
            </div>
        </>
    )
}

export default PersonalInfo