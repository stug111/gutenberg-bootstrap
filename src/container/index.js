import './style.scss';
import './editor.scss';
import Container from '../components/Container';
import BlockName from '../components/BlockName';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls } = wp.editor;
const { ToggleControl, PanelBody } = wp.components;

registerBlockType( 'bootstrap/container', {
	title: __( 'Container', 'bootstrap' ),
	category: 'bootstrap',
	keywords: [ __( 'bootstrap', 'bootstrap' ), __( 'container', 'bootstrap' ) ],
	attributes: {
		fluid: {
			type: 'boolean',
			default: false,
		},
		align: {
			type: 'string',
			default: 'wide',
		},
	},
	supports: {
		anchor: true,
		align: [ 'wide' ],
	},
	edit: props => {
		const { className, attributes, setAttributes, name } = props;
		const { fluid } = attributes;
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Container Settings', 'bootstrap' ) }>
						<ToggleControl
							label={ __( 'Fluid container', 'bootstrap' ) }
							checked={ fluid }
							onChange={ fluid => setAttributes( { fluid } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ className }>
					<BlockName name={ name } />
					<InnerBlocks />
				</div>
			</Fragment>
		);
	},
	save: props => {
		const { attributes } = props;
		const { fluid } = attributes;

		return (
			<Container fluid={ fluid }>
				<InnerBlocks.Content />
			</Container>
		);
	},
} );
