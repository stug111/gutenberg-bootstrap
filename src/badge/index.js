import './style.scss';
import './editor.scss';
import Badge from '../components/Badge.jsx';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { InspectorControls, RichText } = wp.editor;
const { SelectControl, ToggleControl, PanelBody } = wp.components;

registerBlockType( 'bootstrap/badge', {
	title: __( 'Badge', 'bootstrap' ),
	icon: 'shield',
	category: 'bootstrap',
	keywords: [ __( 'bootstrap', 'bootstrap' ), __( 'Badge', 'bootstrap' ) ],
	attributes: {
		type: {
			type: 'string',
			default: 'info',
		},
		text: {
			type: 'string',
			default: 'text',
		},
		round: {
			type: 'boolean',
			default: false,
		},
	},
	edit: props => {
		const { className, attributes, setAttributes } = props;
		const { type, text, round } = attributes;
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Badge Settings', 'bootstrap' ) }>
						<SelectControl
							label={ __( 'Message Type', 'bootstrap' ) }
							value={ type }
							options={ [
								{ label: __( 'Primary', 'bootstrap' ), value: 'primary' },
								{ label: __( 'Secondary', 'bootstrap' ), value: 'secondary' },
								{ label: __( 'Success', 'bootstrap' ), value: 'success' },
								{ label: __( 'Danger', 'bootstrap' ), value: 'danger' },
								{ label: __( 'Warning', 'bootstrap' ), value: 'warning' },
								{ label: __( 'Info', 'bootstrap' ), value: 'info' },
								{ label: __( 'Light', 'bootstrap' ), value: 'light' },
								{ label: __( 'Dark', 'bootstrap' ), value: 'dark' },
							] }
							help={ __( 'Select the type of your badge.', 'bootstrap' ) }
							onChange={ type => setAttributes( { type } ) }
						/>
						<ToggleControl
							label={ __( 'Make badges more rounded', 'bootstrap' ) }
							checked={ round }
							onChange={ round => setAttributes( { round } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<Badge className={ className } type={ type } round={ round }>
					<RichText value={ text } onChange={ text => setAttributes( { text } ) } />
				</Badge>
			</Fragment>
		);
	},
	save: props => {
		const { attributes } = props;
		const { type, text, round } = attributes;

		return (
			<Badge type={ type } round={ round }>
				<RichText.Content value={ text } />
			</Badge>
		);
	},
} );
