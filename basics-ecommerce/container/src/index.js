import('./bootstrap'); // when we use import as a function() we load it asynchronously.
// import './bootstrap'; // this import works synchronously.

// We import bootstrap asyc to let Webpack wait until it has access to files imported in bootstrap file.
