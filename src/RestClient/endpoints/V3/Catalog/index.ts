import { AxiosInstance } from 'axios';

import BrandImages from './BrandImages';
import BrandMetafields from './BrandMetafields';
import Brands from './Brands';
import CategoriesBatch from './CategoriesBatch';
import Category from './Category';
import CategoryImages from './CategoryImages';
import CategoryMetafields from './CategoryMetafields';
import CategoryTrees from './CategoryTrees';
import ProductBulkPricingRules from './ProductBulkPricingRules';
import ProductComplexRules from './ProductComplexRules';
import ProductCustomFields from './ProductCustomFields';
import ProductImages from './ProductImages';
import ProductMetafields from './ProductMetafields';
import ProductModifierImages from './ProductModifierImages';
import ProductModifiers from './ProductModifiers';
import ProductModifierValues from './ProductModifierValues';
import ProductReviews from './ProductReviews';
import Products from './Products';
import ProductsCategoryAssignments from './ProductsCategoryAssignments';
import ProductsChannelAssignments from './ProductsChannelAssignments';
import ProductSortOrder from './ProductSortOrder';
import ProductVariantOptions from './ProductVariantOptions';
import ProductVariantOptionValues from './ProductVariantOptionValues';
import ProductVariants from './ProductVariants';
import ProductVariantsMetafields from './ProductVariantsMetafields';
import ProductVideos from './ProductVideos';
import Summary from './Summary';
import Variants from './Variants';

class CatalogV3 {
  public brandImages: BrandImages;
  public brandMetafields: BrandMetafields;
  public brands: Brands;
  public categoriesBatch: CategoriesBatch;
  public category: Category;
  public categoryImages: CategoryImages;
  public categoryMetafields: CategoryMetafields;
  public categoryTrees: CategoryTrees;
  public productBulkPricingRules: ProductBulkPricingRules;
  public productComplexRules: ProductComplexRules;
  public productCustomFields: ProductCustomFields;
  public productImages: ProductImages;
  public productMetafields: ProductMetafields;
  public productModifierImages: ProductModifierImages;
  public productModifiers: ProductModifiers;
  public productModifierValues: ProductModifierValues;
  public productReviews: ProductReviews;
  public products: Products;
  public productsCategoryAssignments: ProductsCategoryAssignments;
  public productsChannelAssignments: ProductsChannelAssignments;
  public productSortOrder: ProductSortOrder;
  public productVariantOptions: ProductVariantOptions;
  public productVariantOptionValues: ProductVariantOptionValues;
  public productVariants: ProductVariants;
  public productVariantsMetafields: ProductVariantsMetafields;
  public productVideos: ProductVideos;
  public summary: Summary;
  public variants: Variants;

  constructor(client: AxiosInstance) {
    this.brandImages = new BrandImages(client);
    this.brandMetafields = new BrandMetafields(client);
    this.brands = new Brands(client);
    this.categoriesBatch = new CategoriesBatch(client);
    this.category = new Category(client);
    this.categoryImages = new CategoryImages(client);
    this.categoryMetafields = new CategoryMetafields(client);
    this.categoryTrees = new CategoryTrees(client);
    this.productBulkPricingRules = new ProductBulkPricingRules(client);
    this.productComplexRules = new ProductComplexRules(client);
    this.productCustomFields = new ProductCustomFields(client);
    this.productImages = new ProductImages(client);
    this.productMetafields = new ProductMetafields(client);
    this.productModifierImages = new ProductModifierImages(client);
    this.productModifiers = new ProductModifiers(client);
    this.productModifierValues = new ProductModifierValues(client);
    this.productReviews = new ProductReviews(client);
    this.products = new Products(client);
    this.productsCategoryAssignments = new ProductsCategoryAssignments(client);
    this.productsChannelAssignments = new ProductsChannelAssignments(client);
    this.productSortOrder = new ProductSortOrder(client);
    this.productVariantOptions = new ProductVariantOptions(client);
    this.productVariantOptionValues = new ProductVariantOptionValues(client);
    this.productVariants = new ProductVariants(client);
    this.productVariantsMetafields = new ProductVariantsMetafields(client);
    this.productVideos = new ProductVideos(client);
    this.summary = new Summary(client);
    this.variants = new Variants(client);
  }
}

export default CatalogV3;