const cryptoPath = "/crypto";

export default [
    //{
    //    path: "/crypto-home",
    //    name: "Crypto_Home",
    //    component: () => import("@/views/CryptoCurrencyView.vue"),
    //},
	{
		path: `${cryptoPath}/hash`,
		name: "Crypto-Hash",
		component: () => import("@/views/crypto-currency/HashPage.vue")
	},
	{
		path: `${cryptoPath}/block`,
		name: 'Crypto-Block',
		component: () => import("@/views/crypto-currency/BlockPage.vue")
	}
];
