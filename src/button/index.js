import './style.scss';
import './editor.scss';
import ButtonCustom from '../components/Button';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	RichText,
	URLInput,
	AlignmentToolbar,
	BlockControls,
} = wp.editor;
const {
	SelectControl,
	ToggleControl,
	PanelBody,
	Button,
	ButtonGroup,
	Dashicon,
	IconButton,
} = wp.components;

registerBlockType( 'bootstrap/button', {
	title: __( 'Button', 'bootstrap' ),
	category: 'bootstrap',
	keywords: [ __( 'bootstrap', 'bootstrap' ), __( 'Button', 'bootstrap' ) ],
	attributes: {
		type: {
			type: 'string',
			default: 'info',
		},
		url: {
			type: 'string',
			default: '#',
		},
		outline: {
			type: 'boolean',
			default: false,
		},
		size: {
			type: 'string',
		},
		block: {
			type: 'boolean',
			default: false,
		},
		text: {
			type: 'string',
			default: __( 'More', 'bootstrap' ),
		},
		alignment: {
			type: 'string',
		},
	},
	edit: props => {
		const { attributes, className, setAttributes, isSelected } = props;
		const { type, url, outline, size, block, text, alignment } = attributes;

		const updateSize = ( sizeButton = undefined ) => {
			return () => {
				setAttributes( { size: sizeButton } );
			};
		};

		const inspectroControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Button Settings', 'bootstrap' ) }>
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
						label={ __( 'Outline button', 'bootstrap' ) }
						checked={ outline }
						onChange={ outline => setAttributes( { outline } ) }
					/>
					<ToggleControl
						label={ __( 'Width 100%', 'bootstrap' ) }
						checked={ block }
						onChange={ block => setAttributes( { block } ) }
					/>
					<ButtonGroup aria-label={ __( 'Size' ) }>
						{ [ 'lg', 'sm' ].map( scale => {
							const isCurrent = scale === size;
							return (
								<Button
									key={ scale }
									isSmall
									isPrimary={ isCurrent }
									aria-pressed={ isCurrent }
									onClick={ updateSize( scale ) }
								>
									{ scale }
								</Button>
							);
						} ) }
					</ButtonGroup>
					<Button isSmall onClick={ updateSize() }>
						{ __( 'Reset' ) }
					</Button>
				</PanelBody>
			</InspectorControls>
		);

		const blockControls = (
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ value => setAttributes( { alignment: value } ) }
				/>
			</BlockControls>
		);

		return (
			<Fragment>
				{ blockControls }
				{ inspectroControls }
				<div style={ { textAlign: alignment } }>
					<ButtonCustom
						className={ className }
						type={ type }
						outline={ outline }
						size={ size }
						block={ block }
					>
						<RichText
							value={ text }
							onChange={ value => setAttributes( { text: value } ) }
						/>
					</ButtonCustom>
					{ isSelected && (
						<form
							className="block-library-button__inline-link"
							onSubmit={ event => event.preventDefault() }
						>
							<Dashicon icon="admin-links" />
							<URLInput
								value={ url }
								onChange={ value => setAttributes( { url: value } ) }
							/>
							<IconButton
								icon="editor-break"
								label={ __( 'Apply' ) }
								type="submit"
							/>
						</form>
					) }
				</div>
			</Fragment>
		);
	},
	save: props => {
		const { attributes } = props;
		const { type, url, outline, size, block, text, alignment } = attributes;

		return (
			<div style={ { textAlign: alignment } }>
				<ButtonCustom
					type={ type }
					outline={ outline }
					size={ size }
					block={ block }
					url={ url }
				>
					<RichText.Content value={ text } />
				</ButtonCustom>
			</div>
		);
	},
} );
