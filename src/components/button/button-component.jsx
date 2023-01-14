import './button-component.scss'

const BUTTON_CLASSES = {
    google : 'google-sign-in',
    inverted : 'inverted'
};

const Button = ({content,buttonType,...otherProps}) => {
    return(<div>
        <button className={`button-container ${BUTTON_CLASSES[buttonType]}`} {...otherProps}>{content}</button>
    </div>
    );
}

export default Button;