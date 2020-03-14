const FileError = {
  QUOTA_EXCEEDED_ERR: 'QUOTA_EXCEEDED_ERR',
  NOT_FOUND_ERR: 'NOT_FOUND_ERR',
  SECURITY_ERR: 'SECURITY_ERR',
  INVALID_MODIFICATION_ERR: 'INVALID_MODIFICATION_ERR',
  INVALID_STATE_ERR: 'INVALID_STATE_ERR'
};

function errorHandler(e) {
    console.log('error...',e)
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  }

  console.log('Error: ' + msg);
}

function SaveDatFileBro(localstorage) {

    localstorage.root.getDirectory("demo", {create: true}, function(
        dir
    ) {
        console.log('Directory: ' + dir.fullPath);
    });

    localstorage.root.getFile("info.txt", {create: true}, function(DatFile) {
        DatFile.createWriter(function(DatContent) {
          var blob = new Blob(["Lorem Ipsum"], {type: "text/plain"});
          DatContent.write(blob);
        });
      });

}

export default function requestLocalFileSystem() {
  window.webkitStorageInfo.requestQuota(
    window.PERSISTENT,
    1024 * 1024,
    function(grantedBytes) {
      console.log(grantedBytes);
      window.webkitRequestFileSystem(window.PERSISTENT, 1024 , SaveDatFileBro);
    },
    function(e) {
      console.log('Error', e);
    }
  );
}
