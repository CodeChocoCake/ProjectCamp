import { TGreetingProps } from '../type';

const Greeting = (props: {
    name: string;
    age: number;
    OnFinishEat: () => void;
}) => {
    return (
        <>
            <h1>
                Hello, {props.name} - {props.age}
            </h1>
        </>
    );
};
export default Greeting;
