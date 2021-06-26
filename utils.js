//   check if first index (sub_category) is present which is sub_category ->  put the record in the array of that sub_category
//   filtering categories
//   first index
//   let categories = new Set();

//   data.forEach((row) => {
//     console.log(`1st column ${row[0]}`);
//     categories.add(row[0]);
//   });
//   console.log("Categories are", categories);

data.forEach((row) => {
  console.log(`Row is ${row}`);
});

// thenable
// readXlsxFile("excel_to_import.xlsx").then((rows) => {
//   // `rows` is an array of rows
//   // each row being an array of cells.

//   console.log(`Current Row ${count}`);
//   console.log(rows);
//   data = rows;
// });

//   let sub_cat = new Set();
//   data.forEach((row) => {
//     // console.log(`Sub_Category ${row[0]}`);
//     sub_cat.add(row[0]);
//   });

//   console.log("Sub_cat are", sub_cat);

// //   let vals = sub_cat.values();
// //   console.log(vals);

//   let sub_cat_arr = [];
//   sub_cat.forEach((val) => {
//     if (val !== "Sub Category") {
//       sub_cat_arr.push(val);
//     }
//   });
//   console.log("Unique sub_cat's are", sub_cat_arr);

//   data.forEach((row) => {
//     if (row[0] === "Dentist") {
//       let obj = {
//         service: row[1],
//         basis: row[2],
//         duration: row[3],
//         min_max: row[4],
//         type: row[5],
//       };
//       dentistServices.push(obj);
//     }
//   });

//   console.log("Dentist services are", dentistServices);

//   unique_sub_cat.forEach((sub_cat) => {
//     if (sub_cat === "Dentist") {
//       names[sub_cat] = [];
//       data.forEach((row) => {
//         if (row[0] === sub_cat) {
//           let obj = {
//             service: row[1],
//             basis: row[2],
//             duration: row[3],
//             min_max: row[4],
//             type: row[5],
//           };
//           names[sub_cat].push(obj);
//           dentistServices.push(obj);
//         }
//       });
//     }

//     if (sub_cat === "Therapist") {
//       names[sub_cat] = [];
//       data.forEach((row) => {
//         if (row[0] === sub_cat) {
//           let obj = {
//             service: row[1],
//             basis: row[2],
//             duration: row[3],
//             min_max: row[4],
//             type: row[5],
//           };
//           names[sub_cat].push(obj);
//           therapistServices.push(obj);
//         }
//       });
//     }

//     if (sub_cat === "Nurse") {
//       names[sub_cat] = [];
//       data.forEach((row) => {
//         if (row[0] === sub_cat) {
//           let obj = {
//             service: row[1],
//             basis: row[2],
//             duration: row[3],
//             min_max: row[4],
//             type: row[5],
//           };
//           names[sub_cat].push(obj);
//           nurseServices.push(obj);
//         }
//       });
//     }
//   });

//   console.log("dentist services", dentistServices);
//   console.log("therapist services", therapistServices);
//   console.log("nurse services", nurseServices);
//   console.log("dentist services ->", names.Dentist);
