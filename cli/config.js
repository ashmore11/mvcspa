module.exports = {
  files: [
    {path: `${process.env.PWD}/src/scripts/views`, ext: 'js'},
    {path: `${process.env.PWD}/src/templates/views`, ext: 'jade'},
    {path: `${process.env.PWD}/src/styles/views`, ext: 'styl'}
  ],
  messages: {
    view: {
      created: 'Remember to create a route for this view in the router and import the view into your controller!',
      deleted: 'Remember to delete the route for this view from your router and remove it from your controller!',
      fileNotFound: 'View doesn\'t exist! Check the name of the view your trying to delete and try again...'
    },
  }
};