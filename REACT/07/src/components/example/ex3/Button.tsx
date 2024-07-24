import { twMerge } from 'tailwind-merge';

type TButtonProps = React.ComponentPropsWithoutRef<'button'>;

const Button = ({ children, ...rest }: TButtonProps) => {
    return (
        <>
            <button
                className={twMerge(
                    'w-[77px] h-11 bg-[#4F4F4F] text-white rounded-lg py-3 text-sm',
                    children === 'Cancel'
                        ? 'bg-[#ED4848]'
                        : children === 'Success'
                        ? 'bg-[#7D48ED]'
                        : ''
                )}
                {...rest}
            >
                {children}
            </button>
        </>
    );
};
export default Button;
