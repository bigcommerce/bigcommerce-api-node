import { operations } from '../../../../generate/generated/catalog.v3';
import { AxiosPromise } from '../../../../types';

export interface BrandImage {
  CreateResponse: AxiosPromise<operations['createBrandImage']['responses']['200']['content']['application/json']>;
}

export interface BrandMetafield {
  ListFilters: operations['getBrandMetafieldsByBrandId']['parameters']['query'];
  ListResponse: AxiosPromise<
    operations['getBrandMetafieldsByBrandId']['responses']['200']['content']['application/json']
  >;
  CreateRequest: operations['createBrandMetafield']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createBrandMetafield']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getBrandMetafieldsByBrandId']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getBrandMetafieldsByBrandId']['parameters']['query']>;
  UpdateRequest: operations['updateBrandMetafield']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateBrandMetafield']['responses']['200']['content']['application/json']>;
}

export interface Brand {
  ListFilters: operations['getBrands']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getBrands']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createBrand']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createBrand']['responses']['200']['content']['application/json']>;
  DeleteManyFilters: operations['deleteBrands']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getBrandById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateBrand']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateBrand']['responses']['200']['content']['application/json']>;
}

export interface CategoryBatch {
  ListFilters: operations['getAllCategories']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getAllCategories']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createCategories']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createCategories']['responses']['201']['content']['application/json']>;
  UpdateRequest: operations['updateCategories']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateCategories']['responses']['204']['content']['application/json']>;
  DeleteFilters: operations['deleteTreeCategories']['parameters']['query'];
  DeleteResponse: AxiosPromise<operations['deleteTreeCategories']['responses']['204']['content']['application/json']>;
}

export interface Categories {
  ListFilters: operations['getCategories']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getCategories']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createCategory']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createCategory']['responses']['200']['content']['application/json']>;
  DeleteManyFilters: operations['deleteCategories']['parameters']['query'];
  GetFilters: operations['getCategoryById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getCategoryById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateCategory']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateCategory']['responses']['200']['content']['application/json']>;
}

export interface CategoryImage {
  CreateResponse: AxiosPromise<operations['createCategoryImage']['responses']['200']['content']['application/json']>;
}

export interface CategoryMetafield {
  ListFilters: operations['getCategoryMetafieldsByCategoryId']['parameters']['query'];
  ListResponse: AxiosPromise<
    operations['getCategoryMetafieldsByCategoryId']['responses']['200']['content']['application/json']
  >;
  CreateRequest: operations['createCategoryMetafield']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<
    operations['createCategoryMetafield']['responses']['200']['content']['application/json']
  >;
  GetFilters: operations['getCategoryMetafieldByCategoryId']['parameters']['query'];
  GetResponse: AxiosPromise<
    operations['getCategoryMetafieldByCategoryId']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: operations['updateCategoryMetafield']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<
    operations['updateCategoryMetafield']['responses']['200']['content']['application/json']
  >;
}

export interface CategoryTree {
  ListFilters: operations['GetCategoryTrees']['parameters']['query'];
  ListResponse: AxiosPromise<operations['GetCategoryTrees']['responses']['200']['content']['application/json']>;
  UpsertRequest: operations['UpsertCategoryTrees']['requestBody']['content']['application/json'];
  UpsertResponse: AxiosPromise<operations['UpsertCategoryTrees']['responses']['200']['content']['application/json']>;
  DeleteFilters: operations['DeleteCategoryTrees']['parameters']['query'];
  GetFilters: operations['GetCategoryTreeByTreeId']['parameters']['query'];
  GetResponse: AxiosPromise<operations['GetCategoryTreeByTreeId']['responses']['200']['content']['application/json']>;
}

export interface ProductBulkPricingRule {
  ListFilters: operations['getBulkPricingRules']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getBulkPricingRules']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createBulkPricingRule']['requestBody']['content']['application/json'];
  CreateFilters: operations['createBulkPricingRule']['parameters']['query'];
  CreateResponse: AxiosPromise<operations['createBulkPricingRule']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getBulkPricingRuleById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getBulkPricingRuleById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateBulkPricingRule']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateBulkPricingRule']['responses']['200']['content']['application/json']>;
}

export interface ProductComplexRule {
  ListFilters: operations['getComplexRules']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getComplexRules']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createComplexRule']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createComplexRule']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getComplexRuleById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getComplexRuleById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateComplexRule']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateComplexRule']['responses']['200']['content']['application/json']>;
}

export interface ProductCustomField {
  ListFilters: operations['getCustomFields']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getCustomFields']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createCustomField']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createCustomField']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getCustomFieldById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getCustomFieldById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateCustomField']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateCustomField']['responses']['200']['content']['application/json']>;
}

export interface ProductImage {
  ListFilters: operations['getProductImages']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getProductImages']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createProductImage']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createProductImage']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getProductImageById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getProductImageById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateProductImage']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateProductImage']['responses']['200']['content']['application/json']>;
}

export interface ProductMetafield {
  ListFilters: operations['getProductMetafieldsByProductId']['parameters']['query'];
  ListResponse: AxiosPromise<
    operations['getProductMetafieldsByProductId']['responses']['200']['content']['application/json']
  >;
  CreateRequest: operations['createProductMetafield']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createProductMetafield']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getProductMetafieldByProductId']['parameters']['query'];
  GetResponse: AxiosPromise<
    operations['getProductMetafieldByProductId']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: operations['updateProductMetafield']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateProductMetafield']['responses']['200']['content']['application/json']>;
}

export interface ProductModifierImage {
  CreateResponse: AxiosPromise<operations['createModifierImage']['responses']['200']['content']['application/json']>;
}

export interface ProductModifier {
  ListFilters: operations['getModifiers']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getModifiers']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createModifier']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createModifier']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getModifierById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getModifierById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateModifier']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateModifier']['responses']['200']['content']['application/json']>;
}

export interface ProductModifierValue {
  ListFilters: operations['getModifierValues']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getModifierValues']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createModifierValue']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createModifierValue']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getModifierValueById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getModifierValueById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateModifierValue']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateModifierValue']['responses']['200']['content']['application/json']>;
}

export interface ProductReview {
  ListFilters: operations['getProductReviews']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getProductReviews']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createProductReview']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createProductReview']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getProductReviewById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getProductReviewById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateProductReview']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateProductReview']['responses']['200']['content']['application/json']>;
}

export interface CategoryAssignments {
  ListFilters: operations['GetProductsCategoryAssignments']['parameters']['query'];
  ListResponse: AxiosPromise<
    operations['GetProductsCategoryAssignments']['responses']['200']['content']['application/json']
  >;
  CreateRequest: operations['CreateProductsCategoryAssignments']['requestBody']['content']['application/json'];
  DeleteFilters: operations['DeleteProductsCategoryAssignments']['parameters']['query'];
}

export interface ChannelAssignments {
  ListFilters: operations['GetProductsChannelAssignments']['parameters']['query'];
  ListResponse: AxiosPromise<
    operations['GetProductsChannelAssignments']['responses']['200']['content']['application/json']
  >;
  CreateRequest: operations['CreateProductsChannelAssignments']['requestBody']['content']['application/json'];
  DeleteFilters: operations['DeleteProductsChannelAssignments']['parameters']['query'];
}

export interface SortOrder {
  ListResponse: AxiosPromise<operations['getsortorders']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updatesortorder']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updatesortorder']['responses']['200']['content']['application/json']>;
}

export interface VariantOptions {
  ListFilters: operations['getOptions']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getOptions']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createOption']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createOption']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getOptionById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getOptionById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateOption']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateOption']['responses']['200']['content']['application/json']>;
}

export interface VariantOptionValues {
  ListFilters: operations['getOptionValues']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getOptionValues']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createOptionValue']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createOptionValue']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getOptionValueById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getOptionValueById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateOptionValue']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateOptionValue']['responses']['200']['content']['application/json']>;
}

export interface ProductVariant {
  ListFilters: operations['getVariantsByProductId']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getVariantsByProductId']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createVariant']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createVariant']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getVariantById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getVariantById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateVariant']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateVariant']['responses']['200']['content']['application/json']>;
  CreateImageRequest: operations['createVariantImage']['requestBody']['content']['application/json'];
  CreateImageResponse: AxiosPromise<
    operations['createVariantImage']['responses']['200']['content']['application/json']
  >;
}

export interface VariantMetafields {
  ListFilters: operations['getVariantMetafieldsByProductIdAndVariantId']['parameters']['query'];
  ListResponse: AxiosPromise<
    operations['getVariantMetafieldsByProductIdAndVariantId']['responses']['200']['content']['application/json']
  >;
  CreateRequest: operations['createVariantMetafield']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createVariantMetafield']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getVariantMetafieldByProductIdAndVariantId']['parameters']['query'];
  GetResponse: AxiosPromise<
    operations['getVariantMetafieldByProductIdAndVariantId']['responses']['200']['content']['application/json']
  >;
  UpdateRequest: operations['updateVariantMetafield']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateVariantMetafield']['responses']['200']['content']['application/json']>;
}

export interface Videos {
  ListFilters: operations['getProductVideos']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getProductVideos']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createProductVideo']['requestBody']['content']['application/json'];
  CreateResponse: AxiosPromise<operations['createProductVideo']['responses']['200']['content']['application/json']>;
  GetFilters: operations['getProductVideoById']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getProductVideoById']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateProductVideo']['requestBody']['content']['application/json'];
  UpdateResponse: AxiosPromise<operations['updateProductVideo']['responses']['200']['content']['application/json']>;
}

export interface CatSummary {
  GetResponse: AxiosPromise<operations['getCatalogSummary']['responses']['200']['content']['application/json']>;
}

export interface Variant {
  ListFilters: operations['getVariants']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getVariants']['responses']['200']['content']['application/json']>;
  UpdateBatchRequest: operations['updateVariantsBatch']['requestBody']['content']['application/json'];
  UpdateBatchResponse: AxiosPromise<
    operations['updateVariantsBatch']['responses']['200']['content']['application/json']
  >;
}

export interface Product {
  ListFilters: operations['getProducts']['parameters']['query'];
  ListResponse: AxiosPromise<operations['getProducts']['responses']['200']['content']['application/json']>;
  UpdateBatchRequest: operations['updateProducts']['requestBody']['content']['application/json'];
  UpdateBatchFilters: operations['updateProducts']['parameters']['query'];
  UpdateBatchResponse: AxiosPromise<operations['updateProducts']['responses']['200']['content']['application/json']>;
  CreateRequest: operations['createProduct']['requestBody']['content']['application/json'];
  CreateFilters: operations['createProduct']['parameters']['query'];
  CreateResponse: AxiosPromise<operations['createProduct']['responses']['200']['content']['application/json']>;
  DeleteManyFilters: operations['deleteProducts']['parameters']['query'];
  GetFilters: operations['getProducts']['parameters']['query'];
  GetResponse: AxiosPromise<operations['getProducts']['responses']['200']['content']['application/json']>;
  UpdateRequest: operations['updateProducts']['requestBody']['content']['application/json'];
  UpdateFilters: operations['updateProducts']['parameters']['query'];
  UpdateResponse: AxiosPromise<operations['updateProducts']['responses']['200']['content']['application/json']>;
}
