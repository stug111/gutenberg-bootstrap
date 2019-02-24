import PropTypes from 'prop-types';
import classnames from 'classnames';

const Row = (
	{ children, className, ...attrs } ) => {
	const classes = classnames(
		className,
		'row'
	);

	return (
		<div className={ classes } { ...attrs } >
			{ children }
		</div>
	);
};

Row.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

Row.defaultProps = {
	children: 'Row',
	className: '',
};

export default Row;
