const readXlsxFile = require("read-excel-file/node");

// async await

const getUniqueSubCat = (data) => {
  let sub_cat = new Set();

  data.forEach((row) => {
    // console.log(`Sub_Category ${row[0]}`);
    sub_cat.add(row[0]);
  });

  console.log("Sub_cat are", sub_cat);

  //   let vals = sub_cat.values();
  //   console.log(vals);

  let sub_cat_arr = [];
  sub_cat.forEach((val) => {
    if (val !== "Sub Category") {
      sub_cat_arr.push(val);
    }
  });
  console.log("Unique sub_cat's are", sub_cat_arr);
  return sub_cat_arr;
};

(async () => {
  let data = await readXlsxFile("excel_to_import.xlsx");
  //   console.log("Data is ", data);

  let unique_sub_cat = getUniqueSubCat(data);
  console.log("unique_sub_cat ->", unique_sub_cat);

  let names = new Object();

  //   get unique sub_categories
  unique_sub_cat.forEach((sub_cat) => {
    //   make dynamic variable name
    names[sub_cat] = [];
    // loop over file data
    data.forEach((row) => {
      // if the first column matches sub_cat
      if (row[0] === sub_cat) {
        let obj = {
          service: row[1],
          basis: row[2],
          duration: row[3],
          min_max: row[4],
          type: row[5],
          description: row[6],
        };
        // add the whole row as an object to variable
        names[sub_cat].push(obj);
      }
    });
  });

  console.log("names are ", names);
})();
