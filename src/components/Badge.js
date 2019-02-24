import PropTypes from 'prop-types';
import classnames from 'classnames';

const Badge = (
	{ children, className, round, type, ...attrs }
) => {
	const classes = classnames(
		className,
		'badge',
		{
			'badge-pill': round,
			[ `badge-${ type }` ]: type,
		}
	);

	return (
		<span
			className={ classes }
			{ ...attrs }
		>
			{ children }
		</span>
	);
};

Badge.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	type: PropTypes.string,
	round: PropTypes.bool,
};

Badge.defaultProps = {
	children: 'Button budge',
	className: '',
	type: null,
	round: false,
};

export default Badge;
