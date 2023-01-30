
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

module.exports = async function (context, req) {

   const credential = new DefaultAzureCredential();

   const url = `https://FluidClient.vault.azure.net`;

   const client = new SecretClient(url, credential);

   const secretName = "FluidSecret";

   const latestSecret = await client.getSecret(secretName);

    context.res = {
        // status: 200, /* Defaults to 200 */
       body: latestSecret
    };
}