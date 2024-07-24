// import ProfileCard from './components/example/ex2/ProfileCard';
// import Greeting from './components/Greeting';
// import './assets/css/profileCard.css';

import Button from './components/example/ex3/Button';
import Input from './components/example/ex3/Input';
import RedColor from './components/learn/children/RedColor';

function App() {
    // const isLoggedIn = true;
    return (
        <>
            {/* props */}
            {/* <Greeting
                name="john"
                age={20}
                OnFinishEat={() => console.log('eat')}
            /> */}
            {/* 연습문제 */}
            {/* {isLoggedIn && (
                <ProfileCard
                    bgImg={
                        'https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    }
                    userImg={
                        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    }
                    userName={'Sally Ramos'}
                    userId={'@sallytheramos'}
                    onFollow={() => {
                        alert('Follow!');
                    }}
                />
            )} */}
            {/* <RedColor msg={'I Want to Text'} /> */}
            {/* children props */}
            {/* <RedColor>
                I <i>Want</i> to Text
            </RedColor> */}
            <div className="flex justify-center items-top min-h-screen items-center">
                <Input
                    type={'text'}
                    placeholder={'Enter todo list'}
                    onChange={() => console.log('onChange')}
                    onFocus={() => console.log('onFocus')}
                />
                <div className="flex flex-col gap-2">
                    <Button>Add</Button>
                    <Button>Cancel</Button>
                    <Button>Success</Button>
                </div>
            </div>
        </>
    );
}

export default App;
