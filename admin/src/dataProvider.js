import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
// import axios from "axios";

const { REACT_APP_URL, REACT_APP_PORT } = process.env;

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  return fetchUtils.fetchJson(url, options);
};

// const saveFileInStorage = (rawFile) => {
//   const formData = new FormData();
//   formData.append("image", rawFile);

//   return new Promise((resolve, reject) => {
//     axios({
//       method: "POST",
//       url: "/api/images",
//       baseURL: `${REACT_APP_URL}:${REACT_APP_PORT}`,
//       data: formData,
//     })
//       .then((res) => resolve(res))
//       .catch((err) => reject(err));
//   });
// };

const addUploadFeature = (dataProvider) => ({
  ...dataProvider,

  // create: (resource, params) => {
  //   if (resource === "blog" || resource === "otzyvy") {
  //     if (Boolean(params.data.pictures)) {
  //       const { rawFile, ...restImageData } = params.data.pictures;
  //       if (Boolean(rawFile)) {
  //         return Promise.resolve(saveFileInStorage(rawFile))
  //           .then((res) => res.data)
  //           .then((imageData) => {
  //             return dataProvider.create(resource, {
  //               ...params,
  //               data: {
  //                 ...params.data,
  //                 pictures: {
  //                   ...restImageData,
  //                   ...imageData,
  //                   src: imageData.url,
  //                 },
  //               },
  //             });
  //           });
  //       }
  //       return dataProvider.create(resource, params);
  //     }
  //     return dataProvider.create(resource, params);
  //   }
  //   return dataProvider.create(resource, params);
  // },
  // update: (resource, params) => {
  //   if (resource === "blog" || resource === "otzyvy") {
  //     if (Boolean(params.data.pictures)) {
  //       const { rawFile, ...restImageData } = params.data.pictures;
  //       if (Boolean(rawFile)) {
  //         return Promise.resolve(saveFileInStorage(rawFile))
  //           .then((res) => res.data)
  //           .then((imageData) => {
  //             return dataProvider.update(resource, {
  //               ...params,
  //               data: {
  //                 ...params.data,
  //                 pictures: {
  //                   ...restImageData,
  //                   ...imageData,
  //                   src: imageData.url,
  //                 },
  //               },
  //             });
  //           });
  //       }
  //       return dataProvider.update(resource, params);
  //     }
  //     return dataProvider.update(resource, params);
  //   }
  //   return dataProvider.update(resource, params);
  // },
});

const dataProvider = simpleRestProvider(
  `http://localhost:3000/api`,
  httpClient
);

const myDataProvider = addUploadFeature(dataProvider);

export default myDataProvider;