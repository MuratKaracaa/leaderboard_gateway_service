import { ReplaceInFileConfig, replaceInFileSync } from 'replace-in-file';

const filePath = process.argv[2];

const promiseToObservable: ReplaceInFileConfig = {
  files: filePath,
  from: /Promise/g,
  to: 'Observable',
};

const insertObservableImport: ReplaceInFileConfig = {
  files: filePath,
  from: /\"protobufjs\/minimal\";/g,
  to: `\"protobufjs\/minimal\";\nimport { Observable } from "rxjs";`,
};

replaceInFileSync(promiseToObservable);

replaceInFileSync(insertObservableImport);
