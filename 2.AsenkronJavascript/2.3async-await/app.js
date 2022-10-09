function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("Veriler Alınmaya Çalısıyor..");
    data ? resolve("Veriler Alındı.") : reject("Veriler Alınamadı.");
  });
}

function cleanData(receivedData) {
  return new Promise((resolve, reject) => {
    console.log("Veriler Düzenleniyor..");
    receivedData ? resolve("Veriler Düzenlendi.") : reject("Veriler Düzenlenemedi.");
  });
}

// getData(true)
//   .then((result) => {
//     console.log(result);
//     return cleanData(true);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/*yukarıdaki .then().cath() yapısını simdi aşağıda async-await ile yapalım*/

async function processData() {
  try {
    const reviciedData = await getData(true);
    console.log(reviciedData);
    const cleanedData = await cleanData(true);
    console.log(cleanedData);
  } catch (err) {
    console.log(err)
  }
}
processData();
