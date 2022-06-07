import './Button.less';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    showIcon?: boolean;
}

const Button = (props: ButtonProps) => {
    return (
        <button className={"PrimaryButton"} {...props}>
            {props.title}
        </button>
    )
}

export default Button;