const CracoLessPlugin = require("craco-less");

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: { "@primary-color": "#1890ff" },
						javascriptEnabled: true,
					},
				},
			},
		},
	],
	webpack: {
		devtool: "source-map",
		plugins: [],
	},
};
