

module.exports = async function (context, req) {

   context.log('One.');
   const credential = new DefaultAzureCredential();

   const url = `https://FluidClient.vault.azure.net`;

   const client = new SecretClient(url, credential);

   const secretName = "FluidSecret";

   context.log('Two.');
   const latestSecret = await client.getSecret(secretName);

   context.log('Three.');

   context.res = {
        // status: 200, /* Defaults to 200 */
       body: latestSecret
    };
}