Package.describe({
  name: 'classcraft:archiver',
  version: '1.0.0',
  summary: 'Wrapper for the npm package : archiver',
  git: 'https://github.com/classcraft/meteor-archiver.git',
});

Npm.depends( {
  "archiver": "0.14.3"
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('classcraft:archiver.js', "server");
  if(api.export) api.export('archiver');
});