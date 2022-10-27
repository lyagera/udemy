console.log("request");

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("loading");
        const product = {
            name: "TV",
            price: 2000,
        };
        resolve(product);
    }, 2000);
});
// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = "ready";
//             // console.log(product);
//             resolve(product);
//         }, 2000);
//     });
//     req2.then((data) => {
//         console.log(data);
//     });
// });
req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = "ready";
            // console.log(product);
            resolve(product);
            // reject();
        }, 2000);
    });
})
    .then((data) => {
        data.modify = true;
        return data;
    })
    .then((data) => {
        console.log(data);
    })
    .catch(() => {
        console.log("error");
    })
    .finally(() => {
        console.log("Finally");
    });

const test = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
};
// test(1000).then(() => console.log("Good"));
// test(2000).then(() => console.log("Good 2"));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log("All");
});
Promise.race([test(1000), test(2000)]).then(() => {
    console.log("All");
});
