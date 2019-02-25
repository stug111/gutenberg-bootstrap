import './style.scss';
import './editor.scss';
import Col from '../components/Col';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { PanelBody } = wp.components;
const { InnerBlocks, InspectorControls } = wp.editor;

registerBlockType( 'bootstrap/col', {
	title: __( 'Col', 'bootstrap' ),
	icon: 'shield',
	category: 'bootstrap',
	keywords: [ __( 'bootstrap', 'bootstrap' ), __( 'col', 'bootstrap' ) ],
	edit: props => {
		const { className } = props;
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Column Settings', 'bootstrap' ) } />
				</InspectorControls>
				<Col className={ className }>
					<InnerBlocks />
				</Col>
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
