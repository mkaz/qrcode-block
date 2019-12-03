
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'mkaz/qrcode-block', {
	title: 'QRCode Block',
	icon: 'visibility',
	category: 'widgets',
	edit: () => {
		return (
			<div> Hello in Editor. </div>
		);
	},
	save: () => {
		return (
			<div> Hello in Save. </div>
		);
	}
});
