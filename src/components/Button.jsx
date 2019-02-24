import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = (
	{ children, className, type, outline, size, block, url, ...attrs }
) => {
	const classes = classnames(
		className,
		'btn',
		{
			[ `btn-outline-${ type }` ]: outline,
			[ `btn-${ type }` ]: type && ! outline,
			[ `btn-${ size }` ]: size,
			'btn-block': block,
		}
	);

	return (
		<a
			className={ classes }
			href={ url }
			{ ...attrs }
		>
			{ children }
		</a>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	type: PropTypes.string,
	outline: PropTypes.bool,
	size: PropTypes.string,
	block: PropTypes.bool,
	url: PropTypes.string,
};

Button.defaultProps = {
	children: 'Button',
	className: '',
	type: 'info',
	outline: false,
	size: null,
	block: false,
	url: '#',
};

export default Button;
