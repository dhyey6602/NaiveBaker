import React from 'react';
import Upload from "../Components/Upload_Recipe/upload"
import {withRouter} from 'react-router-dom';

function UploadRecipe() {
  return (
    <>
      {console.log("up")}
      <Upload />
    </>
  )
}

export default withRouter(UploadRecipe);

