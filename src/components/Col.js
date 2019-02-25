import PropTypes from 'prop-types';
import classnames from 'classnames';

const Col = ( { children, className, ...attrs } ) => {
	const classes = classnames( className );

	return (
		<div className={ classes } { ...attrs }>
			{ children }
		</div>
	);
};

Col.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

Col.defaultProps = {
	children: 'Column',
	className: '',
};

export default Col;
