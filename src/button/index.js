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
	RadioControl,
	TextareaControl,
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
		tooltip: {
			type: 'string',
			default: '',
		},
		position: {
			type: 'string',
			default: '',
		},
		title: {
			type: 'string',
			default: '',
		},
		alignment: {
			type: 'string',
		},
	},
	edit: props => {
		const { attributes, className, setAttributes, isSelected } = props;
		const {
			type,
			url,
			outline,
			size,
			block,
			text,
			alignment,
			position,
			tooltip,
			title,
		} = attributes;

		const updateSize = ( sizeButton = undefined ) => {
			return () => {
				setAttributes( { size: sizeButton } );
			};
		};

		const buttonType = (
			<PanelBody title={ __( 'Button Settings', 'bootstrap' ) }>
				<SelectControl
					label={ __( 'Button Type', 'bootstrap' ) }
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
		);

		const buttonTooltip = (
			<PanelBody title={ __( 'Button Tooltip', 'bootstrap' ) }>
				<RadioControl
					label="Tooltip active"
					help="The type of the tooltip"
					selected={ tooltip }
					options={ [
						{ label: 'None', value: '' },
						{ label: 'Tooltip', value: 'tooltip' },
					] }
					onChange={ value => setAttributes( { tooltip: value } ) }
				/>
				{ tooltip && (
					<Fragment>
						<SelectControl
							label={ __( 'Position', 'bootstrap' ) }
							value={ position }
							options={ [
								{ label: __( '---', 'bootstrap' ), value: '' },
								{ label: __( 'Top', 'bootstrap' ), value: 'top' },
								{ label: __( 'Right', 'bootstrap' ), value: 'right' },
								{ label: __( 'Bottom', 'bootstrap' ), value: 'bottom' },
								{ label: __( 'Left', 'bootstrap' ), value: 'left' },
							] }
							onChange={ value => setAttributes( { position: value } ) }
						/>
						<TextareaControl
							label={ __( 'Title tooltip', 'bootstrap' ) }
							help={ __( 'Enter some text', 'bootstrap' ) }
							value={ title }
							onChange={ value => setAttributes( { title: value } ) }
						/>
					</Fragment>
				) }
			</PanelBody>
		);

		const inspectroControls = (
			<InspectorControls>
				{ buttonType }
				{ buttonTooltip }
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
						position={ position }
						tooltip={ tooltip }
						title={ title }
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
		const {
			type,
			url,
			outline,
			size,
			block,
			text,
			alignment,
			position,
			tooltip,
			title,
		} = attributes;

		return (
			<div style={ { textAlign: alignment } }>
				<ButtonCustom
					type={ type }
					outline={ outline }
					size={ size }
					block={ block }
					url={ url }
					position={ position }
					tooltip={ tooltip }
					title={ title }
				>
					<RichText.Content value={ text } />
				</ButtonCustom>
			</div>
		);
	},
} );
