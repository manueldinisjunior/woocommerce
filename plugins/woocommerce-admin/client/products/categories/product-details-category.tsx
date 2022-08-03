/**
 * External dependencies
 */
import { CheckboxControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { ProductCategoryLayout } from '../layout/product-category-layout';
import EnrichedLabel from '../fileds/enriched-label';

const PRODUCT_DETAILS_SLUG = 'product-details';
const selectedIndustry = false;

export const ProductDetailsCategory: React.FC = () => {
	return (
		<ProductCategoryLayout
			title={ __( 'Product details', 'woocommerce' ) }
			description={ __(
				'This info will be displayed on the product page, category pages, social media, and search results.',
				'woocommerce'
			) }
		>
			<TextControl
				label={ __( 'Name', 'woocommerce' ) }
				name={ `${ PRODUCT_DETAILS_SLUG }-name` }
				value={ 'e.g. 12 oz Coffee Mug' }
				onChange={ () => {} }
			/>
			<TextControl
				label={ __( 'Category', 'woocommerce' ) }
				name={ `${ PRODUCT_DETAILS_SLUG }-category` }
				value={ 'Search or create category...' }
				onChange={ () => {} }
			/>
			<CheckboxControl
				key={ `checkbox-control-${ PRODUCT_DETAILS_SLUG }` }
				label={
					<EnrichedLabel
						label="Feature this product"
						helpDescription="Do you need help?"
						moreUrl="https://wordpress.org"
						slug={ PRODUCT_DETAILS_SLUG }
					/>
				}
				onChange={ () => {} }
				checked={ selectedIndustry || false }
				className="woocommerce-add-product__checkbox"
			/>
			<CheckboxControl
				key={ `checkbox-control-${ PRODUCT_DETAILS_SLUG }` }
				label={
					<EnrichedLabel
						label="Hide in shop page"
						helpDescription="Do you need help?"
						moreUrl="https://wordpress.org"
						slug={ PRODUCT_DETAILS_SLUG }
					/>
				}
				onChange={ () => {} }
				checked={ selectedIndustry || false }
				className="woocommerce-add-product__checkbox"
			/>
			<CheckboxControl
				key={ `checkbox-control-${ PRODUCT_DETAILS_SLUG }` }
				label={
					<EnrichedLabel
						label="Hide from search results"
						helpDescription="Do you need help?"
						moreUrl="https://wordpress.org"
						slug={ PRODUCT_DETAILS_SLUG }
					/>
				}
				onChange={ () => {} }
				checked={ selectedIndustry || false }
				className="woocommerce-add-product__checkbox"
			/>
		</ProductCategoryLayout>
	);
};
