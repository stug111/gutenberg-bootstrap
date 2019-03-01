import './style.scss';
import './editor.scss';
import classnames from 'classnames';
import Col from '../components/Col';
import isAttributes from './attribures';
import BlockName from '../components/BlockName';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { PanelBody, RangeControl } = wp.components;
const { InnerBlocks, InspectorControls } = wp.editor;

registerBlockType( 'bootstrap/col', {
	title: __( 'Col', 'bootstrap' ),
	category: 'bootstrap',
	attributes: isAttributes,
	keywords: [ __( 'bootstrap', 'bootstrap' ), __( 'col', 'bootstrap' ) ],
	supports: {
		anchor: true,
	},
	edit: props => {
		const { className, attributes, setAttributes, name } = props;
		const { colXL, colLG, colMD, colSM, colXS } = attributes;
		const { offsetXL, offsetLG, offsetMD, offsetSM, offsetXS } = attributes;
		const { orderXL, orderLG, orderMD, orderSM, orderXS } = attributes;

		const columnSettings = (
			<PanelBody title={ __( 'Column Settings', 'bootstrap' ) }>
				<RangeControl
					label="XL"
					value={ colXL }
					onChange={ value => setAttributes( { colXL: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="LG"
					value={ colLG }
					onChange={ value => setAttributes( { colLG: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="MD"
					value={ colMD }
					onChange={ value => setAttributes( { colMD: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="XS"
					value={ colSM }
					onChange={ value => setAttributes( { colSM: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="SM"
					value={ colXS }
					onChange={ value => setAttributes( { colXS: value } ) }
					min={ 0 }
					max={ 12 }
				/>
			</PanelBody>
		);

		const offsetSettings = (
			<PanelBody title={ __( 'Offset Settings', 'bootstrap' ) } initialOpen={ false }>
				<RangeControl
					label="XL"
					value={ offsetXL }
					onChange={ value => setAttributes( { offsetXL: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="LG"
					value={ offsetLG }
					onChange={ value => setAttributes( { offsetLG: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="MD"
					value={ offsetMD }
					onChange={ value => setAttributes( { offsetMD: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="XS"
					value={ offsetSM }
					onChange={ value => setAttributes( { offsetSM: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="SM"
					value={ offsetXS }
					onChange={ value => setAttributes( { offsetXS: value } ) }
					min={ 0 }
					max={ 12 }
				/>
			</PanelBody>
		);

		const orderSettings = (
			<PanelBody title={ __( 'Order Settings', 'bootstrap' ) } initialOpen={ false }>
				<RangeControl
					label="XL"
					value={ orderXL }
					onChange={ value => setAttributes( { orderXL: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="LG"
					value={ orderLG }
					onChange={ value => setAttributes( { orderLG: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="MD"
					value={ orderMD }
					onChange={ value => setAttributes( { orderMD: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="XS"
					value={ orderSM }
					onChange={ value => setAttributes( { orderSM: value } ) }
					min={ 0 }
					max={ 12 }
				/>
				<RangeControl
					label="SM"
					value={ orderXS }
					onChange={ value => setAttributes( { orderXS: value } ) }
					min={ 0 }
					max={ 12 }
				/>
			</PanelBody>
		);

		return (
			<Fragment>
				<InspectorControls>
					{ columnSettings }
					{ offsetSettings }
					{ orderSettings }
				</InspectorControls>
				<div className={ className }>
					<BlockName name={ name } />
					<InnerBlocks />
				</div>
			</Fragment>
		);
	},
	save: props => {
		return (
			<Col>
				<InnerBlocks.Content />
			</Col>
		);
	},
} );

const { createHigherOrderComponent } = wp.compose;
const withCustomClassName = createHigherOrderComponent( BlockListBlock => {
	return props => {
		if ( props.name === 'bootstrap/col' ) {
			const { attributes } = props;
			const { colXL, colLG, colMD, colSM, colXS } = attributes;
			const { offsetXL, offsetLG, offsetMD, offsetSM, offsetXS } = attributes;
			const { orderXL, orderLG, orderMD, orderSM, orderXS } = attributes;

			const classes = classnames( {
				[ `col-xl-${ colXL }` ]: colXL,
				[ `col-lg-${ colLG }` ]: colLG,
				[ `col-md-${ colMD }` ]: colMD,
				[ `col-sm-${ colSM }` ]: colSM,
				[ `col-${ colXS }` ]: colXS,
				[ `offset-xl-${ offsetXL }` ]: offsetXL,
				[ `offset-lg-${ offsetLG }` ]: offsetLG,
				[ `offset-md-${ offsetMD }` ]: offsetMD,
				[ `offset-sm-${ offsetSM }` ]: offsetSM,
				[ `offset-${ offsetXS }` ]: offsetXS,
				[ `offset-xl-${ orderXL }` ]: orderXL,
				[ `offset-lg-${ orderLG }` ]: orderLG,
				[ `offset-md-${ orderMD }` ]: orderMD,
				[ `offset-sm-${ orderSM }` ]: orderSM,
				[ `offset-${ orderXS }` ]: orderXS,
			} );
			return <BlockListBlock { ...props } className={ classes } />;
		}
		return <BlockListBlock { ...props } />;
	};
}, 'withClientIdClassName' );

wp.hooks.addFilter(
	'editor.BlockListBlock',
	'my-plugin/with-client-id-class-name',
	withCustomClassName
);
