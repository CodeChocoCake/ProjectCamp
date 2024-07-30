import { format } from 'date-fns';

export default function About() {
    return (
        <>
            <h1>About</h1>
            <h2>{format(new Date(), 'HH:mm:ss')}</h2>
        </>
    );
}
