import './style.scss';
import './editor.scss';
import Row from '../components/Row';
import BlockName from '../components/BlockName';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'bootstrap/row', {
	title: __( 'Row', 'bootstrap' ),
	category: 'bootstrap',
	keywords: [ __( 'bootstrap', 'bootstrap' ), __( 'row', 'bootstrap' ) ],
	attributes: {
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
		const { className, name } = props;
		return (
			<Fragment>
				<BlockName name={ name } />
				<Row className={ className }>
					<InnerBlocks />
				</Row>
			</Fragment>
		);
	},
	save: props => {
		return (
			<Row row>
				<InnerBlocks.Content />
			</Row>
		);
	},
} );
