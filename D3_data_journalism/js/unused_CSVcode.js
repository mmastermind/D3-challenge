options used that didn't work:
  d3.csv("data/data.csv", function(dataset) {
    return {
      // dataset.forEach(function(data) {
        id:dataset.id,
        state:dataset.state,
        abbr:dataset.abbr,
        poverty: +dataset.poverty,
        age: +dataset.age,
        // income = +dataset.income,
        // healthcare = +dataset.healthcare,
        // healthcareLow = +data.healthcareLow,
        // healthcareHigh = +data.healthcareHigh,
        obesity: +dataset.obesity,
        // obesityLow = +data.obesityLow,
        // obesityHigh = +data.obesityHigh,
        // smokes = +data.smokes,
        // smokesLow = +data.smokesLow,
        // smokesHigh = +data.smokesHigh
      }, function(error,rows) {
        console.log(rows);
      }
    // if (error) throw error;
    // if (error) {
    //   return console.warn(error);
    // }
    // console.log(dataset);
    // debugger
    //   // if (err) throw err; 
    // parse data
//     Object.keys(dataset).forEach(function(data) {
//       var that = this;
//       Object.keys(dataset[data].forEach(function(a){
//         if(!that[a]){
//           that[a]={id:a,[data]:dataset[data][a]}
//           result.push(that[a])
//           console.log(that[a]);
//         } else {
//           Object.assign(that[a],{[data]:dataset[data][a]})
//           // data.poverty = +data.poverty;
//           // data.age = +data.age;
//           // data.income = +data.income;
//         }
//       }))
    console.log(age);
// ONLINE EXAMPLE:
// // var data = {"rank_type_1":{"d1":0,"d2":1,"d3":2},"rank_type_2":{"d1":1,"d2":0,"d3":2},"rank_type_3":{"d1":2,"d2":0,"d3":1}}
// // var result = [];
// // Object.keys(data).forEach(function(e) {
// //   var that = this;
// //   Object.keys(data[e]).forEach(function(a) {
// //     if(!that[a]) {
// //       that[a] = {id: a, [e]: data[e][a]}
// //       result.push(that[a])
// //     } else {
// //       Object.assign(that[a], {[e]: data[e][a]})
// //     }
// //   })
//     })
//     console.log(JSON.stringify(result, 0, 4)):

  // d3.csv("example.csv", function(d) {
  //   return {
  //     year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
  //     make: d.Make,
  //     model: d.Model,
  //     length: +d.Length // convert "Length" column to number
  //   };
  // }, function(error, rows) {
  //   console.log(rows);
  // });
