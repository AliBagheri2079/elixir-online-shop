import swellJS from 'swell-js';

const storeId = process.env.NEXT_PUBLIC_SWELL_STORE_ID!;
const publicKey = process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY!;
const options = {
  useCamelCase: true,
} as swellJS.InitOptions;

swellJS.init(storeId, publicKey, options);

export { swellJS };
