import './style.scss';
import './editor.scss';
import Alert from '../components/Alert';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls } = wp.editor;
const { SelectControl, ToggleControl, PanelBody } = wp.components;

registerBlockType( 'bootstrap/alert', {
	title: __( 'Alert', 'bootstrap' ),
	icon: 'shield',
	category: 'bootstrap',
	keywords: [ __( 'bootstrap', 'bootstrap' ), __( 'alert', 'bootstrap' ) ],
	attributes: {
		type: {
			type: 'string',
			default: 'info',
		},
		close: {
			type: 'boolean',
			default: false,
		},
	},
	edit: props => {
		const { attributes, className, setAttributes } = props;
		const { type, close } = attributes;
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Alert Settings', 'bootstrap' ) }>
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
							help={ __( 'Select the type of your alert.', 'bootstrap' ) }
							onChange={ type => setAttributes( { type } ) }
						/>
						<ToggleControl
							label={ __( 'Close button', 'bootstrap' ) }
							checked={ close }
							onChange={ close => setAttributes( { close } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<Alert className={ className } type={ type } close={ close }>
					<InnerBlocks />
				</Alert>
			</Fragment>
		);
	},
	save: props => {
		const { attributes } = props;
		const { type, close } = attributes;
		return (
			<Alert type={ type } close={ close }>
				<InnerBlocks.Content />
			</Alert>
		);
	},
} );
