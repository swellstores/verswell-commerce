export type Product = {
    id: string;
  slug: string;
  availableForSale: boolean;
  name: string;
  description: string;
  descriptionHtml: string;
//   options: ProductOption[];
  priceRange: {
    // maxVariantPrice: Money;
    // minVariantPrice: Money;
  };
//   variants: Connection<ProductVariant>;
//   featuredImage: Image;
//   images: Connection<Image>;
//   seo: SEO;
  tags: string[];
  updatedAt: string;
  images: any;
  price: string
} //TODO: Clean this up

// ------- 

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  SafeNumber: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAccountAddress?: Maybe<SwellAccountAddress>;
  addAccountCard?: Maybe<SwellAccountCard>;
  addCartItem?: Maybe<SwellCart>;
  addSubscriptionItem?: Maybe<SwellSubscriptionItem>;
  applyCoupon?: Maybe<SwellCart>;
  applyGiftcard?: Maybe<SwellCart>;
  createAccount?: Maybe<SwellAccount>;
  createSubscription?: Maybe<SwellSubscription>;
  deleteAccountAddress?: Maybe<SwellAccountAddress>;
  deleteAccountCard?: Maybe<SwellAccountCard>;
  deleteCartItem?: Maybe<SwellCart>;
  deleteSubscriptionItem?: Maybe<SwellSubscriptionItem>;
  loginAccount?: Maybe<SuccessfulResponse>;
  logoutAccount?: Maybe<SuccessfulResponse>;
  recoverAccount?: Maybe<SuccessfulResponse>;
  removeCoupon?: Maybe<SwellCart>;
  removeGiftcard?: Maybe<SwellCart>;
  sendAccountRecovery?: Maybe<SuccessfulResponse>;
  submitCartOrder?: Maybe<SwellOrder>;
  updateAccount?: Maybe<SwellAccount>;
  updateAccountAddress?: Maybe<SwellAccountAddress>;
  updateAccountCard?: Maybe<SwellAccountCard>;
  updateCart?: Maybe<SwellCart>;
  updateCartItem?: Maybe<SwellCart>;
  updateSubscription?: Maybe<SwellSubscription>;
  updateSubscriptionItem?: Maybe<SwellSubscriptionItem>;
};


export type MutationAddAccountAddressArgs = {
  input?: InputMaybe<SwellAccountAddressInput>;
};


export type MutationAddAccountCardArgs = {
  input?: InputMaybe<SwellAccountCardInput>;
};


export type MutationAddCartItemArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellCartItemInput>;
};


export type MutationAddSubscriptionItemArgs = {
  input?: InputMaybe<SwellSubscriptionItemInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationApplyCouponArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
};


export type MutationApplyGiftcardArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
};


export type MutationCreateAccountArgs = {
  input?: InputMaybe<SwellAccountInput>;
};


export type MutationCreateSubscriptionArgs = {
  input?: InputMaybe<SwellSubscriptionInput>;
};


export type MutationDeleteAccountAddressArgs = {
  addressId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteAccountCardArgs = {
  cardId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteCartItemArgs = {
  itemId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteSubscriptionItemArgs = {
  itemId?: InputMaybe<Scalars['String']>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationLoginAccountArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordToken?: InputMaybe<Scalars['String']>;
};


export type MutationRecoverAccountArgs = {
  password?: InputMaybe<Scalars['String']>;
  passwordResetKey?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveGiftcardArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  giftcardId?: InputMaybe<Scalars['String']>;
};


export type MutationSendAccountRecoveryArgs = {
  email?: InputMaybe<Scalars['String']>;
  passwordResetUrl?: InputMaybe<Scalars['String']>;
};


export type MutationSubmitCartOrderArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAccountArgs = {
  input?: InputMaybe<SwellAccountInput>;
};


export type MutationUpdateAccountAddressArgs = {
  addressId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellAccountAddressInput>;
};


export type MutationUpdateAccountCardArgs = {
  cardId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellAccountCardInput>;
};


export type MutationUpdateCartArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellCartInput>;
};


export type MutationUpdateCartItemArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellCartItemInput>;
  itemId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateSubscriptionArgs = {
  id?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellSubscriptionInput>;
};


export type MutationUpdateSubscriptionItemArgs = {
  input?: InputMaybe<SwellSubscriptionItemInput>;
  itemId?: InputMaybe<Scalars['String']>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};

export type Page = {
  __typename?: 'Page';
  end?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
};

export type ProductPricing = {
  accountId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<SwellAccount>;
  attributeById?: Maybe<SwellAttribute>;
  attributes?: Maybe<SwellAttributes>;
  cart?: Maybe<SwellCart>;
  categories?: Maybe<SwellCategories>;
  categoryById?: Maybe<SwellCategory>;
  categoryBySlug?: Maybe<SwellCategory>;
  contentAttributeGroupById?: Maybe<SwellContentAttributeGroup>;
  contentAttributeGroups?: Maybe<SwellContentAttributeGroups>;
  contentPageById?: Maybe<SwellContentPage>;
  contentPageBySlug?: Maybe<SwellContentPage>;
  contentPages?: Maybe<SwellContentPages>;
  menuSettings?: Maybe<SwellSettingsMenus>;
  orderById?: Maybe<SwellOrder>;
  orderByNumber?: Maybe<SwellOrder>;
  orders?: Maybe<SwellOrders>;
  paymentSettings?: Maybe<SwellSettingsPayments>;
  productById?: Maybe<SwellProduct>;
  productBySlug?: Maybe<SwellProduct>;
  products?: Maybe<SwellProducts>;
  session?: Maybe<Session>;
  storeSettings?: Maybe<SwellSettings>;
  subscriptionById?: Maybe<SwellSubscription>;
  subscriptionSettings?: Maybe<SwellSettingsSubscriptions>;
  subscriptions?: Maybe<SwellSubscriptions>;
};


export type QueryAccountArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QueryAttributeByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryAttributesArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCartArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QueryCategoriesArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCategoryByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCategoryBySlugArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryContentAttributeGroupByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _preview?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryContentAttributeGroupsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _preview?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryContentPageByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _preview?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryContentPageBySlugArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _preview?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryContentPagesArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _preview?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryMenuSettingsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QueryOrderByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryOrderByNumberArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
};


export type QueryOrdersArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPaymentSettingsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QueryProductByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _pricing?: InputMaybe<ProductPricing>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryProductBySlugArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _pricing?: InputMaybe<ProductPricing>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _pricing?: InputMaybe<ProductPricing>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryStoreSettingsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionSettingsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type Session = {
  __typename?: 'Session';
  accountId?: Maybe<Scalars['String']>;
  cartId?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publicKey?: Maybe<Scalars['String']>;
};

export type SuccessfulResponse = {
  __typename?: 'SuccessfulResponse';
  success?: Maybe<Scalars['Boolean']>;
};

/** Customer */
export type SwellAccount = {
  __typename?: 'SwellAccount';
  /** Stored addresses used by an account */
  addresses?: Maybe<SwellAccountsAddresses>;
  balance?: Maybe<Scalars['SafeNumber']>;
  /** Default account billing information */
  billing?: Maybe<SwellAccountBilling>;
  /** Stored credit cards used by an account */
  cards?: Maybe<SwellAccountsCards>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateFirstOrder?: Maybe<Scalars['DateTime']>;
  dateLastOrder?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailOptin?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  /** Account Name */
  name?: Maybe<Scalars['String']>;
  orderCount?: Maybe<Scalars['Int']>;
  orderValue?: Maybe<Scalars['SafeNumber']>;
  orders?: Maybe<Array<Maybe<SwellOrder>>>;
  phone?: Maybe<Scalars['String']>;
  /** Default account shipping information */
  shipping?: Maybe<SwellAccountShipping>;
  subscriptions?: Maybe<Array<Maybe<SwellSubscription>>>;
  /** Account Type */
  type?: Maybe<Scalars['String']>;
  vatNumber?: Maybe<Scalars['String']>;
};


/** Customer */
export type SwellAccountOrdersArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


/** Customer */
export type SwellAccountSubscriptionsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

/** Stored addresses used by an account */
export type SwellAccountAddress = {
  __typename?: 'SwellAccountAddress';
  active?: Maybe<Scalars['Boolean']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  fingerprint?: Maybe<Scalars['String']>;
  /** First Name */
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** Last Name */
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<SwellAccount>;
  parentId?: Maybe<Scalars['ID']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};


/** Stored addresses used by an account */
export type SwellAccountAddressParentArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellAccountAddressInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  fingerprint?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

/** Default account billing information */
export type SwellAccountBilling = {
  __typename?: 'SwellAccountBilling';
  accountCardId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  /** Payment Card */
  card?: Maybe<SwellAccountBillingCard>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Billing First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Billing Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Payment Method */
  method?: Maybe<Scalars['String']>;
  /** Billing Name */
  name?: Maybe<Scalars['String']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

/** Payment Card */
export type SwellAccountBillingCard = {
  __typename?: 'SwellAccountBillingCard';
  addressCheck?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  gateway?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};

export type SwellAccountBillingCardInput = {
  addressCheck?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  cvcCheck?: InputMaybe<Scalars['String']>;
  expMonth?: InputMaybe<Scalars['Int']>;
  expYear?: InputMaybe<Scalars['Int']>;
  gateway?: InputMaybe<Scalars['String']>;
  last4?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  zipCheck?: InputMaybe<Scalars['String']>;
};

export type SwellAccountBillingInput = {
  accountCardId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  card?: InputMaybe<SwellAccountBillingCardInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

/** Stored credit cards used by an account */
export type SwellAccountCard = {
  __typename?: 'SwellAccountCard';
  active?: Maybe<Scalars['Boolean']>;
  addressCheck?: Maybe<Scalars['String']>;
  billing?: Maybe<SwellAccountCardBilling>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  fingerprint?: Maybe<Scalars['String']>;
  gateway?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** Last 4 Digits */
  last4?: Maybe<Scalars['String']>;
  parent?: Maybe<SwellAccount>;
  parentId?: Maybe<Scalars['ID']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};


/** Stored credit cards used by an account */
export type SwellAccountCardParentArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellAccountCardBilling = {
  __typename?: 'SwellAccountCardBilling';
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  /** Billing Company Name */
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Billing Email */
  email?: Maybe<Scalars['String']>;
  /** Billing First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Billing Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Billing Name */
  name?: Maybe<Scalars['String']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  vatNumber?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

export type SwellAccountCardBillingInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  vatNumber?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type SwellAccountCardInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  addressCheck?: InputMaybe<Scalars['String']>;
  billing?: InputMaybe<SwellAccountCardBillingInput>;
  brand?: InputMaybe<Scalars['String']>;
  cvcCheck?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  expMonth?: InputMaybe<Scalars['Int']>;
  expYear?: InputMaybe<Scalars['Int']>;
  fingerprint?: InputMaybe<Scalars['String']>;
  gateway?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  last4?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['ID']>;
  test?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  zipCheck?: InputMaybe<Scalars['String']>;
};

export type SwellAccountInput = {
  addresses?: InputMaybe<Array<InputMaybe<SwellAccountAddressInput>>>;
  billing?: InputMaybe<SwellAccountBillingInput>;
  cards?: InputMaybe<Array<InputMaybe<SwellAccountCardInput>>>;
  email?: InputMaybe<Scalars['String']>;
  emailOptin?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetKey?: InputMaybe<Scalars['String']>;
  passwordResetUrl?: InputMaybe<Scalars['String']>;
  passwordToken?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  shipping?: InputMaybe<SwellAccountShippingInput>;
  type?: InputMaybe<Scalars['String']>;
  vatNumber?: InputMaybe<Scalars['String']>;
};

/** Default account shipping information */
export type SwellAccountShipping = {
  __typename?: 'SwellAccountShipping';
  accountAddressId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Shipping First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Shipping Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Shipping Name */
  name?: Maybe<Scalars['String']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

export type SwellAccountShippingInput = {
  accountAddressId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type SwellAccountsAddresses = {
  __typename?: 'SwellAccountsAddresses';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellAccountAddress>>>;
};

export type SwellAccountsCards = {
  __typename?: 'SwellAccountsCards';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellAccountCard>>>;
};

/** Attribute */
export type SwellAttribute = {
  __typename?: 'SwellAttribute';
  default?: Maybe<Scalars['JSON']>;
  filterable?: Maybe<Scalars['Boolean']>;
  multi?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  searchable?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  visible?: Maybe<Scalars['Boolean']>;
};

export type SwellAttributes = {
  __typename?: 'SwellAttributes';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellAttribute>>>;
};

/** Cart */
export type SwellCart = {
  __typename?: 'SwellCart';
  /** Indicates the cart was abandoned after 3 hours of inactivity. After being marked as abandoned, this field is automatically set back to `false` after an update to items, billing, or shipping info. */
  abandoned?: Maybe<Scalars['Boolean']>;
  /** Number of abandoned cart notifications sent to the customer. */
  abandonedNotifications?: Maybe<Scalars['Int']>;
  account?: Maybe<SwellAccount>;
  /** Amount of customer's account credit applied for initial payment, if applicable. */
  accountCreditAmount?: Maybe<Scalars['SafeNumber']>;
  /** Indicates the customer's account credit is applied to the initial payment. */
  accountCreditApplied?: Maybe<Scalars['Boolean']>;
  /** ID of the customer's account. */
  accountId?: Maybe<Scalars['ID']>;
  /** Indicates the customer chose to save shipping and billing information to their account when submitting the order. */
  accountInfoSaved?: Maybe<Scalars['Boolean']>;
  /** Indicates the customer was logged into their account when placing the order. */
  accountLoggedIn?: Maybe<Scalars['Boolean']>;
  authTotal?: Maybe<Scalars['SafeNumber']>;
  /** The customer's billing details. Defaults to `account.billing`. Updating billing will also update the corresponding account billing object. */
  billing?: Maybe<SwellCartBilling>;
  captureTotal?: Maybe<Scalars['SafeNumber']>;
  /** Customer-facing unique identifier for the cart used in URLs and for abandoned cart recovery. */
  checkoutId?: Maybe<Scalars['String']>;
  /** URL to checkout for the cart, set automatically when the cart has at least `items`, `shipping`, or `billing` details set. Can also be set explicitly when creating or updating the cart for custom checkouts. */
  checkoutUrl?: Maybe<Scalars['String']>;
  /** Customer notes provided when placing the order, if any. */
  comments?: Maybe<Scalars['String']>;
  content?: Maybe<SwellCartContent>;
  coupon?: Maybe<SwellCartCoupon>;
  /** Coupon code applied to the cart. */
  couponCode?: Maybe<Scalars['String']>;
  /** ID of the coupon applied to the cart. */
  couponId?: Maybe<Scalars['ID']>;
  currency?: Maybe<Scalars['String']>;
  /** Currency percentage used in calculating the fixed amount. */
  currencyRate?: Maybe<Scalars['SafeNumber']>;
  /** Date the cart was or will be marked as abandoned. */
  dateAbandoned?: Maybe<Scalars['DateTime']>;
  /** Next date the cart will be marked as abandoned when using a series of abandoned cart recovery notices (advanced cart recovery). */
  dateAbandonedNext?: Maybe<Scalars['DateTime']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** Total discount amount. */
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  /** List of discounts applied to the cart. */
  discounts?: Maybe<Array<Maybe<SwellCartDiscount>>>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) representing the user's preferred display currency, if applicable. */
  displayCurrency?: Maybe<Scalars['String']>;
  /** Locale code representing the user's preferred display locale, if applicable. */
  displayLocale?: Maybe<Scalars['String']>;
  /** Indicates the order is intended as a gift for the recipient. */
  gift?: Maybe<Scalars['Boolean']>;
  /** Optional message to include with the order when shipping to the recipient. */
  giftMessage?: Maybe<Scalars['String']>;
  /** Indicates the cart has at least one line item with     `delivery=giftcard`. */
  giftcardDelivery?: Maybe<Scalars['Boolean']>;
  /** Total payment amount applied to the order from `giftcards`. */
  giftcardTotal?: Maybe<Scalars['SafeNumber']>;
  /** List of gift cards applied to the cart. */
  giftcards?: Maybe<Array<Maybe<SwellCartGiftcard>>>;
  /** Grand total including items, shipping, and taxes. */
  grandTotal?: Maybe<Scalars['SafeNumber']>;
  /** Indicates the customer was not logged in when placing the order. */
  guest?: Maybe<Scalars['Boolean']>;
  /** Total discount applied to line items. */
  itemDiscount?: Maybe<Scalars['SafeNumber']>;
  /** Total quantity of all line items. */
  itemQuantity?: Maybe<Scalars['Int']>;
  /** Total shipping weight of all line items. */
  itemShipmentWeight?: Maybe<Scalars['SafeNumber']>;
  /** Total taxes applied to line items. */
  itemTax?: Maybe<Scalars['SafeNumber']>;
  /** Indicates line item prices include taxes. */
  itemTaxIncluded?: Maybe<Scalars['Boolean']>;
  /** List of line items describing the products ordered. */
  items?: Maybe<Array<Maybe<SwellCartItem>>>;
  /** Arbitrary data, typically set in a checkout flow to store custom values. See Frontend API for more details. */
  metadata?: Maybe<Scalars['JSON']>;
  order?: Maybe<SwellOrder>;
  /** ID of the the converted order, if applicable. */
  orderId?: Maybe<Scalars['ID']>;
  /** List of promotion IDs applied to the cart. */
  promotionIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  promotions?: Maybe<SwellCartsPromotions>;
  /** List of purchase link errors applied to the cart. Added when clicking on the purchase link, if any resources are blocking the creation of the cart. */
  purchaseLinksErrors?: Maybe<Array<Maybe<SwellCartPurchaseLinksError>>>;
  /** Indicates the cart was recovered and converted to an order after being abandoned. */
  recovered?: Maybe<Scalars['Boolean']>;
  /** Indicates the cart has at least one line item with   `delivery=shipment`. */
  shipmentDelivery?: Maybe<Scalars['Boolean']>;
  /** Shipping discount applied by coupons, promotions, or custom logic. */
  shipmentDiscount?: Maybe<Scalars['SafeNumber']>;
  /** Total shipping price before discounts. */
  shipmentPrice?: Maybe<Scalars['SafeNumber']>;
  /** Object describing the shipping services and rates available for the cart. Shipping `country` must be set before retrieving shipping rates. */
  shipmentRating?: Maybe<SwellCartShipmentRating>;
  /** Shipping tax amount, if applicable. */
  shipmentTax?: Maybe<Scalars['SafeNumber']>;
  /** Indicates shipping total includes taxes, if applicable. */
  shipmentTaxIncluded?: Maybe<Scalars['Boolean']>;
  /** Total shipping price after discounts. */
  shipmentTotal?: Maybe<Scalars['SafeNumber']>;
  /** The customer's shipping details. Defaults to `account.shipping`. Updating shipping will also update the corresponding account shipping object. */
  shipping?: Maybe<SwellCartShipping>;
  /** Sum of all line items before discounts, taxes and shipping. */
  subTotal?: Maybe<Scalars['SafeNumber']>;
  /** Indicates the cart has at least one line item with `delivery=subscription`. */
  subscriptionDelivery?: Maybe<Scalars['Boolean']>;
  /** Total with shipping and item taxes included. Allows for an alternate display style, as normally `sub_total` and `tax_total` are shown separately. */
  taxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
  /** Total tax amount applied to the cart including line items and shipping. */
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  /** List of taxes applied to the cart. */
  taxes?: Maybe<Array<Maybe<SwellCartTax>>>;
  /** Indicates the order is tax-exempt. Taxes will not be calculated or applied when true. */
  taxesFixed?: Maybe<Scalars['Boolean']>;
  /** Indicates the cart was made in test mode. */
  test?: Maybe<Scalars['Boolean']>;
  testTextField?: Maybe<Scalars['String']>;
  trial?: Maybe<Scalars['Boolean']>;
  trialAuthTotal?: Maybe<Scalars['SafeNumber']>;
  trialGrandTotal?: Maybe<Scalars['SafeNumber']>;
  trialItemDiscount?: Maybe<Scalars['SafeNumber']>;
  trialItemTax?: Maybe<Scalars['SafeNumber']>;
  trialSubTotal?: Maybe<Scalars['SafeNumber']>;
  trialTaxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
};


/** Cart */
export type SwellCartAccountArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


/** Cart */
export type SwellCartOrderArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

/** The customer's billing details. Defaults to `account.billing`. Updating billing will also update the corresponding account billing object. */
export type SwellCartBilling = {
  __typename?: 'SwellCartBilling';
  accountCardId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  affirm?: Maybe<SwellCartBillingAffirm>;
  amazon?: Maybe<SwellCartBillingAmazon>;
  apple?: Maybe<SwellCartBillingApple>;
  bancontact?: Maybe<SwellCartBillingBancontact>;
  /** Payment Card */
  card?: Maybe<SwellCartBillingCard>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Default Billing */
  default?: Maybe<Scalars['Boolean']>;
  /** Billing First Name */
  firstName?: Maybe<Scalars['String']>;
  google?: Maybe<SwellCartBillingGoogle>;
  ideal?: Maybe<SwellCartBillingIdeal>;
  intent?: Maybe<Scalars['JSON']>;
  klarna?: Maybe<SwellCartBillingKlarna>;
  /** Billing Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Payment Method */
  method?: Maybe<Scalars['String']>;
  /** Billing Name */
  name?: Maybe<Scalars['String']>;
  paypal?: Maybe<SwellCartBillingPaypal>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  resolve?: Maybe<SwellCartBillingResolve>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

export type SwellCartBillingAffirm = {
  __typename?: 'SwellCartBillingAffirm';
  checkoutToken?: Maybe<Scalars['String']>;
};

export type SwellCartBillingAffirmInput = {
  checkoutToken?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingAmazon = {
  __typename?: 'SwellCartBillingAmazon';
  accessToken?: Maybe<Scalars['String']>;
  checkoutSessionId?: Maybe<Scalars['String']>;
  orderReferenceId?: Maybe<Scalars['String']>;
};

export type SwellCartBillingAmazonInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  checkoutSessionId?: InputMaybe<Scalars['String']>;
  orderReferenceId?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingApple = {
  __typename?: 'SwellCartBillingApple';
  gateway?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
};

export type SwellCartBillingAppleInput = {
  gateway?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingBancontact = {
  __typename?: 'SwellCartBillingBancontact';
  source?: Maybe<Scalars['String']>;
};

export type SwellCartBillingBancontactInput = {
  source?: InputMaybe<Scalars['String']>;
};

/** Payment Card */
export type SwellCartBillingCard = {
  __typename?: 'SwellCartBillingCard';
  addressCheck?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  gateway?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};

export type SwellCartBillingCardInput = {
  addressCheck?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  cvcCheck?: InputMaybe<Scalars['String']>;
  expMonth?: InputMaybe<Scalars['Int']>;
  expYear?: InputMaybe<Scalars['Int']>;
  gateway?: InputMaybe<Scalars['String']>;
  last4?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  zipCheck?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingGoogle = {
  __typename?: 'SwellCartBillingGoogle';
  gateway?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
};

export type SwellCartBillingGoogleInput = {
  gateway?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingIdeal = {
  __typename?: 'SwellCartBillingIdeal';
  token?: Maybe<Scalars['String']>;
};

export type SwellCartBillingIdealInput = {
  token?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingInput = {
  accountCardId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  affirm?: InputMaybe<SwellCartBillingAffirmInput>;
  amazon?: InputMaybe<SwellCartBillingAmazonInput>;
  apple?: InputMaybe<SwellCartBillingAppleInput>;
  bancontact?: InputMaybe<SwellCartBillingBancontactInput>;
  card?: InputMaybe<SwellCartBillingCardInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  google?: InputMaybe<SwellCartBillingGoogleInput>;
  ideal?: InputMaybe<SwellCartBillingIdealInput>;
  intent?: InputMaybe<Scalars['JSON']>;
  klarna?: InputMaybe<SwellCartBillingKlarnaInput>;
  lastName?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  paypal?: InputMaybe<SwellCartBillingPaypalInput>;
  phone?: InputMaybe<Scalars['String']>;
  resolve?: InputMaybe<SwellCartBillingResolveInput>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingKlarna = {
  __typename?: 'SwellCartBillingKlarna';
  source?: Maybe<Scalars['String']>;
};

export type SwellCartBillingKlarnaInput = {
  source?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingPaypal = {
  __typename?: 'SwellCartBillingPaypal';
  authorizationId?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  payerId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
};

export type SwellCartBillingPaypalInput = {
  authorizationId?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
  payerId?: InputMaybe<Scalars['String']>;
  paymentId?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingResolve = {
  __typename?: 'SwellCartBillingResolve';
  chargeId?: Maybe<Scalars['String']>;
};

export type SwellCartBillingResolveInput = {
  chargeId?: InputMaybe<Scalars['String']>;
};

export type SwellCartContent = {
  __typename?: 'SwellCartContent';
  wishlistSlug?: Maybe<Scalars['String']>;
};

export type SwellCartCoupon = {
  __typename?: 'SwellCartCoupon';
  /** A brief description of the coupon, as it may be displayed to customers. */
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** A short descriptive name of the coupon. */
  name?: Maybe<Scalars['String']>;
};

/** List of discounts applied to the cart. */
export type SwellCartDiscount = {
  __typename?: 'SwellCartDiscount';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
  rule?: Maybe<Scalars['JSON']>;
  /** References the related discount source object (e.g., promotion or coupon) */
  sourceId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
};

/** List of gift cards applied to the cart. */
export type SwellCartGiftcard = {
  __typename?: 'SwellCartGiftcard';
  /** Amount of gift card credit to spend for automatic payment */
  amount?: Maybe<Scalars['SafeNumber']>;
  code?: Maybe<Scalars['String']>;
  codeFormatted?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  last4?: Maybe<Scalars['String']>;
};

export type SwellCartInput = {
  billing?: InputMaybe<SwellCartBillingInput>;
  comments?: InputMaybe<Scalars['String']>;
  couponCode?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<SwellCartItemInput>>>;
  metadata?: InputMaybe<Scalars['JSON']>;
  shipmentRating?: InputMaybe<SwellCartShipmentRatingInput>;
  shipping?: InputMaybe<SwellCartShippingInput>;
};

/** List of line items describing the products ordered. */
export type SwellCartItem = {
  __typename?: 'SwellCartItem';
  bundleItems?: Maybe<Array<Maybe<SwellCartItemBundleItem>>>;
  /** Discount Amount */
  discountEach?: Maybe<Scalars['SafeNumber']>;
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['ID']>;
  metadata?: Maybe<Scalars['JSON']>;
  options?: Maybe<Array<Maybe<SwellCartItemOption>>>;
  origPrice?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  priceTotal?: Maybe<Scalars['SafeNumber']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  purchaseOption?: Maybe<SwellCartItemPurchaseOption>;
  quantity?: Maybe<Scalars['Int']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  /** Tax Amount */
  taxEach?: Maybe<Scalars['SafeNumber']>;
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  taxes?: Maybe<Array<Maybe<SwellCartItemTax>>>;
  variant?: Maybe<SwellProductVariant>;
  variantId?: Maybe<Scalars['ID']>;
};

export type SwellCartItemBundleItem = {
  __typename?: 'SwellCartItemBundleItem';
  id?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Maybe<SwellCartItemBundleItemOption>>>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  /** Bundled Quantity */
  quantityTotal?: Maybe<Scalars['Int']>;
  variant?: Maybe<SwellProductVariant>;
  variantId?: Maybe<Scalars['ID']>;
};

export type SwellCartItemBundleItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  options?: InputMaybe<Array<InputMaybe<SwellCartItemBundleItemOptionInput>>>;
  productId?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantityTotal?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['ID']>;
};

export type SwellCartItemBundleItemOption = {
  __typename?: 'SwellCartItemBundleItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellCartItemBundleItemOptionInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  shipmentWeight?: InputMaybe<Scalars['SafeNumber']>;
  value?: InputMaybe<Scalars['String']>;
  valueId?: InputMaybe<Scalars['ID']>;
  variant?: InputMaybe<Scalars['Boolean']>;
};

export type SwellCartItemInput = {
  bundleItems?: InputMaybe<Array<InputMaybe<SwellCartItemBundleItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  options?: InputMaybe<Array<InputMaybe<SwellCartItemOptionInput>>>;
  productId?: InputMaybe<Scalars['ID']>;
  purchaseOption?: InputMaybe<SwellCartItemPurchaseOptionInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['ID']>;
};

export type SwellCartItemOption = {
  __typename?: 'SwellCartItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellCartItemOptionInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  shipmentWeight?: InputMaybe<Scalars['SafeNumber']>;
  value?: InputMaybe<Scalars['String']>;
  valueId?: InputMaybe<Scalars['ID']>;
  variant?: InputMaybe<Scalars['Boolean']>;
};

export type SwellCartItemPurchaseOption = {
  __typename?: 'SwellCartItemPurchaseOption';
  authAmount?: Maybe<Scalars['SafeNumber']>;
  billingSchedule?: Maybe<SwellCartItemPurchaseOptionBillingSchedule>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  orderSchedule?: Maybe<SwellCartItemPurchaseOptionOrderSchedule>;
  planDescription?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['ID']>;
  planName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  trialDays?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellCartItemPurchaseOptionBillingSchedule = {
  __typename?: 'SwellCartItemPurchaseOptionBillingSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  trialDays?: Maybe<Scalars['Int']>;
};

export type SwellCartItemPurchaseOptionInput = {
  planDescription?: InputMaybe<Scalars['String']>;
  planId?: InputMaybe<Scalars['ID']>;
  planName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type SwellCartItemPurchaseOptionOrderSchedule = {
  __typename?: 'SwellCartItemPurchaseOptionOrderSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SwellCartItemTax = {
  __typename?: 'SwellCartItemTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
};

export type SwellCartPromotion = {
  __typename?: 'SwellCartPromotion';
  /** Date the promo ends and is no longer available. When defined, the promo will not be applied after this date. */
  dateEnd?: Maybe<Scalars['DateTime']>;
  /** Date the promo is first available. When defined, the promo will not be valid until after this date and before `date_end`. */
  dateStart?: Maybe<Scalars['DateTime']>;
  /** A brief description of the promo, as it may be displayed to customers. */
  description?: Maybe<Scalars['String']>;
  /** A short descriptive name of the promo. */
  name?: Maybe<Scalars['String']>;
};

/** List of purchase link errors applied to the cart. Added when clicking on the purchase link, if any resources are blocking the creation of the cart. */
export type SwellCartPurchaseLinksError = {
  __typename?: 'SwellCartPurchaseLinksError';
  error?: Maybe<SwellCartPurchaseLinksErrorError>;
  id?: Maybe<Scalars['ID']>;
  purchaseLinkId?: Maybe<Scalars['String']>;
};

export type SwellCartPurchaseLinksErrorError = {
  __typename?: 'SwellCartPurchaseLinksErrorError';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  resource?: Maybe<SwellCartPurchaseLinksErrorErrorResource>;
};

export type SwellCartPurchaseLinksErrorErrorResource = {
  __typename?: 'SwellCartPurchaseLinksErrorErrorResource';
  id?: Maybe<Scalars['ID']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Object describing the shipping services and rates available for the cart. Shipping `country` must be set before retrieving shipping rates. */
export type SwellCartShipmentRating = {
  __typename?: 'SwellCartShipmentRating';
  dateCreated?: Maybe<Scalars['DateTime']>;
  errors?: Maybe<Array<Maybe<SwellCartShipmentRatingError>>>;
  md5?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<SwellCartShipmentRatingService>>>;
};

export type SwellCartShipmentRatingError = {
  __typename?: 'SwellCartShipmentRatingError';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type SwellCartShipmentRatingErrorInput = {
  code?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
};

export type SwellCartShipmentRatingInput = {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  errors?: InputMaybe<Array<InputMaybe<SwellCartShipmentRatingErrorInput>>>;
  md5?: InputMaybe<Scalars['String']>;
  services?: InputMaybe<Array<InputMaybe<SwellCartShipmentRatingServiceInput>>>;
};

export type SwellCartShipmentRatingService = {
  __typename?: 'SwellCartShipmentRatingService';
  carrier?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['SafeNumber']>;
  taxCode?: Maybe<Scalars['String']>;
};

export type SwellCartShipmentRatingServiceInput = {
  carrier?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pickup?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  taxCode?: InputMaybe<Scalars['String']>;
};

/** The customer's shipping details. Defaults to `account.shipping`. Updating shipping will also update the corresponding account shipping object. */
export type SwellCartShipping = {
  __typename?: 'SwellCartShipping';
  accountAddressId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Default Shipping */
  default?: Maybe<Scalars['Boolean']>;
  /** Shipping First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Shipping Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Shipping Name */
  name?: Maybe<Scalars['String']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['Boolean']>;
  /** Shipping Price */
  price?: Maybe<Scalars['SafeNumber']>;
  /** Shipping Service ID */
  service?: Maybe<Scalars['String']>;
  /** Shipping Service Name */
  serviceName?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

export type SwellCartShippingInput = {
  accountAddressId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  pickup?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  service?: InputMaybe<Scalars['String']>;
  serviceName?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

/** List of taxes applied to the cart. */
export type SwellCartTax = {
  __typename?: 'SwellCartTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['SafeNumber']>;
  shipping?: Maybe<Scalars['Boolean']>;
};

export type SwellCartsPromotions = {
  __typename?: 'SwellCartsPromotions';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellCartPromotion>>>;
};

export type SwellCategories = {
  __typename?: 'SwellCategories';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellCategory>>>;
};

/** Category */
export type SwellCategory = {
  __typename?: 'SwellCategory';
  children?: Maybe<Array<Maybe<SwellCategory>>>;
  content?: Maybe<SwellCategoryContent>;
  /** A long-form description of the category. Can contain HTML or other markup languages. */
  description?: Maybe<Scalars['String']>;
  /** Image depicting the category. */
  image?: Maybe<SwellCategoryImage>;
  /** List of images depicting the category. */
  images?: Maybe<Array<Maybe<SwellCategoryImage>>>;
  /** Page description used for search engine optimization purposes. */
  metaDescription?: Maybe<Scalars['String']>;
  /** Page keywords used for search engine optimization purposes. */
  metaKeywords?: Maybe<Scalars['String']>;
  /** A human-friendly name for the category. */
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<SwellCategory>;
  /** ID of the parent category, if applicable. */
  parentId?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Maybe<SwellProduct>>>;
  /** Unique identifier typically used in URLs. Defaults to `name` converted to lowercase and hyphenated. If the category has a parent, the default slug will be prefixed with the parent slug. Maximum length of 1,000 characters. */
  slug?: Maybe<Scalars['String']>;
  /** Position of the category in a list. */
  sort?: Maybe<Scalars['Int']>;
  /** Default product sorting applied when retrieving products using the `category` or `categories` filter. Can be one of `popularity`, `price_asc`, `price_desc`, `date_asc`. `date_desc`. If not specified, products are sorted by their manually defined `sort` value. */
  sorting?: Maybe<Scalars['String']>;
  top?: Maybe<SwellCategory>;
  /** ID of the top level category in the hierarchy. */
  topId?: Maybe<Scalars['ID']>;
};


/** Category */
export type SwellCategoryChildrenArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


/** Category */
export type SwellCategoryParentArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


/** Category */
export type SwellCategoryProductsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


/** Category */
export type SwellCategoryTopArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellCategoryContent = {
  __typename?: 'SwellCategoryContent';
  darkenHeroImage?: Maybe<Scalars['Int']>;
  paginationStyle?: Maybe<Scalars['String']>;
  productCols?: Maybe<Scalars['Int']>;
  productRows?: Maybe<Scalars['Int']>;
  showHeroImage?: Maybe<Scalars['Boolean']>;
  textColor?: Maybe<Scalars['String']>;
};

/** List of images depicting the category. */
export type SwellCategoryImage = {
  __typename?: 'SwellCategoryImage';
  caption?: Maybe<Scalars['String']>;
  file?: Maybe<SwellCategoryImageFile>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type SwellCategoryImageFile = {
  __typename?: 'SwellCategoryImageFile';
  contentType?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  dateUploaded?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  length?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  private?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** Attribute-Group */
export type SwellContentAttributeGroup = {
  __typename?: 'SwellContentAttributeGroup';
  content?: Maybe<SwellContentAttributeGroupContent>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
};

export type SwellContentAttributeGroupContent = {
  __typename?: 'SwellContentAttributeGroupContent';
  attributes?: Maybe<Array<Maybe<SwellContentAttributeGroupContentAttribute>>>;
};

export type SwellContentAttributeGroupContentAttribute = {
  __typename?: 'SwellContentAttributeGroupContentAttribute';
  attributeId?: Maybe<SwellAttribute>;
  attributeIdId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type SwellContentAttributeGroupContentAttributeAttributeIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellContentAttributeGroups = {
  __typename?: 'SwellContentAttributeGroups';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellContentAttributeGroup>>>;
};

/** Page */
export type SwellContentPage = {
  __typename?: 'SwellContentPage';
  content?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  redirect?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<SwellContentPageSections>>>;
  slug?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionCollectionPreview = {
  __typename?: 'SwellContentPageSectionCollectionPreview';
  category?: Maybe<SwellCategory>;
  categoryId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  productCols?: Maybe<Scalars['Int']>;
  productRows?: Maybe<Scalars['Int']>;
  productTextAlign?: Maybe<Scalars['String']>;
  showPrice?: Maybe<Scalars['Boolean']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  titleAlign?: Maybe<Scalars['String']>;
  titleSize?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type SwellContentPageSectionCollectionPreviewCategoryArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellContentPageSectionCustomerReview = {
  __typename?: 'SwellContentPageSectionCustomerReview';
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  reviews?: Maybe<Array<Maybe<SwellContentPageSectionCustomerReviewReview>>>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionCustomerReviewReview = {
  __typename?: 'SwellContentPageSectionCustomerReviewReview';
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
};

export type SwellContentPageSectionEmailSignup = {
  __typename?: 'SwellContentPageSectionEmailSignup';
  alignX?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['JSON']>;
  outerSpacingX?: Maybe<Scalars['String']>;
  outerSpacingY?: Maybe<Scalars['String']>;
  textAlign?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionFullWidthMedium = {
  __typename?: 'SwellContentPageSectionFullWidthMedium';
  alignX?: Maybe<Scalars['String']>;
  alignY?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  darkenBg?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['JSON']>;
  innerSpacing?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<SwellContentPageSectionFullWidthMediumLink>>>;
  outerSpacingX?: Maybe<Scalars['String']>;
  outerSpacingY?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionFullWidthMediumLink = {
  __typename?: 'SwellContentPageSectionFullWidthMediumLink';
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionHeadingWithText = {
  __typename?: 'SwellContentPageSectionHeadingWithText';
  bgColor?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  headingPosition?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  textColumnWidth?: Maybe<Scalars['String']>;
  textColumns?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionLargeMedium = {
  __typename?: 'SwellContentPageSectionLargeMedium';
  bgColor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiFeature = {
  __typename?: 'SwellContentPageSectionMultiFeature';
  columnWidth?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<SwellContentPageSectionMultiFeatureFeature>>>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiFeatureFeature = {
  __typename?: 'SwellContentPageSectionMultiFeatureFeature';
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiPanel = {
  __typename?: 'SwellContentPageSectionMultiPanel';
  bgColor?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  panels?: Maybe<Array<Maybe<SwellContentPageSectionMultiPanelPanels>>>;
  textAlign?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiPanelPanelImage = {
  __typename?: 'SwellContentPageSectionMultiPanelPanelImage';
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['JSON']>;
  imageAlt?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiPanelPanelText = {
  __typename?: 'SwellContentPageSectionMultiPanelPanelText';
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<SwellContentPageSectionMultiPanelPanelTextLink>>>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiPanelPanelTextLink = {
  __typename?: 'SwellContentPageSectionMultiPanelPanelTextLink';
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiPanelPanels = SwellContentPageSectionMultiPanelPanelImage | SwellContentPageSectionMultiPanelPanelText;

export type SwellContentPageSectionPressMention = {
  __typename?: 'SwellContentPageSectionPressMention';
  id?: Maybe<Scalars['ID']>;
  mentions?: Maybe<Array<Maybe<SwellContentPageSectionPressMentionMention>>>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionPressMentionMention = {
  __typename?: 'SwellContentPageSectionPressMentionMention';
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['JSON']>;
  logoScale?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
};

export type SwellContentPageSections = SwellContentPageSectionCollectionPreview | SwellContentPageSectionCustomerReview | SwellContentPageSectionEmailSignup | SwellContentPageSectionFullWidthMedium | SwellContentPageSectionHeadingWithText | SwellContentPageSectionLargeMedium | SwellContentPageSectionMultiFeature | SwellContentPageSectionMultiPanel | SwellContentPageSectionPressMention;

export type SwellContentPages = {
  __typename?: 'SwellContentPages';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellContentPage>>>;
};

/** Order */
export type SwellOrder = {
  __typename?: 'SwellOrder';
  /** Amount of customer's account credit applied for initial payment, if applicable. */
  accountCreditAmount?: Maybe<Scalars['SafeNumber']>;
  /** Indicates the customer’s account credit is applied when submitting the order. */
  accountCreditApplied?: Maybe<Scalars['Boolean']>;
  /** The `id` of the customer's account. During checkout, customer accounts without a password are designated as `guest=true`. */
  accountId?: Maybe<Scalars['ID']>;
  /** Indicates the customer chose to save shipping and billing information to their account when submitting the order. */
  accountInfoSaved?: Maybe<Scalars['Boolean']>;
  /** Indicates the customer was logged into their account when placing the order. */
  accountLoggedIn?: Maybe<Scalars['Boolean']>;
  /** The customer's billing details. Defaults to `account.billing`. Updating billing will also update the corresponding account billing object. */
  billing?: Maybe<SwellOrderBilling>;
  /** Indicates the order was completely canceled. */
  canceled?: Maybe<Scalars['Boolean']>;
  /** Customer notes provided when placing the order, if any. */
  comments?: Maybe<Scalars['String']>;
  coupon?: Maybe<SwellOrderCoupon>;
  /** Coupon code applied to the order. */
  couponCode?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  /** The store’s base currency. */
  currencyBase?: Maybe<Scalars['String']>;
  /** Currency percentage used in calculating the fixed amount. */
  currencyRate?: Maybe<Scalars['SafeNumber']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** Indicates the order was completely fulfilled. Always `true` when `delivery_marked=true`, otherwise depends on the sum of `shipments`, `giftcards`, and `subscriptions`. */
  delivered?: Maybe<Scalars['Boolean']>;
  /** Total discount amount. */
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  /** List of discounts applied to the order. */
  discounts?: Maybe<Array<Maybe<SwellOrderDiscount>>>;
  /** Indicates the order is intended as a gift for the recipient. */
  gift?: Maybe<Scalars['Boolean']>;
  /** Optional message to include with the order when shipping to the recipient. */
  giftMessage?: Maybe<Scalars['String']>;
  /** Indicates the order has at least one line item with `delivery=giftcard`. */
  giftcardDelivery?: Maybe<Scalars['Boolean']>;
  /** Total payment amount applied to the order from `giftcards`. */
  giftcardTotal?: Maybe<Scalars['SafeNumber']>;
  /** List of gift cards applied to the order. */
  giftcards?: Maybe<Array<Maybe<SwellOrderGiftcard>>>;
  /** Grand total including items, shipping and taxes. */
  grandTotal?: Maybe<Scalars['SafeNumber']>;
  /** Indicates the customer was not logged in when placing the order. */
  guest?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  /** Total discount applied to line items. */
  itemDiscount?: Maybe<Scalars['SafeNumber']>;
  /** Total quantity of all line items. */
  itemQuantity?: Maybe<Scalars['Int']>;
  /** Total quantity of cancelable items on the order. */
  itemQuantityCancelable?: Maybe<Scalars['Int']>;
  /** Total quantity of line items canceled. */
  itemQuantityCanceled?: Maybe<Scalars['Int']>;
  /** Total quantity of line items that can be credited. */
  itemQuantityCreditable?: Maybe<Scalars['Int']>;
  /** Total quantity of items credited on the order. */
  itemQuantityCredited?: Maybe<Scalars['Int']>;
  /** Total quantity of line items that can be fulfilled. */
  itemQuantityDeliverable?: Maybe<Scalars['Int']>;
  /** Total quantity of line items that have been fulfilled. */
  itemQuantityDelivered?: Maybe<Scalars['Int']>;
  /** Total quantity of line items that can be fulfilled by gift card. Applies when `item.delivery=giftcard`. */
  itemQuantityGiftcardDeliverable?: Maybe<Scalars['Int']>;
  /** Total quantity of items eligible for invoicing on the order. */
  itemQuantityInvoiceable?: Maybe<Scalars['Int']>;
  /** Total quantity of items invoiced on the order. */
  itemQuantityInvoiced?: Maybe<Scalars['Int']>;
  /** Total quantity of line items that can still be returned. */
  itemQuantityReturnable?: Maybe<Scalars['Int']>;
  /** Total quantity of line items that have been returned. */
  itemQuantityReturned?: Maybe<Scalars['Int']>;
  /** Total quantity of line items that can be fulfilled by shipment. Applies when `item.delivery=shipment`. */
  itemQuantityShipmentDeliverable?: Maybe<Scalars['Int']>;
  /** Total quantity of line items that can be fulfilled by subscription. Applies when `item.delivery=subscription`. */
  itemQuantitySubscriptionDeliverable?: Maybe<Scalars['Int']>;
  /** Total shipping weight of all line items. */
  itemShipmentWeight?: Maybe<Scalars['SafeNumber']>;
  /** Total taxes applied to line items. */
  itemTax?: Maybe<Scalars['SafeNumber']>;
  /** Indicates line item prices include taxes. */
  itemTaxIncluded?: Maybe<Scalars['Boolean']>;
  /** List of line items describing the products ordered. */
  items?: Maybe<Array<Maybe<SwellOrderItem>>>;
  /** Arbitrary data, typically set in a checkout flow to store custom values. See Frontend API for details. */
  metadata?: Maybe<Scalars['JSON']>;
  /** Unique incremental order number, assigned automatically using a format configured in general settings. */
  number?: Maybe<Scalars['String']>;
  /** Indicates the order was paid in full. Always `true` when `payment_marked=true`, otherwise depends on the sum of `payments`. */
  paid?: Maybe<Scalars['Boolean']>;
  payments?: Maybe<SwellOrdersPayments>;
  /** List of promotion IDs applied to the order. */
  promotionIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  promotions?: Maybe<SwellOrdersPromotions>;
  /** Expandable list of refunds issued for the payment. */
  refunds?: Maybe<SwellOrdersRefunds>;
  /** Indicates the order has at least one line item with `delivery=shipment`. */
  shipmentDelivery?: Maybe<Scalars['Boolean']>;
  /** Shipping discount applied by coupons, promotions, or custom logic. */
  shipmentDiscount?: Maybe<Scalars['SafeNumber']>;
  /** Total shipping price before discounts. */
  shipmentPrice?: Maybe<Scalars['SafeNumber']>;
  /** Object describing the shipping services and rates available for the order. Shipping `country` must be set before retrieving shipping rates. */
  shipmentRating?: Maybe<SwellOrderShipmentRating>;
  /** Shipping tax amount, if applicable. */
  shipmentTax?: Maybe<Scalars['SafeNumber']>;
  /** Indicates shipping total includes taxes, if applicable. */
  shipmentTaxIncluded?: Maybe<Scalars['Boolean']>;
  /** Total shipping price including taxes and discount. Allows for an alternate display style as normally `shipment_total` and `tax_total` are shown separately. */
  shipmentTaxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
  /** Total shipping price after discounts. */
  shipmentTotal?: Maybe<Scalars['SafeNumber']>;
  /** Total shipping price for items credited on the order. */
  shipmentTotalCredited?: Maybe<Scalars['SafeNumber']>;
  /** Total shipping price for items invoiced on the order. */
  shipmentTotalInvoiced?: Maybe<Scalars['SafeNumber']>;
  shipments?: Maybe<SwellOrdersShipments>;
  /** The customer's shipping details. Defaults to `account.shipping`. Updating shipping will also update the corresponding account shipping object. */
  shipping?: Maybe<SwellOrderShipping>;
  /** Current status of the order. Can be `pending`, `draft`, `payment_pending`, `delivery_pending`, `hold`, `complete`, or `canceled`. */
  status?: Maybe<Scalars['String']>;
  /** Sum of all line items before discounts, taxes and shipping. */
  subTotal?: Maybe<Scalars['SafeNumber']>;
  /** Indicates the order has at least one line item with `delivery=subscription`. */
  subscriptionDelivery?: Maybe<Scalars['Boolean']>;
  /** Total of taxes applied separately from line items. */
  taxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
  /** Total tax amount applied to the order including line items and shipping. */
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  /** List of taxes applied to the order. */
  taxes?: Maybe<Array<Maybe<SwellOrderTax>>>;
  /** Indicates the order is tax-exempt. Taxes will not be calculated or applied when true. */
  taxesFixed?: Maybe<Scalars['Boolean']>;
};

/** The customer's billing details. Defaults to `account.billing`. Updating billing will also update the corresponding account billing object. */
export type SwellOrderBilling = {
  __typename?: 'SwellOrderBilling';
  accountCardId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  affirm?: Maybe<SwellOrderBillingAffirm>;
  amazon?: Maybe<SwellOrderBillingAmazon>;
  apple?: Maybe<SwellOrderBillingApple>;
  bancontact?: Maybe<SwellOrderBillingBancontact>;
  /** Payment Card */
  card?: Maybe<SwellOrderBillingCard>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Default Billing */
  default?: Maybe<Scalars['Boolean']>;
  /** Billing First Name */
  firstName?: Maybe<Scalars['String']>;
  google?: Maybe<SwellOrderBillingGoogle>;
  ideal?: Maybe<SwellOrderBillingIdeal>;
  /** Payment Instructions */
  instructions?: Maybe<Scalars['String']>;
  intent?: Maybe<Scalars['JSON']>;
  klarna?: Maybe<SwellOrderBillingKlarna>;
  /** Billing Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Payment Method */
  method?: Maybe<Scalars['String']>;
  /** Billing Name */
  name?: Maybe<Scalars['String']>;
  paypal?: Maybe<SwellOrderBillingPaypal>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  resolve?: Maybe<SwellOrderBillingResolve>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingAffirm = {
  __typename?: 'SwellOrderBillingAffirm';
  checkoutToken?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingAmazon = {
  __typename?: 'SwellOrderBillingAmazon';
  accessToken?: Maybe<Scalars['String']>;
  checkoutSessionId?: Maybe<Scalars['String']>;
  orderReferenceId?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingApple = {
  __typename?: 'SwellOrderBillingApple';
  gateway?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingBancontact = {
  __typename?: 'SwellOrderBillingBancontact';
  source?: Maybe<Scalars['String']>;
};

/** Payment Card */
export type SwellOrderBillingCard = {
  __typename?: 'SwellOrderBillingCard';
  addressCheck?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  gateway?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingGoogle = {
  __typename?: 'SwellOrderBillingGoogle';
  gateway?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingIdeal = {
  __typename?: 'SwellOrderBillingIdeal';
  token?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingKlarna = {
  __typename?: 'SwellOrderBillingKlarna';
  source?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingPaypal = {
  __typename?: 'SwellOrderBillingPaypal';
  authorizationId?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  payerId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingResolve = {
  __typename?: 'SwellOrderBillingResolve';
  chargeId?: Maybe<Scalars['String']>;
};

export type SwellOrderCoupon = {
  __typename?: 'SwellOrderCoupon';
  /** A brief description of the coupon, as it may be displayed to customers. */
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** A short descriptive name of the coupon. */
  name?: Maybe<Scalars['String']>;
};

/** List of discounts applied to the order. */
export type SwellOrderDiscount = {
  __typename?: 'SwellOrderDiscount';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
  rule?: Maybe<Scalars['JSON']>;
  /** References the related discount source object (e.g., promotion or coupon) */
  sourceId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
};

/** List of gift cards applied to the order. */
export type SwellOrderGiftcard = {
  __typename?: 'SwellOrderGiftcard';
  /** Amount of gift card credit to spend for automatic payment */
  amount?: Maybe<Scalars['SafeNumber']>;
  code?: Maybe<Scalars['String']>;
  codeFormatted?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  last4?: Maybe<Scalars['String']>;
};

/** List of line items describing the products ordered. */
export type SwellOrderItem = {
  __typename?: 'SwellOrderItem';
  bundleItems?: Maybe<Array<Maybe<SwellOrderItemBundleItem>>>;
  /** Discount Amount */
  discountEach?: Maybe<Scalars['SafeNumber']>;
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['ID']>;
  metadata?: Maybe<Scalars['JSON']>;
  options?: Maybe<Array<Maybe<SwellOrderItemOption>>>;
  price?: Maybe<Scalars['SafeNumber']>;
  priceTotal?: Maybe<Scalars['SafeNumber']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  purchaseOption?: Maybe<SwellOrderItemPurchaseOption>;
  quantity?: Maybe<Scalars['Int']>;
  quantityCancelable?: Maybe<Scalars['Int']>;
  quantityCanceled?: Maybe<Scalars['Int']>;
  quantityConsumed?: Maybe<Scalars['Int']>;
  quantityCreditable?: Maybe<Scalars['Int']>;
  quantityCredited?: Maybe<Scalars['Int']>;
  quantityDeliverable?: Maybe<Scalars['Int']>;
  quantityDelivered?: Maybe<Scalars['Int']>;
  quantityGiftcardDeliverable?: Maybe<Scalars['Int']>;
  quantityInvoiceable?: Maybe<Scalars['Int']>;
  quantityInvoiced?: Maybe<Scalars['Int']>;
  quantityRestocked?: Maybe<Scalars['Int']>;
  quantityReturnable?: Maybe<Scalars['Int']>;
  quantityReturned?: Maybe<Scalars['Int']>;
  quantityShipmentDeliverable?: Maybe<Scalars['Int']>;
  quantitySubscriptionDeliverable?: Maybe<Scalars['Int']>;
  quantitySubscriptionDelivered?: Maybe<Scalars['Int']>;
  quantityTotal?: Maybe<Scalars['Int']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  /** Tax Amount */
  taxEach?: Maybe<Scalars['SafeNumber']>;
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  taxes?: Maybe<Array<Maybe<SwellOrderItemTax>>>;
  variant?: Maybe<SwellProductVariant>;
  variantId?: Maybe<Scalars['ID']>;
};

export type SwellOrderItemBundleItem = {
  __typename?: 'SwellOrderItemBundleItem';
  id?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Maybe<SwellOrderItemBundleItemOption>>>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  quantityCancelable?: Maybe<Scalars['Int']>;
  quantityCanceled?: Maybe<Scalars['Int']>;
  quantityConsumed?: Maybe<Scalars['Int']>;
  quantityDeliverable?: Maybe<Scalars['Int']>;
  quantityDelivered?: Maybe<Scalars['Int']>;
  quantityGiftcardDeliverable?: Maybe<Scalars['Int']>;
  quantityRestocked?: Maybe<Scalars['Int']>;
  quantityReturnable?: Maybe<Scalars['Int']>;
  quantityReturned?: Maybe<Scalars['Int']>;
  quantityShipmentDeliverable?: Maybe<Scalars['Int']>;
  quantityShipmentDelivered?: Maybe<Scalars['Int']>;
  quantityTotal?: Maybe<Scalars['Int']>;
  variant?: Maybe<SwellProductVariant>;
  variantId?: Maybe<Scalars['ID']>;
};

export type SwellOrderItemBundleItemOption = {
  __typename?: 'SwellOrderItemBundleItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  subscription?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellOrderItemOption = {
  __typename?: 'SwellOrderItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  subscription?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellOrderItemPurchaseOption = {
  __typename?: 'SwellOrderItemPurchaseOption';
  billingSchedule?: Maybe<SwellOrderItemPurchaseOptionBillingSchedule>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  orderSchedule?: Maybe<SwellOrderItemPurchaseOptionOrderSchedule>;
  planDescription?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['ID']>;
  planName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellOrderItemPurchaseOptionBillingSchedule = {
  __typename?: 'SwellOrderItemPurchaseOptionBillingSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  trialDays?: Maybe<Scalars['Int']>;
};

export type SwellOrderItemPurchaseOptionOrderSchedule = {
  __typename?: 'SwellOrderItemPurchaseOptionOrderSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SwellOrderItemTax = {
  __typename?: 'SwellOrderItemTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
};

export type SwellOrderPayment = {
  __typename?: 'SwellOrderPayment';
  /** Payment amount denominated in `currency`. Minimum of 0.01 */
  amount?: Maybe<Scalars['SafeNumber']>;
  /** Remaining amount that can be refunded. */
  amountRefundable?: Maybe<Scalars['SafeNumber']>;
  /** Amount of the payment that has been refunded. */
  amountRefunded?: Maybe<Scalars['SafeNumber']>;
  /** Indicates the payment was authorized before being captured. */
  authorized?: Maybe<Scalars['Boolean']>;
  /** Indicates the payment has been captured. */
  captured?: Maybe<Scalars['Boolean']>;
  /** Credit card details used to make the payment, if applicable. */
  card?: Maybe<SwellOrderPaymentCard>;
  currency?: Maybe<Scalars['String']>;
  /** Currency percentage used in calculating the fixed amount. */
  currencyRate?: Maybe<Scalars['SafeNumber']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** ID of the payment gateway that was used to process the payment. */
  gateway?: Maybe<Scalars['String']>;
  /** Method of payment. Can be `card`, `account`, `amazon`, `paypal` or any one of the manual methods defined in payment settings. */
  method?: Maybe<Scalars['String']>;
  /** Unique incremental payment number assigned automatically. */
  number?: Maybe<Scalars['String']>;
  /** Status of the payment. Can be `pending`, which is awaiting async processing, `error`, `success` or `authorized`. */
  status?: Maybe<Scalars['String']>;
  /** Indicates the payment was successful. When an error occurs with a payment gateway, this status will be `false` and `error` field will be populated. */
  success?: Maybe<Scalars['Boolean']>;
};

/** Credit card details used to make the payment, if applicable. */
export type SwellOrderPaymentCard = {
  __typename?: 'SwellOrderPaymentCard';
  addressCheck?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};

export type SwellOrderPromotion = {
  __typename?: 'SwellOrderPromotion';
  /** Date the promo ends and is no longer available. When defined, the promo will not be applied after this date. */
  dateEnd?: Maybe<Scalars['DateTime']>;
  /** Date the promo is first available. When defined, the promo will not be valid until after this date and before `date_end`. */
  dateStart?: Maybe<Scalars['DateTime']>;
  /** A brief description of the promo, as it may be displayed to customers. */
  description?: Maybe<Scalars['String']>;
  /** A short descriptive name of the promo. */
  name?: Maybe<Scalars['String']>;
};

/** Expandable list of refunds issued for the payment. */
export type SwellOrderRefund = {
  __typename?: 'SwellOrderRefund';
  amount?: Maybe<Scalars['SafeNumber']>;
  currency?: Maybe<Scalars['String']>;
  currencyRate?: Maybe<Scalars['SafeNumber']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  method?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  /** Indicates the refund was successfully processed */
  success?: Maybe<Scalars['Boolean']>;
};

export type SwellOrderShipment = {
  __typename?: 'SwellOrderShipment';
  /** Indicates the shipment was canceled. */
  canceled?: Maybe<Scalars['Boolean']>;
  /** The id of a third-party carrier offering the service, if applicable. */
  carrier?: Maybe<Scalars['String']>;
  /** Name of a third-party carrier offering the service, if applicable. */
  carrierName?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** Date the expected shipment is meant to arrive at the destination, if applicable. */
  dateEstimated?: Maybe<Scalars['DateTime']>;
  /** The customer's shipping address. */
  destination?: Maybe<SwellOrderShipmentDestination>;
  /** List of line items describing the products shipped. */
  items?: Maybe<Array<Maybe<SwellOrderShipmentItem>>>;
  /** Unique incremental shipment number, assigned automatically. */
  number?: Maybe<Scalars['String']>;
  /** The shipment origin location. */
  origin?: Maybe<SwellOrderShipmentOrigin>;
  /** The id of a shipping service as configured in shipment settings. */
  service?: Maybe<Scalars['String']>;
  /** Name of the shipping service. */
  serviceName?: Maybe<Scalars['String']>;
  /** Tracking code used to identify the shipment, if applicable. */
  trackingCode?: Maybe<Scalars['String']>;
};

/** The customer's shipping address. */
export type SwellOrderShipmentDestination = {
  __typename?: 'SwellOrderShipmentDestination';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** List of line items describing the products shipped. */
export type SwellOrderShipmentItem = {
  __typename?: 'SwellOrderShipmentItem';
  bundleItemId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Maybe<SwellOrderShipmentItemOption>>>;
  orderItemId?: Maybe<Scalars['ID']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  variantId?: Maybe<Scalars['ID']>;
};


/** List of line items describing the products shipped. */
export type SwellOrderShipmentItemProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellOrderShipmentItemOption = {
  __typename?: 'SwellOrderShipmentItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** The shipment origin location. */
export type SwellOrderShipmentOrigin = {
  __typename?: 'SwellOrderShipmentOrigin';
  location?: Maybe<Scalars['String']>;
};

/** Object describing the shipping services and rates available for the order. Shipping `country` must be set before retrieving shipping rates. */
export type SwellOrderShipmentRating = {
  __typename?: 'SwellOrderShipmentRating';
  dateCreated?: Maybe<Scalars['DateTime']>;
  errors?: Maybe<Array<Maybe<SwellOrderShipmentRatingError>>>;
  fingerprint?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<SwellOrderShipmentRatingService>>>;
};

export type SwellOrderShipmentRatingError = {
  __typename?: 'SwellOrderShipmentRatingError';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type SwellOrderShipmentRatingService = {
  __typename?: 'SwellOrderShipmentRatingService';
  carrier?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['SafeNumber']>;
  taxCode?: Maybe<Scalars['String']>;
};

/** The customer's shipping details. Defaults to `account.shipping`. Updating shipping will also update the corresponding account shipping object. */
export type SwellOrderShipping = {
  __typename?: 'SwellOrderShipping';
  accountAddressId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Default Shipping */
  default?: Maybe<Scalars['Boolean']>;
  /** Shipping First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Shipping Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Shipping Name */
  name?: Maybe<Scalars['String']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['Boolean']>;
  /** Shipping Price */
  price?: Maybe<Scalars['SafeNumber']>;
  /** Shipping Service ID */
  service?: Maybe<Scalars['String']>;
  /** Shipping Service Name */
  serviceName?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

/** List of taxes applied to the order. */
export type SwellOrderTax = {
  __typename?: 'SwellOrderTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['SafeNumber']>;
  shipping?: Maybe<Scalars['Boolean']>;
};

export type SwellOrders = {
  __typename?: 'SwellOrders';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellOrder>>>;
};

export type SwellOrdersPayments = {
  __typename?: 'SwellOrdersPayments';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellOrderPayment>>>;
};

export type SwellOrdersPromotions = {
  __typename?: 'SwellOrdersPromotions';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellOrderPromotion>>>;
};

export type SwellOrdersRefunds = {
  __typename?: 'SwellOrdersRefunds';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellOrderRefund>>>;
};

export type SwellOrdersShipments = {
  __typename?: 'SwellOrdersShipments';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellOrderShipment>>>;
};

/** Product */
export type SwellProduct = {
  __typename?: 'SwellProduct';
  /** An object containing custom attribute key/value pairs. */
  attributes?: Maybe<Scalars['JSON']>;
  /** Indicates whether the product is a bundle of other products. */
  bundle?: Maybe<Scalars['Boolean']>;
  /** List of products sold as a bundle. Applicable only when `bundle=true`. */
  bundleItems?: Maybe<Array<Maybe<SwellProductBundleItem>>>;
  categories?: Maybe<Array<Maybe<SwellCategory>>>;
  content?: Maybe<SwellProductContent>;
  /** List of products to display as cross-sells on a shopping cart page. */
  crossSells?: Maybe<Array<Maybe<SwellProductCrossSell>>>;
  currency?: Maybe<Scalars['String']>;
  /** A long-form description of the product. May contain HTML or other markup languages. */
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** List of images depicting the bundle. */
  images?: Maybe<Array<Maybe<SwellProductImage>>>;
  /** Page description used for search engine optimization purposes. */
  metaDescription?: Maybe<Scalars['String']>;
  /** Page title used to override product name in storefronts. */
  metaTitle?: Maybe<Scalars['String']>;
  /** Human-friendly name of the product. */
  name?: Maybe<Scalars['String']>;
  /** Options that allow for variations of the base product. If the option is part of a variant or `required=true`, an option value must be set for the product to be added to a cart. */
  options?: Maybe<Array<Maybe<SwellProductOption>>>;
  /** Reflects the non-sale price of the product */
  origPrice?: Maybe<Scalars['SafeNumber']>;
  /** List price used when `sale=false` or `sale_price` is not defined. This value is intended for use via the frontend. See the `purchase_options` array to manage a product's price. */
  price?: Maybe<Scalars['SafeNumber']>;
  /** Price rules determined by cart quantity or customer account group. Overrides `price` and `sale_price` when conditions match. */
  prices?: Maybe<Array<Maybe<SwellProductPrice>>>;
  /** Configuration of one or more purchase options for the product. Can be `standard` for one-time purchases or `subscription` for a subscription plan. Products can support both purchase options simultaneously. */
  purchaseOptions?: Maybe<SwellProductPurchaseOptions>;
  /** Indicates whether the product is on sale. If `true`, the `sale_price` will be used by default when the product is added to a cart. */
  sale?: Maybe<Scalars['Boolean']>;
  /** Sale price used to override list price when `sale=true`. */
  salePrice?: Maybe<Scalars['SafeNumber']>;
  /** Stock keeping unit (SKU) used to track inventory in a warehouse. */
  sku?: Maybe<Scalars['String']>;
  /** Lowercase, hyphenated identifier typically used in URLs. When creating a product, a `slug `will be generated automatically from the `name`. Maximum length of 1,000 characters. */
  slug?: Maybe<Scalars['String']>;
  /** Quantity of the product currently in stock (including all variants), based on the sum of the stock entries. */
  stockLevel?: Maybe<Scalars['Int']>;
  /** Indicates whether the product's stock is purchasable. */
  stockPurchasable?: Maybe<Scalars['Boolean']>;
  /** String indicating the product's stock status for the purpose of ordering. When `stock_purchasable=true`, an order can be placed for this product regardless of current stock status. Otherwise an order submission will be blocked unless stock status is `available`, `preorder`, or `backorder`. */
  stockStatus?: Maybe<Scalars['String']>;
  /** Indicates whether the product has stock tracking enabled. */
  stockTracking?: Maybe<Scalars['Boolean']>;
  /** Array of searchable tags to aid in search discoverability. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of products to display as up-sells on a product detail page. */
  upSells?: Maybe<Array<Maybe<SwellProductUpSell>>>;
  /** Expandable list of variants representing unique variations of the product. Each variant is a combination of one or more `options`. For example, Size and Color. */
  variants?: Maybe<SwellProductsVariants>;
};


/** Product */
export type SwellProductCategoriesArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

/** List of products sold as a bundle. Applicable only when `bundle=true`. */
export type SwellProductBundleItem = {
  __typename?: 'SwellProductBundleItem';
  id?: Maybe<Scalars['ID']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  productName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  variant?: Maybe<SwellProductVariant>;
  variantId?: Maybe<Scalars['ID']>;
};


/** List of products sold as a bundle. Applicable only when `bundle=true`. */
export type SwellProductBundleItemProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellProductContent = {
  __typename?: 'SwellProductContent';
  productType?: Maybe<Scalars['String']>;
  sampleText?: Maybe<Scalars['String']>;
};

/** List of products to display as cross-sells on a shopping cart page. */
export type SwellProductCrossSell = {
  __typename?: 'SwellProductCrossSell';
  discountAmount?: Maybe<Scalars['SafeNumber']>;
  discountPercent?: Maybe<Scalars['SafeNumber']>;
  discountType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
};


/** List of products to display as cross-sells on a shopping cart page. */
export type SwellProductCrossSellProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

/** List of images depicting the bundle. */
export type SwellProductImage = {
  __typename?: 'SwellProductImage';
  caption?: Maybe<Scalars['String']>;
  file?: Maybe<SwellProductImageFile>;
  id?: Maybe<Scalars['ID']>;
};

export type SwellProductImageFile = {
  __typename?: 'SwellProductImageFile';
  height?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** Options that allow for variations of the base product. If the option is part of a variant or `required=true`, an option value must be set for the product to be added to a cart. */
export type SwellProductOption = {
  __typename?: 'SwellProductOption';
  active?: Maybe<Scalars['Boolean']>;
  attributeId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inputHint?: Maybe<Scalars['String']>;
  inputMulti?: Maybe<Scalars['Boolean']>;
  inputType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  parentValueIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  price?: Maybe<Scalars['SafeNumber']>;
  /** Indicates the option requires a value */
  required?: Maybe<Scalars['Boolean']>;
  subscription?: Maybe<Scalars['Boolean']>;
  /** List of values for this option */
  values?: Maybe<Array<Maybe<SwellProductOptionValue>>>;
  /** Indicates the option is an aspect of variants */
  variant?: Maybe<Scalars['Boolean']>;
};

/** List of values for this option */
export type SwellProductOptionValue = {
  __typename?: 'SwellProductOptionValue';
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<SwellProductOptionValueImage>;
  images?: Maybe<Array<Maybe<SwellProductOptionValueImage>>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  /** Shipment weight added if the option value is selected */
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  subscriptionInterval?: Maybe<Scalars['String']>;
  subscriptionIntervalCount?: Maybe<Scalars['Int']>;
  subscriptionTrialDays?: Maybe<Scalars['Int']>;
};

export type SwellProductOptionValueImage = {
  __typename?: 'SwellProductOptionValueImage';
  caption?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  dateUploaded?: Maybe<Scalars['DateTime']>;
  file?: Maybe<SwellProductOptionValueImageFile>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  length?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  private?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SwellProductOptionValueImageFile = {
  __typename?: 'SwellProductOptionValueImageFile';
  contentType?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  dateUploaded?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  length?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  private?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** Price rules determined by cart quantity or customer account group. Overrides `price` and `sale_price` when conditions match. */
export type SwellProductPrice = {
  __typename?: 'SwellProductPrice';
  accountGroup?: Maybe<Scalars['String']>;
  discountPercent?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  quantityMax?: Maybe<Scalars['Int']>;
  quantityMin?: Maybe<Scalars['Int']>;
};

/** Configuration of one or more purchase options for the product. Can be `standard` for one-time purchases or `subscription` for a subscription plan. Products can support both purchase options simultaneously. */
export type SwellProductPurchaseOptions = {
  __typename?: 'SwellProductPurchaseOptions';
  standard?: Maybe<SwellProductPurchaseOptionsStandard>;
  subscription?: Maybe<SwellProductPurchaseOptionsSubscription>;
  trial?: Maybe<SwellProductPurchaseOptionsTrial>;
};

export type SwellProductPurchaseOptionsStandard = {
  __typename?: 'SwellProductPurchaseOptionsStandard';
  accountGroups?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  origPrice?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  prices?: Maybe<Array<Maybe<SwellProductPurchaseOptionsStandardPrice>>>;
  sale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['SafeNumber']>;
};

export type SwellProductPurchaseOptionsStandardPrice = {
  __typename?: 'SwellProductPurchaseOptionsStandardPrice';
  accountGroup?: Maybe<Scalars['String']>;
  discountPercent?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  quantityMax?: Maybe<Scalars['Int']>;
  quantityMin?: Maybe<Scalars['Int']>;
};

export type SwellProductPurchaseOptionsSubscription = {
  __typename?: 'SwellProductPurchaseOptionsSubscription';
  accountGroups?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  plans?: Maybe<Array<Maybe<SwellProductPurchaseOptionsSubscriptionPlan>>>;
};

export type SwellProductPurchaseOptionsSubscriptionPlan = {
  __typename?: 'SwellProductPurchaseOptionsSubscriptionPlan';
  active?: Maybe<Scalars['Boolean']>;
  billingSchedule?: Maybe<SwellProductPurchaseOptionsSubscriptionPlanBillingSchedule>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  orderSchedule?: Maybe<SwellProductPurchaseOptionsSubscriptionPlanOrderSchedule>;
  price?: Maybe<Scalars['SafeNumber']>;
};

export type SwellProductPurchaseOptionsSubscriptionPlanBillingSchedule = {
  __typename?: 'SwellProductPurchaseOptionsSubscriptionPlanBillingSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  trialDays?: Maybe<Scalars['Int']>;
};

export type SwellProductPurchaseOptionsSubscriptionPlanOrderSchedule = {
  __typename?: 'SwellProductPurchaseOptionsSubscriptionPlanOrderSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SwellProductPurchaseOptionsTrial = {
  __typename?: 'SwellProductPurchaseOptionsTrial';
  active?: Maybe<Scalars['Boolean']>;
  authAmount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['SafeNumber']>;
  prices?: Maybe<Array<Maybe<SwellProductPurchaseOptionsTrialPrice>>>;
  trialDays?: Maybe<Scalars['Int']>;
};

export type SwellProductPurchaseOptionsTrialPrice = {
  __typename?: 'SwellProductPurchaseOptionsTrialPrice';
  accountGroup?: Maybe<Scalars['String']>;
  authAmount?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  trialDays?: Maybe<Scalars['Int']>;
};

/** List of products to display as up-sells on a product detail page. */
export type SwellProductUpSell = {
  __typename?: 'SwellProductUpSell';
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
};


/** List of products to display as up-sells on a product detail page. */
export type SwellProductUpSellProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

/** Expandable list of variants representing unique variations of the product. Each variant is a combination of one or more `options`. For example, Size and Color. */
export type SwellProductVariant = {
  __typename?: 'SwellProductVariant';
  attributes?: Maybe<Scalars['JSON']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<SwellProductVariantImage>>>;
  name?: Maybe<Scalars['String']>;
  optionValueIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  origPrice?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  prices?: Maybe<Array<Maybe<SwellProductVariantPrice>>>;
  purchaseOptions?: Maybe<SwellProductVariantPurchaseOptions>;
  /** SKU */
  sku?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
};

export type SwellProductVariantImage = {
  __typename?: 'SwellProductVariantImage';
  caption?: Maybe<Scalars['String']>;
  file?: Maybe<SwellProductVariantImageFile>;
  id?: Maybe<Scalars['ID']>;
};

export type SwellProductVariantImageFile = {
  __typename?: 'SwellProductVariantImageFile';
  height?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SwellProductVariantPrice = {
  __typename?: 'SwellProductVariantPrice';
  accountGroup?: Maybe<Scalars['String']>;
  discountPercent?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  quantityMax?: Maybe<Scalars['Int']>;
  quantityMin?: Maybe<Scalars['Int']>;
};

export type SwellProductVariantPurchaseOptions = {
  __typename?: 'SwellProductVariantPurchaseOptions';
  standard?: Maybe<SwellProductVariantPurchaseOptionsStandard>;
};

export type SwellProductVariantPurchaseOptionsStandard = {
  __typename?: 'SwellProductVariantPurchaseOptionsStandard';
  origPrice?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  prices?: Maybe<Array<Maybe<SwellProductVariantPurchaseOptionsStandardPrice>>>;
  sale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['SafeNumber']>;
};

export type SwellProductVariantPurchaseOptionsStandardPrice = {
  __typename?: 'SwellProductVariantPurchaseOptionsStandardPrice';
  accountGroup?: Maybe<Scalars['String']>;
  discountPercent?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  quantityMax?: Maybe<Scalars['Int']>;
  quantityMin?: Maybe<Scalars['Int']>;
};

export type SwellProducts = {
  __typename?: 'SwellProducts';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellProduct>>>;
};

export type SwellProductsVariants = {
  __typename?: 'SwellProductsVariants';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellProductVariant>>>;
};

export type SwellSettings = {
  __typename?: 'SwellSettings';
  store?: Maybe<SwellSettingsStore>;
  values?: Maybe<Scalars['JSON']>;
};

export type SwellSettingsMenus = {
  __typename?: 'SwellSettingsMenus';
  sections?: Maybe<Array<Maybe<SwellSettingsMenusSection>>>;
};

export type SwellSettingsMenusSection = {
  __typename?: 'SwellSettingsMenusSection';
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  name?: Maybe<Scalars['String']>;
  themeId?: Maybe<Scalars['String']>;
  themeMenuId?: Maybe<Scalars['String']>;
};

export type SwellSettingsPayments = {
  __typename?: 'SwellSettingsPayments';
  methods?: Maybe<Scalars['JSON']>;
};

export type SwellSettingsStore = {
  __typename?: 'SwellSettingsStore';
  analyticsScripts?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currencies?: Maybe<Array<Maybe<SwellSettingsStoreCurrency>>>;
  currency?: Maybe<Scalars['String']>;
  facebookPixelId?: Maybe<Scalars['String']>;
  homePage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<SwellSettingsStoreLocale>>>;
  name?: Maybe<Scalars['String']>;
  publicKey?: Maybe<Scalars['String']>;
  supportEmail?: Maybe<Scalars['String']>;
  supportPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SwellSettingsStoreCurrency = {
  __typename?: 'SwellSettingsStoreCurrency';
  code?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  priced?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['SafeNumber']>;
  symbol?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellSettingsStoreLocale = {
  __typename?: 'SwellSettingsStoreLocale';
  code?: Maybe<Scalars['String']>;
  fallback?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SwellSettingsSubscriptions = {
  __typename?: 'SwellSettingsSubscriptions';
  features?: Maybe<Scalars['JSON']>;
  pauseNextSkipThreshold?: Maybe<Scalars['Int']>;
};

/** Subscription */
export type SwellSubscription = {
  __typename?: 'SwellSubscription';
  /** ID of the subscribed customer's account. */
  accountId?: Maybe<Scalars['ID']>;
  /** Indicates the subscription is currently active. */
  active?: Maybe<Scalars['Boolean']>;
  /** Subscription billing details. */
  billing?: Maybe<SwellSubscriptionBilling>;
  /** Billing schedule for subscription plan. */
  billingSchedule?: Maybe<SwellSubscriptionBillingSchedule>;
  /** When `true`, indicates the subscription was or will be canceled at the end of the billing period. */
  cancelAtEnd?: Maybe<Scalars['Boolean']>;
  /** Indicates the subscription was canceled. */
  canceled?: Maybe<Scalars['Boolean']>;
  /** Coupon code applied to the subscription. See coupons for details. */
  couponCode?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  /** Currency rate used in calculating the fixed amount. */
  currencyRate?: Maybe<Scalars['SafeNumber']>;
  /** Date the subscription was canceled, if applicable. */
  dateCanceled?: Maybe<Scalars['DateTime']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** End date for the subscription order period. */
  dateOrderPeriodEnd?: Maybe<Scalars['DateTime']>;
  /** Date the subscription was unpaused, if applicable. */
  datePauseEnd?: Maybe<Scalars['DateTime']>;
  /** Date the subscription was paused, if applicable. */
  datePaused?: Maybe<Scalars['DateTime']>;
  /** When automated payment has failed, this is the date when the system will automatically retry. */
  datePaymentRetry?: Maybe<Scalars['DateTime']>;
  /** End date of the current billing period. */
  datePeriodEnd?: Maybe<Scalars['DateTime']>;
  /** Start date of the current billing period. */
  datePeriodStart?: Maybe<Scalars['DateTime']>;
  /** Date the trial period did end in the past or will end in the future. Changing this value can be used to update the billing period of a subscription with or without a trial. For example, to set the monthly billing date to the 1st of the month, update `date_trial_end `to the first of the next month. */
  dateTrialEnd?: Maybe<Scalars['DateTime']>;
  /** Date the trial period started, if applicable. */
  dateTrialStart?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Total discount amount. */
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  /** Grand total of the next invoice including line items and taxes. */
  grandTotal?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['ID']>;
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  /** Amount invoiced for the last billing period. */
  invoiceTotal?: Maybe<Scalars['SafeNumber']>;
  /** Total discount applied to line items. */
  itemDiscount?: Maybe<Scalars['SafeNumber']>;
  /** Total taxes applied to line items. */
  itemTax?: Maybe<Scalars['SafeNumber']>;
  /** Amount invoiced for the last billing period. */
  itemTotal?: Maybe<Scalars['SafeNumber']>;
  /** List of invoice line items added to the subscription. Recurring items are charged repeatedly, otherwise they are charged on the next invoice and then removed from the subscription. */
  items?: Maybe<Array<Maybe<SwellSubscriptionItem>>>;
  /** Plan options matching one or more of `product.options`. When setting this value, specify either option `id` or `name` (case-insensitive) to identify the option. */
  options?: Maybe<Array<Maybe<SwellSubscriptionOption>>>;
  /** ID of the order that originated the subscription, if applicable. */
  orderId?: Maybe<Scalars['ID']>;
  /** Order schedule for the subscription plan. */
  orderSchedule?: Maybe<SwellSubscriptionOrderSchedule>;
  orders?: Maybe<SwellOrders>;
  /** Indicates the last invoice was fully paid. */
  paid?: Maybe<Scalars['Boolean']>;
  /** Indicates whether or not a subscription is paused. */
  paused?: Maybe<Scalars['Boolean']>;
  /** Balance of payments on the invoice for the last billing period. A negative number indicates payment is owed, while a positive balance indicates refund is due. Zero balance indicates the invoice was fully paid. */
  paymentBalance?: Maybe<Scalars['SafeNumber']>;
  /** Total amount of payments for the last billing period. */
  paymentTotal?: Maybe<Scalars['SafeNumber']>;
  /** ID of the subscription plan. */
  planId?: Maybe<Scalars['ID']>;
  /** Name of the subscription plan. */
  planName?: Maybe<Scalars['String']>;
  /** Price of the plan. Plan price can be overridden when creating or updating a subscription. */
  price?: Maybe<Scalars['SafeNumber']>;
  /** Total price of the plan (`price * quantity`). */
  priceTotal?: Maybe<Scalars['SafeNumber']>;
  product?: Maybe<SwellProduct>;
  /** Total discount amount of the subscription plan, divided by quantity. */
  productDiscountEach?: Maybe<Scalars['SafeNumber']>;
  /** Total discount applied to the subscription plan. */
  productDiscountTotal?: Maybe<Scalars['SafeNumber']>;
  /** ID of the subscription plan product. */
  productId?: Maybe<Scalars['ID']>;
  /** Total tax amount of the subscription plan, divided by quantity. */
  productTaxEach?: Maybe<Scalars['SafeNumber']>;
  /** Total tax applied to the subscription plan. */
  productTaxTotal?: Maybe<Scalars['SafeNumber']>;
  /** Quantity of the plan to charge. */
  quantity?: Maybe<Scalars['Int']>;
  /** Total recurring discount applied to the subscription including line items. */
  recurringDiscountTotal?: Maybe<Scalars['SafeNumber']>;
  /** Total discount applied to recurring line items. */
  recurringItemDiscount?: Maybe<Scalars['SafeNumber']>;
  /** Total taxes applied to recurring line items. */
  recurringItemTax?: Maybe<Scalars['SafeNumber']>;
  /** Sum of all recurring line items before discounts and taxes. */
  recurringItemTotal?: Maybe<Scalars['SafeNumber']>;
  /** Total of taxes applied separately from the subscription plan and recurring line items. */
  recurringTaxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
  /** Total taxes applied to the subscription including recurring line items. */
  recurringTaxTotal?: Maybe<Scalars['SafeNumber']>;
  /** Recurring total of the subscription including line items and taxes. */
  recurringTotal?: Maybe<Scalars['SafeNumber']>;
  /** Subscription shipping details. */
  shipping?: Maybe<SwellSubscriptionShipping>;
  /** Current status of the subscription. Can be `pending`, `active`, `trial`, `pastdue`, `unpaid`, `canceled`, or `paid`. */
  status?: Maybe<Scalars['String']>;
  /** Sum of all line items before discounts and taxes. */
  subTotal?: Maybe<Scalars['SafeNumber']>;
  /** Total of taxes applied separately from the subscription plan and line items. */
  taxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
  /** Total taxes applied to the subscription including line items. */
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  /** List of taxes applied to the subscription. */
  taxes?: Maybe<Array<Maybe<SwellSubscriptionTax>>>;
  /** When true, taxes are not applied to the subscription. When false, taxes are calculated and applied to the subscription. */
  taxesFixed?: Maybe<Scalars['Boolean']>;
  /** Indicates the subscription is in a trial period and the first invoice will be issued on `date_trial_end`. */
  trial?: Maybe<Scalars['Boolean']>;
  trialDays?: Maybe<Scalars['Int']>;
  /** Indicates the last invoice was marked as unpaid. This occurs automatically after all payment attempts are exhausted, as configured in subscription settings. */
  unpaid?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<SwellProductVariant>;
  /** ID of the subscription plan variant, if applicable. */
  variantId?: Maybe<Scalars['ID']>;
};


/** Subscription */
export type SwellSubscriptionOrdersArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};

/** Subscription billing details. */
export type SwellSubscriptionBilling = {
  __typename?: 'SwellSubscriptionBilling';
  accountCardId?: Maybe<Scalars['ID']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  card?: Maybe<SwellSubscriptionBillingCard>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  intent?: Maybe<Scalars['JSON']>;
  lastName?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  useAccount?: Maybe<Scalars['Boolean']>;
  zip?: Maybe<Scalars['String']>;
};

export type SwellSubscriptionBillingCard = {
  __typename?: 'SwellSubscriptionBillingCard';
  addressCheck?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  gateway?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};

export type SwellSubscriptionBillingCardInput = {
  addressCheck?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  cvcCheck?: InputMaybe<Scalars['String']>;
  expMonth?: InputMaybe<Scalars['Int']>;
  expYear?: InputMaybe<Scalars['Int']>;
  gateway?: InputMaybe<Scalars['String']>;
  last4?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  zipCheck?: InputMaybe<Scalars['String']>;
};

export type SwellSubscriptionBillingInput = {
  accountCardId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  card?: InputMaybe<SwellSubscriptionBillingCardInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  intent?: InputMaybe<Scalars['JSON']>;
  lastName?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  useAccount?: InputMaybe<Scalars['Boolean']>;
  zip?: InputMaybe<Scalars['String']>;
};

/** Billing schedule for subscription plan. */
export type SwellSubscriptionBillingSchedule = {
  __typename?: 'SwellSubscriptionBillingSchedule';
  dateLimitEnd?: Maybe<Scalars['DateTime']>;
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  limitCurrent?: Maybe<Scalars['Int']>;
  trialDays?: Maybe<Scalars['Int']>;
};

export type SwellSubscriptionBillingScheduleInput = {
  dateLimitEnd?: InputMaybe<Scalars['DateTime']>;
  interval?: InputMaybe<Scalars['String']>;
  intervalCount?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  limitCurrent?: InputMaybe<Scalars['Int']>;
  trialDays?: InputMaybe<Scalars['Int']>;
};

export type SwellSubscriptionInput = {
  billing?: InputMaybe<SwellSubscriptionBillingInput>;
  billingSchedule?: InputMaybe<SwellSubscriptionBillingScheduleInput>;
  cancelAtEnd?: InputMaybe<Scalars['Boolean']>;
  canceled?: InputMaybe<Scalars['Boolean']>;
  couponCode?: InputMaybe<Scalars['String']>;
  datePauseEnd?: InputMaybe<Scalars['DateTime']>;
  items?: InputMaybe<Array<InputMaybe<SwellSubscriptionItemInput>>>;
  options?: InputMaybe<Array<InputMaybe<SwellSubscriptionOptionInput>>>;
  paused?: InputMaybe<Scalars['Boolean']>;
  planId?: InputMaybe<Scalars['ID']>;
  productId?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Int']>;
  shipping?: InputMaybe<SwellSubscriptionShippingInput>;
  variantId?: InputMaybe<Scalars['ID']>;
};

/** List of invoice line items added to the subscription. Recurring items are charged repeatedly, otherwise they are charged on the next invoice and then removed from the subscription. */
export type SwellSubscriptionItem = {
  __typename?: 'SwellSubscriptionItem';
  bundleItems?: Maybe<Array<Maybe<SwellSubscriptionItemBundleItem>>>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  delivery?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discountEach?: Maybe<Scalars['SafeNumber']>;
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  discounts?: Maybe<Array<Maybe<SwellSubscriptionItemDiscount>>>;
  id?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Maybe<SwellSubscriptionItemOption>>>;
  price?: Maybe<Scalars['SafeNumber']>;
  priceTotal?: Maybe<Scalars['SafeNumber']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  proration?: Maybe<Scalars['Boolean']>;
  prorationProductId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  recurring?: Maybe<Scalars['Boolean']>;
  recurringDiscountEach?: Maybe<Scalars['SafeNumber']>;
  recurringDiscountTotal?: Maybe<Scalars['SafeNumber']>;
  recurringPrice?: Maybe<Scalars['SafeNumber']>;
  recurringPriceTotal?: Maybe<Scalars['SafeNumber']>;
  recurringTaxEach?: Maybe<Scalars['SafeNumber']>;
  recurringTaxTotal?: Maybe<Scalars['SafeNumber']>;
  taxEach?: Maybe<Scalars['SafeNumber']>;
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  taxes?: Maybe<Array<Maybe<SwellSubscriptionItemTax>>>;
  variantId?: Maybe<Scalars['ID']>;
};


/** List of invoice line items added to the subscription. Recurring items are charged repeatedly, otherwise they are charged on the next invoice and then removed from the subscription. */
export type SwellSubscriptionItemProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellSubscriptionItemBundleItem = {
  __typename?: 'SwellSubscriptionItemBundleItem';
  amountRatio?: Maybe<Scalars['SafeNumber']>;
  discountEach?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['SafeNumber']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  quantityTotal?: Maybe<Scalars['Int']>;
  taxEach?: Maybe<Scalars['SafeNumber']>;
  variantId?: Maybe<Scalars['ID']>;
};


export type SwellSubscriptionItemBundleItemProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellSubscriptionItemDiscount = {
  __typename?: 'SwellSubscriptionItemDiscount';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
};

export type SwellSubscriptionItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  options?: InputMaybe<Array<InputMaybe<SwellSubscriptionItemOptionInput>>>;
  productId?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['ID']>;
};

export type SwellSubscriptionItemOption = {
  __typename?: 'SwellSubscriptionItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellSubscriptionItemOptionInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  shipmentWeight?: InputMaybe<Scalars['SafeNumber']>;
  value?: InputMaybe<Scalars['String']>;
  valueId?: InputMaybe<Scalars['ID']>;
  variant?: InputMaybe<Scalars['Boolean']>;
};

export type SwellSubscriptionItemTax = {
  __typename?: 'SwellSubscriptionItemTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
};

/** Plan options matching one or more of `product.options`. When setting this value, specify either option `id` or `name` (case-insensitive) to identify the option. */
export type SwellSubscriptionOption = {
  __typename?: 'SwellSubscriptionOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellSubscriptionOptionInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  shipmentWeight?: InputMaybe<Scalars['SafeNumber']>;
  value?: InputMaybe<Scalars['String']>;
  valueId?: InputMaybe<Scalars['ID']>;
  variant?: InputMaybe<Scalars['Boolean']>;
};

/** Order schedule for the subscription plan. */
export type SwellSubscriptionOrderSchedule = {
  __typename?: 'SwellSubscriptionOrderSchedule';
  dateLimitEnd?: Maybe<Scalars['DateTime']>;
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  limitCurrent?: Maybe<Scalars['Int']>;
};

/** Subscription shipping details. */
export type SwellSubscriptionShipping = {
  __typename?: 'SwellSubscriptionShipping';
  accountAddressId?: Maybe<Scalars['ID']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['SafeNumber']>;
  service?: Maybe<Scalars['String']>;
  serviceName?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  useAccount?: Maybe<Scalars['Boolean']>;
  zip?: Maybe<Scalars['String']>;
};

export type SwellSubscriptionShippingInput = {
  accountAddressId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  pickup?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  service?: InputMaybe<Scalars['String']>;
  serviceName?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  useAccount?: InputMaybe<Scalars['Boolean']>;
  zip?: InputMaybe<Scalars['String']>;
};

/** List of taxes applied to the subscription. */
export type SwellSubscriptionTax = {
  __typename?: 'SwellSubscriptionTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['SafeNumber']>;
};

export type SwellSubscriptions = {
  __typename?: 'SwellSubscriptions';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellSubscription>>>;
};
