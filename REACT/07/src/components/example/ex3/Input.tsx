type TInputProps = React.ComponentPropsWithoutRef<'input'>;

const Input = ({ ...rest }: TInputProps) => {
    return (
        <>
            <input
                // type={type}
                className="w-60 h-11 mr-2 p-4 rounded-lg text-sm font-medium outline-none"
                // placeholder={placeholder}
                {...rest}
            />
        </>
    );
};
export default Input;
