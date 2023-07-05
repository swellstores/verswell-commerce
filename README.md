[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/swellstores/verswell-commerce&project-name=commerce&repo-name=commerce&demo-title=Next.js%20Commerce&demo-url=https%3A%2F%2Fdemo.vercel.store&demo-image=https%3A%2F%2Fbigcommerce-demo-asset-ksvtgfvnd.vercel.app%2Fbigcommerce.png&env=SWELL_STOREFRONT_PUBLIC_KEY,SWELL_STORE_ID,SWELL_REVALIDATION_SECRET,SITE_NAME,TWITTER_CREATOR,TWITTER_SITE)

# Next.js Swell Commerce

## 🔴 The repository is currently a **Work in Progress** 🔴

> The Swell Team is currently working on supporting the Vercel Commerce v2. Updates will be made to this repository. If you'd like to visit the Next.js Commerce v1 Repo with Swell Backend Support, you can do so [here](https://github.com/swellstores/nextjs-commerce).

A Next.js 13 and App Router-ready ecommerce template featuring:

- Next.js App Router
- Optimized for SEO using Next.js's Metadata
- React Server Components (RSCs) and Suspense
- Server Actions for mutations
- Edge Runtime
- New fetching and caching paradigms
- Dynamic OG images
- Styling with Tailwind CSS
- Checkout and payments with Swell
- Automatic light/dark mode based on system settings

> Note: Looking for Next.js Commerce v1? View the [code](https://github.com/vercel/commerce/tree/v1), [demo](https://commerce-v1.vercel.store), and [release notes](https://github.com/vercel/commerce/releases/tag/v1)


## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js Commerce. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control your Swell store.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

<details>
  <summary>Expand if you work at Vercel and want to run locally and / or contribute</summary>

1. Run `vc link`.
1. Select the `Vercel Solutions` scope.
1. Connect to the existing `commerce-swell` project.
1. Run `vc env pull` to get environment variables.
1. Run `pmpm dev` to ensure everything is working correctly.
</details>

### Add Swell domain to an environment variable

Create a `SWELL_STORE_ID` environment variable and use your Swell store ID as the the value.

### Accessing the Swell Frontend API

Next.js Commerce utilizes [Swell's Frontend API](https://developers.swell.is/frontend-api/introduction) to create unique customer experiences. The API offers a full range of commerce options making it possible for customers to control products, collections, menus, pages, cart, checkout, and more.

In order to use the Swell's Frontend API, you need to obtain a public key in your Swell Store.

Once created, you'll need to create a `SWELL_STOREFRONT_PUBLIC_KEY` environment variable and use the public access token as the value

<details>
  <summary>Expand to view detailed walkthrough</summary>

1. Navigate to `https://SWELL_STORE_ID.swell.store/admin/settings/api`.
1. Click the `Add public key` button.
   ![Swell add public key](https://github.com/swellstores/verswell-commerce/assets/9212793/aaf595b5-bb94-490c-8d85-8edfc68f9d69)
1. Add a decription to your public key and press the `Create Key` button
![swell-internal-next-marketplace swell store_admin_settings_api (1)](https://github.com/swellstores/verswell-commerce/assets/9212793/4b825477-c8e3-410e-abab-f4650b70b5cb)
1. Copy the public key and assign it to the `SWELL_STOREFRONT_PUBLIC_KEY` environment variable
</details>


### Configure webhooks for on-demand incremental static regeneration (ISR)

Utilizing [Swell's webhooks](https://developers.swell.is/backend-api/webhooks/the-webhook-model), and listening for select [Swell webhook event topics](https://developers.swell.is/backend-api/events/event-types), we can use [Next'js on-demand revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#using-on-demand-revalidation) to keep data fetches indefinitely cached until certain events in the Swell store occur.

Next.js is pre-configured to listen for the following Swell webhook events and automatically revalidate fetches.
- `category.created`
- `category.deleted`
- `category.updated`
- `product.created`
- `product.deleted`
- `product.updated`
 (this also includes when variants are added, updated, and removed as well as when products are purchased so inventory and out of stocks can be updated)

<details>
  <summary>Expand to view detailed walkthrough</summary>

#### Setup secret for secure revalidation

1. Create your own secret or [generate a random UUID](https://www.uuidgenerator.net/guid).
1. Create a [Vercel Environment Variable](https://vercel.com/docs/concepts/projects/environment-variables) named `SWELL_REVALIDATION_SECRET` and use the value from above.

#### Configure Swell webhooks


1. Navigate to `https://SWELL_STORE_ID.swell.store/admin/settings/webhooks`.
1. Add webhooks for all six event topics listed above. You can add more sets for other preview urls, environments, or local development. Append `?secret=[SECRET]` to each url, where `[SECRET]` is the secret you created above.
   ![Swell store webhooks](https://github.com/swellstores/verswell-commerce/assets/9212793/dca90e1c-1802-4d96-925e-582b427e2d5d)
   ![Swell store add webhook](https://github.com/swellstores/verswell-commerce/assets/9212793/25178bf9-ad68-447e-9f3f-eb613005653e)
   ![swell-internal-next-marketplace swell store_admin_settings_api (7)](https://github.com/swellstores/verswell-commerce/assets/9212793/a8565675-3cff-4b61-9881-f243ec5e5746)


#### Testing webhooks during local development

The easiest way to test webhooks while developing locally is to use [ngrok](https://ngrok.com).

1. [Install and configure ngrok](https://ngrok.com/download) (you will need to create an account).
1. Run your app locally, `npm run dev`.
1. In a separate terminal session, run `ngrok http 3000`.
1. Use the url generated by ngrok and add or update your webhook urls in Swell.
1. You can now make changes to your store and your local app should receive updates. You can also use the `Send test notification` button to trigger a generic webhook test.

</details>
