import PropTypes from 'prop-types';
import classnames from 'classnames';

const Col = ( {
	children,
	className,
	xl,
	lg,
	md,
	sm,
	xs,
	offsetXl,
	offsetLg,
	offsetMd,
	offsetSm,
	offsetXs,
	...attrs
} ) => {
	const classes = classnames( className, {
		[ `col-xl-${ xl }` ]: xl,
		[ `col-lg-${ lg }` ]: lg,
		[ `col-md-${ md }` ]: md,
		[ `col-sm-${ sm }` ]: sm,
		[ `col-${ xs }` ]: xs,
		[ `offset-xl-${ offsetXl }` ]: offsetXl,
		[ `offset-lg-${ offsetLg }` ]: offsetLg,
		[ `offset-md-${ offsetMd }` ]: offsetMd,
		[ `offset-sm-${ offsetSm }` ]: offsetSm,
		[ `offset-${ offsetXs }` ]: offsetXs,
	} );

	return (
		<div className={ classes } { ...attrs }>
			{ children }
		</div>
	);
};

Col.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	xl: PropTypes.number,
	lg: PropTypes.number,
	md: PropTypes.number,
	sm: PropTypes.number,
	xs: PropTypes.number,
	offsetXl: PropTypes.number,
	offsetLg: PropTypes.number,
	offsetMd: PropTypes.number,
	offsetSm: PropTypes.number,
	offsetXs: PropTypes.number,
};

Col.defaultProps = {
	children: 'Column',
	className: '',
	xl: 0,
	lg: 0,
	md: 0,
	sm: 0,
	xs: 12,
	offsetXl: 0,
	offsetLg: 0,
	offsetMd: 0,
	offsetSm: 0,
	offsetXs: 0,
};

export default Col;
