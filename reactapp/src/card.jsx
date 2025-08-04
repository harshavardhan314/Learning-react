import PropTypes from 'prop-types';

function Card(props) {
    return (
        props.islogin ? (
            <div className="content">
                <h1>{props.name}</h1>
                <h1>{props.stack}</h1>
                <p>
                    Competitive programmer and MERN stack developer
                </p>
            </div>
        ) : (
            <p>Hello</p>
        )
    );
}

Card.propTypes = {
    islogin: PropTypes.bool,
    name: PropTypes.string,
    stack: PropTypes.string
};

Card.defaultProps = {
    islogin: true,
    name: "harsha",
    stack: "MERN Stack"
};

export default Card;
