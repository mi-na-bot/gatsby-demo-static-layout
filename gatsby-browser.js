let React = require("react")
let Layout = require('./src/components/layout').default;
exports.wrapPageElement = (({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
});
