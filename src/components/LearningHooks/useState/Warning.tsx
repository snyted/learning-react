type WarningProps = {
    text: string,
    className: string;
}

export const Warning = ({text, className}:WarningProps) => {
    return (
        <p className={className}>
            {text}
        </p>
    )
}