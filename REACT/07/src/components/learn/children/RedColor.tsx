const RedColor = (props: { children: React.ReactNode }) => {
    return (
        <>
            <div style={{ color: 'red', fontSize: '32px' }}>
                {props.children}
            </div>
        </>
    );
};
export default RedColor;
