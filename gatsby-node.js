exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-slideshow-image/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}