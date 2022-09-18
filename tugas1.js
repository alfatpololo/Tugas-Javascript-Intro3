const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve("Hari ini hari kerja");
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

cekHariKerja("senin")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err.message);
  });

async function handling(day) {
  try {
    const response = await cekHariKerja(day);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

handling("raya");
