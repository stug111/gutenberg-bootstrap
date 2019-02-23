import PropTypes from 'prop-types';
import classnames from 'classnames';

const { Fragment } = wp.element;

const Alert = (
	{ children, type, className, close, ...attrs }
) => {
	const classes = classnames(
		className,
		'alert',
		{
			'alert-dismissible': close,
			[ `alert-${ type }` ]: type,
		}
	);
	return (
		<div
			className={ classes }
			role="alert"
			{ ...attrs }
		>
			{ children }
			{ close && (
				<Fragment>
					<button type="button" className="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</Fragment>
			) }
		</div>
	);
};

Alert.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string,
	className: PropTypes.string,
	close: PropTypes.bool,
};

Alert.defaultProps = {
	children: 'Alert',
	type: '',
	className: '',
	close: false,
};

export default Alert;
