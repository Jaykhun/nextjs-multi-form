import { FormProps } from '@/models/userModel'
import { ChangeEvent, FC } from 'react'

const OtherInfo: FC<FormProps> = ({ userData, setUserData }) => {
    return (
        <>
            <div className="form__country">
                <label htmlFor="" className='display: block mb-1 text-xl'>Country</label>
                <input type="text"
                    className='input w-full'
                    required
                    value={userData.country}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, country: e.target.value })}
                />
            </div>

            <div className="form__city">
                <label htmlFor="" className='display: block mb-1 text-xl'>City</label>
                <input type="text"
                    className='input w-full'
                    required
                    value={userData.city}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, city: e.target.value })}
                />
            </div>

            <div className="form__street">
                <label htmlFor="" className='display: block mb-1 text-xl'>Street</label>
                <input type="text"
                    className='input w-full'
                    required
                    value={userData.street}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, street: e.target.value })}
                />
            </div>
        </>
    )
}

export default OtherInfo