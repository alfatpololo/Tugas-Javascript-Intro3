// const cekAbsen = (murid) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataMurid = ["Alfath", "Iqbal", "Ichsan", "Ainur", "Rhefa"];
//       let cek = dataMurid.find((item) => {
//         return item === murid;
//       });
//       if (cek) {
//         resolve("Ini murid kak Alam");
//       } else {
//         reject(new Error("Ini bukan murid kak Alam"));
//       }
//     }, 3000);
//   });
// };

// cekAbsen("Alfath")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

const mejikuHibiniu = (warna) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataWarna = ["Merah", "Jingga", "Kuning", "Hijau", "Biru", "Nila", "Ungu"];
      let cek = dataWarna.find((item) => {
        return item === warna;
      });
      if (cek) {
        resolve("Ini termasuk Mejikuhibiniu");
      } else {
        reject(new Error("Ini bukan Mejikuhibiniu"));
      }
    }, 3000);
  });
};

async function handling(warna) {
  try {
    const response = await mejikuHibiniu(warna);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

handling("Merah");
