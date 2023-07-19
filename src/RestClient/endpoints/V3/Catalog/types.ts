import { operations as brandOperations } from '../../../../generate/generated/brands_catalog.v3';
import { operations as categoriesOperations } from '../../../../generate/generated/categories_catalog.v3';
import { operations as categoriesTreeOperations } from '../../../../generate/generated/category-trees_catalog.v3';
import { operations as productModifiersOperations } from '../../../../generate/generated/product-modifiers_catalog.v3';
import { operations as productVariantOptionsOperations } from '../../../../generate/generated/product-variant-options_catalog.v3';
import { operations as productVariantsOperations } from '../../../../generate/generated/product-variants_catalog.v3';
import { operations as productsOperations } from '../../../../generate/generated/products_catalog.v3';
import { AxiosPromise } from '../../../../types';

export interface BrandImage {
  CreateResponse: AxiosPromise<brandOperations['createBrandImage']['responses']['200']['content']['application/json']>;
}

export interface BrandMetafield {
  ListFilters: brandOperations['getBrandMetafieldsByBrandId']['parameters']['query'];
  ListResponse: AxiosPromise<
    brandOperations['getBrandMetafieldsByBrandId']['responses']['200']['content']['application/json']
  >;
  CreateRequest: brandOperations['createBrandMetafield']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    brandOperations['createBrandMetafield']['responses']['200']['content']['application/json']
  >;
  GetFilters: brandOperations['getBrandMetafieldsByBrandId']['parameters']['query'];
  GetResponse: AxiosPromise<brandOperations['getBrandMetafieldsByBrandId']['parameters']['query']>;
  UpdateRequest: brandOperations['updateBrandMetafield']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    brandOperations['updateBrandMetafield']['responses']['200']['content']['application/json']
  >;
}

export interface Brand {
  ListFilters: brandOperations['getBrands']['parameters']['query'];
  ListResponse: AxiosPromise<brandOperations['getBrands']['responses']['200']['content']['application/json']>;
  CreateRequest: brandOperations['createBrand']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<brandOperations['createBrand']['responses']['200']['content']['application/json']>;
  DeleteManyFilters: brandOperations['deleteBrands']['parameters']['query'];
  GetResponse: AxiosPromise<brandOperations['getBrandById']['responses']['200']['content']['application/json']>;
  UpdateRequest: brandOperations['updateBrand']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<brandOperations['updateBrand']['responses']['200']['content']['application/json']>;
}

export interface CategoryBatch {
  ListFilters: categoriesTreeOperations['getAllCategories']['parameters']['query'];
  ListResponse: AxiosPromise<
    categoriesTreeOperations['getAllCategories']['responses']['200']['content']['application/json']
  >;
  CreateRequest: categoriesTreeOperations['createCategories']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    categoriesTreeOperations['createCategories']['responses']['201']['content']['application/json']
  >;
  UpdateRequest: categoriesTreeOperations['updateCategories']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    categoriesTreeOperations['updateCategories']['responses']['204']['content']['application/json']
  >;
  DeleteFilters: categoriesTreeOperations['deleteTreeCategories']['parameters']['query'];
  DeleteResponse: AxiosPromise<
    categoriesTreeOperations['deleteTreeCategories']['responses']['204']['content']['application/json']
  >;
}

export interface Categories {
  ListFilters: categoriesOperations['getCategories']['parameters']['query'];
  ListResponse: AxiosPromise<categoriesOperations['getCategories']['responses']['200']['content']['application/json']>;
  CreateRequest: categoriesOperations['createCategory']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    categoriesOperations['createCategory']['responses']['200']['content']['application/json']
  >;
  DeleteManyFilters: categoriesOperations['deleteCategories']['parameters']['query'];
  GetFilters: categoriesOperations['getCategoryById']['parameters']['query'];
  GetResponse: AxiosPromise<categoriesOperations['getCategoryById']['responses']['200']['content']['application/json']>;
  UpdateRequest: categoriesOperations['updateCategory']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    categoriesOperations['updateCategory']['responses']['200']['content']['application/json']
  >;
}

export interface CategoryImage {
  CreateResponse: AxiosPromise<
    categoriesOperations['createCategoryImage']['responses']['200']['content']['application/json']
  >;
}

export interface CategoryMetafield {
  ListFilters: categoriesOperations['getCategoryMetafieldsByCategoryId']['parameters']['query'];
  ListResponse: AxiosPromise<
    categoriesOperations['getCategoryMetafieldsByCategoryId']['responses']['200']['content']['application/json']
  >;
  CreateRequest: categoriesOperations['createCategoryMetafield']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    categoriesOperations['createCategoryMetafield']['responses']['200']['content']['application/json']
  >;
  GetFilters: categoriesOperations['getCategoryMetafieldByCategoryId']['parameters']['query'];
  GetResponse: AxiosPromise<
    categoriesOperations['getCategoryMetafieldByCategoryId']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: categoriesOperations['updateCategoryMetafield']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    categoriesOperations['updateCategoryMetafield']['responses']['200']['content']['application/json']
  >;
}

export interface CategoryTree {
  ListFilters: categoriesTreeOperations['GetCategoryTrees']['parameters']['query'];
  ListResponse: AxiosPromise<
    categoriesTreeOperations['GetCategoryTrees']['responses']['200']['content']['application/json']
  >;
  UpsertRequest: categoriesTreeOperations['UpsertCategoryTrees']['requestBody']['content']['application/json'];
  UpsertResponse: AxiosPromise<
    categoriesTreeOperations['UpsertCategoryTrees']['responses']['200']['content']['application/json']
  >;
  DeleteFilters: categoriesTreeOperations['DeleteCategoryTrees']['parameters']['query'];
  GetFilters: categoriesTreeOperations['GetCategoryTreeByTreeId']['parameters']['query'];
  GetResponse: AxiosPromise<
    categoriesTreeOperations['GetCategoryTreeByTreeId']['responses']['200']['content']['application/json']
  >;
}

export interface ProductBulkPricingRule {
  ListFilters: productsOperations['getBulkPricingRules']['parameters']['query'];
  ListResponse: AxiosPromise<
    productsOperations['getBulkPricingRules']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productsOperations['createBulkPricingRule']['requestBody']['content']['application/json'];
  CreateFilters: productsOperations['createBulkPricingRule']['parameters']['query'];
  CreateResponse: AxiosPromise<
    productsOperations['createBulkPricingRule']['responses']['200']['content']['application/json']
  >;
  GetFilters: productsOperations['getBulkPricingRuleById']['parameters']['query'];
  GetResponse: AxiosPromise<
    productsOperations['getBulkPricingRuleById']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productsOperations['updateBulkPricingRule']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productsOperations['updateBulkPricingRule']['responses']['200']['content']['application/json']
  >;
}

export interface ProductComplexRule {
  ListFilters: productsOperations['getComplexRules']['parameters']['query'];
  ListResponse: AxiosPromise<productsOperations['getComplexRules']['responses']['200']['content']['application/json']>;
  CreateRequest: productsOperations['createComplexRule']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productsOperations['createComplexRule']['responses']['200']['content']['application/json']
  >;
  GetFilters: productsOperations['getComplexRuleById']['parameters']['query'];
  GetResponse: AxiosPromise<
    productsOperations['getComplexRuleById']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productsOperations['updateComplexRule']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productsOperations['updateComplexRule']['responses']['200']['content']['application/json']
  >;
}

export interface ProductCustomField {
  ListFilters: productsOperations['getCustomFields']['parameters']['query'];
  ListResponse: AxiosPromise<productsOperations['getCustomFields']['responses']['200']['content']['application/json']>;
  CreateRequest: productsOperations['createCustomField']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productsOperations['createCustomField']['responses']['200']['content']['application/json']
  >;
  GetFilters: productsOperations['getCustomFieldById']['parameters']['query'];
  GetResponse: AxiosPromise<
    productsOperations['getCustomFieldById']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productsOperations['updateCustomField']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productsOperations['updateCustomField']['responses']['200']['content']['application/json']
  >;
}

export interface ProductImage {
  ListFilters: productsOperations['getProductImages']['parameters']['query'];
  ListResponse: AxiosPromise<productsOperations['getProductImages']['responses']['200']['content']['application/json']>;
  CreateRequest: productsOperations['createProductImage']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productsOperations['createProductImage']['responses']['200']['content']['application/json']
  >;
  GetFilters: productsOperations['getProductImageById']['parameters']['query'];
  GetResponse: AxiosPromise<
    productsOperations['getProductImageById']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productsOperations['updateProductImage']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productsOperations['updateProductImage']['responses']['200']['content']['application/json']
  >;
}

export interface ProductMetafield {
  ListFilters: productsOperations['getProductMetafieldsByProductId']['parameters']['query'];
  ListResponse: AxiosPromise<
    productsOperations['getProductMetafieldsByProductId']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productsOperations['createProductMetafield']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productsOperations['createProductMetafield']['responses']['200']['content']['application/json']
  >;
  GetFilters: productsOperations['getProductMetafieldByProductId']['parameters']['query'];
  GetResponse: AxiosPromise<
    productsOperations['getProductMetafieldByProductId']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productsOperations['updateProductMetafield']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productsOperations['updateProductMetafield']['responses']['200']['content']['application/json']
  >;
}

export interface ProductModifierImage {
  CreateResponse: AxiosPromise<
    productModifiersOperations['createModifierImage']['responses']['200']['content']['application/json']
  >;
}

export interface ProductModifier {
  ListFilters: productModifiersOperations['getModifiers']['parameters']['query'];
  ListResponse: AxiosPromise<
    productModifiersOperations['getModifiers']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productModifiersOperations['createModifier']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productModifiersOperations['createModifier']['responses']['200']['content']['application/json']
  >;
  GetFilters: productModifiersOperations['getModifierById']['parameters']['query'];
  GetResponse: AxiosPromise<
    productModifiersOperations['getModifierById']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productModifiersOperations['updateModifier']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productModifiersOperations['updateModifier']['responses']['200']['content']['application/json']
  >;
}

export interface ProductModifierValue {
  ListFilters: productModifiersOperations['getModifierValues']['parameters']['query'];
  ListResponse: AxiosPromise<
    productModifiersOperations['getModifierValues']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productModifiersOperations['createModifierValue']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productModifiersOperations['createModifierValue']['responses']['200']['content']['application/json']
  >;
  GetFilters: productModifiersOperations['getModifierValueById']['parameters']['query'];
  GetResponse: AxiosPromise<
    productModifiersOperations['getModifierValueById']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productModifiersOperations['updateModifierValue']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productModifiersOperations['updateModifierValue']['responses']['200']['content']['application/json']
  >;
}

export interface ProductReview {
  ListFilters: productsOperations['getProductReviews']['parameters']['query'];
  ListResponse: AxiosPromise<
    productsOperations['getProductReviews']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productsOperations['createProductReview']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productsOperations['createProductReview']['responses']['200']['content']['application/json']
  >;
  GetFilters: productsOperations['getProductReviewById']['parameters']['query'];
  GetResponse: AxiosPromise<
    productsOperations['getProductReviewById']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productsOperations['updateProductReview']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productsOperations['updateProductReview']['responses']['200']['content']['application/json']
  >;
}

export interface CategoryAssignments {
  ListFilters: productsOperations['GetProductsCategoryAssignments']['parameters']['query'];
  ListResponse: AxiosPromise<
    productsOperations['GetProductsCategoryAssignments']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productsOperations['CreateProductsCategoryAssignments']['requestBody']['content']['application/json'];
  DeleteFilters: productsOperations['DeleteProductsCategoryAssignments']['parameters']['query'];
}

export interface ChannelAssignments {
  ListFilters: productsOperations['GetProductsChannelAssignments']['parameters']['query'];
  ListResponse: AxiosPromise<
    productsOperations['GetProductsChannelAssignments']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productsOperations['CreateProductsChannelAssignments']['requestBody']['content']['application/json'];
  DeleteFilters: productsOperations['DeleteProductsChannelAssignments']['parameters']['query'];
}

export interface SortOrder {
  ListResponse: AxiosPromise<categoriesOperations['getsortorders']['responses']['200']['content']['application/json']>;
  UpdateRequest: categoriesOperations['updatesortorder']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    categoriesOperations['updatesortorder']['responses']['200']['content']['application/json']
  >;
}

export interface VariantOptions {
  ListFilters: productVariantOptionsOperations['getOptions']['parameters']['query'];
  ListResponse: AxiosPromise<
    productVariantOptionsOperations['getOptions']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productVariantOptionsOperations['createOption']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productVariantOptionsOperations['createOption']['responses']['200']['content']['application/json']
  >;
  GetFilters: productVariantOptionsOperations['getOptionById']['parameters']['query'];
  GetResponse: AxiosPromise<
    productVariantOptionsOperations['getOptionById']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productVariantOptionsOperations['updateOption']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productVariantOptionsOperations['updateOption']['responses']['200']['content']['application/json']
  >;
}

export interface VariantOptionValues {
  ListFilters: productVariantOptionsOperations['getOptionValues']['parameters']['query'];
  ListResponse: AxiosPromise<
    productVariantOptionsOperations['getOptionValues']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productVariantOptionsOperations['createOptionValue']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productVariantOptionsOperations['createOptionValue']['responses']['200']['content']['application/json']
  >;
  GetFilters: productVariantOptionsOperations['getOptionValueById']['parameters']['query'];
  GetResponse: AxiosPromise<
    productVariantOptionsOperations['getOptionValueById']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productVariantOptionsOperations['updateOptionValue']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productVariantOptionsOperations['updateOptionValue']['responses']['200']['content']['application/json']
  >;
}

export interface ProductVariant {
  ListFilters: productVariantsOperations['getVariantsByProductId']['parameters']['query'];
  ListResponse: AxiosPromise<
    productVariantsOperations['getVariantsByProductId']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productVariantsOperations['createVariant']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productVariantsOperations['createVariant']['responses']['200']['content']['application/json']
  >;
  GetFilters: productVariantsOperations['getVariantById']['parameters']['query'];
  GetResponse: AxiosPromise<
    productVariantsOperations['getVariantById']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productVariantsOperations['updateVariant']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productVariantsOperations['updateVariant']['responses']['200']['content']['application/json']
  >;
  CreateImageRequest: productVariantsOperations['createVariantImage']['requestBody']['content']['application/json'];
  CreateImageResponse: AxiosPromise<
    productVariantsOperations['createVariantImage']['responses']['200']['content']['application/json']
  >;
}

export interface VariantMetafields {
  ListFilters: productVariantsOperations['getVariantMetafieldsByProductIdAndVariantId']['parameters']['query'];
  ListResponse: AxiosPromise<
    productVariantsOperations['getVariantMetafieldsByProductIdAndVariantId']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productVariantsOperations['createVariantMetafield']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productVariantsOperations['createVariantMetafield']['responses']['200']['content']['application/json']
  >;
  GetFilters: productVariantsOperations['getVariantMetafieldByProductIdAndVariantId']['parameters']['query'];
  GetResponse: AxiosPromise<
    productVariantsOperations['getVariantMetafieldByProductIdAndVariantId']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productVariantsOperations['updateVariantMetafield']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productVariantsOperations['updateVariantMetafield']['responses']['200']['content']['application/json']
  >;
}

export interface Videos {
  ListFilters: productsOperations['getProductVideos']['parameters']['query'];
  ListResponse: AxiosPromise<productsOperations['getProductVideos']['responses']['200']['content']['application/json']>;
  CreateRequest: productsOperations['createProductVideo']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    productsOperations['createProductVideo']['responses']['200']['content']['application/json']
  >;
  GetFilters: productsOperations['getProductVideoById']['parameters']['query'];
  GetResponse: AxiosPromise<
    productsOperations['getProductVideoById']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: productsOperations['updateProductVideo']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    productsOperations['updateProductVideo']['responses']['200']['content']['application/json']
  >;
}

export interface CatSummary {
  GetResponse: AxiosPromise<productsOperations['getCatalogSummary']['responses']['200']['content']['application/json']>;
}

export interface Variant {
  ListFilters: productVariantsOperations['getVariants']['parameters']['query'];
  ListResponse: AxiosPromise<
    productVariantsOperations['getVariants']['responses']['200']['content']['application/json']
  >;
  UpdateBatchRequest: productVariantsOperations['updateVariantsBatch']['requestBody']['content']['application/json'];
  UpdateBatchResponse: AxiosPromise<
    productVariantsOperations['updateVariantsBatch']['responses']['200']['content']['application/json']
  >;
}

export interface Product {
  ListFilters: productsOperations['getProducts']['parameters']['query'];
  ListResponse: AxiosPromise<productsOperations['getProducts']['responses']['200']['content']['application/json']>;
  UpdateBatchRequest: productsOperations['updateProducts']['requestBody']['content']['application/json'];
  UpdateBatchFilters: productsOperations['updateProducts']['parameters']['query'];
  UpdateBatchResponse: AxiosPromise<
    productsOperations['updateProducts']['responses']['200']['content']['application/json']
  >;
  CreateRequest: productsOperations['createProduct']['requestBody']['content']['application/json'];
  CreateFilters: productsOperations['createProduct']['parameters']['query'];
  CreateResponse: AxiosPromise<productsOperations['createProduct']['responses']['200']['content']['application/json']>;
  DeleteManyFilters: productsOperations['deleteProducts']['parameters']['query'];
  GetFilters: productsOperations['getProducts']['parameters']['query'];
  GetResponse: AxiosPromise<productsOperations['getProducts']['responses']['200']['content']['application/json']>;
  UpdateRequest: productsOperations['updateProducts']['requestBody']['content']['application/json'];
  UpdateFilters: productsOperations['updateProducts']['parameters']['query'];
  UpdateResponse: AxiosPromise<productsOperations['updateProducts']['responses']['200']['content']['application/json']>;
}
