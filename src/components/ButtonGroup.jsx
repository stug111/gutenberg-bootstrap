import PropTypes from 'prop-types';
import classnames from 'classnames';

const ButtonGroup = (
	{ children, className, vertical, ...attrs }
) => {
	const classes = classnames(
		className,
		'btn-group',
		{
			'btn-group-verical': vertical,
		}
	);
	return (
		<div
			className={ classes }
			role="group"
			{ ...attrs }
		>
			{ children }
		</div>
	);
};

ButtonGroup.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
	children: 'Button group',
	className: '',
	vertical: false,
};

export default ButtonGroup;
