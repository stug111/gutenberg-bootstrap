import PropTypes from 'prop-types';
import classnames from 'classnames';

const Container = ( { children, className, fluid, ...attrs } ) => {
	const classes = classnames( className, {
		container: ! fluid,
		'container-fluid': fluid,
	} );

	return (
		<div className={ classes } { ...attrs }>
			{ children }
		</div>
	);
};

Container.propTypes = {
	children: PropTypes.node,
	fluid: PropTypes.bool,
	className: PropTypes.string,
};

Container.defaultProps = {
	children: 'Container',
	className: '',
	fluid: false,
};

export default Container;
