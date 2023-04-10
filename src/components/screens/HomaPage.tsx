import OtherInfo from '@/components/screens/OtherInfo'
import PersonalInfo from '@/components/screens/PersonalInfo'
import SignUpInfo from '@/components/screens/SignUpInfo'
import { UserState } from '@/models/userModel'
import axios from 'axios'
import { FormEvent, useState } from 'react'

const HomaPage = () => {
    const [page, setPage] = useState(0)
    const [userData, setUserData] = useState({} as UserState)

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo userData={userData} setUserData={setUserData} />
        }

        else if (page === 1) {
            return <PersonalInfo userData={userData} setUserData={setUserData} />
        }

        else if (page === 2) {
            return <OtherInfo userData={userData} setUserData={setUserData} />
        }
    }

    const pageTitles = ['Sign in', 'Personal Info', 'Other Info']

    const handleNext = () => {
        if (page === pageTitles.length - 1) {
            alert('Submitted')
            console.log(userData)
        }

        else setPage(prevState => prevState + 1)
    }
    const handlePrev = () => setPage(prevState => prevState - 1)

    const handleSubmit = async (evt:FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            await axios({
                url: '/api/user',
                method: 'POST',
                data: userData
            })
        }

        catch (e: any) {
            console.error(e)
        }
    }

    return (
        <div className='display: flex justify-center gap-4 mt-7'>
            <div className='display: flex justify-center flex-col gap-5 w-2/6'>
                <div className="progress-bar w-full h-5 rounded-sm bg-cyan-950">
                    <div className={`
                    ${page === 0
                            ? 'w-1/3'
                            : page === 1
                                ? 'w-2/3'
                                : 'w-3/3'
                        } h-full bg-white rounded-sm ease-in duration-300`}></div>
                </div>

                <div className="title text-2xl">{pageTitles[page]}</div>

                <form className='form display: flex justify-center flex-col gap-3' onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                    {PageDisplay()}

                    <div className='form__buttons display: flex gap-5 w-full'>
                        <button type='button'
                            onClick={handlePrev}
                            disabled={page === 0}
                            className='display: block w-full mt-5 bg-cyan-950 p-4'>
                            Prev
                        </button>

                        <button type={`${page === pageTitles.length - 1 ? 'submit' : 'button'}`}
                            onClick={handleNext}
                            className='w-full mt-5 bg-cyan-950 p-4'>
                            {page === pageTitles.length - 1 ? 'Submit' : 'Next'}
                        </button>
                    </div>
                </form>


            </div>
        </div >
    )
}

export default HomaPage